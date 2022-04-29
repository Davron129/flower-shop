import { render, screen, cleanup } from "@testing-library/react";
import Text from "../../components/Text";
import "@testing-library/jest-dom";

test("should render Text component", () => {
    render(<Text />)

    let textElement = screen.getByTestId("text")
    expect(textElement).toBeInTheDocument();
})