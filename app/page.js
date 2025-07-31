'use client';
import Navbar from "@/components/Navbar";
import Header from "@/components/header";
import About from "@/components/About";
import Services from "@/components/Services";
import Latest from "@/components/Latest";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Gallery from "@/components/Gallery"
import { useEffect, useState } from "react";
export default function Home() {

  return (
    <>
    <Navbar/>
    <Header/>
    <About/>
    <Services/>
    <Latest/>
    <Gallery/>
    <Contact/>
    <Footer/>
    
    
    </>
  );
}
