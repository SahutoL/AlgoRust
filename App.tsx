import React, { useState, useEffect } from 'react';
import { Article } from './types';
import { articles } from './data/articles';
import Header from './components/Header';
import Footer from './components/Footer';
import ArticleList from './components/ArticleList';
import ArticleDetail from './components/ArticleDetail';

const App: React.FC = () => {
  const [selectedArticle, setSelectedArticle] = useState<Article | null>(null);

  const handleSelectArticle = (article: Article) => {
    setSelectedArticle(article);
    window.scrollTo(0, 0);
  };

  const handleBack = () => {
    setSelectedArticle(null);
    window.scrollTo(0, 0);
  };

  useEffect(() => {
    // This is to simulate fetching data
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-gray-900 font-sans">
      <Header onTitleClick={handleBack} />
      <main className="flex-grow container mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
        <div className="max-w-5xl mx-auto" key={selectedArticle ? selectedArticle.id : 'list'}>
          <div className="animate-fade-in">
            {selectedArticle ? (
              <ArticleDetail
                article={selectedArticle}
                onBack={handleBack}
                articles={articles}
                onSelectArticle={handleSelectArticle}
              />
            ) : (
              <ArticleList articles={articles} onSelectArticle={handleSelectArticle} />
            )}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default App;
