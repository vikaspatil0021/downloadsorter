import { rename } from "fs/promises";
import { existsSync, mkdirSync } from "fs";


export const fileOrFolderExists = (path: string): boolean => existsSync(path);

export const createDirSync = (path: string) => mkdirSync(path, { recursive: true });

export const moveFile = (filePath: string, newFilePath: string): Promise<void> => rename(filePath, newFilePath);


// Helper functions

export const ensureFolderExists = (path: string) => (!fileOrFolderExists(path)) && createDirSync(path);
