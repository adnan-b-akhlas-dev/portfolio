export interface IExperience {
  slug: string;
  role: string;
  company: string;
  location: string;
  startDate: string;
  endDate: string | null;
  description: string;
  achievement: string[];
  tags: string[];
  createdAt: string;
  updatedAt: string;
}
