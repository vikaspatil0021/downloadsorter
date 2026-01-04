import { FILE_REGISTRY } from "../state/fileRegistry.js";


export const addOrUpdateRecord = (ino: number, size: number) => {
    let record = FILE_REGISTRY.get(ino);

    if (record) {

        record.lastSize = size;
        record.lastChangeTime = Date.now()
    } else {

        record = {
            lastSize: size,
            lastChangeTime: Date.now()
        }
        FILE_REGISTRY.set(ino, record);
    }

    return record;
}