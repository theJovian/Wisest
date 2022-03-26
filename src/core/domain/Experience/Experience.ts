export interface Experience {
  id: number;
  name: string;
  description: string;
  userId: number;
}

export interface ExperienceFormData {
  name: string;
  description: string;
  user_id: number;
}
