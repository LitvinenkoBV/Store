import reducer from "./reducer";
import { LOADING_PRODUCTS, GET_PRODUCTS, ERROR_PRODUCTS } from "./type";

describe("products reducer", () => {
  const defaultState = {
    loading: false,
    products: [],
    error: null,
  };

  it("should return default value", () => {
    expect(reducer(defaultState, {})).toEqual(defaultState);
  });

  it("should get products", () => {
    expect(
      reducer(defaultState, {
        type: GET_PRODUCTS,
        payload: [{ id: 1 }, { id: 2 }],
      })
    ).toEqual({ ...defaultState, products: [{ id: 1 }, { id: 2 }] });
  });

  it("should return loading products", () => {
    expect(
      reducer(defaultState, {
        type: LOADING_PRODUCTS,
      })
    ).toEqual({
      ...defaultState,
      loading: true,
    });
  });

  it("should return error products", () => {
    expect(
      reducer(defaultState, {
        type: ERROR_PRODUCTS,
      })
    ).toEqual({
      ...defaultState,
      loading: false,
      error: new Error(),
    });
  });
});
