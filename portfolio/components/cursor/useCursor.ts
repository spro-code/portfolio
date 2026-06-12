"use client";

import { useContext } from "react";
import { CursorContext } from "./CursorContext";
import type { CursorApi } from "./cursor.types";

/**
 * Access the cursor API from anywhere inside <CursorProvider/>.
 *
 * @example
 * const { setCursorText } = useCursor();
 * <button
 *   onMouseEnter={() => setCursorText("Let's Build")}
 *   onMouseLeave={() => setCursorText(null)}
 * />
 */
export function useCursor(): CursorApi {
  return useContext(CursorContext);
}
