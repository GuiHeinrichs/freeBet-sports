// pages/api/rss.js
import Parser from 'rss-parser';

const parser = new Parser();

export default async function handler(req, res) {
  if (req.method !== 'GET') {
    res.setHeader('Allow', ['GET']);
    return res.status(405).json({ error: 'Method Not Allowed' });
  }

  try {
    const feed = await parser.parseURL(
      'https://ge.globo.com/rss/feeds/futebol.xml',
    );
    res.status(200).json(feed.items);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Erro ao buscar feed RSS' });
  }
}
