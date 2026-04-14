import { expect, test, describe, vi } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import { ConcessionsCard } from "./ConcessionsCard";

// Mock Firebase
vi.mock("@/lib/firebase", () => ({
  db: {}
}));
vi.mock("firebase/firestore", () => ({
  collection: vi.fn(),
  addDoc: vi.fn(() => Promise.resolve()),
  serverTimestamp: vi.fn()
}));

describe("ConcessionsCard Component", () => {
  test("renders the Quick Order checkout line", () => {
    render(<ConcessionsCard />);
    const heading = screen.getByText("Smart Order");
    expect(heading).toBeDefined();
  });

  test("allows placing an order and shows loading/success state", async () => {
    render(<ConcessionsCard />);
    const orderButton = screen.getByRole("button");
    
    // Initial state
    expect(screen.getByText("Classic Burger Combo")).toBeDefined();
    
    // Click order
    fireEvent.click(orderButton);
    
    // Button should be temporarily disabled while 'ordering' or 'ordered'
    expect(orderButton.hasAttribute('disabled')).toBe(true);
  });
});
