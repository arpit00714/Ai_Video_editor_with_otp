import { atom } from "recoil";

const headerAtom = atom({
    key:"header_atom",
    default:"Home Header"
})

export {headerAtom}