import { expect, test, describe, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import { BottomNav } from "./BottomNav";

// Mock Next.js navigation hooks
vi.mock("next/navigation", () => ({
  useRouter: () => ({
    push: vi.fn(),
  }),
  useSearchParams: () => ({
    get: vi.fn((key) => {
      if (key === "tab") return "home";
      return null;
    }),
  }),
}));

describe("BottomNav Component", () => {
  test("renders all 4 navigation icons correctly", () => {
    render(<BottomNav />);
    expect(screen.getByRole("button", { name: /home/i })).toBeDefined();
    expect(screen.getByRole("button", { name: /map/i })).toBeDefined();
    expect(screen.getByRole("button", { name: /food/i })).toBeDefined();
    expect(screen.getByRole("button", { name: /settings/i })).toBeDefined();
  });
});
