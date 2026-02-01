export type QuoteCategory =
  | "motivation"
  | "love"
  | "life"
  | "healing"
  | "success"
  | "wisdom";

export interface Quote {
  id: string;
  text: string;
  author: string;
  category: QuoteCategory;
  featured?: boolean;
}

export const quotes: Quote[] = [
  {
    id: "1",
    text: "The only way to do great work is to love what you do.",
    author: "Steve Jobs",
    category: "motivation",
    featured: true,
  },
  {
    id: "2",
    text: "In the end, we only regret the chances we didn't take.",
    author: "Lewis Carroll",
    category: "life",
  },
  {
    id: "3",
    text: "Love is not about how many days, months, or years you have been together. Love is about how much you love each other every single day.",
    author: "Unknown",
    category: "love",
  },
  {
    id: "4",
    text: "Healing takes time, and asking for help is a courageous step.",
    author: "Mariska Hargitay",
    category: "healing",
  },
  {
    id: "5",
    text: "Success is not final, failure is not fatal: it is the courage to continue that counts.",
    author: "Winston Churchill",
    category: "success",
  },
  {
    id: "6",
    text: "The only true wisdom is in knowing you know nothing.",
    author: "Socrates",
    category: "wisdom",
  },
  {
    id: "7",
    text: "Your time is limited, don't waste it living someone else's life.",
    author: "Steve Jobs",
    category: "motivation",
  },
  {
    id: "8",
    text: "The best thing to hold onto in life is each other.",
    author: "Audrey Hepburn",
    category: "love",
  },
  {
    id: "9",
    text: "Life is what happens when you're busy making other plans.",
    author: "John Lennon",
    category: "life",
  },
  {
    id: "10",
    text: "The wound is the place where the Light enters you.",
    author: "Rumi",
    category: "healing",
  },
  {
    id: "11",
    text: "The secret of success is to do the common thing uncommonly well.",
    author: "John D. Rockefeller",
    category: "success",
  },
  {
    id: "12",
    text: "Knowing yourself is the beginning of all wisdom.",
    author: "Aristotle",
    category: "wisdom",
  },
  {
    id: "13",
    text: "Believe you can and you're halfway there.",
    author: "Theodore Roosevelt",
    category: "motivation",
  },
  {
    id: "14",
    text: "The greatest glory in living lies not in never falling, but in rising every time we fall.",
    author: "Nelson Mandela",
    category: "motivation",
  },
  {
    id: "15",
    text: "It does not matter how slowly you go as long as you do not stop.",
    author: "Confucius",
    category: "motivation",
  },
  {
    id: "16",
    text: "Where there is love there is life.",
    author: "Mahatma Gandhi",
    category: "love",
  },
  {
    id: "17",
    text: "Being deeply loved by someone gives you strength, while loving someone deeply gives you courage.",
    author: "Lao Tzu",
    category: "love",
  },
  {
    id: "18",
    text: "The heart was made to be broken.",
    author: "Oscar Wilde",
    category: "love",
  },
  {
    id: "19",
    text: "Life is really simple, but we insist on making it complicated.",
    author: "Confucius",
    category: "life",
  },
  {
    id: "20",
    text: "The purpose of our lives is to be happy.",
    author: "Dalai Lama",
    category: "life",
  },
  {
    id: "21",
    text: "Get busy living or get busy dying.",
    author: "Stephen King",
    category: "life",
  },
  {
    id: "22",
    text: "New beginnings are often disguised as painful endings.",
    author: "Lao Tzu",
    category: "healing",
  },
  {
    id: "23",
    text: "What lies behind us and what lies before us are tiny matters compared to what lies within us.",
    author: "Ralph Waldo Emerson",
    category: "healing",
  },
  {
    id: "24",
    text: "Stars can't shine without darkness.",
    author: "D.H. Sidebottom",
    category: "healing",
  },
  {
    id: "25",
    text: "Success usually comes to those who are too busy to be looking for it.",
    author: "Henry David Thoreau",
    category: "success",
  },
  {
    id: "26",
    text: "Don't be afraid to give up the good to go for the great.",
    author: "John D. Rockefeller",
    category: "success",
  },
  {
    id: "27",
    text: "I find that the harder I work, the more luck I seem to have.",
    author: "Thomas Jefferson",
    category: "success",
  },
  {
    id: "28",
    text: "The only source of knowledge is experience.",
    author: "Albert Einstein",
    category: "wisdom",
  },
  {
    id: "29",
    text: "Turn your wounds into wisdom.",
    author: "Oprah Winfrey",
    category: "wisdom",
  },
  {
    id: "30",
    text: "The fool doth think he is wise, but the wise man knows himself to be a fool.",
    author: "William Shakespeare",
    category: "wisdom",
  },
  {
    id: "31",
    text: "Push yourself, because no one else is going to do it for you.",
    author: "Unknown",
    category: "motivation",
  },
  {
    id: "32",
    text: "Dream big and dare to fail.",
    author: "Norman Vaughan",
    category: "success",
  },
  {
    id: "33",
    text: "Every day may not be good, but there is something good in every day.",
    author: "Unknown",
    category: "life",
  },
  {
    id: "34",
    text: "Love recognizes no barriers.",
    author: "Maya Angelou",
    category: "love",
  },
  {
    id: "35",
    text: "Your healing does not have to look like anyone else's.",
    author: "Unknown",
    category: "healing",
  },
  {
    id: "36",
    text: "Happiness depends upon ourselves.",
    author: "Aristotle",
    category: "life",
  },
  {
    id: "37",
    text: "Great things never come from comfort zones.",
    author: "Unknown",
    category: "success",
  },
  {
    id: "38",
    text: "Wisdom begins in wonder.",
    author: "Socrates",
    category: "wisdom",
  },
  {
    id: "39",
    text: "Fall in love with taking care of yourself.",
    author: "Unknown",
    category: "healing",
  },
  {
    id: "40",
    text: "What we think, we become.",
    author: "Buddha",
    category: "wisdom",
  },
  {
    id: "41",
    text: "Act as if what you do makes a difference. It does.",
    author: "William James",
    category: "motivation",
  },
  {
    id: "42",
    text: "Do what you love and you will never work a day in your life.",
    author: "Confucius",
    category: "success",
  },
  {
    id: "43",
    text: "Life becomes easier when you learn to accept the apology you never got.",
    author: "Unknown",
    category: "healing",
  },
  {
    id: "44",
    text: "Love yourself first and everything else falls into line.",
    author: "Lucille Ball",
    category: "love",
  },
  {
    id: "45",
    text: "The best way out is always through.",
    author: "Robert Frost",
    category: "healing",
  },
  {
    id: "46",
    text: "Don't watch the clock; do what it does. Keep going.",
    author: "Sam Levenson",
    category: "motivation",
  },
  {
    id: "47",
    text: "A loving heart is the truest wisdom.",
    author: "Charles Dickens",
    category: "wisdom",
  },
  {
    id: "48",
    text: "Life is either a daring adventure or nothing at all.",
    author: "Helen Keller",
    category: "life",
  },
  {
    id: "49",
    text: "Success is walking from failure to failure with no loss of enthusiasm.",
    author: "Winston Churchill",
    category: "success",
  },
  {
    id: "50",
    text: "The greatest healing therapy is friendship and love.",
    author: "Hubert H. Humphrey",
    category: "healing",
  },
  {
    id: "51",
    text: "You are enough just as you are.",
    author: "Meghan Markle",
    category: "healing",
  },
  {
    id: "52",
    text: "Life isn't about finding yourself. It's about creating yourself.",
    author: "George Bernard Shaw",
    category: "life",
  },
  {
    id: "53",
    text: "Where there is kindness, there is goodness.",
    author: "Unknown",
    category: "wisdom",
  },
  {
    id: "54",
    text: "The future belongs to those who believe in the beauty of their dreams.",
    author: "Eleanor Roosevelt",
    category: "motivation",
  },
  {
    id: "55",
    text: "True love stories never have endings.",
    author: "Richard Bach",
    category: "love",
  },
  {
    id: "56",
    text: "Hardships often prepare ordinary people for an extraordinary destiny.",
    author: "C.S. Lewis",
    category: "success",
  },
  {
    id: "57",
    text: "Peace comes from within. Do not seek it without.",
    author: "Buddha",
    category: "wisdom",
  },
  {
    id: "58",
    text: "Life is short, and it is up to you to make it sweet.",
    author: "Sarah Louise Delany",
    category: "life",
  },
  {
    id: "59",
    text: "Healing begins the moment you feel heard.",
    author: "Unknown",
    category: "healing",
  },
  {
    id: "60",
    text: "Success doesn't come to you, you go to it.",
    author: "Marva Collins",
    category: "success",
  },
  {
    id: "61",
    text: "Love is when the happiness of another person is more important than your own.",
    author: "H. Jackson Brown Jr.",
    category: "love",
  },
  {
    id: "62",
    text: "Your limitation—it's only your imagination.",
    author: "Unknown",
    category: "motivation",
  },
  {
    id: "63",
    text: "Life is a journey, not a destination.",
    author: "Ralph Waldo Emerson",
    category: "life",
  },
  {
    id: "64",
    text: "Healing is not linear.",
    author: "Unknown",
    category: "healing",
  },
  {
    id: "65",
    text: "Knowledge speaks, but wisdom listens.",
    author: "Jimi Hendrix",
    category: "wisdom",
  },
  {
    id: "66",
    text: "The way to get started is to quit talking and begin doing.",
    author: "Walt Disney",
    category: "motivation",
  },
  {
    id: "67",
    text: "Love cures people — both the ones who give it and the ones who receive it.",
    author: "Karl Menninger",
    category: "love",
  },
  {
    id: "68",
    text: "Success is liking yourself, liking what you do, and liking how you do it.",
    author: "Maya Angelou",
    category: "success",
  },
  {
    id: "69",
    text: "Life is 10% what happens to us and 90% how we react to it.",
    author: "Charles R. Swindoll",
    category: "life",
  },
  {
    id: "70",
    text: "Wisdom is the reward you get for a lifetime of listening.",
    author: "Doug Larson",
    category: "wisdom",
  },
  {
    id: "71",
    text: "Actions speaks louder than words..",
    author: "unknown",
    category: "wisdom",
  },
];

export const categories: {
  id: QuoteCategory;
  label: string;
  description: string;
}[] = [
  {
    id: "motivation",
    label: "Motivation",
    description: "Fuel your drive and ambition",
  },
  { id: "love", label: "Love", description: "Words that touch the heart" },
  { id: "life", label: "Life", description: "Reflections on the journey" },
  { id: "healing", label: "Healing", description: "Comfort for the soul" },
  { id: "success", label: "Success", description: "Pathways to achievement" },
  { id: "wisdom", label: "Wisdom", description: "Timeless insights" },
];

export const getQuotesByCategory = (category: QuoteCategory): Quote[] => {
  return quotes.filter((quote) => quote.category === category);
};

export const getFeaturedQuote = (): Quote => {
  return quotes.find((quote) => quote.featured) || quotes[0];
};

export const getQuoteById = (id: string): Quote | undefined => {
  return quotes.find((quote) => quote.id === id);
};
