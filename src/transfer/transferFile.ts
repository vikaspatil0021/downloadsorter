import { moveFile } from "../fs/fileSystem.js";
import { resolveNewFilePath } from "./newFilePath.js";
import { resolveTargetFolderPath } from "./targetFolderPath.js";




export const transferFile = (filePath: string) => {

    // Gets and ensures the folder path for the file based on its extension
    const targetFolderPath = resolveTargetFolderPath(filePath);

    // Gets a new file path and resolves any name conflicts
    const newFilePath = resolveNewFilePath(filePath, targetFolderPath);

    moveFile(filePath, newFilePath);
}