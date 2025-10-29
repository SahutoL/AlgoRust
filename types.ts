
export enum ContentBlockType {
  HEADING = 'heading',
  PARAGRAPH = 'paragraph',
  CODE = 'code',
  SUBHEADING = 'subheading',
  LIST = 'list',
}

export interface ContentBlock {
  type: ContentBlockType;
  content: string | string[];
  language?: 'rust' | 'text';
}

export interface Article {
  id: number;
  slug: string;
  title: string;
  summary: string;
  author: string;
  date: string;
  tags: string[];
  content: ContentBlock[];
}
