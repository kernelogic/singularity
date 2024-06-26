export interface GetPreparationsResponseItem {
  id: string,
  name: string,
  path: string,
  scanLimit: number,
  minSize: number,
  maxSize: number,
  outDir: string,
  scanningStatus: 'active' | 'error' | 'completed' | 'paused',
  scanned: number,
  errorMessage?: string,
  generationCompleted: number,
  generationActive: number,
  generationPaused: number,
  generationTotal: number,
  generationError: number,
  rootCid: string
}

export type GetPreparationsResponse = GetPreparationsResponseItem[];
