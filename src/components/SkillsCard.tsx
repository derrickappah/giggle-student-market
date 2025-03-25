
import React from 'react';
import { motion } from 'framer-motion';
import { Badge } from "@/components/ui/badge";

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
    <div className={`bg-card p-5 rounded-lg border ${className}`}>
      <h3 className="text-lg font-medium mb-3">{title}</h3>
      <motion.div 
        className="flex flex-wrap gap-2"
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
      >
        {skills.map((skill, index) => (
          <motion.div key={index} variants={item}>
            <Badge variant="secondary" className="text-xs">
              {skill}
            </Badge>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default SkillsCard;
