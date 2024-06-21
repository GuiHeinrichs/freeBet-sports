export default async function GetAllSports() {
  try {
    // const response = await fetch(`https://api.the-odds-api.com/v4/sports/?apiKey=${process.env.NEXT_PUBLIC_ODD_API_KEY}`);
    // const sports = await response.json();
    const mockSports = [
      {
        "key": "americanfootball_cfl",
        "group": "American Football",
        "title": "CFL",
        "description": "Canadian Football League",
        "active": true,
        "has_outrights": false
      },
      {
        "key": "americanfootball_ncaaf",
        "group": "American Football",
        "title": "NCAAF",
        "description": "US College Football",
        "active": true,
        "has_outrights": false
      },
      {
        "key": "americanfootball_ncaaf_championship_winner",
        "group": "American Football",
        "title": "NCAAF Championship Winner",
        "description": "US College Football Championship Winner",
        "active": true,
        "has_outrights": true
      },
      {
        "key": "americanfootball_nfl",
        "group": "American Football",
        "title": "NFL",
        "description": "US Football",
        "active": true,
        "has_outrights": false
      },
      {
        "key": "americanfootball_nfl_super_bowl_winner",
        "group": "American Football",
        "title": "NFL Super Bowl Winner",
        "description": "Super Bowl Winner 2024/2025",
        "active": true,
        "has_outrights": true
      },
      {
        "key": "americanfootball_ufl",
        "group": "American Football",
        "title": "UFL",
        "description": "United Football League",
        "active": true,
        "has_outrights": false
      },
      {
        "key": "aussierules_afl",
        "group": "Aussie Rules",
        "title": "AFL",
        "description": "Aussie Football",
        "active": true,
        "has_outrights": false
      },
      {
        "key": "baseball_kbo",
        "group": "Baseball",
        "title": "KBO",
        "description": "KBO League",
        "active": true,
        "has_outrights": false
      },
      {
        "key": "baseball_milb",
        "group": "Baseball",
        "title": "MiLB",
        "description": "Minor League Baseball",
        "active": true,
        "has_outrights": false
      },
      {
        "key": "baseball_mlb",
        "group": "Baseball",
        "title": "MLB",
        "description": "Major League Baseball",
        "active": true,
        "has_outrights": false
      },
      {
        "key": "baseball_mlb_world_series_winner",
        "group": "Baseball",
        "title": "MLB World Series Winner",
        "description": "World Series Winner 2024",
        "active": true,
        "has_outrights": true
      },
      {
        "key": "baseball_ncaa",
        "group": "Baseball",
        "title": "NCAA Baseball",
        "description": "US College Baseball",
        "active": true,
        "has_outrights": false
      },
      {
        "key": "baseball_npb",
        "group": "Baseball",
        "title": "NPB",
        "description": "Nippon Professional Baseball",
        "active": true,
        "has_outrights": false
      },
      {
        "key": "basketball_euroleague",
        "group": "Basketball",
        "title": "Basketball Euroleague",
        "description": "Basketball Euroleague",
        "active": true,
        "has_outrights": false
      },
      {
        "key": "basketball_nba",
        "group": "Basketball",
        "title": "NBA",
        "description": "US Basketball",
        "active": true,
        "has_outrights": false
      },
      {
        "key": "basketball_nba_championship_winner",
        "group": "Basketball",
        "title": "NBA Championship Winner",
        "description": "Championship Winner 2023/2024",
        "active": true,
        "has_outrights": true
      },
      {
        "key": "basketball_wnba",
        "group": "Basketball",
        "title": "WNBA",
        "description": "US Basketball",
        "active": true,
        "has_outrights": false
      },
      {
        "key": "boxing_boxing",
        "group": "Boxing",
        "title": "Boxing",
        "description": "Boxing Bouts",
        "active": true,
        "has_outrights": false
      },
      {
        "key": "cricket_international_t20",
        "group": "Cricket",
        "title": "International Twenty20",
        "description": "International Twenty20",
        "active": true,
        "has_outrights": false
      },
      {
        "key": "cricket_ipl",
        "group": "Cricket",
        "title": "IPL",
        "description": "Indian Premier League",
        "active": true,
        "has_outrights": false
      },
      {
        "key": "golf_masters_tournament_winner",
        "group": "Golf",
        "title": "Masters Tournament Winner",
        "description": "2024 Winner",
        "active": true,
        "has_outrights": true
      },
      {
        "key": "golf_pga_championship_winner",
        "group": "Golf",
        "title": "PGA Championship Winner",
        "description": "2024 Winner",
        "active": true,
        "has_outrights": true
      },
      {
        "key": "golf_the_open_championship_winner",
        "group": "Golf",
        "title": "The Open Winner",
        "description": "2024 Winner",
        "active": true,
        "has_outrights": true
      },
      {
        "key": "golf_us_open_winner",
        "group": "Golf",
        "title": "US Open Winner",
        "description": "2024 Winner",
        "active": true,
        "has_outrights": true
      },
      {
        "key": "icehockey_nhl",
        "group": "Ice Hockey",
        "title": "NHL",
        "description": "US Ice Hockey",
        "active": true,
        "has_outrights": false
      },
      {
        "key": "icehockey_nhl_championship_winner",
        "group": "Ice Hockey",
        "title": "NHL Championship Winner",
        "description": "Stanley Cup Winner 2023/2024",
        "active": true,
        "has_outrights": true
      },
      {
        "key": "mma_mixed_martial_arts",
        "group": "Mixed Martial Arts",
        "title": "MMA",
        "description": "Mixed Martial Arts",
        "active": true,
        "has_outrights": false
      },
      {
        "key": "politics_us_presidential_election_winner",
        "group": "Politics",
        "title": "US Presidential Elections Winner",
        "description": "2024 US Presidential Election Winner",
        "active": true,
        "has_outrights": true
      },
      {
        "key": "rugbyleague_nrl",
        "group": "Rugby League",
        "title": "NRL",
        "description": "Aussie Rugby League",
        "active": true,
        "has_outrights": false
      },
      {
        "key": "soccer_argentina_primera_division",
        "group": "Soccer",
        "title": "Primera División - Argentina",
        "description": "Argentine Primera División",
        "active": true,
        "has_outrights": false
      },
      {
        "key": "soccer_austria_bundesliga",
        "group": "Soccer",
        "title": "Austrian Football Bundesliga",
        "description": "Austrian Soccer",
        "active": true,
        "has_outrights": false
      },
      {
        "key": "soccer_belgium_first_div",
        "group": "Soccer",
        "title": "Belgium First Div",
        "description": "Belgian First Division A",
        "active": true,
        "has_outrights": false
      },
      {
        "key": "soccer_brazil_campeonato",
        "group": "Soccer",
        "title": "Brazil Série A",
        "description": "Brasileirão Série A",
        "active": true,
        "has_outrights": false
      },
      {
        "key": "soccer_brazil_serie_b",
        "group": "Soccer",
        "title": "Brazil Série B",
        "description": "Campeonato Brasileiro Série B",
        "active": true,
        "has_outrights": false
      },
      {
        "key": "soccer_chile_campeonato",
        "group": "Soccer",
        "title": "Primera División - Chile",
        "description": "Campeonato Chileno",
        "active": true,
        "has_outrights": false
      },
      {
        "key": "soccer_china_superleague",
        "group": "Soccer",
        "title": "Super League - China",
        "description": "Chinese Soccer",
        "active": true,
        "has_outrights": false
      },
      {
        "key": "soccer_conmebol_copa_america",
        "group": "Soccer",
        "title": "Copa América",
        "description": "CONMEBOL Copa América",
        "active": true,
        "has_outrights": false
      },
      {
        "key": "soccer_conmebol_copa_libertadores",
        "group": "Soccer",
        "title": "Copa Libertadores",
        "description": "CONMEBOL Copa Libertadores",
        "active": true,
        "has_outrights": false
      },
      {
        "key": "soccer_denmark_superliga",
        "group": "Soccer",
        "title": "Denmark Superliga",
        "description": "Danish Soccer",
        "active": true,
        "has_outrights": false
      },
      {
        "key": "soccer_efl_champ",
        "group": "Soccer",
        "title": "Championship",
        "description": "EFL Championship",
        "active": true,
        "has_outrights": false
      },
      {
        "key": "soccer_england_league2",
        "group": "Soccer",
        "title": "League 2",
        "description": "EFL League 2 ",
        "active": true,
        "has_outrights": false
      },
      {
        "key": "soccer_epl",
        "group": "Soccer",
        "title": "EPL",
        "description": "English Premier League",
        "active": true,
        "has_outrights": false
      },
      {
        "key": "soccer_fa_cup",
        "group": "Soccer",
        "title": "FA Cup",
        "description": "Football Association Challenge Cup",
        "active": true,
        "has_outrights": false
      },
      {
        "key": "soccer_fifa_world_cup_winner",
        "group": "Soccer",
        "title": "FIFA World Cup Winner",
        "description": "FIFA World Cup Winner 2026",
        "active": true,
        "has_outrights": true
      },
      {
        "key": "soccer_finland_veikkausliiga",
        "group": "Soccer",
        "title": "Veikkausliiga - Finland",
        "description": "Finnish  Soccer",
        "active": true,
        "has_outrights": false
      },
      {
        "key": "soccer_france_ligue_one",
        "group": "Soccer",
        "title": "Ligue 1 - France",
        "description": "French Soccer",
        "active": true,
        "has_outrights": false
      },
      {
        "key": "soccer_france_ligue_two",
        "group": "Soccer",
        "title": "Ligue 2 - France",
        "description": "French Soccer",
        "active": true,
        "has_outrights": false
      },
      {
        "key": "soccer_germany_bundesliga2",
        "group": "Soccer",
        "title": "Bundesliga 2 - Germany",
        "description": "German Soccer",
        "active": true,
        "has_outrights": false
      },
      {
        "key": "soccer_greece_super_league",
        "group": "Soccer",
        "title": "Super League - Greece",
        "description": "Greek Soccer",
        "active": true,
        "has_outrights": false
      },
      {
        "key": "soccer_italy_serie_a",
        "group": "Soccer",
        "title": "Serie A - Italy",
        "description": "Italian Soccer",
        "active": true,
        "has_outrights": false
      },
      {
        "key": "soccer_italy_serie_b",
        "group": "Soccer",
        "title": "Serie B - Italy",
        "description": "Italian Soccer",
        "active": true,
        "has_outrights": false
      },
      {
        "key": "soccer_japan_j_league",
        "group": "Soccer",
        "title": "J League",
        "description": "Japan Soccer League",
        "active": true,
        "has_outrights": false
      },
      {
        "key": "soccer_korea_kleague1",
        "group": "Soccer",
        "title": "K League 1",
        "description": "Korean Soccer",
        "active": true,
        "has_outrights": false
      },
      {
        "key": "soccer_league_of_ireland",
        "group": "Soccer",
        "title": "League of Ireland",
        "description": "Airtricity League Premier Division",
        "active": true,
        "has_outrights": false
      },
      {
        "key": "soccer_mexico_ligamx",
        "group": "Soccer",
        "title": "Liga MX",
        "description": "Mexican Soccer",
        "active": true,
        "has_outrights": false
      },
      {
        "key": "soccer_netherlands_eredivisie",
        "group": "Soccer",
        "title": "Dutch Eredivisie",
        "description": "Dutch Soccer",
        "active": true,
        "has_outrights": false
      },
      {
        "key": "soccer_norway_eliteserien",
        "group": "Soccer",
        "title": "Eliteserien - Norway",
        "description": "Norwegian Soccer",
        "active": true,
        "has_outrights": false
      },
      {
        "key": "soccer_poland_ekstraklasa",
        "group": "Soccer",
        "title": "Ekstraklasa - Poland",
        "description": "Polish Soccer",
        "active": true,
        "has_outrights": false
      },
      {
        "key": "soccer_portugal_primeira_liga",
        "group": "Soccer",
        "title": "Primeira Liga - Portugal",
        "description": "Portugese Soccer",
        "active": true,
        "has_outrights": false
      },
      {
        "key": "soccer_spain_la_liga",
        "group": "Soccer",
        "title": "La Liga - Spain",
        "description": "Spanish Soccer",
        "active": true,
        "has_outrights": false
      },
      {
        "key": "soccer_spain_segunda_division",
        "group": "Soccer",
        "title": "La Liga 2 - Spain",
        "description": "Spanish Soccer",
        "active": true,
        "has_outrights": false
      },
      {
        "key": "soccer_spl",
        "group": "Soccer",
        "title": "Premiership - Scotland",
        "description": "Scottish Premiership",
        "active": true,
        "has_outrights": false
      },
      {
        "key": "soccer_sweden_allsvenskan",
        "group": "Soccer",
        "title": "Allsvenskan - Sweden",
        "description": "Swedish Soccer",
        "active": true,
        "has_outrights": false
      },
      {
        "key": "soccer_sweden_superettan",
        "group": "Soccer",
        "title": "Superettan - Sweden",
        "description": "Swedish Soccer",
        "active": true,
        "has_outrights": false
      },
      {
        "key": "soccer_switzerland_superleague",
        "group": "Soccer",
        "title": "Swiss Superleague",
        "description": "Swiss Soccer",
        "active": true,
        "has_outrights": false
      },
      {
        "key": "soccer_turkey_super_league",
        "group": "Soccer",
        "title": "Turkey Super League",
        "description": "Turkish Soccer",
        "active": true,
        "has_outrights": false
      },
      {
        "key": "soccer_uefa_champs_league",
        "group": "Soccer",
        "title": "UEFA Champions League",
        "description": "European Champions League",
        "active": true,
        "has_outrights": false
      },
      {
        "key": "soccer_uefa_europa_conference_league",
        "group": "Soccer",
        "title": "UEFA Europa Conference League",
        "description": "UEFA Europa Conference League",
        "active": true,
        "has_outrights": false
      },
      {
        "key": "soccer_uefa_europa_league",
        "group": "Soccer",
        "title": "UEFA Europa League",
        "description": "European Europa League",
        "active": true,
        "has_outrights": false
      },
      {
        "key": "soccer_uefa_european_championship",
        "group": "Soccer",
        "title": "UEFA Euro 2024",
        "description": "UEFA European Championship",
        "active": true,
        "has_outrights": false
      },
      {
        "key": "soccer_usa_mls",
        "group": "Soccer",
        "title": "MLS",
        "description": "Major League Soccer",
        "active": true,
        "has_outrights": false
      }
    ];
    return mockSports;
  } catch (error) {
   console.error(error); 
  }
}

