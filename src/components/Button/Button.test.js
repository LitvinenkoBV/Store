import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Button from "./Button";

describe("<Button/> component", () => {
  const { container } = render(<Button></Button>);
  it("should render", () => {
    expect(container.firstChild).toMatchSnapshot();
  });
  it("should render button tag", () => {
    const { container } = render(<Button></Button>);
    screen.getByRole("button");
  });

  it("should render button with text", () => {
    const { container } = render(<Button text="Add to Card"></Button>);
    screen.getByText(/Add to Card/);
  });

  it("should pass onClick if button is clicked", () => {
    const handleClick = jest.fn();
    render(<Button openModal={handleClick}></Button>);
    userEvent.pointer({
      keys: "[MouseLeft]",
      target: screen.getByRole("button"),
    });
    expect(handleClick).toHaveBeenCalled();
  });
});
