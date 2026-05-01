import { useState } from 'react'
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query'
import { apiClient } from '@/lib/api'
import { PacketPage } from '@/components/ui/PacketPage'
import { PageHeader } from '@/components/ui/PageHeader'
import { FormInput } from '@/components/ui/FormInput'

interface College {
  id: string
  name: string
  location: string
  country: string
  ranking: number | null
  feesDisplay: string | null
  entranceExam: string | null
  courseName: string | null
  type: string
  careerTags: string[] | null
  websiteUrl: string | null
}

export function AdminPage() {
  const queryClient = useQueryClient()
  const [showForm, setShowForm] = useState(false)
  const [editing, setEditing] = useState<College | null>(null)

  const { data: stats } = useQuery({
    queryKey: ['admin', 'stats'],
    queryFn: async () => {
      const res = await apiClient.get('/api/admin/stats')
      return res.data as { counselors: number; clients: number; reports: number; revenue: number; colleges: number }
    },
  })

  const { data: collegesList, isLoading } = useQuery({
    queryKey: ['admin', 'colleges'],
    queryFn: async () => {
      const res = await apiClient.get('/api/admin/colleges')
      return res.data as College[]
    },
  })

  const deleteMutation = useMutation({
    mutationFn: async (id: string) => {
      await apiClient.delete(`/api/admin/colleges/${id}`)
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['admin', 'colleges'] })
    },
  })

  return (
    <div className="space-y-6">
      <PacketPage>
        <PageHeader eyebrow="Admin" title="Dashboard" subtitle="Platform overview" />
        <div className="grid grid-cols-5 gap-4">
          {[
            { label: 'Counselors', value: stats?.counselors ?? 0, color: '#00715f', bg: '#e3efe7' },
            { label: 'Clients', value: stats?.clients ?? 0, color: '#087eb1', bg: '#dbeef4' },
            { label: 'Reports', value: stats?.reports ?? 0, color: '#f5ad28', bg: '#fff3bf' },
            { label: 'Revenue', value: stats?.revenue ?? 0, color: '#ff7c59', bg: '#f0dfd8' },
            { label: 'Colleges', value: stats?.colleges ?? 0, color: '#7a3ac2', bg: '#f0e3f5' },
          ].map((s) => (
            <div key={s.label} className="p-4 rounded-[10px] text-center" style={{ background: s.bg }}>
              <p className="text-h2 font-black" style={{ color: s.color }}>{s.value}</p>
              <p className="text-[12px] font-bold text-muted">{s.label}</p>
            </div>
          ))}
        </div>
      </PacketPage>

      <PacketPage>
        <div className="flex items-center justify-between mb-4">
          <PageHeader eyebrow="Admin" title="College Management" subtitle="Manage colleges in the database" />
          <button
            onClick={() => { setEditing(null); setShowForm(true) }}
            className="px-4 py-2 bg-forest text-white rounded-lg text-small font-bold hover:bg-forest/90"
          >
            Add College
          </button>
        </div>

        {isLoading ? (
          <p className="text-muted font-bold">Loading...</p>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full text-[14px]">
              <thead>
                <tr className="border-b-2 border-forest">
                  <th className="text-left py-3 px-4 font-black text-ink">Name</th>
                  <th className="text-left py-3 px-4 font-black text-ink">Location</th>
                  <th className="text-left py-3 px-4 font-black text-ink">Country</th>
                  <th className="text-left py-3 px-4 font-black text-ink">Type</th>
                  <th className="text-left py-3 px-4 font-black text-ink">Course</th>
                  <th className="text-left py-3 px-4 font-black text-ink">Fees</th>
                  <th className="text-right py-3 px-4 font-black text-ink">Actions</th>
                </tr>
              </thead>
              <tbody>
                {collegesList?.map((college) => (
                  <tr key={college.id} className="border-b border-line">
                    <td className="py-3 px-4 font-bold text-ink">{college.name}</td>
                    <td className="py-3 px-4">{college.location}</td>
                    <td className="py-3 px-4">{college.country}</td>
                    <td className="py-3 px-4">
                      <span className="px-2 py-1 rounded text-[11px] font-black text-white"
                        style={{ background: college.type === 'Premier' ? '#00715f' : college.type === 'Private' ? '#7a3ac2' : '#087eb1' }}>
                        {college.type}
                      </span>
                    </td>
                    <td className="py-3 px-4">{college.courseName || '—'}</td>
                    <td className="py-3 px-4">{college.feesDisplay || '—'}</td>
                    <td className="py-3 px-4 text-right">
                      <button
                        onClick={() => { setEditing(college); setShowForm(true) }}
                        className="text-[12px] font-bold text-forest hover:underline mr-3"
                      >
                        Edit
                      </button>
                      <button
                        onClick={() => deleteMutation.mutate(college.id)}
                        className="text-[12px] font-bold text-clay hover:underline"
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </PacketPage>

      {showForm && (
        <CollegeForm
          college={editing}
          onClose={() => setShowForm(false)}
          onSuccess={() => {
            setShowForm(false)
            queryClient.invalidateQueries({ queryKey: ['admin', 'colleges'] })
            queryClient.invalidateQueries({ queryKey: ['admin', 'stats'] })
          }}
        />
      )}
    </div>
  )
}

function CollegeForm({ college, onClose, onSuccess }: { college: College | null; onClose: () => void; onSuccess: () => void }) {
  const [form, setForm] = useState({
    name: college?.name || '',
    location: college?.location || '',
    country: college?.country || '',
    ranking: college?.ranking?.toString() || '',
    feesDisplay: college?.feesDisplay || '',
    entranceExam: college?.entranceExam || '',
    courseName: college?.courseName || '',
    type: college?.type || 'Private',
    websiteUrl: college?.websiteUrl || '',
    careerTags: college?.careerTags?.join(', ') || '',
  })

  const mutation = useMutation({
    mutationFn: async () => {
      const payload = {
        ...form,
        ranking: form.ranking ? Number(form.ranking) : undefined,
        careerTags: form.careerTags ? form.careerTags.split(',').map((s: string) => s.trim()) : [],
      }
      if (college) {
        await apiClient.patch(`/api/admin/colleges/${college.id}`, payload)
      } else {
        await apiClient.post('/api/admin/colleges', payload)
      }
    },
    onSuccess,
  })

  return (
    <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
      <div className="bg-page rounded-[10px] border border-line w-full max-w-lg max-h-[90vh] overflow-y-auto p-6">
        <h3 className="text-h3 font-bold text-ink mb-4">{college ? 'Edit College' : 'Add College'}</h3>
        <div className="space-y-3">
          <FormInput label="Name" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} required />
          <FormInput label="Location" value={form.location} onChange={(e) => setForm({ ...form, location: e.target.value })} required />
          <FormInput label="Country" value={form.country} onChange={(e) => setForm({ ...form, country: e.target.value })} required />
          <FormInput label="Ranking" type="number" value={form.ranking} onChange={(e) => setForm({ ...form, ranking: e.target.value })} />
          <FormInput label="Fees Display" value={form.feesDisplay} onChange={(e) => setForm({ ...form, feesDisplay: e.target.value })} />
          <FormInput label="Entrance Exam" value={form.entranceExam} onChange={(e) => setForm({ ...form, entranceExam: e.target.value })} />
          <FormInput label="Course Name" value={form.courseName} onChange={(e) => setForm({ ...form, courseName: e.target.value })} />
          <div>
            <label className="block text-small font-bold text-muted mb-1">Type</label>
            <select
              value={form.type}
              onChange={(e) => setForm({ ...form, type: e.target.value })}
              className="w-full px-4 py-2 border border-line rounded-lg text-small font-bold bg-page"
            >
              <option value="Premier">Premier</option>
              <option value="Private">Private</option>
              <option value="Government">Government</option>
              <option value="International">International</option>
            </select>
          </div>
          <FormInput label="Website URL" value={form.websiteUrl} onChange={(e) => setForm({ ...form, websiteUrl: e.target.value })} />
          <FormInput label="Career Tags (comma separated)" value={form.careerTags} onChange={(e) => setForm({ ...form, careerTags: e.target.value })} />
        </div>
        <div className="flex gap-3 mt-6">
          <button
            onClick={() => mutation.mutate()}
            className="flex-1 px-4 py-2 bg-forest text-white rounded-lg text-small font-bold hover:bg-forest/90"
          >
            {mutation.isPending ? 'Saving...' : 'Save'}
          </button>
          <button
            onClick={onClose}
            className="flex-1 px-4 py-2 border border-line rounded-lg text-small font-bold text-muted hover:bg-panel"
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  )
}
