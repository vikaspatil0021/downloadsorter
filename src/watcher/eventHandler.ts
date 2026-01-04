import type { Stats } from "fs";
import { basename } from "path";

import { FILE_REGISTRY } from "../state/fileRegistry.js";

import { transferFile } from "../transfer/transferFile.js";
import { validateFile } from "../validation/validateFile.js";


export const eventHandler = (event: string, path: string, stats: Stats | undefined) => {

    if (!stats || !["add", "change"].includes(event)) return;

    const { ino, size } = stats as Stats;
    const baseName = basename(path);

    validateFile(ino, size, baseName, () => {
        
        transferFile(path);

        FILE_REGISTRY.delete(ino);
    });
}