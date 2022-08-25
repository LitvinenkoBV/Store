import { OPEN_MODAL, CLOSE_MODAL } from "./type";

const defaultState = {
  isOpen: false,
  modalWindow: {},
  currentProduct: {},
};

export const modalReducer = (state = defaultState, action) => {
  switch (action.type) {
    case OPEN_MODAL:
      return {
        ...state,
        isOpen: true,
        modalWindow: action.payload.arrModalWindow,
        currentProduct: action.payload.product,
      };
    case CLOSE_MODAL:
      return {
        ...state,
        isOpen: false,
      };
    default:
      return state;
  }
};

export default modalReducer;
