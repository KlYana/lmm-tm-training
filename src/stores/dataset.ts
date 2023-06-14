import { reactive } from 'vue';
import { getAvailableDatasets, getDatasetSampleData } from '../client/DatasetsApiClient';
import { type Dataset, type DatasetDetail} from '../client/DatasetsApiClient.types';

export interface State {
    datasets: Dataset[];
    selectedDatasetSample: DatasetDetail;
    datasetsLoaded: boolean;
    datasetSampleLoaded: boolean;
    selectedDatasetId: string;
}

const initialState: State = {
    datasets: [],
    selectedDatasetSample: {
        id: '',
        name: '',
        sourceLanguage: '',
        targetLanguage: '',
        segments: [],
    },
    datasetsLoaded: false,
    datasetSampleLoaded: false,
    selectedDatasetId: '',
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
    get datasetsLoaded(): boolean {
        return state.datasetsLoaded;
    },
    get datasetSampleLoaded(): boolean {
        return state.datasetSampleLoaded;
    },
    get selectedDatasetId(): string {
        return state.selectedDatasetId;
    },
    //Setters
    setDatasets(payload: Dataset[]) {
        state.datasets = payload;
    },
    setSelectedDatasetSample(payload: DatasetDetail) {
        state.selectedDatasetSample = payload;
    },
    setDatasetsLoaded(payload: boolean) {
        state.datasetsLoaded = payload;
    },
    setDatasetSampleLoaded(payload: boolean) {
        state.datasetSampleLoaded = payload;
    },
    setSelectedDatasetId(payload: string) {
        state.selectedDatasetId = payload;
    },
    //Actions
    async fetchAvailableDatasets():Promise<void> {
        try {
            const response = await getAvailableDatasets();
            store.setDatasets(response);
            if(state.datasets) {
                store.setDatasetsLoaded(true);
            }
        } catch(error) {
            store.setDatasetsLoaded(false);
            console.error(error);
        }
    },
    async fetchDatasetSampleData(datasetId: string):Promise<void> {
        try {
            const response = await getDatasetSampleData(datasetId);
            store.setSelectedDatasetSample(response);
            if(state.datasetSampleLoaded) {
                store.setDatasetSampleLoaded(true);
            }
        } catch(error) {
            store.setDatasetSampleLoaded(false);
            console.error(error);
        }
    }
}

export default store;