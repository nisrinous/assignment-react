import { render } from "@testing-library/react";
import { describe, test } from "vitest";
import App from "./App";

describe("App", () => {
  test("should work as expected", async () => {
    render(<App />);
  });
});
