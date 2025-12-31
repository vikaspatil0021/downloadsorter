export const chokidarOptions = {
    persistent: true,
    atomic: true,
    depth: 0,
    awaitWriteFinish: {
        stabilityThreshold: 2000,
        pollInterval: 100
    }
}
