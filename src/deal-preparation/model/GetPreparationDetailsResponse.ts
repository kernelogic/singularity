export interface GenerationRequestSummary {
  id: string,
  index: number,
  status: 'active' | 'paused' | 'completed' | 'error' | 'created' | 'dag',
  errorMessage?: string,
  dataCid?: string,
  pieceCid?: string,
  pieceSize?: number,
  carSize?: number
}

export default interface GetPreparationDetailsResponse {
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
  generationTotal: number,
  generationActive: number,
  generationPaused: number,
  generationCompleted: number,
  generationError: number,
  generationRequests: GenerationRequestSummary[],
  rootCid: string
}
