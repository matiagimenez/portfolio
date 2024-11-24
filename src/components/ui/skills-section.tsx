import { Card, CardHeader, CardContent, SkillCard } from '@/components/ui';
import { Skill } from '@/types/skill';

interface SkillSectionProps {
  title: string;
  skills: Skill[];
}

export const SkillSection = ({ title, skills }: SkillSectionProps) => (
  <Card className='my-8 mt-0 bg-background border-2 border-pink-500 rounded-lg overflow-hidden shadow-lg z-10 relative'>
    <CardHeader className='bg-pink-500 text-white'>
      <h3 className='text-xl font-bold'>{title}</h3>
    </CardHeader>
    <CardContent className='p-6 bg-background z-10'>
      <div className='grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4'>
        {skills.map((skill) => (
          <SkillCard key={skill.name} {...skill} />
        ))}
      </div>
    </CardContent>
  </Card>
);
