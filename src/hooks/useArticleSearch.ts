import { useState, useMemo } from 'react';
import type { IArticle } from '../types';

export const useArticleSearch = (articles: IArticle[]) => {
  const [filterKeyword, setFilterKeyword] = useState('');

  const filteredArticles = useMemo(() => {
    if (!filterKeyword.trim()) return articles;

    const keywords = filterKeyword.toLowerCase().split(/\s+/).filter(Boolean);

    return articles
      .map((article) => {
        let score = 0;
        const title = article.title;
        const summary = article.summary;

        keywords.forEach((key) => {
          const regex = new RegExp(`\\b${key}\\b`, 'i');

          if (regex.test(title)) score += 10;
          
          if (regex.test(summary)) score += 1;
        });

        return { ...article, score };
      })
      .filter((item) => item.score > 0)
      .sort((a, b) => b.score - a.score);
      
  }, [articles, filterKeyword]);

  return { filterKeyword, setFilterKeyword, filteredArticles };
};