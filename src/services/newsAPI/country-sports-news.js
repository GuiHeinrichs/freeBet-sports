export default async function GETSportsNewsByCountry(country) {
  const key = process.env.NEXT_PUBLIC_NEWS_API_KEY;
  try {
    const response = await fetch(
      `https://newsapi.org/v2/top-headlines?country=${country}&category=sports&apiKey=${key}`,
    );
    const news = await response.json();
    return news;
  } catch (error) {
    console.error(error);
  }
}
