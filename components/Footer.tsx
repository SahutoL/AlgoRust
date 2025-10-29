
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 border-t border-gray-800 mt-12">
      <div className="max-w-5xl mx-auto py-6 px-4 sm:px-6 lg:px-8 text-center text-gray-500">
        <p className="text-xs mb-2">
          当サイトは第三者配信の広告サービス（Google AdSense）を利用しています。
        </p>
        <p>&copy; {new Date().getFullYear()} AlgoRust. All rights reserved.</p>
        <p className="text-sm mt-1">A platform for clear, modern algorithm explanations.</p>
      </div>
    </footer>
  );
};

export default Footer;