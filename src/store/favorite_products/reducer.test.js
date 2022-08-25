import reducer from "./reducer";
import { REMOVE_FAVORITE_PRODUCTS, ADD_FAVORITE_PRODUCTS } from "./type";

describe("favorites reducer", () => {
  it("should return default value", () => {
    expect(reducer(undefined, {})).toEqual([]);
  });

  it("should add favorite", () => {
    const state = [
      { id: 12, body: "lorem" },
      { id: 23, body: "lorem" },
    ];
    expect(
      reducer([], { type: ADD_FAVORITE_PRODUCTS, payload: state })
    ).toEqual(state);
  });

  it("should remove favorite", () => {
    const state = [
      { id: 12, body: "lorem" },
      { id: 23, body: "lorem" },
    ];
    expect(
      reducer([], { type: REMOVE_FAVORITE_PRODUCTS, payload: state })
    ).toEqual(state);
  });
});
