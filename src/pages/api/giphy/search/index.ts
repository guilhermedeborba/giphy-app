// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { secrets, apiUrls } from "@/config/constants";

type Data = {};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  if (req.method !== "GET") return;
  const url = `${apiUrls.giphy}/gifs/search?api_key=${secrets.giphy.apiKey}&limit=10&q=${req.query.q}&offset=${req.query.offset}`;
  const results = await fetch(url);
  res.status(200).json(await results.json());
}
