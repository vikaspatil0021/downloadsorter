export const TEMP_FILE_PATTERNS = [
    // Browser / download partials
    '.crdownload', '.part', '.download', '.partial',

    // Generic temp
    '.tmp', '.temp', '.cache',

    // Locks
    '.lock', '.lck',

    // Editor swap / backups (by extension)
    '.swp', '.swo', '.swn', '.swx', '.bak', '.old', '.save', '.orig', '.crswap'
];


export const TEMP_NAME_PATTERNS = [
    '^\\.~lock\\..*#$',   // LibreOffice lock
    '^~\\$.*$',           // MS Office lock
    '^#.*#$',             // Emacs
    '^\\.?#.*',           // Emacs alt
    '.*~$',               // backup (~)
    '___jb_tmp___',       // JetBrains
    '___jb_old___',       // JetBrains
    '\\.com\\.google\\.Chrome\\..*'
];