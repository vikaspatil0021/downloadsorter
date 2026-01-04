import { EXT_CATEGORIES } from "./extensionCategories.js";

export const EXT_CATEGORY_MAP: Record<string, string> =
  Object.fromEntries(
    Object.entries(EXT_CATEGORIES).flatMap(
      ([category, exts]) =>
        exts.map(ext => [ext, category])
    )
  );
