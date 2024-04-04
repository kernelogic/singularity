export default interface CreatePreparationRequest {
  name : string,
  path : string,
  dealSize : string,
  outDir: string,
  scanLimit: number,
  minRatio?: number,
  maxRatio?: number,
  tmpDir?: string,
  skipInaccessibleFiles?: boolean,
}
