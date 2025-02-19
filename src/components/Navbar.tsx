'use client';
import React, { useState } from 'react';
import { HoveredLink, Menu, MenuItem, ProductItem } from './ui/navbar-menu';
import { cn } from '@/utils/cn';
import Link from 'next/link';

function Navbar({ className }: { className?: string }) {
  const [active, setActive] = useState<string | null>(null);
  return (
    <div
      className={cn('fixed inset-x-0 top-10 z-50 mx-auto max-w-2xl', className)}
    >
      <Menu setActive={setActive}>
        <Link href={'/'}>
          <MenuItem
            setActive={setActive}
            active={active}
            item='Home'
          ></MenuItem>
        </Link>
        <Link href={'/OurTeam'}>
          <MenuItem
            setActive={setActive}
            active={active}
            item='Our Team'
          ></MenuItem>
        </Link>
        <Link href={'/ContactUs'}>
          <MenuItem
            setActive={setActive}
            active={active}
            item='Contact Us'
          ></MenuItem>
        </Link>
        <Link href={'/Membership'}>
          <MenuItem
            setActive={setActive}
            active={active}
            item='Membership'
          ></MenuItem>
        </Link>
      </Menu>
    </div>
  );
}

export default Navbar;
