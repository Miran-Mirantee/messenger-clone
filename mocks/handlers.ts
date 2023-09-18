import { rest } from "msw";

// export const handlers = [
//   rest.get("http://www.boredapi.com/api/activity/", (req, res, ctx) => {
//     return res(ctx.status(200));
//   }),
// ];

export const handlers = [
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
  }),
];
