
import React from 'react';
import { motion } from 'framer-motion';
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";

interface SkillsCardProps {
  skills: string[];
  title: string;
  className?: string;
}

const SkillsCard = ({ skills, title, className = '' }: SkillsCardProps) => {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };
  
  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };

  return (
    <Card className={`p-5 ${className}`}>
      <h3 className="text-lg font-medium mb-3">{title}</h3>
      <motion.div 
        className="flex flex-wrap gap-2"
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
      >
        {skills.length > 0 ? (
          skills.map((skill, index) => (
            <motion.div key={index} variants={item}>
              <Badge variant="secondary" className="text-xs dark:bg-secondary/80">
                {skill}
              </Badge>
            </motion.div>
          ))
        ) : (
          <p className="text-sm text-muted-foreground">No skills added yet</p>
        )}
      </motion.div>
    </Card>
  );
};

export default SkillsCard;
