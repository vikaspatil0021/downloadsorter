import { extname, join } from "path";


import { downloadsDir } from "../config/paths.js";

import { ensureFolderExists } from "../fs/fileSystem.js";

import extensionToFolder from "../constants/extensionToFolder.js";


export const resolveTargetFolderPath = (filePath: string) => {

    const ext = extname(filePath);
    const targetFolder = extensionToFolder[ext] || "Others";
    const targetFolderPath = join(downloadsDir, targetFolder);

    ensureFolderExists(targetFolderPath);
    
    return targetFolderPath;
}