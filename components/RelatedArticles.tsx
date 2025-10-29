import React from 'react';
import { Article } from '../types';

interface RelatedArticlesProps {
  currentArticle: Article;
  allArticles: Article[];
  onSelectArticle: (article: Article) => void;
}

const RelatedArticleCard: React.FC<{ article: Article, onClick: () => void }> = ({ article, onClick }) => {
  return (
    <div
      className="bg-gray-800/50 rounded-lg p-5 border border-gray-800 hover:border-gray-700 transition-all duration-300 transform hover:-translate-y-1 cursor-pointer group flex flex-col h-full"
      onClick={onClick}
    >
      <h3 className="text-lg font-bold text-gray-100 group-hover:text-white transition-colors mb-2">{article.title}</h3>
      <p className="text-sm text-gray-400 flex-grow">{article.summary}</p>
      <div className="flex flex-wrap gap-2 mt-4">
        {article.tags.slice(0, 3).map(tag => (
          <span key={tag} className="bg-gray-700/60 text-gray-400 text-xs font-semibold px-2 py-0.5 rounded-full">
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
};

const RelatedArticles: React.FC<RelatedArticlesProps> = ({ currentArticle, allArticles, onSelectArticle }) => {
  const getRelatedArticles = () => {
    const otherArticles = allArticles.filter(a => a.id !== currentArticle.id);

    const scoredArticles = otherArticles.map(article => {
      const commonTags = article.tags.filter(tag => currentArticle.tags.includes(tag));
      const score = commonTags.length;
      return { ...article, score };
    }).filter(article => article.score > 0);

    scoredArticles.sort((a, b) => {
      if (b.score !== a.score) {
        return b.score - a.score;
      }
      return new Date(b.date).getTime() - new Date(a.date).getTime();
    });

    return scoredArticles.slice(0, 3);
  };

  const related = getRelatedArticles();

  if (related.length === 0) {
    return null;
  }

  return (
    <div className="mt-16 pt-8 border-t border-gray-800">
      <h2 className="text-2xl font-bold text-white mb-6">関連する記事</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {related.map(article => (
          <RelatedArticleCard
            key={article.id}
            article={article}
            onClick={() => onSelectArticle(article)}
          />
        ))}
      </div>
    </div>
  );
};

export default RelatedArticles;
