'use client';

import { useState, useEffect } from 'react';
import GetLiveScores from '@/services/get-scores';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircle } from '@fortawesome/free-solid-svg-icons';

// Função de re-tentativa com atraso
const fetchWithRetry = async (key, retries = 3, delay = 1000) => {
  for (let i = 0; i < retries; i++) {
    try {
      const scores = await GetLiveScores(key);
      return scores;
    } catch (error) {
      if (error.response?.status === 429 && i < retries - 1) {
        await new Promise((res) => setTimeout(res, delay));
      } else {
        console.error('Failed to fetch scores:', error);
        throw error;
      }
    }
  }
};

// Limitar a concorrência das chamadas
const fetchWithLimit = async (keys, limit = 2) => {
  let allScores = [];
  for (let i = 0; i < keys.length; i += limit) {
    const chunk = keys.slice(i, i + limit);
    const promises = chunk.map((key) => fetchWithRetry(key));
    const chunkResults = await Promise.all(promises);
    allScores = [
      ...allScores,
      ...chunkResults.flat().filter((score) => score.scores),
    ];
  }
  return allScores;
};

export default function RightSide() {
  const [soccerScores, setSoccerScores] = useState([]);
  // const [basketScores, setBasketScores] = useState([]);
  // const [footballScores, setFootballScores] = useState([]);

  const mainSoccerLeaguesKeys = [
    'soccer_epl', // English Premier League
    'soccer_spain_la_liga', // La Liga - Spain
    'soccer_conmebol_copa_libertadores', // Libertadores da america
    'soccer_brazil_campeonato', // Brazil Série A
  ];

  useEffect(() => {
    const fetchEvents = async (keys, setScores) => {
      try {
        const allScores = await fetchWithLimit(keys, 2);
        setScores(allScores);
      } catch (error) {
        console.error('Failed to fetch events:', error);
      }
    };

    fetchEvents(mainSoccerLeaguesKeys, setSoccerScores);
    // fetchEvents(mainFootballLeaguesKeys, setFootballScores);
    // fetchEvents(mainBasketLeaguesKeys, setBasketScores);
  }, []);

  const groupBySportTitle = (scores) => {
    return scores.reduce((acc, score) => {
      if (!acc[score.sport_title]) {
        acc[score.sport_title] = [];
      }
      acc[score.sport_title].push(score);
      return acc;
    }, {});
  };

  const groupedScores = groupBySportTitle(soccerScores);

  return (
    <div className='h-full w-11/12 rounded-xl bg-gray-900 p-4'>
      <h1 className='text-lg'>Ultimos resultados</h1>
      <Accordion type='single' collapsible>
        <AccordionItem value='item-1'>
          <AccordionTrigger>Futebol</AccordionTrigger>
          <AccordionContent>
            {Object.entries(groupedScores).map(([sportTitle, scores]) => (
              <div key={sportTitle}>
                <h1 className='mb-2 text-xl font-bold'>{sportTitle}</h1>
                {scores.map((score, index) => (
                  <div
                    key={index}
                    className='mb-4 ml-4 flex flex-col gap-y-1 hover:text-gray-300'
                  >
                    <div className='flex flex-nowrap items-center gap-2 text-sm'>
                      {!score.completed ? (
                        <div className='text-xs'>
                          {' '}
                          <FontAwesomeIcon
                            fade
                            icon={faCircle}
                            style={{ color: '#14d006' }}
                          />
                        </div>
                      ) : (
                        <div className='text-xs'>
                          <FontAwesomeIcon
                            icon={faCircle}
                            style={{ color: '#9e9e9e' }}
                          />
                        </div>
                      )}
                      {score.home_team} vs {score.away_team}
                    </div>
                    <div className='flex flex-col whitespace-nowrap'>
                      {score.scores.map((result, resultIndex) => (
                        <div key={resultIndex} className='ml-6 text-xs'>
                          {result.name}: {result.score}
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            ))}
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
}
