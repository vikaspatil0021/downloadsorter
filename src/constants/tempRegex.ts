import { TEMP_FILE_PATTERNS, TEMP_NAME_PATTERNS } from "./tempExtensionList.js";


const TEMP_NAME_REGEX = TEMP_FILE_PATTERNS.map(ext => `\\${ext}$`).join("|");

export const TEMP_REGEX = new RegExp(`(${TEMP_NAME_REGEX}|${TEMP_NAME_PATTERNS.join("|")})`, 'i')