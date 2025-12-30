const extensions = {
    Images: [
        '.jpg', '.jpeg', '.png', '.gif', '.bmp', '.webp', '.svg', '.tiff', '.ico', '.heic'
    ],

    Videos: [
        '.mp4', '.mkv', '.avi', '.mov', '.wmv', '.flv', '.webm', '.mpeg', '.mpg', '.3gp'
    ],

    Audios: [
        '.mp3', '.wav', '.aac', '.flac', '.ogg', '.m4a', '.wma', '.alac', '.opus'
    ],

    Documents: [
        '.pdf', '.doc', '.docx', '.xls', '.xlsx', '.ppt', '.pptx',
        '.txt', '.rtf', '.odt', '.ods', '.odp', '.csv', '.md'
    ],

    Archives: [
        '.zip', '.rar', '.7z', '.tar', '.gz', '.bz2', '.xz', '.iso.gz'
    ],

    Installers: [
        '.exe', '.msi', '.deb', '.rpm', '.pkg', '.dmg', '.appimage'
    ],

    Code: [
        '.js', '.ts', '.jsx', '.tsx', '.py', '.java', '.c', '.cpp', '.h',
        '.cs', '.go', '.rs', '.php', '.rb', '.swift', '.kt',
        '.html', '.css', '.scss', '.json', '.xml', '.yml', '.yaml', '.sh'
    ],

    Iso: [
        '.iso'
    ]
};

const extensionToFolder: Record<string, string> = Object.fromEntries(
    Object.entries(extensions).flatMap(
        ([folder, exts]) => exts.map((ext) => [ext, folder])));

export default extensionToFolder;