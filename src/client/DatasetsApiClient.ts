import { httpClient } from './base/httpClient'
import {
  type Dataset,
  type DatasetDetail,
  type VaporiseDatasetObject
} from './DatasetsApiClient.types'

const DEFAULT_API_KEY = 'https://phrase-hackathon-llm-tm.azurewebsites.net/api/v1'

// get all datasets
export async function getAvailableDatasets(): Promise<Dataset[]> {
  return httpClient.get(`${DEFAULT_API_KEY}/datasets`).then((response) => {
    return response.data
  })
}

// get selected dataset sample date
export async function getDatasetSampleData(datasetId: string): Promise<DatasetDetail> {
  return httpClient.get(`${DEFAULT_API_KEY}/datasets/${datasetId}`).then((response) => {
    return response.data
  })
}

export async function getSupportedModels(): Promise<string[]> {
  return httpClient.get(`${DEFAULT_API_KEY}/openai/list-supported-models`).then((response) => {
    return response.data
  })
}

// work with chat bot
//datasetObject.promptType - custom text, or selected from suggested (f.e. "Rewrite the following in a gender neutral way")
//datasetObject.model - default: text-davinci-002
//datasetObject.promptFormatNumber - default: 2
export async function vaporiseDataset(
  datasetObject: VaporiseDatasetObject
): Promise<DatasetDetail> {
  return httpClient.post(`${DEFAULT_API_KEY}/datasets/vaporise`, datasetObject).then((response) => {
    return response.data
  })
}
