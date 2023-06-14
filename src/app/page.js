"use client";
import { useEffect, useRef, useState } from "react";
import Header from "@/components/Header";
import ProductCard from "@/components/ProductCard";
import SearchItem from "@/components/SearchItem";
import { Carousel } from "@/components/Carousel";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import BtnScroll from "@/components/BtnScroll";

export default function Home() {
  const [searchValue, setSearchValue] = useState("");
  const [showButton, setShowButton] = useState(false);
  const fruitRef = useRef();
  const btnRef = useRef();

  const scrollHandler = (e) => {
    fruitRef.current.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  const btnScrollHandler = (e) => {
    btnRef.current.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  const handleSearch = (value) => {
    setSearchValue(value);
  };

  useEffect(() => {
    const handleScrollMain = () => {
      const scrollY = window.scrollY;
      setShowButton(scrollY > 470);
    };

    window.addEventListener("scroll", handleScrollMain);

    return () => {
      window.removeEventListener("scroll", handleScrollMain);
    };
  }, []);

  return (
    <main ref={btnRef}>
      <div className="mx-auto overflow-auto px-1">
        <NavBar />
        <Header scrollHandler={scrollHandler} />
        <BtnScroll btnScrollHandler={btnScrollHandler} show={showButton} />
        <Carousel />
        <SearchItem ref={fruitRef} onSearch={handleSearch} />
        <ProductCard searchValue={searchValue} />
        <Footer />
      </div>
    </main>
  );
}
