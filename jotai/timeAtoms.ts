import { atom } from "jotai"

export const breakLengthAtom = atom<number>(5)
export const sessionLengthAtom = atom<number>(25)
export const isSessionAtom = atom(true)
export const isRunningAtom = atom(false)

export const secondsLeftAtom = atom(1)
