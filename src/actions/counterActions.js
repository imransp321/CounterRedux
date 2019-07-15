import { INCR, DECR } from "../utils/constants";

export function incr() {
  return { type: INCR };
}

export function decr() {
  return { type: DECR };
}
