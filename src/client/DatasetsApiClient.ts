import { httpClient } from './base/httpClient';
import { type Dataset, type DatasetDetail} from './DatasetsApiClient.types';

// TODO: fix from BE -> need to return array of objects - asked Dan
export async function getAvailableDatasets(): Promise<Dataset[]> {
    return httpClient.get('/api/v1/datasets').then(response  => {
        return response.data;
    });
}

export async function getDatasetSampleData(datasetId: string): Promise<DatasetDetail> {
    return httpClient.get(`/api/v1/datasets/${datasetId}`).then(response => {
        return response.data;
    });
}