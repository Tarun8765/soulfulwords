import { QuoteCategory } from './quotes';

export interface Blog {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  category: QuoteCategory;
  author: string;
  date: string;
  readTime: number;
  image?: string;
}

export const blogs: Blog[] = [
  {
    id: '1',
    title: "The Art of Starting Over: Embracing New Beginnings",
    excerpt: "Every ending carries within it the seeds of a new beginning. Learn how to embrace change and find strength in starting fresh.",
    content: `
      <p>There's a peculiar beauty in the moment when everything falls apart. Not because destruction is beautiful, but because within the rubble lies the foundation for something new, something perhaps more authentic than what came before.</p>
      
      <h2>Why New Beginnings Terrify Us</h2>
      
      <p>We cling to the familiar like shipwrecked sailors to driftwood. The known, even when painful, feels safer than the vast unknown stretching before us. This is human nature—our brains are wired to seek patterns, predictability, safety.</p>
      
      <blockquote>"Every moment is a fresh beginning." — T.S. Eliot</blockquote>
      
      <p>But here's what we often forget: the life you're living now was once your new beginning. The job that feels routine, the relationships that feel comfortable, the city that feels like home—all of these were once terrifying unknowns that you somehow navigated.</p>
      
      <h2>The Practice of Letting Go</h2>
      
      <p>Starting over doesn't mean erasing the past. It means integrating its lessons while refusing to be bound by its limitations. Think of it as carrying the wisdom forward while leaving the weight behind.</p>
      
      <p>The practice is simple but not easy: acknowledge what was, accept what is, and open yourself to what could be. This isn't positive thinking—it's realistic optimism grounded in the understanding that change is the only constant.</p>
    `,
    category: 'life',
    author: 'Sarah Mitchell',
    date: '2026-01-10',
    readTime: 6,
  },
  {
    id: '2',
    title: "Finding Your Inner Compass: A Guide to Self-Discovery",
    excerpt: "In a world full of noise, learning to listen to your inner voice becomes the most valuable skill you can develop.",
    content: `
      <p>We spend years learning to read, write, and calculate. We study history, science, and art. Yet the most important subject—ourselves—is often left unexplored until crisis forces the examination.</p>
      
      <h2>The Noise That Drowns Us</h2>
      
      <p>Every day, we're bombarded with opinions about who we should be, what we should want, and how we should live. Social media amplifies voices that may never have reached us before, each one offering a different vision of the "right" way to exist.</p>
      
      <blockquote>"Knowing yourself is the beginning of all wisdom." — Aristotle</blockquote>
      
      <p>The result? Many of us have become strangers to ourselves. We know our preferences (what we like to eat, watch, wear) but not our values. We know our routines but not our purpose.</p>
      
      <h2>Rediscovering Your Voice</h2>
      
      <p>Self-discovery isn't about finding something hidden. It's about remembering what was always there, beneath the layers of expectation and performance. Start with questions: What makes you lose track of time? What injustice makes your blood boil? What would you do if no one was watching?</p>
    `,
    category: 'wisdom',
    author: 'Marcus Chen',
    date: '2026-01-08',
    readTime: 5,
  },
  {
    id: '3',
    title: "The Gentle Power of Self-Compassion",
    excerpt: "We're often our own harshest critics. Discover how treating yourself with kindness can transform your healing journey.",
    content: `
      <p>Consider how you speak to yourself when you make a mistake. Now imagine speaking to a friend the same way. The contrast is often jarring—and revealing.</p>
      
      <h2>The Myth of Tough Love</h2>
      
      <p>Somewhere along the way, many of us learned that being hard on ourselves was necessary for growth. That self-criticism was motivation. That acknowledging our struggles was weakness.</p>
      
      <blockquote>"You yourself, as much as anybody in the entire universe, deserve your love and affection." — Buddha</blockquote>
      
      <p>Research tells a different story. Self-compassion—treating ourselves with the same kindness we'd offer a good friend—actually leads to greater resilience, motivation, and wellbeing.</p>
      
      <h2>The Practice of Kindness</h2>
      
      <p>Self-compassion has three components: mindfulness (acknowledging pain without drowning in it), common humanity (recognizing that suffering is part of the shared human experience), and self-kindness (responding to pain with warmth rather than harsh judgment).</p>
    `,
    category: 'healing',
    author: 'Dr. Emily Roberts',
    date: '2026-01-05',
    readTime: 7,
  },
  {
    id: '4',
    title: "Building Momentum: Small Steps to Big Changes",
    excerpt: "Great achievements aren't born from grand gestures but from consistent, purposeful action. Learn the science of sustainable progress.",
    content: `
      <p>We romanticize transformation. The overnight success, the sudden epiphany, the dramatic before-and-after. But the truth of lasting change is far less glamorous—and far more accessible.</p>
      
      <h2>The Compound Effect</h2>
      
      <p>Tiny choices, repeated consistently, create massive outcomes. A 1% improvement each day leads to being 37 times better after a year. The math of gradual progress is astounding when you step back and see the full picture.</p>
      
      <blockquote>"Success is the sum of small efforts, repeated day in and day out." — Robert Collier</blockquote>
      
      <p>This works in reverse too, which is why gradual decline often goes unnoticed until it's severe. The principle is neutral—it simply amplifies whatever direction we're moving.</p>
      
      <h2>Starting Where You Are</h2>
      
      <p>The best time to plant a tree was twenty years ago. The second best time is now. Wherever you are, whatever you have, begin there. The smallest step in the right direction is infinitely more valuable than the grandest plan never executed.</p>
    `,
    category: 'success',
    author: 'James Wilson',
    date: '2026-01-03',
    readTime: 5,
  },
  {
    id: '5',
    title: "Love Languages: Understanding How We Give and Receive",
    excerpt: "Learning to speak your partner's love language can transform your relationship from surviving to thriving.",
    content: `
      <p>We all express and receive love differently. What feels like profound affection to one person might barely register for another. Understanding these differences is key to connection.</p>
      
      <h2>The Five Languages</h2>
      
      <p>Words of affirmation, quality time, receiving gifts, acts of service, physical touch—these are the primary ways humans express love. Most of us have a dominant language, with one or two secondary ones.</p>
      
      <blockquote>"The greatest thing you'll ever learn is just to love and be loved in return." — Eden Ahbez</blockquote>
      
      <p>The challenge? We tend to express love in our own language, not our partner's. The result is two people genuinely trying to love each other but somehow missing the mark.</p>
      
      <h2>Becoming Fluent</h2>
      
      <p>Learning your partner's love language requires curiosity and attention. Watch what they complain about most—that's often a clue to what they value. Notice what they request. Observe how they express love to others. These patterns reveal their primary language.</p>
    `,
    category: 'love',
    author: 'Anna Thompson',
    date: '2025-12-28',
    readTime: 6,
  },
  {
    id: '6',
    title: "The Morning Mindset: Setting the Tone for Your Day",
    excerpt: "How you spend your first hour shapes the other twenty-three. Discover morning practices that energize and inspire.",
    content: `
      <p>Before the world gets its hands on you—before emails, news, and demands flood in—there's a window. A precious hour (or even minutes) that belongs entirely to you. How you use it matters more than you might think.</p>
      
      <h2>Why Mornings Matter</h2>
      
      <p>Willpower is like a battery—full in the morning, depleted by evening. The choices you make when that battery is charged create the foundation for everything that follows.</p>
      
      <blockquote>"Every morning brings new potential, but if you dwell on the misfortunes of the day before, you tend to overlook tremendous opportunities." — Harvey Mackay</blockquote>
      
      <p>This doesn't mean you need to wake at 5 AM (though some swear by it). It means being intentional about whatever morning time you have, rather than letting it slip away to reactive scrolling.</p>
      
      <h2>Designing Your Ritual</h2>
      
      <p>The best morning routine is one you'll actually do. Start small—perhaps five minutes of stillness before reaching for your phone. Add elements gradually: movement, reading, journaling, intention-setting. The goal is to begin the day on your terms.</p>
    `,
    category: 'motivation',
    author: 'David Park',
    date: '2025-12-25',
    readTime: 5,
  },
];

export const getBlogsByCategory = (category: QuoteCategory): Blog[] => {
  return blogs.filter(blog => blog.category === category);
};

export const getBlogById = (id: string): Blog | undefined => {
  return blogs.find(blog => blog.id === id);
};

export const getLatestBlogs = (count: number = 3): Blog[] => {
  return [...blogs].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()).slice(0, count);
};
