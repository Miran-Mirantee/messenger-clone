import getPriceRange from "@/app/actions/getPriceRange";

describe("get price range function", () => {
  it("should return the free value", () => {
    expect(getPriceRange(1).minPrice).toMatch("0");
    expect(getPriceRange(1).maxPrice).toMatch("0");
  });
  it("should return the correct price value #1", () => {
    expect(getPriceRange(2).minPrice).toMatch("0.1");
    expect(getPriceRange(2).maxPrice).toMatch("0.4");
  });
  it("should return the correct price value #2", () => {
    expect(getPriceRange(3).minPrice).toMatch("0.5");
    expect(getPriceRange(3).maxPrice).toMatch("1.0");
  });
});
