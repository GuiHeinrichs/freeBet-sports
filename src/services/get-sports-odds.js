const apiKey = process.env.NEXT_PUBLIC_ODD_API_KEY;

export default async function getOddsBy(dataObject) {
  try {
    const response = await fetch(
      `https://api.the-odds-api.com/v4/sports/${dataObject.sport}/odds/?regions=${dataObject.regions}&markets=${dataObject.markets}&apiKey=${apiKey}`,
    );
    const odds = await response.json();
    return odds;
  } catch (error) {
    console.error(error);
  }
}
