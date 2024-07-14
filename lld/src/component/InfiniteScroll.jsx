import React, { useEffect, useState } from "react";

const InfiniteScroll = () => {
  const [memes, setMemes] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    fetchData();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleScroll = () => {
    if (
      window.scrollY + window.innerHeight >=
      document.documentElement.scrollHeight - 5
    ) {
      fetchData();
    }
  };
  const fetchData = async () => {
    setLoading(true);
    const data = await fetch("https://meme-api.com/gimme/20");
    const json = await data.json();
    console.log("Json", json);
    setLoading(false);
    setMemes(json.memes);
  };

  return (
    <div>
      {memes.map((item, index) => (
        <div key={index} className="flex flex-wrap">
          <div className="p-2">
            <div className="font-bold px-2">{item?.title}</div>
            <img src={item?.preview[0]} alt={item?.title} className="w-40" />
          </div>
        </div>
      ))}
      {loading && <p>Loading....</p>}
    </div>
  );
};

// https://meme-api.com/gimme/2
export default InfiniteScroll;
