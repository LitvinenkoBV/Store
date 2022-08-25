import reducer from "./reducer";
import {
  ADD_PRODUCT_TO_BUY,
  REMOVE_PRODUCT_TO_BUY,
  CLEAN_PRODUCTS_TO_BUT,
} from "./type";

describe("products to buy reducer", () => {
  it("should return default value", () => {
    expect(reducer(undefined, {})).toEqual([]);
  });

  it("should remove product to buy", () => {
    const state = [
      { id: 12, body: "lorem" },
      { id: 23, body: "lorem" },
    ];
    expect(
      reducer([], { type: REMOVE_PRODUCT_TO_BUY, payload: state })
    ).toEqual(state);
  });

  it("should add product to buy", () => {
    const state = [
      { id: 12, body: "lorem" },
      { id: 23, body: "lorem" },
    ];
    expect(reducer([], { type: ADD_PRODUCT_TO_BUY, payload: state })).toEqual(
      state
    );
  });

  it("should clean product to buy", () => {
    const state = [
      { id: 12, body: "lorem" },
      { id: 23, body: "lorem" },
    ];
    expect(
      reducer(state, { type: CLEAN_PRODUCTS_TO_BUT, payload: state })
    ).toEqual([]);
  });
});
