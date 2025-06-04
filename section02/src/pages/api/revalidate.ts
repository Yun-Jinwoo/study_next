import { NextApiHandler, NextApiResponse } from "next";

export default async function handler(
  req: NextApiHandler,
  res: NextApiResponse
) {
  try {
    await res.revalidate("/");
    return res.json({ revalidate: true });
  } catch (e) {
    res.status(500).send(`Revalidation Failed : ${e}`);
  }
}
