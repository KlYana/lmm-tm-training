export interface Dataset {
    id: string;
    name: string;
}

// TODO: remove is not used with SynSelect
export interface DatasetOption {
    [k: string]: unknown; // To be compatible with SynSelectListItem
    title: string;
    value: string;
}

export interface DatasetDetail extends Dataset {
    sourceLanguage: string;
    targetLanguage: string;
    segments: Segment[];
};

export interface Segment {
    id: string;
    source: string;
    target: string;
}

export interface VaporiseDatasetObject {
    datasetId: string;
    promptType: string;
    model?: string;
    promptFormatNumber?: number;
}
