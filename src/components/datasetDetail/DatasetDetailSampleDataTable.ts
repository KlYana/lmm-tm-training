import { SynTableColumn } from '@syntax-design/syntax-ui';
import TableCellText  from '../common/tableCell/TableCellText.vue';

export enum SampleDataColumnId {
    SOURCE = 'source',
    TARGET = 'target',
}

export const datasetDetailColumns: SynTableColumn[] = [
    {
        id: SampleDataColumnId.SOURCE,
        label: 'Source',
        displayComponent: {
            component: TableCellText,
        }
    },
    {
        id: SampleDataColumnId.TARGET,
        label: 'Target',
        displayComponent: {
            component: TableCellText,
        }
    }
];

export interface DatasetDetailExportData {
    id: string,
    source: string,
    target: string,
};

