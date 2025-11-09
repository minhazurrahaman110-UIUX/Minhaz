export interface Service {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  description: string;
  image: string;
}

export interface Dentist {
  id: string;
  name: string;
  avatar: string;
}

export interface Testimonial {
  name: string;
  title: string;
  image: string;
  rating: number;
  comment: string;
}

export interface ReminderPreferences {
  method: 'email' | 'sms';
  contact: string;
  timing: '24h' | '2h' | '1h';
}

export interface Booking {
  dentistId: string;
  date: string; // YYYY-MM-DD
  time: string;
  reminderPreferences?: ReminderPreferences;
}