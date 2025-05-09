import { Navbar } from "@/components/general/Navbar";
import Footer from '@/components/LandingPage/Footer'
import React from "react";

const MainLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="max-w-72xl mx-auto px-4 md:px-6 lg:px-8 pb-12">
      <Navbar />
      {children}
      {/* <Footer /> */}
    </div>
  );
};

export default MainLayout;
