export interface FileRecord {
    lastSize: number,
    lastChangeTime: number,
    timer?: NodeJS.Timeout;

}
type FileRegistry = Map<number, FileRecord>;

export const FILE_REGISTRY: FileRegistry = new Map();
