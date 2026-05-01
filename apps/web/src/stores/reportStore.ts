import { create } from 'zustand'
import type { FingerprintData, DmitResults } from '@/types/shared'

interface ReportState {
  currentReport: {
    clientName: string
    dob: string
    fingerprintData: FingerprintData | null
    results: DmitResults | null
    language: string
  } | null
  isGenerating: boolean
  
  setCurrentReport: (report: ReportState['currentReport']) => void
  setGenerating: (generating: boolean) => void
  clearReport: () => void
}

export const useReportStore = create<ReportState>((set) => ({
  currentReport: null,
  isGenerating: false,
  
  setCurrentReport: (report) => set({ currentReport: report }),
  setGenerating: (generating) => set({ isGenerating: generating }),
  clearReport: () => set({ currentReport: null, isGenerating: false }),
}))
