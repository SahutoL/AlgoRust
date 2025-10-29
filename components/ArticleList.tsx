import React, { useState } from 'react';
import { Article } from '../types';
import AdComponent from './AdComponent';

interface ArticleListProps {
  articles: Article[];
  onSelectArticle: (article: Article) => void;
}

const categories = ['すべて', '基礎理論', 'データ構造', '探索', 'ソート', 'グラフ'];
const theoryTags = ['基礎', '計算量', 'O記法', '計算機科学', 'アルゴリズム分析'];

const ArticleCard: React.FC<{ article: Article, onSelectArticle: (article: Article) => void }> = ({ article, onSelectArticle }) => {
  return (
    <div 
      className="bg-gray-800/50 rounded-lg p-6 border border-gray-800 hover:border-gray-700 transition-all duration-300 transform hover:-translate-y-1 cursor-pointer group"
      onClick={() => onSelectArticle(article)}
    >
      <div className="flex justify-between items-start mb-2">
        <h2 className="text-xl font-bold text-gray-100 group-hover:text-white transition-colors">{article.title}</h2>
      </div>
      <p className="text-gray-400 mb-4">{article.summary}</p>
      <div className="flex flex-wrap gap-2">
        {article.tags.map(tag => (
          <span key={tag} className="bg-gray-700/60 text-gray-400 text-xs font-semibold px-2.5 py-1 rounded-full">
            {tag}
          </span>
        ))}
      </div>
      <div className="text-right text-sm text-gray-500 mt-4">
        <span>{article.author} - {article.date}</span>
      </div>
    </div>
  );
};

const ArticleList: React.FC<ArticleListProps> = ({ articles, onSelectArticle }) => {
  const [selectedCategory, setSelectedCategory] = useState('すべて');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredArticles = articles.filter(article => {
    const matchesCategory = (() => {
      if (selectedCategory === 'すべて') return true;
      if (selectedCategory === '基礎理論') {
        return article.tags.some(tag => theoryTags.includes(tag) || tag === '基礎理論');
      }
      return article.tags.includes(selectedCategory);
    })();

    if (!matchesCategory) return false;

    const lowercasedQuery = searchQuery.toLowerCase().trim();
    if (lowercasedQuery === '') {
      return true;
    }

    const matchesSearch = 
      article.title.toLowerCase().includes(lowercasedQuery) ||
      article.summary.toLowerCase().includes(lowercasedQuery) ||
      article.tags.some(tag => tag.toLowerCase().includes(lowercasedQuery));
    
    return matchesSearch;
  });

  const itemsToRender = [];
  for (let i = 0; i < filteredArticles.length; i++) {
    itemsToRender.push(
      <ArticleCard key={filteredArticles[i].id} article={filteredArticles[i]} onSelectArticle={onSelectArticle} />
    );
    // Insert an ad after the 3rd article (index 2)
    if (i === 2) {
      itemsToRender.push(
        <AdComponent
          key="ad-list"
          // TODO: Replace with your own AdSense Slot ID
          slot="1234567890" 
        />
      );
    }
  }

  return (
    <div>
       <div className="text-center pt-12 pb-8">
          <h1 className="text-4xl font-bold text-white sm:text-5xl">
            アルゴリズムを<span className="font-bold">Rust</span>で学ぶ
          </h1>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-400">
            計算量の概念から実践的な実装まで。モダンなアプローチでアルゴリズムの本質に迫ります。
          </p>
        </div>
      
      <div className="mb-8">
        <div className="relative">
          <input
            type="text"
            placeholder="記事を検索（タイトル、概要、タグ）..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full bg-gray-800 border border-gray-700 rounded-md py-2 pl-10 pr-4 text-white focus:outline-none focus:ring-2 focus:ring-gray-600"
            aria-label="記事を検索"
          />
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <svg className="h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd" />
            </svg>
          </div>
        </div>
      </div>

      <div className="flex justify-center flex-wrap gap-2 md:gap-4 mb-12">
        {categories.map(category => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={`px-4 py-2 text-sm font-medium rounded-md transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-900 focus:ring-gray-500 ${
              selectedCategory === category
                ? 'bg-gray-200 text-gray-900'
                : 'bg-gray-800 text-gray-400 hover:bg-gray-700 hover:text-gray-200'
            }`}
          >
            {category}
          </button>
        ))}
      </div>
      
      <div className="space-y-8">
        {itemsToRender.length > 0 ? (
          itemsToRender
        ) : (
          <div className="text-center py-12">
            <p className="text-gray-500">該当する記事が見つかりませんでした。</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ArticleList;