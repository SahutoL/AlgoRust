import React, { useState, useEffect, useRef } from 'react';
import { Article, ContentBlock, ContentBlockType } from '../types';
import CodeBlock from './CodeBlock';
import AdComponent from './AdComponent';
import RelatedArticles from './RelatedArticles';

interface ArticleDetailProps {
  article: Article;
  onBack: () => void;
  articles: Article[];
  onSelectArticle: (article: Article) => void;
}

interface Heading {
  id: string;
  text: string;
}

const slugify = (text: string) =>
  text
    .toLowerCase()
    .replace(/\s+/g, '-')
    .replace(/[^\w-]+/g, '');

const ArticleDetail: React.FC<ArticleDetailProps> = ({ article, onBack, articles, onSelectArticle }) => {
  const [headings, setHeadings] = useState<Heading[]>([]);
  const [activeId, setActiveId] = useState('');
  const observer = useRef<IntersectionObserver | null>(null);

  // Generate Table of Contents
  useEffect(() => {
    const extractedHeadings = article.content
      .filter(block => block.type === ContentBlockType.HEADING)
      .map(block => ({
        text: block.content as string,
        id: slugify(block.content as string),
      }));
    setHeadings(extractedHeadings);
  }, [article]);
  
  // Intersection Observer for active heading
  useEffect(() => {
    if (observer.current) observer.current.disconnect();
    
    observer.current = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
           setActiveId(entry.target.id);
        }
      });
    }, { rootMargin: "0% 0% -80% 0%" });
    
    const elements = document.querySelectorAll('h2[id]');
    elements.forEach(elem => observer.current?.observe(elem));

    return () => observer.current?.disconnect();
  }, [headings]);


  const renderContentBlock = (block: ContentBlock, index: number) => {
    switch (block.type) {
      case ContentBlockType.HEADING:
        const id = slugify(block.content as string);
        return <h2 key={index} id={id} className="text-3xl font-bold mt-12 mb-4 text-gray-100 border-b border-gray-700 pb-2 scroll-mt-20">{block.content}</h2>;
      case ContentBlockType.SUBHEADING:
        return <h3 key={index} className="text-2xl font-semibold mt-6 mb-3 text-gray-200">{block.content}</h3>;
      case ContentBlockType.PARAGRAPH:
        return <p key={index} className="text-gray-300 leading-relaxed my-4">{block.content}</p>;
      case ContentBlockType.CODE:
        return <CodeBlock key={index} code={block.content as string} language={block.language} />;
      case ContentBlockType.LIST:
        return (
          <ul key={index} className="list-disc list-inside space-y-2 my-4 pl-4 text-gray-300">
            {(block.content as string[]).map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
        );
      default:
        return null;
    }
  };

  return (
    <div>
      <div className="lg:grid lg:grid-cols-12 lg:gap-8">
        <div className="lg:col-span-9">
          <article>
            <button 
              onClick={onBack} 
              className="inline-flex items-center mb-8 text-gray-400 hover:text-white transition-colors group"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 transform group-hover:-translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
              すべての記事に戻る
            </button>
            
            <h1 className="text-4xl font-bold text-white mb-4">{article.title}</h1>
            <div className="flex items-center text-gray-400 mb-6">
              <span>{article.author}</span>
              <span className="mx-2">&bull;</span>
              <span>{article.date}</span>
            </div>
            <div className="flex flex-wrap gap-2 mb-8">
              {article.tags.map(tag => (
                <span key={tag} className="bg-gray-700/60 text-gray-400 text-xs font-semibold px-2.5 py-1 rounded-full">{tag}</span>
              ))}
            </div>

            <div className="prose prose-invert max-w-none prose-p:text-gray-300 prose-h2:text-gray-100 prose-h3:text-gray-200">
              {article.content.map(renderContentBlock)}
            </div>
            
            <div className="mt-12">
              <AdComponent
                key="ad-detail"
                // TODO: Replace with your own AdSense Slot ID
                slot="0987654321" 
              />
            </div>

            <RelatedArticles
              currentArticle={article}
              allArticles={articles}
              onSelectArticle={onSelectArticle}
            />
          </article>
        </div>
        <aside className="hidden lg:block lg:col-span-3">
          <div className="sticky top-24">
            <h4 className="text-sm font-semibold uppercase text-gray-400 mb-4">目次</h4>
            <ul className="space-y-2">
              {headings.map(heading => (
                <li key={heading.id}>
                  <a 
                    href={`#${heading.id}`}
                    className={`block text-sm transition-colors border-l-2 pl-4 ${
                      activeId === heading.id 
                        ? 'text-white border-green-400' 
                        : 'text-gray-400 hover:text-white border-gray-700 hover:border-gray-500'
                    }`}
                  >
                    {heading.text}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </aside>
      </div>
    </div>
  );
};

export default ArticleDetail;
