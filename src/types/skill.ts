import { TechKey } from '@/types/tech-keys';

export type Skill = {
  name: string;
  category: string;
  url: string;
  icon: TechKey;
};

export type Categories = {
  frontend: Skill[];
  backend: Skill[];
  devops: Skill[];
};
