import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { useNavigate } from 'react-router-dom'
import { useMutation } from '@tanstack/react-query'
import { FormInput, FormSelect } from '@/components/ui/FormInput'
import { PacketPage } from '@/components/ui/PacketPage'
import { PageHeader } from '@/components/ui/PageHeader'
import { apiClient } from '@/lib/api'
import { useAuthStore } from '@/stores/authStore'
import { useReportStore } from '@/stores/reportStore'

const PATTERN_OPTIONS = [
  { value: 'W1', label: 'W1 — Target Centric' },
  { value: 'W2', label: 'W2 — Spiral' },
  { value: 'W3', label: 'W3 — Elongated Target Centric' },
  { value: 'W4', label: 'W4 — Elongated Spiral' },
  { value: 'W5', label: 'W5 — Double Loop' },
  { value: 'W6', label: 'W6 — Imploding' },
  { value: 'W7', label: 'W7 — Composite' },
  { value: 'W8', label: "W8 — Target Centric Ulnar Peacock's Eye" },
  { value: 'W9', label: "W9 — Spiral Ulnar Peacock's Eye" },
  { value: 'W10', label: "W10 — Target Centric Radial Peacock's Eye" },
  { value: 'W11', label: "W11 — Spiral Radial Peacock's Eye" },
  { value: 'L', label: 'L — Ulnar Loop' },
  { value: 'R', label: 'R — Radial Loop' },
  { value: 'L1', label: 'L1 — Ulnar Falling Loop' },
  { value: 'R1', label: 'R1 — Radial Falling Loop' },
  { value: 'X1', label: 'X1 — Plain Arch' },
  { value: 'X2', label: 'X2 — Tented Arch' },
  { value: 'X3', label: 'X3 — Tented Arch with Ulnar Loop' },
  { value: 'X4', label: 'X4 — Tented Arch with Radial Loop' },
  { value: 'W', label: 'W — Accidental Whorl' },
]

const FINGERS = [
  { id: 'L1', label: 'L1 Thumb' },
  { id: 'L2', label: 'L2 Index' },
  { id: 'L3', label: 'L3 Middle' },
  { id: 'L4', label: 'L4 Ring' },
  { id: 'L5', label: 'L5 Little' },
  { id: 'R1', label: 'R1 Thumb' },
  { id: 'R2', label: 'R2 Index' },
  { id: 'R3', label: 'R3 Middle' },
  { id: 'R4', label: 'R4 Ring' },
  { id: 'R5', label: 'R5 Little' },
]

const LANGUAGE_OPTIONS = [
  { value: 'en', label: 'English' },
  { value: 'hi', label: 'हिंदी (Hindi)' },
  { value: 'ml', label: 'മലയാളം (Malayalam)' },
  { value: 'ta', label: 'தமிழ் (Tamil)' },
  { value: 'te', label: 'తెలుగు (Telugu)' },
  { value: 'kn', label: 'ಕನ್ನಡ (Kannada)' },
]

const reportSchema = z.object({
  clientName: z.string().min(2, 'Client name is required'),
  dob: z.string().regex(/^\d{4}-\d{2}-\d{2}$/, 'Invalid date format (YYYY-MM-DD)'),
  mobile: z.string().optional(),
  email: z.string().email().optional().or(z.literal('')),
  atdLeft: z.number().min(20).max(60).default(40),
  atdRight: z.number().min(20).max(60).default(40),
  language: z.enum(['en', 'hi', 'ml', 'ta', 'te', 'kn']).default('en'),
})

type ReportForm = z.infer<typeof reportSchema>

