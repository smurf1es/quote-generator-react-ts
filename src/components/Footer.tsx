import React from 'react';

export const Footer: React.FC = () => {
  const date = new Date().getFullYear();
  return (
    <div>
      <p className="text-white text-md md:text-xl text-center">
        &copy; Copyright {date}
      </p>
    </div>
  );
};
