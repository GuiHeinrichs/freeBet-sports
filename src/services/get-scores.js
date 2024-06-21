export default async function GetLiveScores(sport) {
  try {
    const key = process.env. NEXT_PUBLIC_ODD_API_KEY;
    const response = await fetch(`https://api.the-odds-api.com/v4/sports/${sport}/scores/?daysFrom=3&apiKey=${key}`) 
    const result = await response.json();
    return result;
  } catch (error) {
    console.error(error); 
  }
}
