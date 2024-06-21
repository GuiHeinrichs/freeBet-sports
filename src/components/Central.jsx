import React from "react";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function Central(props) {
  const date = new Date(props.date);

  const formattedDate = date.toLocaleDateString("pt-BR", {
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
  });
  return (
    <Card className="w-full h-auto ease-in-out duration-300 hover:scale-105">
      <CardHeader>
        {props.image ? (
          <img
            src={props.image}
            width="w-full"
            height={300}
            alt={`image ${props.author}`}
            className="rounded-lg"
          />
        ) : (
          <></>
        )}
        <CardTitle>{props.title}</CardTitle>
        <CardDescription>{props.author}</CardDescription>
      </CardHeader>
      <CardContent>
        <p className="text-sm">{formattedDate}</p>
      </CardContent>
      <CardFooter>
        <a
          href={props.url}
          className="text-xl underline decoration-1 hover:text-gray-400"
        >
          Leia mais sobre
        </a>
      </CardFooter>
    </Card>
  );
}
