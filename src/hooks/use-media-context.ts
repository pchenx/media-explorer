import { useContext } from "react";
import { MediaContext } from "../context/media";

export function useMediaContext() {
  return useContext(MediaContext);
}
