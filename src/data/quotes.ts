export type QuoteCategory = 'motivation' | 'love' | 'life' | 'healing' | 'success' | 'wisdom';

export interface Quote {
  id: string;
  text: string;
  author: string;
  category: QuoteCategory;
  featured?: boolean;
}

export const quotes: Quote[] = [
  {
    id: '1',
    text: "The only way to do great work is to love what you do.",
    author: "Steve Jobs",
    category: 'motivation',
    featured: true,
  },
  {
    id: '2',
    text: "In the end, we only regret the chances we didn't take.",
    author: "Lewis Carroll",
    category: 'life',
  },
  {
    id: '3',
    text: "Love is not about how many days, months, or years you have been together. Love is about how much you love each other every single day.",
    author: "Unknown",
    category: 'love',
  },
  {
    id: '4',
    text: "Healing takes time, and asking for help is a courageous step.",
    author: "Mariska Hargitay",
    category: 'healing',
  },
  {
    id: '5',
    text: "Success is not final, failure is not fatal: it is the courage to continue that counts.",
    author: "Winston Churchill",
    category: 'success',
  },
  {
    id: '6',
    text: "The only true wisdom is in knowing you know nothing.",
    author: "Socrates",
    category: 'wisdom',
  },
  {
    id: '7',
    text: "Your time is limited, don't waste it living someone else's life.",
    author: "Steve Jobs",
    category: 'motivation',
  },
  {
    id: '8',
    text: "The best thing to hold onto in life is each other.",
    author: "Audrey Hepburn",
    category: 'love',
  },
  {
    id: '9',
    text: "Life is what happens when you're busy making other plans.",
    author: "John Lennon",
    category: 'life',
  },
  {
    id: '10',
    text: "The wound is the place where the Light enters you.",
    author: "Rumi",
    category: 'healing',
  },
  {
    id: '11',
    text: "The secret of success is to do the common thing uncommonly well.",
    author: "John D. Rockefeller",
    category: 'success',
  },
  {
    id: '12',
    text: "Knowing yourself is the beginning of all wisdom.",
    author: "Aristotle",
    category: 'wisdom',
  },
  {
    id: '13',
    text: "Believe you can and you're halfway there.",
    author: "Theodore Roosevelt",
    category: 'motivation',
  },
  {
    id: '14',
    text: "The greatest glory in living lies not in never falling, but in rising every time we fall.",
    author: "Nelson Mandela",
    category: 'motivation',
  },
  {
    id: '15',
    text: "It does not matter how slowly you go as long as you do not stop.",
    author: "Confucius",
    category: 'motivation',
  },
  {
    id: '16',
    text: "Where there is love there is life.",
    author: "Mahatma Gandhi",
    category: 'love',
  },
  {
    id: '17',
    text: "Being deeply loved by someone gives you strength, while loving someone deeply gives you courage.",
    author: "Lao Tzu",
    category: 'love',
  },
  {
    id: '18',
    text: "The heart was made to be broken.",
    author: "Oscar Wilde",
    category: 'love',
  },
  {
    id: '19',
    text: "Life is really simple, but we insist on making it complicated.",
    author: "Confucius",
    category: 'life',
  },
  {
    id: '20',
    text: "The purpose of our lives is to be happy.",
    author: "Dalai Lama",
    category: 'life',
  },
  {
    id: '21',
    text: "Get busy living or get busy dying.",
    author: "Stephen King",
    category: 'life',
  },
  {
    id: '22',
    text: "New beginnings are often disguised as painful endings.",
    author: "Lao Tzu",
    category: 'healing',
  },
  {
    id: '23',
    text: "What lies behind us and what lies before us are tiny matters compared to what lies within us.",
    author: "Ralph Waldo Emerson",
    category: 'healing',
  },
  {
    id: '24',
    text: "Stars can't shine without darkness.",
    author: "D.H. Sidebottom",
    category: 'healing',
  },
  {
    id: '25',
    text: "Success usually comes to those who are too busy to be looking for it.",
    author: "Henry David Thoreau",
    category: 'success',
  },
  {
    id: '26',
    text: "Don't be afraid to give up the good to go for the great.",
    author: "John D. Rockefeller",
    category: 'success',
  },
  {
    id: '27',
    text: "I find that the harder I work, the more luck I seem to have.",
    author: "Thomas Jefferson",
    category: 'success',
  },
  {
    id: '28',
    text: "The only source of knowledge is experience.",
    author: "Albert Einstein",
    category: 'wisdom',
  },
  {
    id: '29',
    text: "Turn your wounds into wisdom.",
    author: "Oprah Winfrey",
    category: 'wisdom',
  },
  {
    id: '30',
    text: "The fool doth think he is wise, but the wise man knows himself to be a fool.",
    author: "William Shakespeare",
    category: 'wisdom',
  },
];

export const categories: { id: QuoteCategory; label: string; description: string }[] = [
  { id: 'motivation', label: 'Motivation', description: 'Fuel your drive and ambition' },
  { id: 'love', label: 'Love', description: 'Words that touch the heart' },
  { id: 'life', label: 'Life', description: 'Reflections on the journey' },
  { id: 'healing', label: 'Healing', description: 'Comfort for the soul' },
  { id: 'success', label: 'Success', description: 'Pathways to achievement' },
  { id: 'wisdom', label: 'Wisdom', description: 'Timeless insights' },
];

export const getQuotesByCategory = (category: QuoteCategory): Quote[] => {
  return quotes.filter(quote => quote.category === category);
};

export const getFeaturedQuote = (): Quote => {
  return quotes.find(quote => quote.featured) || quotes[0];
};

export const getQuoteById = (id: string): Quote | undefined => {
  return quotes.find(quote => quote.id === id);
};
