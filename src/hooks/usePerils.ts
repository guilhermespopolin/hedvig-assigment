import { useEffect, useState } from "react";
import axios from "axios";

import { Peril } from "../utils/types";

type PerilResponse = {
  title: string;
  description: string;
  shortDescription: string;
  covered: string[];
  exceptions: string[];
  icon: {
    variants: {
      light: { svgUrl: string };
      dark: { svgUrl: string };
    };
  };
};

const PERILS_API_URL =
  "https://hedvig-staging-rest-api.vercel.app/api/perils?contractType=SE_APARTMENT_RENT&locale=en_SE";

function parsePerils(perils: PerilResponse[]): Peril[] {
  return perils.map(
    ({ title, shortDescription, description, covered, exceptions, icon }) => ({
      title,
      shortDescription,
      description,
      covered,
      exceptions,
      icon: icon.variants.light.svgUrl,
    })
  );
}

function usePerils() {
  const [perils, setPerils] = useState<Peril[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(function fetchPerils() {
    async function doFetchPerils() {
      try {
        setLoading(true);

        const response = await axios.get<PerilResponse[]>(PERILS_API_URL);
        const perils = parsePerils(response.data);

        setPerils(perils);
      } catch (err) {
        setError("Something went wrong while fetching perils!");
      } finally {
        setLoading(false);
      }
    }

    doFetchPerils();
  }, []);

  return { perils, loading, error };
}

export default usePerils;
