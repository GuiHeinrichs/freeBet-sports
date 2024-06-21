import React, { useEffect, useState } from "react";
import GetAllEvents from "@/services/get-events";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFutbol,
  faGolfBallTee,
  faFootball,
  faBasketball,
  faBaseballBatBall,
  faHandFist,
  faHockeyPuck,
} from "@fortawesome/free-solid-svg-icons";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function LeftSide() {
  const [soccerEvents, setSoccerEvents] = useState([]);
  const [golfEvents, setGolfEvents] = useState([]);
  const [mmaEvents, setMmaEvents] = useState([]);
  const [footballEvents, setFootballEvents] = useState([]);
  const [basketEvents, setBasketEvents] = useState([]);
  const [baseballEvents, setBaseballEvents] = useState([]);
  const [hockeyEvents, setHockeyEvents] = useState([]);

  const mainSoccerLeaguesKeys = [
    "soccer_epl", // English Premier League
    "soccer_spain_la_liga", // La Liga - Spain
    "soccer_conmebol_copa_libertadores", // Libertadores da america
    "soccer_brazil_campeonato", // Brazil Série A
  ];

  const golfTournamentKeys = [
    "golf_masters_tournament_winner",
    "golf_pga_championship_winner",
    "golf_the_open_championship_winner",
    "golf_us_open_winner",
  ];

  const mainMmaKeys = ["mma_mixed_martial_arts"];

  const mainFootballLeaguesKeys = [
    "americanfootball_nfl", // NFL
  ];

  const mainBasketLeaguesKeys = [
    "basketball_nba", // NBA
  ];

  const mainBaseballLeaguesKeys = [
    "baseball_mlb", // MLB
  ];

  const mainHockeyLeaguesKeys = [
    "icehockey_nhl", // NHL
  ];

  useEffect(() => {
    const fetchEvents = async (keys, setEvents) => {
      let allEvents = [];
      for (const key of keys) {
        const events = await GetAllEvents(key);
        if (Array.isArray(events)) {
          allEvents = [...allEvents, ...events];
        }
      }
      setEvents(allEvents);
    };

    fetchEvents(mainSoccerLeaguesKeys, setSoccerEvents);
    fetchEvents(golfTournamentKeys, setGolfEvents);
    fetchEvents(mainMmaKeys, setMmaEvents);
    fetchEvents(mainFootballLeaguesKeys, setFootballEvents);
    fetchEvents(mainBasketLeaguesKeys, setBasketEvents);
    fetchEvents(mainBaseballLeaguesKeys, setBaseballEvents);
    fetchEvents(mainHockeyLeaguesKeys, setHockeyEvents);
  }, []);

  const renderEvents = (events) =>
    events.length > 0 ? (
      events.map((event, index) => (
        <div
          key={index}
          className="hover:bg-gray-900 hover:scale-105 p-2 ease-in duration-200 rounded-md"
        >
          <p className="text-lg">{event.sport_title}</p>
          <p className="text-sm">
            {event.home_team} x {event.away_team}
          </p>
          <p className="text-sm text-[#94a3b8]">
            {new Date(event.commence_time).toLocaleString()}
          </p>
        </div>
      ))
    ) : (
      <div className="flex flex-row flex-wrap justify-center space-y-2">
        <p>Nenhuma partida foi encontrada.</p>
      </div>
    );

  return (
    <Tabs defaultValue="soccer">
      <TabsList className="flex justify-center w-full">
        <TabsTrigger value="soccer">
          <FontAwesomeIcon icon={faFutbol} />
        </TabsTrigger>
        <TabsTrigger value="golf">
          <FontAwesomeIcon icon={faGolfBallTee} />
        </TabsTrigger>
        <TabsTrigger value="mma">
          <FontAwesomeIcon icon={faHandFist} />
        </TabsTrigger>
        <TabsTrigger value="football">
          <FontAwesomeIcon icon={faFootball} />
        </TabsTrigger>
        <TabsTrigger value="basket">
          <FontAwesomeIcon icon={faBasketball} />
        </TabsTrigger>
        <TabsTrigger value="baseball">
          <FontAwesomeIcon icon={faBaseballBatBall} />
        </TabsTrigger>
        <TabsTrigger value="hockey">
          <FontAwesomeIcon icon={faHockeyPuck} />
        </TabsTrigger>
      </TabsList>
      <TabsContent value="soccer">
        <Card>
          <CardHeader>
            <CardTitle>Proximas partidas</CardTitle>
            <CardDescription>
              Próximas partidas dos principais campeonatos.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-2">
            {renderEvents(soccerEvents)}
          </CardContent>
          <CardFooter></CardFooter>
        </Card>
      </TabsContent>
      <TabsContent value="golf">
        <Card>
          <CardHeader>
            <CardTitle>Proximas partidas</CardTitle>
            <CardDescription>
              Próximas partidas dos principais campeonatos.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-2">
            {renderEvents(golfEvents)}
          </CardContent>
          <CardFooter></CardFooter>
        </Card>
      </TabsContent>
      <TabsContent value="mma">
        <Card>
          <CardHeader>
            <CardTitle>Proximas partidas</CardTitle>
            <CardDescription>
              Próximas partidas dos principais campeonatos.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-2">
            {renderEvents(mmaEvents)}
          </CardContent>
          <CardFooter></CardFooter>
        </Card>
      </TabsContent>
      <TabsContent value="football">
        <Card>
          <CardHeader>
            <CardTitle>Proximas partidas</CardTitle>
            <CardDescription>
              Próximas partidas dos principais campeonatos.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-2">
            {renderEvents(footballEvents)}
          </CardContent>
          <CardFooter></CardFooter>
        </Card>
      </TabsContent>
      <TabsContent value="basket">
        <Card>
          <CardHeader>
            <CardTitle>Proximas partidas</CardTitle>
            <CardDescription>
              Próximas partidas dos principais campeonatos.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-2">
            {renderEvents(basketEvents)}
          </CardContent>
          <CardFooter></CardFooter>
        </Card>
      </TabsContent>
      <TabsContent value="baseball">
        <Card>
          <CardHeader>
            <CardTitle>Proximas partidas</CardTitle>
            <CardDescription>
              Próximas partidas dos principais campeonatos.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-2">
            {renderEvents(baseballEvents)}
          </CardContent>
          <CardFooter></CardFooter>
        </Card>
      </TabsContent>
      <TabsContent value="hockey">
        <Card>
          <CardHeader>
            <CardTitle>Proximas partidas</CardTitle>
            <CardDescription>
              Próximas partidas dos principais campeonatos.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-2">
            {renderEvents(hockeyEvents)}
          </CardContent>
          <CardFooter></CardFooter>
        </Card>
      </TabsContent>
    </Tabs>
  );
}
