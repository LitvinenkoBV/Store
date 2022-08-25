import { render, screen } from "@testing-library/react";
import Modal from "./Modal";
import { Provider } from "react-redux";
import { legacy_createStore as createStore } from "redux";
import { rootReducer } from "../../store/store";

describe("<Modal/> component", () => {
  const store = createStore(rootReducer, {
    modal: { isOpen: false, currentProduct: {} },
    productsToBuy: [],
  });
  it("should render", () => {
    const { container } = render(
      <Provider store={store}>
        <Modal />
      </Provider>
    );
    expect(container.firstChild).toMatchSnapshot();
  });
  it("should render modal with title", () => {
    render(
      <Provider store={store}>
        <Modal title="Add to Card" />
      </Provider>
    );
    screen.getByText(/Add to Card/);
  });
});
