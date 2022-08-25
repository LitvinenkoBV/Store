import reducer from "./reducer";
import { OPEN_MODAL, CLOSE_MODAL } from "./type";

describe("modal reducer", () => {
  const defaultState = {
    isOpen: false,
    modalWindow: {},
    currentProduct: {},
  };

  it("should return default value", () => {
    expect(reducer(defaultState, {})).toEqual(defaultState);
  });

  it("should return open modal", () => {
    expect(
      reducer(defaultState, {
        type: OPEN_MODAL,
        payload: { arrModalWindow: { id: 1 }, product: { data: "qwe" } },
      })
    ).toEqual({
      ...defaultState,
      isOpen: true,
      modalWindow: { id: 1 },
      currentProduct: { data: "qwe" },
    });
  });

  it("should return close modal", () => {
    expect(
      reducer(defaultState, {
        type: CLOSE_MODAL,
        payload: { arrModalWindow: { id: 1 }, product: { data: "qwe" } },
      })
    ).toEqual({
      ...defaultState,
      isOpen: false,
    });
  });
});
