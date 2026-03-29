export type Tab = 'home' | 'milestones' | 'tips' | 'profile' | 'slip';

export interface HealthMetric {
  label: string;
  value: number;
  color: string;
}

export interface Achievement {
  id: string;
  title: string;
  description: string;
  icon: string;
  progress: number;
  isEarned: boolean;
}

export interface Reward {
  id: string;
  title: string;
  description: string;
  icon: string;
  image?: string;
}
