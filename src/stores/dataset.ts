import { reactive } from 'vue';
import { getAvailableDatasets, getDatasetSampleData, vaporiseDataset, getSupportedModels } from '../client/DatasetsApiClient';
import { type Dataset, type DatasetDetail, type VaporiseDatasetObject} from '../client/DatasetsApiClient.types';

export interface State {
    datasets: Dataset[];
    selectedDatasetSample: DatasetDetail;
    selectedDatasetId: string;
    vaporisedDatasetSample: DatasetDetail;
    supportedModels: string[];
}

const defaultDatasetDetailObject = {
    id: '',
    name: '',
    sourceLanguage: '',
    targetLanguage: '',
    segments: [],
} as DatasetDetail;

const initialState: State = {
    datasets: [],
    selectedDatasetSample: defaultDatasetDetailObject,
    selectedDatasetId: '',
    vaporisedDatasetSample: defaultDatasetDetailObject,
    supportedModels: [],
};

const state = reactive({ ...initialState });


const store = {
    //Getters
    get datasets(): Dataset[] {
        return state.datasets;
    },
    get selectedDatasetSample(): DatasetDetail {
        return state.selectedDatasetSample;
    },
    get selectedDatasetId(): string {
        return state.selectedDatasetId;
    },
    get vaporisedDatasetSample(): DatasetDetail {
        return state.vaporisedDatasetSample;
    },
    get supportedModels(): string[] {
        return state.supportedModels;
    },
    //Setters
    setDatasets(payload: Dataset[]) {
        state.datasets = payload;
    },
    setSelectedDatasetSample(payload: DatasetDetail) {
        state.selectedDatasetSample = payload;
    },
    setSelectedDatasetId(payload: string) {
        state.selectedDatasetId = payload;
    },
    setVaporisedDatasetSample(payload: DatasetDetail) {
        state.vaporisedDatasetSample = payload;
    },
    setSupportedModels(payload: string[]) {
        state.supportedModels = payload;
    },
    //Actions
    async fetchAvailableDatasets():Promise<void> {
        try {
            const response = await getAvailableDatasets();
            store.setDatasets(response);
        } catch(error) {
            console.error(error);
        }
    },
    async fetchDatasetSampleData(datasetId: string):Promise<void> {
        try {
            const response = await getDatasetSampleData(datasetId);
            store.setSelectedDatasetSample(response);
        } catch(error) {
            console.error(error);
        }
    },
    async vaporiseDatasetData(vaporiseObject: VaporiseDatasetObject): Promise<void> {
        try {
            const response = await vaporiseDataset(vaporiseObject);
            store.setVaporisedDatasetSample(response);
        } catch(error) {
            console.error(error);
        }
    },
    async fetchSupportedModels(): Promise<void> {
        try {
            const response = await getSupportedModels();;
            store.setSupportedModels(response);
        } catch(error) {
            console.error(error);
        }
    },
}

export default store;