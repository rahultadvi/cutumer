export interface Service {
  id: string;
  name: string;
  description: string;
  price: string;
  duration: string;
  category: 'Hair' | 'Makeup' | 'Spa' | 'Facial' | 'Beard';
  image: string;
}

export const SERVICES: Service[] = [
  {
    id: '1',
    name: 'Premium Haircut',
    description: 'Expert styling and precision cutting tailored to your face shape and hair type.',
    price: '$45',
    duration: '45 min',
    category: 'Hair',
    image: 'https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: '2',
    name: 'Hydra Facial',
    description: 'Deep cleansing, exfoliation, and hydration for a radiant, glowing complexion.',
    price: '$85',
    duration: '60 min',
    category: 'Facial',
    image: 'https://images.unsplash.com/photo-1570172619245-711f83f5fd19?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: '3',
    name: 'Bridal Makeup',
    description: 'Complete luxury makeup service for your special day, including trial and lashes.',
    price: '$250',
    duration: '120 min',
    category: 'Makeup',
    image: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: '4',
    name: 'Aromatherapy Spa',
    description: 'Relaxing full-body massage with essential oils to rejuvenate your mind and body.',
    price: '$120',
    duration: '90 min',
    category: 'Spa',
    image: 'https://images.unsplash.com/photo-1544161515-4af6b1d46152?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: '5',
    name: 'Royal Beard Grooming',
    description: 'Classic hot towel shave and beard shaping with premium oils.',
    price: '$35',
    duration: '30 min',
    category: 'Beard',
    image: 'https://images.unsplash.com/photo-1503951914875-452162b0f3f1?auto=format&fit=crop&q=80&w=800'
  }
];

export const GALLERY_ITEMS = [
  { id: 1, category: 'Hair', image: 'https://images.unsplash.com/photo-1562322140-8baeececf3df?auto=format&fit=crop&q=80&w=800' },
  { id: 2, category: 'Makeup', image: 'https://images.unsplash.com/photo-1512496015851-a90fb38ba796?auto=format&fit=crop&q=80&w=800' },
  { id: 3, category: 'Spa', image: 'https://images.unsplash.com/photo-1515377905703-c4788e51af15?auto=format&fit=crop&q=80&w=800' },
  { id: 4, category: 'Bridal', image: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&q=80&w=800' },
  { id: 5, category: 'Hair', image: 'https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?auto=format&fit=crop&q=80&w=800' },
  { id: 6, category: 'Makeup', image: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&q=80&w=800' },
];

export const TESTIMONIALS = [
  {
    id: 1,
    name: 'Sarah Johnson',
    role: 'Loyal Customer',
    content: 'The best salon experience I have ever had. The staff is professional and the atmosphere is pure luxury.',
    avatar: 'https://i.pravatar.cc/150?u=sarah'
  },
  {
    id: 2,
    name: 'Michael Chen',
    role: 'Groom',
    content: 'Got my wedding grooming done here. They exceeded my expectations. Highly recommend the Royal Beard Grooming.',
    avatar: 'https://i.pravatar.cc/150?u=michael'
  },
  {
    id: 3,
    name: 'Elena Rodriguez',
    role: 'Fashion Model',
    content: 'I trust Royal Glow for all my professional makeup needs. Their attention to detail is unmatched.',
    avatar: 'https://i.pravatar.cc/150?u=elena'
  }
];

export const PRICING_PLANS = [
  {
    name: 'Essential Glow',
    price: '$99',
    features: ['Basic Haircut', 'Express Facial', 'Beard Trim', '10% Off Products'],
    isPopular: false
  },
  {
    name: 'Royal Experience',
    price: '$199',
    features: ['Premium Haircut', 'Hydra Facial', 'Full Body Spa', '20% Off Products', 'Priority Booking'],
    isPopular: true
  },
  {
    name: 'Ultimate Luxury',
    price: '$349',
    features: ['Full Makeover', 'Premium Spa Package', 'Bridal/Event Makeup', 'Free Home Service', 'VIP Lounge Access'],
    isPopular: false
  }
];
