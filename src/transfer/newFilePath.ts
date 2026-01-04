import { basename, join } from "path";

import { fileOrFolderExists } from "../fs/fileSystem.js";
import { resolveFileNameConflict } from "./fileNameConflict.js";


export const resolveNewFilePath = (filePath: string, targetFolderPath: string): string => {

    let newFilePath = join(targetFolderPath, basename(filePath));

    // Check for existing file and resolve name conflicts if needed
    while (fileOrFolderExists(newFilePath)) {
        newFilePath = resolveFileNameConflict(newFilePath, targetFolderPath);
    }

    return newFilePath;
}

