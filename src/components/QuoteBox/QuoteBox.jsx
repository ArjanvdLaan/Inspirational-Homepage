import { useState, useEffect } from "react";
import "./QuoteBox.css";

export const QuoteBox = () => {
  const API_URL =
    "/api.quotable.io/quotes/random?tags=technology,famous-quotes";

  const [quote, setQuote] = useState({ content: "", author: "" });
  const [loading, setLoading] = useState(true);

  const getQuote = async () => {
    try {
      const response = await fetch(API_URL);
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const json = await response.json();


    //   console.log(json);
    //   // Check if the response contains the expected data
    //   if (!json.content || !json.author) {
    //     throw new Error("Invalid response data");
    //   }

      setQuote(json);
      setLoading(false);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  useEffect(() => {
    getQuote();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  console.log(quote);

  return (
    <div className="quote-box">
      <blockquote>{quote[0].content}</blockquote>
      <cite title="Source Title">{quote[0].author}</cite>
    </div>
  );
};
