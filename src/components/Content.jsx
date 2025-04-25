'use client';
import React, { useState, useEffect } from 'react';
import Central from './Central';
import LeftSide from './LeftSide';
import RightSide from './RightSide';
// import { US, BR, AR, CA } from 'country-flag-icons/react/3x2';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faFutbol,
  faFootball,
  faBasketball,
  faHandFist,
} from '@fortawesome/free-solid-svg-icons';

import GETSportsNewsByCountry from '@/services/newsAPI/country-sports-news';
import { Skeleton } from './ui/skeleton';
import { useToast } from '@/components/ui/use-toast';

export default function Content() {
  const [headlineNews, setHeadlineNews] = useState([]);
  const [clickedFilter, setClickedFilter] = useState('soccer');

  useEffect(() => {
    GETSportsNewsByCountry(clickedFilter).then((response) => {
      if (response) {
        setHeadlineNews(response.articles);
      }
    });
  }, []);

  const { toast } = useToast();

  const fetchNewsByCountry = (context) => {
    setClickedFilter(context);
    GETSportsNewsByCountry(context).then((response) => {
      if (response) {
        setHeadlineNews(response.articles);
        toast({
          title: 'Destaques atualizados',
          description: structuredDescription('br'),
        });
      }
    });
  };

  const structuredDescription = (country) => {
    const description = 'Principais notícias: ';
    switch (country) {
      case 'us':
        return `${description}Estados Unidos.`;
      case 'br':
        return `${description}Brasil.`;
      case 'ca':
        return `${description}Canadá.`;
      case 'ar':
        return `${description}Argentina.`;
      default:
        return description;
    }
  };

  return (
    <main>
      <div className='mt-4 grid h-full w-full grid-cols-4 gap-4'>
        <div className='flex h-96 w-full justify-center'>
          <LeftSide />
        </div>
        <div className='col-span-2 flex w-full flex-col justify-center gap-y-4'>
          <div className='grid grid-cols-2'>
            <div>
              <h1 className='text-3xl font-semibold'>Destaques</h1>
            </div>
            <div className='flex items-center justify-end space-x-12'>
              <div
                className={`cursor-pointer duration-300 ease-in-out ${
                  clickedFilter === 'NFL' ? 'text-slate-800' : 'text-white'
                } hover:text-slate-800`}
                onClick={() => fetchNewsByCountry('NFL')}
              >
                <FontAwesomeIcon className='cursor-pointer' icon={faFootball} />
              </div>
              <div
                className={`cursor-pointer duration-300 ease-in-out ${
                  clickedFilter === 'soccer' ? 'text-slate-800' : 'text-white'
                } hover:text-slate-800`}
                onClick={() => fetchNewsByCountry('soccer')}
              >
                <FontAwesomeIcon className='cursor-pointer' icon={faFutbol} />
              </div>
              <div
                className={`cursor-pointer duration-300 ease-in-out ${
                  clickedFilter === 'NBA' ? 'text-slate-800' : 'text-white'
                } hover:text-slate-800`}
                onClick={() => fetchNewsByCountry('NBA')}
              >
                <FontAwesomeIcon
                  className='cursor-pointer'
                  icon={faBasketball}
                />
              </div>
              <div
                className={`cursor-pointer duration-300 ease-in-out ${
                  clickedFilter === 'MMA' ? 'text-slate-800' : 'text-white'
                } hover:text-slate-800`}
                onClick={() => fetchNewsByCountry('MMA')}
              >
                <FontAwesomeIcon className='cursor-pointer' icon={faHandFist} />
              </div>
              <div
                className={`text-md cursor-pointer font-semibold duration-300 ease-in-out ${
                  clickedFilter === 'Formula1' ? 'text-slate-800' : 'text-white'
                } hover:text-slate-800`}
                onClick={() => fetchNewsByCountry('Formula1')}
              >
                F1
              </div>
            </div>
          </div>
          {!headlineNews?.length ? (
            <Skeleton className='h-full w-full' />
          ) : (
            headlineNews.map((actualNews, index) => (
              <Central
                key={index}
                author={actualNews.author}
                title={actualNews.title}
                url={actualNews.url}
                date={actualNews.publishedAt}
                image={actualNews.image}
              />
            ))
          )}
        </div>
        <div className='flex h-full w-full'>
          <RightSide />
        </div>
      </div>
    </main>
  );
}
