"use client";
import { useRef, useState } from "react";
import Header from "@/components/Header";
import ProductCard from "@/components/ProductCard";
import SearchItem from "@/components/SearchItem";
import { Carousel } from "@/components/Carousel";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";

export default function Home() {
  const [searchValue, setSearchValue] = useState("");
  const plantRef = useRef();

  const scrollHandler = (e) => {
    plantRef.current.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  const handleSearch = (value) => {
    setSearchValue(value);
  };

  return (
    <main>
      <NavBar />
      <Header scrollHandler={scrollHandler} />
      <Carousel />
      <SearchItem ref={plantRef} onSearch={handleSearch} />
      <ProductCard searchValue={searchValue} />
      <Footer />
    </main>
  );
}
