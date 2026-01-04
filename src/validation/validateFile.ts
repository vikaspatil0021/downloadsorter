import { isTmpFile } from "./isTmpFile.js";
import { addOrUpdateRecord } from "./addOrUpdateRecord.js";
import { checkSizeStability } from "./checkSizeStability.js";





export const validateFile = (ino: number, size: number, baseName: string, callback: () => void) => {

    const record = addOrUpdateRecord(ino, size);

    if (isTmpFile(baseName, size)) return;

    checkSizeStability(record, callback);
}