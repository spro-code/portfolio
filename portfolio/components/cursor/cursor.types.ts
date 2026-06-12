import type { MotionValue } from "framer-motion";

/** Public API exposed through `useCursor()`. */
export interface CursorApi {
  /**
   * Set an explicit cursor label. Showing a label morphs the dot into the
   * hand-drawn hover circle. Pass `null` to clear the override and fall back
   * to element/section-derived labels.
   *
   * @example
   * const { setCursorText } = useCursor();
   * setCursorText("View System");
   */
  setCursorText: (text: string | null) => void;
}

/** Props the visual <Cursor/> receives from the provider. */
export interface CursorVisualProps {
  /** Whether the custom cursor is active (fine pointer, motion allowed). */
  enabled: boolean;
  /** Resolved label to display, or `null` for the default dot. */
  label: string | null;
  /** True while the user is actively scrolling (cursor contracts). */
  scrolling: boolean;
  /** Raw pointer X (clientX). */
  x: MotionValue<number>;
  /** Raw pointer Y (clientY). */
  y: MotionValue<number>;
}

/** Maps a pathname to its default discovery label. */
export type SectionLabelRule = {
  test: (pathname: string) => boolean;
  label: string;
};
