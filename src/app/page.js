import IntroSec from "@/components/intro-sec/IntroSec";
import QuoteSec from "@/components/quote-sec/QuoteSec";
import RandomSec from "@/components/random-sec/RandomSec";
import React from "react";

const Home = () => {
  return (
    <div>
      <IntroSec />
      <RandomSec />
      <QuoteSec />
    </div>
  );
};

export default Home;
