import { extname, join } from "path";


import { DOWNLOAD_DIR } from "../config/paths.js";

import { ensureFolderExists } from "../fs/fileSystem.js";

import { EXT_CATEGORY_MAP } from "../constants/extensionCategoryMap.js";



export const resolveTargetFolderPath = (filePath: string) => {

    const ext = extname(filePath);
    const targetFolder = EXT_CATEGORY_MAP[ext] || "Others";
    const targetFolderPath = join(DOWNLOAD_DIR, targetFolder);

    ensureFolderExists(targetFolderPath);
    
    return targetFolderPath;
}