export interface IArticle {
  id: number;
  title: string;
  summary: string;
  published_at: string;
  image_url: string;
  url: string; 
}

export interface IAPIResponse {
  count: number;
  next: string | null;
  results: IArticle[];
}