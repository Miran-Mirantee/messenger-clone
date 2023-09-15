import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/";
import TestPlayground from "@/app/test-playground/page";

describe("Describe our scope", () => {
  it("Test something here", () => {
    render(<TestPlayground />);
    const element = screen.getByText("FUCK JEST");
    expect(element).toBeInTheDocument();
  });
});
