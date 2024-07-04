export default async function GetAllEvents(sport) {
  try {
    const key = process.env.NEXT_PUBLIC_ODD_API_KEY;
    const response = await fetch(
      `https://api.the-odds-api.com/v4/sports/${sport}/events?apiKey=${key}`,
    );
    const result = await response.json();
    return result;
  } catch (error) {
    console.error(error);
  }
}
