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
import { useRouter } from 'next/navigation';

const menuItems = [
  { title: 'STORY', path: '#story' },
  { title: 'TIMELINE', path: '#timeline' },
  { title: 'SKILLS', path: '#skills' },
  { title: 'PROJECTS', path: '#projects' },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <NavigationMenu className="select-none text-primary-foreground absolute z-20 top-0 max-w-none w-full bg-transparent px-5 md:px-12 py-4 flex justify-between">
        {/* <Link href="/" legacyBehavior passHref> */}
        <p className="font-bold cursor-pointer">
          {'< '} <span className="text-primary">{'FAISAL'}</span>
          <br />
          PRADY
          <span className="text-primary">{' />'}</span>
        </p>
        {/* </Link> */}
        <NavigationMenuList className="hidden md:flex">
          {menuItems.map((item, i) => (
            <NavigationMenuItem key={i}>
              <Link href={item.path} legacyBehavior passHref>
                <NavigationMenuLink
                  className={`${navigationMenuTriggerStyle()} bg-transparent`}
                >
                  {item.title}
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
          ))}
        </NavigationMenuList>

        <div className="md:hidden">
          <Sheet open={isOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" onClick={handleToggle}>
                <HamburgerMenuIcon className="h-6 w-6" />
              </Button>
            </SheetTrigger>

            <SheetContent
              side="left"
              className="bg-neutral-900 text-white"
              handleOverlayClick={() => {
                setIsOpen(false);
              }}
            >
              <SheetTitle className="p-4">
                <p className="font-bold text-white cursor-pointer">
                  {'< '} <span className="text-primary">{'FAISAL'}</span>
                  <br />
                  PRADY
                  <span className="text-primary">{' />'}</span>
                </p>
              </SheetTitle>
              <div className="flex flex-col space-y-2 p-4">
                {menuItems.map((item) => (
                  <Link
                    key={item.title}
                    href={item.path}
                    onClick={() => {
                      setIsOpen(false);
                    }}
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
