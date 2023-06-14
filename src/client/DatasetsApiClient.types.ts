export interface Dataset {
    [k: string]: unknown; // To be compatible with SynSelectListItem
    value: string;
    title: string;
}

export interface DatasetDetail {
    id: string;
    name: string;
    sourceLanguage: string;
    targetLanguage: string;
    segments: Segment[];
};

export interface Segment {
    id: string;
    source: string;
    target: string;
}