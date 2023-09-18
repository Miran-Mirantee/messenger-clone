import { server } from "@/mocks/server";
import { rest } from "msw";
import getActivity from "@/app/actions/getActivity";

describe("get activity function", () => {
  it("should return the correct number of attributes", async () => {
    server.use(
      rest.get("http://www.boredapi.com/api/activity/", (req, res, ctx) => {
        return res(
          ctx.status(200),
          ctx.json({
            activity: "Learn Express.js",
            accessibility: 0.25,
            type: "education",
            participants: 1,
            price: 0.1,
            link: "https://expressjs.com/",
            key: "3943506",
          })
        );
      })
    );
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

  //   it("should return the correct activity based on type", async () => {
  //     const activity = await getActivity({ type: "diy" });
  //     console.log(activity);
  //     expect(activity.type).toMatch("diy");
  //   });

  //   it("should return the correct activity based on number of participants", async () => {
  //     const activity = await getActivity({ participants: 1 });
  //     console.log(activity);
  //     expect(activity.participants).toBe(1);
  //   });
});
