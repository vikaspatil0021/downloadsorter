import { type FileRecord } from "../state/fileRegistry.js";

export const checkSizeStability = (record: FileRecord, callback: () => void) => {

    if (record.timer) clearTimeout(record.timer);

    record.timer = setTimeout(callback, 5000);
}
