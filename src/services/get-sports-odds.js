export default async function getOddsBy(dataObject) {
  try {
    const response = await fetch(
      `https://api.the-odds-api.com/v4/sports/${dataObject.sport}/odds/?regions=${dataObject.regions}&markets=${dataObject.markets}&apiKey=${process.env.API_KEY}`,
    );
    const odds = await response.json();
    return odds;
  } catch (error) {
    console.error(error);
  }
}
