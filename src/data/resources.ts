export interface Book {
  id: string;
  title: string;
  author: string;
  description: string;
  category: string;
  imageUrl: string;
  link?: string;
}

export interface Reference {
  id: string;
  title: string;
  type: 'article' | 'podcast' | 'video' | 'website';
  description: string;
  link: string;
}

export const books: Book[] = [
  {
    id: '1',
    title: 'The Power of Now',
    author: 'Eckhart Tolle',
    description: 'A guide to spiritual enlightenment that emphasizes the importance of living in the present moment.',
    category: 'Spirituality',
    imageUrl: 'https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=300&h=400&fit=crop',
  },
  {
    id: '2',
    title: 'Atomic Habits',
    author: 'James Clear',
    description: 'An easy and proven way to build good habits and break bad ones through small, incremental changes.',
    category: 'Self-Improvement',
    imageUrl: 'https://images.unsplash.com/photo-1512820790803-83ca734da794?w=300&h=400&fit=crop',
  },
  {
    id: '3',
    title: 'Man\'s Search for Meaning',
    author: 'Viktor E. Frankl',
    description: 'A memoir and psychological exploration of finding purpose even in the most difficult circumstances.',
    category: 'Philosophy',
    imageUrl: 'https://images.unsplash.com/photo-1524578271613-d550eacf6090?w=300&h=400&fit=crop',
  },
  {
    id: '4',
    title: 'The Alchemist',
    author: 'Paulo Coelho',
    description: 'A magical story about following your dreams and listening to your heart.',
    category: 'Fiction',
    imageUrl: 'https://images.unsplash.com/photo-1543002588-bfa74002ed7e?w=300&h=400&fit=crop',
  },
  {
    id: '5',
    title: 'Meditations',
    author: 'Marcus Aurelius',
    description: 'Timeless stoic philosophy offering practical wisdom for living a virtuous life.',
    category: 'Philosophy',
    imageUrl: 'https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=300&h=400&fit=crop',
  },
  {
    id: '6',
    title: 'The Four Agreements',
    author: 'Don Miguel Ruiz',
    description: 'Ancient Toltec wisdom offering a powerful code of conduct for personal freedom and happiness.',
    category: 'Spirituality',
    imageUrl: 'https://images.unsplash.com/photo-1519682337058-a94d519337bc?w=300&h=400&fit=crop',
  },
  {
    id: '7',
    title: 'A New Earth',
    author: 'Eckhart Tolle',
    description: 'Awakening to your life\'s purpose and transcending ego-based consciousness.',
    category: 'Spirituality',
    imageUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=400&fit=crop',
  },
  {
    id: '8',
    title: 'The Untethered Soul',
    author: 'Michael A. Singer',
    description: 'A journey beyond yourself to discover inner peace and freedom from limiting thoughts.',
    category: 'Spirituality',
    imageUrl: 'https://images.unsplash.com/photo-1476275466078-4007374efbbe?w=300&h=400&fit=crop',
  },
  {
    id: '9',
    title: 'The Seat of the Soul',
    author: 'Gary Zukav',
    description: 'An exploration of authentic power and the evolution of human consciousness.',
    category: 'Spirituality',
    imageUrl: 'https://images.unsplash.com/photo-1495640388908-05fa85288e61?w=300&h=400&fit=crop',
  },
  {
    id: '10',
    title: 'Think and Grow Rich',
    author: 'Napoleon Hill',
    description: 'Classic principles of success and wealth-building through the power of thought.',
    category: 'Self-Improvement',
    imageUrl: 'https://images.unsplash.com/photo-1589829085413-56de8ae18c73?w=300&h=400&fit=crop',
  },
  {
    id: '11',
    title: 'The 7 Habits of Highly Effective People',
    author: 'Stephen R. Covey',
    description: 'A principle-centered approach for solving personal and professional problems.',
    category: 'Self-Improvement',
    imageUrl: 'https://images.unsplash.com/photo-1532012197267-da84d127e765?w=300&h=400&fit=crop',
  },
  {
    id: '12',
    title: 'Deep Work',
    author: 'Cal Newport',
    description: 'Rules for focused success in a distracted world through concentrated effort.',
    category: 'Self-Improvement',
    imageUrl: 'https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?w=300&h=400&fit=crop',
  },
  {
    id: '13',
    title: 'Mindset',
    author: 'Carol S. Dweck',
    description: 'How adopting a growth mindset can transform your life and potential.',
    category: 'Self-Improvement',
    imageUrl: 'https://images.unsplash.com/photo-1497633762265-9d179a990aa6?w=300&h=400&fit=crop',
  },
  {
    id: '14',
    title: 'The Republic',
    author: 'Plato',
    description: 'A foundational work on justice, governance, and the ideal society.',
    category: 'Philosophy',
    imageUrl: 'https://images.unsplash.com/photo-1509266272358-7701da638078?w=300&h=400&fit=crop',
  },
  {
    id: '15',
    title: 'Thus Spoke Zarathustra',
    author: 'Friedrich Nietzsche',
    description: 'A philosophical novel exploring themes of eternal recurrence and the will to power.',
    category: 'Philosophy',
    imageUrl: 'https://images.unsplash.com/photo-1512820790803-83ca734da794?w=300&h=400&fit=crop',
  },
  {
    id: '16',
    title: 'Being and Time',
    author: 'Martin Heidegger',
    description: 'A fundamental exploration of the nature of being and human existence.',
    category: 'Philosophy',
    imageUrl: 'https://images.unsplash.com/photo-1516979187457-637abb4f9353?w=300&h=400&fit=crop',
  },
  {
    id: '17',
    title: 'Letters from a Stoic',
    author: 'Seneca',
    description: 'Practical wisdom on living well through ancient Stoic philosophy.',
    category: 'Philosophy',
    imageUrl: 'https://images.unsplash.com/photo-1491841550275-ad7854e35ca6?w=300&h=400&fit=crop',
  },
  {
    id: '18',
    title: 'Siddhartha',
    author: 'Hermann Hesse',
    description: 'A spiritual journey of self-discovery in ancient India.',
    category: 'Fiction',
    imageUrl: 'https://images.unsplash.com/photo-1495446815901-a7297e633e8d?w=300&h=400&fit=crop',
  },
  {
    id: '19',
    title: 'The Little Prince',
    author: 'Antoine de Saint-Exupéry',
    description: 'A poetic tale about love, loss, and what truly matters in life.',
    category: 'Fiction',
    imageUrl: 'https://images.unsplash.com/photo-1474932430478-367dbb6832c1?w=300&h=400&fit=crop',
  },
  {
    id: '20',
    title: 'Jonathan Livingston Seagull',
    author: 'Richard Bach',
    description: 'An inspirational fable about a seagull who seeks meaning beyond the ordinary.',
    category: 'Fiction',
    imageUrl: 'https://images.unsplash.com/photo-1518495973542-4542c06a5843?w=300&h=400&fit=crop',
  },
  {
    id: '21',
    title: 'The Prophet',
    author: 'Kahlil Gibran',
    description: 'Poetic essays on life, love, freedom, and the human condition.',
    category: 'Fiction',
    imageUrl: 'https://images.unsplash.com/photo-1476275466078-4007374efbbe?w=300&h=400&fit=crop',
  },
];