export function NewReportPage() {
  const navigate = useNavigate()
  const counselor = useAuthStore((state) => state.user)
  const setCurrentReport = useReportStore((state) => state.setCurrentReport)
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ReportForm>({
    resolver: zodResolver(reportSchema),
    defaultValues: {
      clientName: '',
      dob: '',
      atdLeft: 40,
      atdRight: 40,
      language: 'en',
    },
  })
  
  const [patterns, setPatterns] = React.useState<Record<string, string>>({
    L1: 'W1', L2: 'L', L3: 'W1', L4: 'W7', L5: 'W2',
    R1: 'W1', R2: 'L', R3: 'W5', R4: 'W2', R5: 'W2',
  })
  
  const [ridgeCounts, setRidgeCounts] = React.useState<Record<string, number>>({
    L1: 14, L2: 2, L3: 8, L4: 7, L5: 6,
    R1: 14, R2: 12, R3: 10, R4: 6, R5: 5,
  })
  
  const mutation = useMutation({
    mutationFn: async (data: ReportForm) => {
      const fingerprintData = {
        patterns: FINGERS.map(f => patterns[f.id]),
        ridgeCounts: FINGERS.map(f => ridgeCounts[f.id]),
        atdLeft: data.atdLeft,
        atdRight: data.atdRight,
      }
      
      const response = await apiClient.post('/reports', {
        clientName: data.clientName,
        dob: data.dob,
        mobile: data.mobile,
        email: data.email,
        fingerprintData,
        language: data.language,
      })
      return response.data
    },
    onSuccess: (data) => {
      setCurrentReport({
        clientName: data.clientName,
        dob: data.dob,
        fingerprintData: data.fingerprintData,
        results: data.results,
        language: data.language,
      })
      navigate(`/reports/${data.reportId}`)
    },
  })
  
  return (
    <div>
      <PageHeader
        eyebrow="New Analysis"
        title="Generate Premium Report"
        subtitle="Enter client information and fingerprint data to generate a comprehensive DMIT analysis"
      />
      
      <form onSubmit={handleSubmit((data) => mutation.mutate(data))} className="space-y-6">
        {/* Client Information */}
        <PacketPage>
          <h3 className="text-h4 font-bold text-ink mb-4">Client Information</h3>
          <div className="grid grid-cols-2 gap-4">
            <FormInput
              label="Full Name"
              placeholder="Client Name"
              error={errors.clientName?.message}
              {...register('clientName')}
            />
            <FormInput
              label="Date of Birth"
              type="date"
              error={errors.dob?.message}
              {...register('dob')}
            />
            <FormInput
              label="Mobile"
              placeholder="+91 98765 43210"
              {...register('mobile')}
            />
            <FormInput
              label="Email"
              type="email"
              placeholder="client@example.com"
              error={errors.email?.message}
              {...register('email')}
            />
          </div>
        </PacketPage>
        
        {/* Counselor Branding */}
        <PacketPage>
          <h3 className="text-h4 font-bold text-ink mb-4">Counselor Branding</h3>
          <div className="grid grid-cols-2 gap-4">
            <FormInput
              label="Center Name"
              value={counselor?.centerName || ''}
              disabled
            />
            <FormInput
              label="Counselor Name"
              value={counselor?.counselorName || ''}
              disabled
            />
            <FormInput
              label="Analysis Number"
              value={`FH${Date.now().toString().slice(-4)}`}
              disabled
            />
            <FormSelect
              label="Report Language"
              options={LANGUAGE_OPTIONS}
              error={errors.language?.message}
              {...register('language')}
            />
          </div>
        </PacketPage>
        
        {/* Fingerprint Data */}
        <PacketPage>
          <h3 className="text-h4 font-bold text-ink mb-4">Fingerprint Data</h3>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="bg-[#2f665a] text-page">
                  <th className="text-left p-3 text-[11px] font-black uppercase">Finger</th>
                  <th className="text-left p-3 text-[11px] font-black uppercase">Pattern</th>
                  <th className="text-left p-3 text-[11px] font-black uppercase">Ridge Count</th>
                </tr>
              </thead>
              <tbody>
                {FINGERS.map((finger) => (
                  <tr key={finger.id} className="border-b border-line">
                    <td className="p-3 font-bold text-ink">{finger.label}</td>
                    <td className="p-3">
                      <select
                        value={patterns[finger.id]}
                        onChange={(e) => setPatterns({ ...patterns, [finger.id]: e.target.value })}
                        className="w-full px-3 py-2 bg-page border border-line rounded-lg text-[14px] font-medium"
                      >
                        {PATTERN_OPTIONS.map((opt) => (
                          <option key={opt.value} value={opt.value}>
                            {opt.label}
                          </option>
                        ))}
                      </select>
                    </td>
                    <td className="p-3">
                      <input
                        type="number"
                        value={ridgeCounts[finger.id]}
                        onChange={(e) => setRidgeCounts({ ...ridgeCounts, [finger.id]: parseInt(e.target.value) || 0 })}
                        className="w-full px-3 py-2 bg-page border border-line rounded-lg text-[14px] font-medium"
                      />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </PacketPage>
        
        {/* ATD Angles */}
        <PacketPage>
          <h3 className="text-h4 font-bold text-ink mb-4">ATD Angles</h3>
          <div className="grid grid-cols-2 gap-4">
            <FormInput
              label="ATD Left"
              type="number"
              error={errors.atdLeft?.message}
              {...register('atdLeft', { valueAsNumber: true })}
            />
            <FormInput
              label="ATD Right"
              type="number"
              error={errors.atdRight?.message}
              {...register('atdRight', { valueAsNumber: true })}
            />
          </div>
        </PacketPage>
        
        {/* Submit */}
        <div className="flex justify-end">
          <button
            type="submit"
            disabled={mutation.isPending}
            className="py-4 px-8 bg-forest text-white font-black rounded-full hover:bg-forest/90 transition-colors disabled:opacity-50 text-[15px]"
          >
            {mutation.isPending ? 'Generating Report...' : 'Generate Premium Report'}
          </button>
        </div>
      </form>
    </div>
  )
}

import React from 'react'
