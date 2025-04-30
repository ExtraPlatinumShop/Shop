import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { city, search } = req.query;
  if (!city) {
    res.status(400).json({ error: 'city is required' });
    return;
  }
  const url = `https://www.ukrposhta.ua/address-classifier-ws/v3/office?city=${encodeURIComponent(city as string)}${search ? `&search=${encodeURIComponent(search as string)}` : ''}`;
  try {
    const response = await fetch(url, {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
        'Accept': 'application/json',
        'Referer': 'https://www.ukrposhta.ua/',
        'Origin': 'https://www.ukrposhta.ua'
      }
    });
    if (!response.ok) {
      res.status(response.status).json({ error: 'Ukrposhta API error' });
      return;
    }
    const data = await response.json();
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ error: 'Server error', details: (error as Error).message });
  }
} 