export const references: Reference[] = [
  {
    id: '1',
    title: 'The School of Life',
    type: 'website',
    description: 'A global organization dedicated to developing emotional intelligence through philosophy and culture.',
    link: 'https://www.theschooloflife.com',
  },
  {
    id: '2',
    title: 'On Being Podcast',
    type: 'podcast',
    description: 'Deep conversations about the big questions of meaning, faith, ethics, and ideas.',
    link: 'https://onbeing.org',
  },
  {
    id: '3',
    title: 'Brain Pickings',
    type: 'website',
    description: 'An inventory of cross-disciplinary interestingness, spanning art, science, philosophy, and more.',
    link: 'https://www.themarginalian.org',
  },
  {
    id: '4',
    title: 'TED Talks: Personal Growth',
    type: 'video',
    description: 'Inspiring talks from experts on personal development, mindfulness, and living a fulfilling life.',
    link: 'https://www.ted.com/topics/personal+growth',
  },
  {
    id: '5',
    title: 'Zen Habits',
    type: 'article',
    description: 'A blog about finding simplicity and mindfulness in the daily chaos of our lives.',
    link: 'https://zenhabits.net',
  },
  {
    id: '6',
    title: 'Daily Stoic',
    type: 'website',
    description: 'Bringing ancient stoic wisdom to everyday modern life through articles and resources.',
    link: 'https://dailystoic.com',
  },
];
