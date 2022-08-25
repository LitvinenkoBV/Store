import { OPEN_MODAL, CLOSE_MODAL } from "./type";

export const openModalAction = (payload) => ({ type: OPEN_MODAL, payload });
export const closeModalAction = (payload) => ({ type: CLOSE_MODAL, payload });
