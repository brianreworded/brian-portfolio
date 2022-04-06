import React from 'react';
import { Footer } from './footer';
import { Navbar } from './navbar'




interface Props {
  children: React.ReactNode;
}

export const Layout = ({ children }: Props) => {

  return (
    <div className="max-w-7xl mx-auto px-8 flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow ">{children}</main>
      <Footer />
    </div>
  );
};