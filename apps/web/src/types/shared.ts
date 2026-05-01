// Stub types for shared package
export interface FingerprintData {
  patterns: string[]
  ridgeCounts: number[]
  atdLeft: number
  atdRight: number
}

export interface DmitResults {
  tfrc: number
  brainSide: 'left' | 'right' | 'balanced'
  [key: string]: any
}
