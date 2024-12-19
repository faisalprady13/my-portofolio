'use client';

import React, { useState } from 'react';
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from '@/components/ui/navigation-menu';
import Link from 'next/link';
import { SheetTrigger, SheetContent, Sheet, SheetTitle } from './ui/sheet';
import { Button } from './ui/button';
import { HamburgerMenuIcon } from '@radix-ui/react-icons';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => setIsOpen(!isOpen);

  const menuItems = [
    { title: 'STORY', path: '/your-path' },
    { title: 'EXPERIENCE', path: '/your-path' },
    { title: 'SKILLS', path: '/your-path' },
    { title: 'PROJECTS', path: '/your-path' },
  ];

  return (
    <>
      <NavigationMenu className="absolute top-0 max-w-none w-full bg-transparent px-5 md:px-12 py-4 flex justify-between">
        <p className="font-bold">
          {'< '} <span className="text-[#5046e6]">{'FAISAL'}</span>
          <br />
          PRADY
          <span className="text-[#5046e6]">{' />'}</span>
        </p>
        <NavigationMenuList className="hidden md:flex">
          {menuItems.map((item, i) => (
            <NavigationMenuItem key={i}>
              <Link href={item.path} legacyBehavior passHref>
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  {item.title}
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
          ))}
        </NavigationMenuList>

        <div className="md:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" onClick={handleToggle}>
                <HamburgerMenuIcon className="h-6 w-6" />
              </Button>
            </SheetTrigger>

            <SheetContent side="left" className="bg-white">
              <SheetTitle className="p-4 font-semibold text-lg">
                Menu
              </SheetTitle>
              <div className="flex flex-col space-y-2 p-4">
                {menuItems.map((item) => (
                  <Link
                    key={item.title}
                    href={item.path}
                    // onClick={() => setIsOpen(false)}
                  >
                    <p className="hover:text-blue-500">{item.title}</p>
                  </Link>
                ))}
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </NavigationMenu>
    </>
  );
};

export default Navbar;
