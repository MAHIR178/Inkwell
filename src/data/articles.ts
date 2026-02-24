import { Article } from "@/types/blog";

export const articles: Article[] = [
  {
    id: "1",
    title: "The Art of Mindful Programming: How Slowing Down Makes You Faster",
    excerpt: "In a world obsessed with speed, the most productive developers are the ones who take their time. Here's why mindful coding leads to better software.",
    content: `
<p>There's a paradox at the heart of software development that few people talk about. The fastest way to ship great software is to slow down.</p>

<p>I know what you're thinking. In an industry that celebrates "move fast and break things," suggesting that developers slow down sounds almost heretical. But hear me out.</p>

<h2>The Cost of Speed</h2>

<p>When we rush through code, we accumulate what's known as technical debt. It's like taking out a loan against your future productivity. Every shortcut you take today becomes a tax on every change you make tomorrow.</p>

<blockquote>The best code is the code you take time to think about before you write it.</blockquote>

<p>I've seen teams spend weeks debugging issues that could have been prevented with an hour of thoughtful design. I've watched organizations rewrite entire systems because the original was built in a rush.</p>

<h2>The Practice of Mindful Coding</h2>

<p>Mindful programming isn't about being slow. It's about being intentional. Before you write a single line of code, ask yourself: What problem am I solving? What's the simplest solution? What could go wrong?</p>

<p>Take time to read the existing code. Understand the patterns that are already in place. Respect the architecture that came before you, even if you plan to change it.</p>

<p>Write tests first, not because it's a rule, but because it forces you to think about what your code should do before you think about how it should do it.</p>

<h2>The Results Speak</h2>

<p>Teams that practice mindful programming ship fewer bugs, have less burnout, and paradoxically, often deliver features faster than teams that rush. The secret is that they spend less time fixing mistakes and more time building new things.</p>

<p>So next time you feel the pressure to move fast, remember: the fastest path to great software is the thoughtful one.</p>
    `,
    author: {
      name: "Sarah Chen",
      avatar: "https://images.unsplash.com/photo-1746792613213-c154e2891449?auto=format&fit=crop&w=1200&h=600&q=80",
      bio: "Senior engineer & writer. Exploring the human side of technology.",
    },
    coverImage: "https://images.unsplash.com/photo-1515879218367-8466d910auj7?w=800&h=400&fit=crop",
    category: "Programming",
    tags: ["Mindfulness", "Productivity", "Software Engineering"],
    readTime: 6,
    publishedAt: "Feb 18, 2026",
    featured: true,
  },
  {
    id: "2",
    title: "Design Systems Are Gardens, Not Buildings",
    excerpt: "Why the best design systems evolve organically and how treating them like living things leads to better products.",
    content: `
<p>We've been thinking about design systems wrong. We approach them like architecture — blueprint everything upfront, build it once, done. But the best design systems work more like gardens.</p>

<p>A garden needs constant tending. You plant seeds, water them, prune what doesn't work, and let what thrives grow naturally. Design systems are the same.</p>

<h2>The Problem with Over-Engineering</h2>

<p>I've seen teams spend months building comprehensive design systems before writing a single line of product code. They document every possible variant, every edge case, every interaction pattern. And then reality hits.</p>

<blockquote>A design system that tries to predict every need will satisfy none of them well.</blockquote>

<p>The products evolve in ways nobody predicted. New patterns emerge that don't fit the rigid structure. The design system becomes a constraint rather than an enabler.</p>

<h2>Growing a Design System</h2>

<p>Start small. Build the components you need right now, and only the variants you're actually using. When a new need arises, grow the system to accommodate it.</p>

<p>Document patterns as they emerge from real usage, not from theoretical exercises. Let your designers and developers contribute components organically.</p>

<p>The result is a design system that feels natural to use, because it grew from the actual needs of your product and team.</p>
    `,
    author: {
      name: "Marcus Webb",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face",
      bio: "Design systems lead. Bridging design and engineering.",
    },
    coverImage: "https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=800&h=400&fit=crop",
    category: "Design",
    tags: ["Design Systems", "Product Design", "UX"],
    readTime: 5,
    publishedAt: "Feb 15, 2026",
    featured: true,
  },
  {
    id: "3",
    title: "Why I Stopped Using Social Media and Started a Blog",
    excerpt: "Trading likes for long-form thinking changed how I see the world and communicate my ideas.",
    content: `
<p>Six months ago, I deleted my social media accounts. All of them. Twitter, Instagram, LinkedIn — gone. Instead, I started writing here.</p>

<p>The change has been profound. Not in some dramatic, life-altering way, but in the quiet, steady way that real change usually happens.</p>

<h2>The Attention Economy</h2>

<p>Social media is designed to fragment your attention. Every scroll, every notification, every hot take trains your brain to think in smaller and smaller units. After years of this, I realized I had lost the ability to think deeply about anything.</p>

<blockquote>Long-form writing is weight training for your mind.</blockquote>

<p>Writing a blog post forces you to develop an idea fully. You can't hide behind a clever quip or a provocative headline. You have to actually think through what you believe and why.</p>

<h2>Quality Over Quantity</h2>

<p>On social media, I posted multiple times a day. Most of it was noise. Now I write one or two pieces a month, and each one represents hours of thinking, drafting, and refining.</p>

<p>The feedback is different too. Instead of likes and retweets, I get thoughtful emails from readers. Real conversations, not performance.</p>
    `,
    author: {
      name: "Elena Torres",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face",
      bio: "Writer & former social media strategist. Now just a thinker.",
    },
    coverImage: "https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=800&h=400&fit=crop",
    category: "Culture",
    tags: ["Social Media", "Writing", "Digital Wellness"],
    readTime: 4,
    publishedAt: "Feb 12, 2026",
    featured: false,
  },
  {
    id: "4",
    title: "The Unreasonable Effectiveness of Walking Meetings",
    excerpt: "How replacing conference rooms with sidewalks transformed our team's creativity and decision-making.",
    content: `
<p>Last year, our team made a simple change: we replaced half of our meetings with walks. The results were remarkable.</p>

<h2>Why Walking Works</h2>

<p>Stanford research shows that walking increases creative output by an average of 60%. But it's not just about creativity — walking meetings change the social dynamics of a conversation.</p>

<p>When you walk side by side, there's less hierarchy. No one sits at the head of the table. Eye contact is occasional and natural, which makes difficult conversations easier.</p>

<blockquote>The best ideas don't come from conference rooms. They come from movement.</blockquote>

<p>Walking also creates a natural time constraint. You walk for 20-30 minutes and then you're done. No more meetings that drag on for an hour because everyone's too polite to leave.</p>
    `,
    author: {
      name: "James Park",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face",
      bio: "Product manager & team culture enthusiast.",
    },
    coverImage: "https://images.unsplash.com/photo-1476480862126-209bfaa8edc8?w=800&h=400&fit=crop",
    category: "Productivity",
    tags: ["Meetings", "Creativity", "Workplace"],
    readTime: 3,
    publishedAt: "Feb 10, 2026",
    featured: false,
  },
  {
    id: "5",
    title: "Learning to Code at 40: What Nobody Tells You",
    excerpt: "It's not about age. It's about unlearning the fear of looking foolish.",
    content: `
<p>I wrote my first line of code at 40. Two years later, I'm a working developer. Here's what I wish someone had told me at the start.</p>

<h2>The Real Barrier Isn't Age</h2>

<p>Everyone warned me about the difficulty curve, the math, the competition from younger developers. None of that was the real challenge.</p>

<p>The hardest part was being willing to be bad at something again. At 40, you're used to being competent. You've built a career on being good at things. Suddenly being a complete beginner is humbling in ways that go beyond the technical.</p>

<blockquote>The willingness to be a beginner is the most underrated skill in programming.</blockquote>

<h2>What Age Actually Gives You</h2>

<p>But here's the thing nobody talks about: age is actually an advantage. Decades of work experience taught me how to learn, how to ask good questions, and how to persist when things get hard.</p>

<p>I understand business problems in ways that fresh graduates don't. I can translate between stakeholders and developers because I've been on both sides.</p>
    `,
    author: {
      name: "Diana Okafor",
      avatar: "https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?w=100&h=100&fit=crop&crop=face",
      bio: "Career changer. Self-taught developer. Proof that it's never too late.",
    },
    coverImage: "https://images.unsplash.com/photo-1484417894907-623942c8ee29?w=800&h=400&fit=crop",
    category: "Technology",
    tags: ["Career Change", "Learning", "Coding"],
    readTime: 5,
    publishedAt: "Feb 8, 2026",
    featured: false,
  },
  {
    id: "6",
    title: "The Future of Remote Work Is Asynchronous",
    excerpt: "Real-time collaboration is overrated. The best remote teams communicate thoughtfully, not constantly.",
    content: `
<p>We recreated the office online and called it remote work. Slack replaced hallway conversations. Zoom replaced conference rooms. But we kept the same always-on, interrupt-driven culture.</p>

<p>That's not remote work. That's the office with worse ergonomics.</p>

<h2>The Async Advantage</h2>

<p>True remote work is asynchronous. It means trusting people to do their work without watching them do it. It means replacing meetings with documents, replacing instant messages with thoughtful memos.</p>

<blockquote>The best remote work happens when nobody is working at the same time.</blockquote>

<p>Async communication is better communication. When you have to write down your thoughts clearly enough for someone to understand them hours later, you think more carefully about what you're saying.</p>
    `,
    author: {
      name: "Sarah Chen",
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop&crop=face",
      bio: "Senior engineer & writer. Exploring the human side of technology.",
    },
    coverImage: "https://images.unsplash.com/photo-1521898284481-a5ec348cb555?w=800&h=400&fit=crop",
    category: "Work",
    tags: ["Remote Work", "Async", "Communication"],
    readTime: 4,
    publishedAt: "Feb 5, 2026",
    featured: false,
  },
];

export const categories = ["All", "Programming", "Design", "Culture", "Productivity", "Technology", "Work"];
