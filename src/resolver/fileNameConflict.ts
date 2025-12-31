import { basename, extname, join } from "path";


export const resolveFileNameConflict = (newFilePath: string, targetFolderPath: string) => {

    const ext = extname(newFilePath);
    let baseNameWithoutExt = basename(newFilePath, ext);

    const match = baseNameWithoutExt.match(/\((\d+)\)/);
    if (match) {

        const num = Number(match[1]) + 1;
        baseNameWithoutExt = baseNameWithoutExt.replace(match[0], `(${num})`)
    } else {

        baseNameWithoutExt += "(1)";
    }

    return join(targetFolderPath, baseNameWithoutExt + ext);

}