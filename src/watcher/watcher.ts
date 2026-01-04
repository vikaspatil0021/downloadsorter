import chokidar from 'chokidar';

import { DOWNLOAD_DIR } from "../config/paths.js";
import { chokidarOptions } from "../config/chokidar.options.js";

import { eventHandler } from './eventHandler.js';


export const startWatcher = () => {

    const watcher = chokidar.watch(DOWNLOAD_DIR, chokidarOptions);

    watcher.on("all", eventHandler);
    
}