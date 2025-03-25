
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
  applications?: number;
  views?: number;
  project_type?: 'one-time' | 'ongoing' | 'part-time' | 'internship';
  remote?: boolean;
  location?: string;
  client_name?: string;
  client_avatar?: string;
  featured?: boolean;
  deadline?: string;
}

export interface ProjectApplication {
  id: string;
  project_id: string;
  freelancer_id: string;
  cover_letter: string;
  price_bid: number;
  duration_bid: string;
  status: 'pending' | 'accepted' | 'rejected' | 'withdrawn';
  created_at: string;
  updated_at: string;
}

export interface ProjectComment {
  id: string;
  project_id: string;
  user_id: string;
  user_type: 'client' | 'freelancer';
  content: string;
  created_at: string;
  updated_at: string;
}

export interface ProjectAttachment {
  id: string;
  project_id: string;
  file_name: string;
  file_size: number;
  file_type: string;
  file_url: string;
  uploaded_by: string;
  uploaded_at: string;
}
