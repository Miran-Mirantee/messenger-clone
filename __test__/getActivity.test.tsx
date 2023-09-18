import { server } from "@/mocks/server";
import { rest } from "msw";
import getActivity from "@/app/actions/getActivity";

describe("get activity function", () => {
  it("should return the correct number of attributes", async () => {
    const activity = await getActivity();
    expect(Object.keys(activity).length).toBe(7);
  });

  it("should return an error", async () => {
    server.use(
      rest.get("http://www.boredapi.com/api/activity/", (req, res, ctx) => {
        return res(ctx.status(400));
      })
    );
    const activity = await getActivity({});
    expect(activity).toBeUndefined();
  });

  it("should return the correct activity based on type", async () => {
    server.close();
    const activity = await getActivity({ type: "diy" });
    expect(activity.type).toMatch("diy");
  });

  it("should return the correct activity based on number of participants", async () => {
    const activity = await getActivity({ participants: "2" });
    expect(activity.participants).toBe(2);
  });

  it("should return the range of price within the given min and max", async () => {
    const activity = await getActivity({ minPrice: "0.1", maxPrice: "0.5" });
    expect(activity.price).toBeLessThanOrEqual(0.5);
    expect(activity.price).toBeGreaterThanOrEqual(0.1);
  });

  it("should return the range of accessbility within the given min and max", async () => {
    const activity = await getActivity({
      minAccessibility: "0.1",
      maxAccessibility: "0.5",
    });
    expect(activity.price).toBeLessThanOrEqual(0.5);
    expect(activity.price).toBeGreaterThanOrEqual(0.1);
  });
});
