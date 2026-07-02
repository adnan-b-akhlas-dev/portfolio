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
