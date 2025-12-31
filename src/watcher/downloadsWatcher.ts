import chokidar from 'chokidar';

import { downloadsDir } from "../config/paths.js";
import { chokidarOptions } from "../config/chokidarOptions.js";
import { addEventHandler } from './eventHandlers/add.js';



export const startDownloadsWatcher = () => {

    const downloadsWatcher = chokidar.watch(downloadsDir, chokidarOptions);

    downloadsWatcher.on("add", addEventHandler);
}