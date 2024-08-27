import React from 'react';
import Image from 'next/image';
import Banner from './Navbar/Banner';
import News from './Navbar/News';
import { BellDot, GanttChart, Menu } from 'lucide-react';
import DekstopLogo from '@/public/Logo/Dgvc Banner Logo.png'
import MobileLogo from '@/public/Logo/Logo.png'
import SocialMedia from './SocialMedia';
import { MenuLinks } from '@/data/Navbar/Menu';
import Link from 'next/link';
import Menus from './Navbar/Menus';

function Navbar() {
  return (
    <nav className="flex flex-col">

      {/* Banner */}
      <Banner />

      {/* News */}
      <News />

      {/* Menus */}
      <Menus />

    </nav>
  );
}

export default Navbar;