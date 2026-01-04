import { TEMP_REGEX } from "../constants/tempRegex.js";

export const isTmpFile = (baseName: string, size: number): boolean =>
    (TEMP_REGEX.test(baseName) || size === 0);
