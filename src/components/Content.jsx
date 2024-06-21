"use client";
import React, { useState, useEffect } from "react";
import Central from "./Central";
import LeftSide from "./LeftSide";
import RightSide from "./RightSide";
import { US, BR, AR, CA } from "country-flag-icons/react/3x2";

import GETSportsNewsByCountry from "@/services/newsAPI/country-sports-news";
import { Skeleton } from "./ui/skeleton";
import { useToast } from "@/components/ui/use-toast";

export default function Content() {
  const [headlineNews, setHeadlineNews] = useState([]);

  useEffect(() => {
    GETSportsNewsByCountry(`br`).then((response) => {
      if (response) {
        setHeadlineNews(response.articles);
      }
    });
  }, []);

  const { toast } = useToast();

  const fetchNewsByCountry = (countryCode) => {
    GETSportsNewsByCountry(countryCode).then((response) => {
      if (response) {
        setHeadlineNews(response.articles);
        toast({
          title: "Destaques atualizados",
          description: structuredDescription(countryCode),
        });
      }
    });
  };

  const structuredDescription = (country) => {
    const description = "Principais notícias: ";
    switch (country) {
      case "us":
        return `${description}Estados Unidos.`;
      case "br":
        return `${description}Brasil.`;
      case "ca":
        return `${description}Canadá.`;
      case "ar":
        return `${description}Argentina.`;
      default:
        return description;
    }
  };

  return (
    <main>
      <div className="grid grid-cols-4 gap-4 w-screen h-screen mt-4">
        <div className="flex justify-center w-full h-96">
          <LeftSide />
        </div>
        <div className="col-span-2 w-full flex flex-col justify-center gap-y-4">
          <div className="flex justify-between items-center">
            <h1 className="text-3xl font-semibold">Destaques</h1>
            <div className="flex justify-end space-x-3 items-center">
              <US
                title="United States"
                className="size-8 cursor-pointer"
                onClick={() => fetchNewsByCountry("us")}
              />
              <BR
                title="Brasil"
                className="size-8 cursor-pointer"
                onClick={() => fetchNewsByCountry("br")}
              />
              <CA
                title="Canada"
                className="size-8 cursor-pointer"
                onClick={() => fetchNewsByCountry("ca")}
              />
              <AR
                title="Argentina"
                className="size-8 cursor-pointer"
                onClick={() => fetchNewsByCountry("ar")}
              />
            </div>
          </div>
          {!headlineNews.length ? (
            <Skeleton className="h-full w-full" />
          ) : (
            headlineNews.map((actualNews, index) => (
              <Central
                key={index}
                author={actualNews.author}
                title={actualNews.title}
                url={actualNews.url}
                date={actualNews.publishedAt}
                image={actualNews.urlToImage}
              />
            ))
          )}
        </div>
        <div className="flex w-full h-full">
          <RightSide />
        </div>
      </div>
    </main>
  );
}
