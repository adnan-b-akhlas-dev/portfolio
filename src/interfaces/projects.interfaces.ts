export interface IProject {
  slug: string;
  title: string;
  description: string;
  category: string;
  tags: string[];
  thumbnail: string;
  content: string | null;
  liveLink: string;
  clientRepoLink: string;
  serverRepoLink: string;
  createdAt: string;
  updatedAt: string;
}

export interface IProjectDemo {
  id?: string;
  title: string;
  description: string;
  thumbnail: string;
  content?: string;
  client?: string;
  role?: string;
  duration?: string;
  category?: string;
  technologies?: string[];
  liveUrl?: string;
  githubUrl?: string;
  challenge?: string;
  solution?: string;
  results?: string[];
  images?: string[];
}
