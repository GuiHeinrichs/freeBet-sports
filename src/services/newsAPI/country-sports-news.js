export default async function GETSportsNewsByCountry(context) {
  const key = process.env.NEXT_PUBLIC_GNEWS_API_KEY;
  try {
    const response = await fetch(
      `https://gnews.io/api/v4/search?q=${context}&lang=pt&country=br&token=${key}&sortby=relevance`,
    );
    const news = await response.json();
    return news;
  } catch (error) {
    console.error(error);
  }
}
