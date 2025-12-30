import * as fs from "fs";
import * as os from "os";
import * as path from "path";

import chokidar from 'chokidar';

import extensionToFolder from "./extensionToFolder.js";


const downloadsDir = path.join(os.homedir(), "Downloads");

const chokidarOptions = {
    persistent: true,
    atomic: true,
    depth: 0,
    awaitWriteFinish: {
        stabilityThreshold: 2000,
        pollInterval: 100
    }
}

const downloadsWatcher = chokidar.watch(downloadsDir, chokidarOptions);

const ensureFolderExists = (targetFolderPath: string): string => {

    if (fs.existsSync(targetFolderPath) === false) {
        fs.mkdirSync(targetFolderPath, { recursive: true });
    }

    return targetFolderPath;
}

const resolveTargetFolderPath = (filePath: string) => {

    const ext = path.extname(filePath);
    const targetFolder = extensionToFolder[ext] || "Others";
    const targetFolderPath = path.join(downloadsDir, targetFolder);

    return ensureFolderExists(targetFolderPath);
}

downloadsWatcher.on("add", (filePath: string) => {

    const targetFolderPath = resolveTargetFolderPath(filePath);

    const fileName = path.basename(filePath);;
    const newPath = path.join(targetFolderPath, fileName);

    fs.rename(filePath, newPath, (err) => {
        if (err) console.log("err:", err);
        console.log(newPath, " moved");
    });

});
