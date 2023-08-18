// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { secrets, apiUrls } from "@/config/constants";

type Data = {};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  if (req.method !== "GET") return;
  const url = `${apiUrls.giphy}/gifs/trending?api_key=${secrets.giphy.apiKey}&limit=10`;
  const trendingGifs = await fetch(url);
  res.status(200).json({ trendingGifs: await trendingGifs.json() });
}
