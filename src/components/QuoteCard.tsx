import React from 'react';

interface QuoteCardProps {
  data:
    | {
        content: string;
        author: string;
        tags: [];
        dateAdded: string;
      }
    | undefined;
}

export const QuoteCard: React.FC<QuoteCardProps> = ({ data }) => {
  return (
    <div className="mb-12">
      <div className="flex flex-col md:flex-row md:justify-center md:items-center mx-auto bg-white shadow-xl px-6 h-1/6 w-3/4 md:h-1/4 md:w-1/2 border rounded-2xl">
        <div className="md:w-1/2">
          <div className="py-1">
            <p className="font-mono text-xl">{data?.content}</p>
          </div>
        </div>

        <div className="flex flex-col items-end md:w-1/2">
          <div className="py-1">
            <p className="text-md md:text-lg text-right font-bold">
              {data?.author}
            </p>
          </div>
          <div className="pb-8">
            <p className="text-md text-right">{data?.dateAdded}</p>
          </div>
          <div className="pb-4">
            {data?.tags.map((tag, index) => (
              <span
                key={`tag-${index}`}
                className="bg-blue-500 font-mono text-md text-white w-24 h-6 p-1"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
