
export interface ProjectListing {
  id: string;
  client_id: string;
  title: string;
  description: string;
  category: string;
  skills: string[];
  budget: number;
  duration: string;
  status: 'open' | 'in_progress' | 'completed' | 'cancelled';
  created_at: string;
  updated_at: string;
}
