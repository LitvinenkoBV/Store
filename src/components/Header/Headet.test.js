import { render } from "@testing-library/react";
import { Provider } from "react-redux";
import { legacy_createStore as createStore } from "redux";
import Header from "./Header";
import { rootReducer } from "../../store/store";
import { BrowserRouter } from "react-router-dom";

const store = createStore(rootReducer, {});

describe("<Header/> component", () => {
  const { container } = render(
    <Provider store={store}>
      <BrowserRouter>
        <Header />
      </BrowserRouter>
    </Provider>
  );
  it("should render", () => {
    expect(container.firstChild).toMatchSnapshot();
  });
});
