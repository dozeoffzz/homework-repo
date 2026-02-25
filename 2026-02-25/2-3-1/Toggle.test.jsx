import { render, screen } from "@testing-library/react";
import Toggle from "./Toggle";
import userEvent from "@testing-library/user-event";

describe("Toggle 테스트", () => {
  test("초기 상태는 OFF이다", () => {
    render(<Toggle />);
    expect(screen.getByText("off")).toBeInTheDocument();
  });

  test("클릭하면 ON으로 바뀐다", async () => {
    render(<Toggle />);
    await userEvent.click(screen.getByRole("button"));
    expect(screen.getByText("on")).toBeInTheDocument();
  });

  test("다시 클릭하면 OFF로 바뀐다", async () => {
    render(<Toggle />);
    await userEvent.click(screen.getByRole("button"));
    await userEvent.click(screen.getByRole("button"));
    expect(screen.getByText("off")).toBeInTheDocument();
  });

  test("초기 상태는 회색이다", () => {
    render(<Toggle />);
    const button = screen.getByRole("button");
    expect(button).toHaveStyle("background-color: rgb(128, 128, 128)");
  });

  test("ON일때 초록색이다", async () => {
    render(<Toggle />);
    const button = screen.getByRole("button");

    await userEvent.click(button);
    expect(button).toHaveStyle("background-color: rgb(0, 128, 0)");
  });
});
