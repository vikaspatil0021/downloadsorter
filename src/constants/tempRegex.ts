import { TEMP_FILE_PATTERNS, TEMP_NAME_PATTERNS } from "./tempExtensionList.js";


const tempFileRegex = TEMP_FILE_PATTERNS.map(ext => `\\${ext}$`).join("|");

export const tempRegex = new RegExp(`(${tempFileRegex}|${TEMP_NAME_PATTERNS.join("|")})`, 'i')