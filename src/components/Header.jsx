"use client";
import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

import GetAllSports from '@/services/get-sports';

export default function Header() {
  const router = useRouter();

  const handleLoginClick = () => {
    router.push('/login');
  };

  const [sportsDescriptions, setSportDescriptions] = useState([]);
  const [sportsInformations, setSportsInformations] = useState([]);
  
  useEffect(() => {
    GetAllSports().then((response) => {
      if (response) {
        const groups = response.map((sport) => sport.group);
        const uniqueGroups = [...new Set(groups)];
        localStorage.setItem("sports", JSON.stringify(response));
        setSportDescriptions(uniqueGroups);
        setSportsInformations(response);
      }
    });
  }, []);

  return (
    <header>
      <nav className='bg-[#020817]'>
        <div className="flex items-center justify-between mx-6 h-12 max-w-screen">
          <a href='#' className='flex items-center'>
            <span className='self-center text-xl text-white whitespace-nowrap font-semibold'>FreeBet Sports</span>
          </a>
          <div id="mega-menu-icons" className="flex items-center w-auto justify-between whitespace-nowrap">
            <ul className='flex justify-between space-x-4'>
              {sportsDescriptions.map((group, index) => (
                <li key={index} className="relative">
                  <DropdownMenu>
                    <DropdownMenuTrigger className='text-sm hover:text-gray-400'>{group}</DropdownMenuTrigger>
                    <DropdownMenuContent>
                      <DropdownMenuLabel>{group}</DropdownMenuLabel>
                      <DropdownMenuSeparator />
                      {sportsInformations.filter(sport => sport.group == group).map((sport, index) => (
                        <DropdownMenuItem key={index}> {sport.title} </DropdownMenuItem>
                      ))}
                    </DropdownMenuContent>
                  </DropdownMenu>
                </li>
              ))}
            </ul>
          </div>
          <div className='flex justify-end items-center'>
            <DropdownMenu>
              <DropdownMenuTrigger>
                <Avatar className="size-9">
                  <AvatarImage src="https://cdn4.iconfinder.com/data/icons/evil-icons-user-interface/64/avatar-512.png" />
                  <AvatarFallback>CN</AvatarFallback>
                </Avatar>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuLabel>Bem vindo!</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem onClick={handleLoginClick}>Entrar</DropdownMenuItem>
                <DropdownMenuItem>Registrar-se</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
            
          </div>
        </div>
      </nav>
    </header>
  );
}

