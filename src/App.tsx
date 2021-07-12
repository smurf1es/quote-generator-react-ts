import React, { useEffect, useState } from 'react';
// API
import { fetchQuote } from './API';
import { QuoteCard } from './components/QuoteCard';
// Libs
import { FaReact } from 'react-icons/fa';
import { Footer } from './components/Footer';

interface Props {
  _id: string;
  tags: [];
  content: string;
  author: string;
  dateAdded: string;
}

const App: React.FC = () => {
  const [quote, setQuote] = useState<Props | undefined>(undefined);

  useEffect(() => {
    async function getQuotes() {
      const data = await fetchQuote();
      setQuote(data);
    }
    getQuotes();
  }, []);

  return (
    <div className="app-main h-screen bg-gray-700">
      <span className="text-white flex items-center justify-center font-bold text-2xl md:text-4xl pt-8 pb-6">
        <FaReact className="text-white text-2xl md:text-4xl mr-2" />
        <p>Random Quote App</p>
      </span>
      <p className="text-white text-lg text-center pb-6">
        Made with <span className="font-bold">React + Typescript</span>
      </p>
      <QuoteCard data={quote} />
      <Footer />
    </div>
  );
};

export default App;
