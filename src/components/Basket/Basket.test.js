import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { legacy_createStore as createStore } from "redux";
import Basket from "./Basket";
import { rootReducer } from "../../store/store";
import { BrowserRouter } from "react-router-dom";

const store = createStore(rootReducer, {
  products: [
    { id: 1, product: "phone" },
    { id: 2, product: "laptop" },
  ],
});

describe("<Basket/> component", () => {
  const { container } = render(
    <Provider store={store}>
      <BrowserRouter>
        <Basket />
      </BrowserRouter>
    </Provider>
  );
  it("should render", () => {
    expect(container.firstChild).toMatchSnapshot();
  });
});
