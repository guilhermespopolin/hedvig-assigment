import { rest } from "msw";

import { PerilResponse } from "../../utils/types";

const PERILS_API_URL = "https://hedvig-staging-rest-api.vercel.app/api/perils/";

export const rentalPerilsResponseMock: PerilResponse[] = [
  {
    title: "Fire",
    description:
      "We will cover fire damage, e.g. an over-heated mobile charger or a failed attempt to fry fries. In case of an apartment fire, we can reimburse you for fire and smoke damages.",
    shortDescription:
      "In case of an apartment fire, we can reimburse you for fire and smoke damages.",
    covered: [
      "Fire due to open flames (not just glow)",
      "Explosion",
      "Sudden damage caused by soot",
      "Lightning",
      "Corrosive gas created by unintentional burning of plastics",
      "Cleaning of soot caused by open fire",
    ],
    exceptions: ["Explosive work", "Soot from lit candles"],
    icon: {
      variants: {
        light: {
          svgUrl:
            "https://graphql.dev.hedvigit.com/app-content-service/fire.svg",
        },
        dark: {
          svgUrl:
            "https://graphql.dev.hedvigit.com/app-content-service/fire_dark.svg",
        },
      },
    },
  },
];

export const handlers = [
  rest.get(PERILS_API_URL, (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(rentalPerilsResponseMock));
  }),
];
