import getAccessibilityRange from "@/app/actions/getAccessibilityRange";

describe("get price range function", () => {
  it("should return the free value", () => {
    expect(getAccessibilityRange(1).minAccessibility).toMatch("0");
    expect(getAccessibilityRange(1).maxAccessibility).toMatch("0.3");
  });
  it("should return the correct price value #1", () => {
    expect(getAccessibilityRange(2).minAccessibility).toMatch("0.4");
    expect(getAccessibilityRange(2).maxAccessibility).toMatch("0.7");
  });
  it("should return the correct price value #2", () => {
    expect(getAccessibilityRange(3).minAccessibility).toMatch("0.8");
    expect(getAccessibilityRange(3).maxAccessibility).toMatch("1.0");
  });
});
