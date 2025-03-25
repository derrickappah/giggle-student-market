
import React from 'react';
import { motion } from 'framer-motion';
import { 
  TrendingUp, 
  DollarSign, 
  Star, 
  Clock, 
  Briefcase, 
  Award, 
  Zap
} from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const StudentStats = () => {
  const stats = [
    {
      title: "Projects Completed",
      value: 12,
      icon: <Briefcase className="h-5 w-5 text-primary" />,
      change: "+3 this month",
      trend: "up"
    },
    {
      title: "Total Earnings",
      value: "$2,450",
      icon: <DollarSign className="h-5 w-5 text-green-500" />,
      change: "+$450 this month",
      trend: "up"
    },
    {
      title: "Average Rating",
      value: "4.8",
      icon: <Star className="h-5 w-5 text-yellow-500" />,
      change: "from 24 reviews",
      trend: "neutral"
    },
    {
      title: "Response Rate",
      value: "95%",
      icon: <Zap className="h-5 w-5 text-blue-500" />,
      change: "responds within 2 hours",
      trend: "up"
    }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      {stats.map((stat, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: index * 0.1 }}
        >
          <Card>
            <CardHeader className="pb-2">
              <div className="flex justify-between items-center">
                <CardTitle className="text-sm font-medium text-muted-foreground">
                  {stat.title}
                </CardTitle>
                {stat.icon}
              </div>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stat.value}</div>
              <div className="mt-1 flex items-center text-xs">
                {stat.trend === 'up' && <TrendingUp className="h-3 w-3 mr-1 text-green-500" />}
                <span className={`${stat.trend === 'up' ? 'text-green-500' : 'text-muted-foreground'}`}>
                  {stat.change}
                </span>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      ))}
    </div>
  );
};

export default StudentStats;
