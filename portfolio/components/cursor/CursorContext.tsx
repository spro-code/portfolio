"use client";

import { createContext } from "react";
import type { CursorApi } from "./cursor.types";

/** No-op default so `useCursor()` is safe even outside a provider / during SSR. */
export const CursorContext = createContext<CursorApi>({
  setCursorText: () => {},
});
