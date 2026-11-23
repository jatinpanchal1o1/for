export const demoProfiles = [
  {
    id: 'p1', name: 'Sofia', age: 27, city: 'Jaipur', distance: '3 km away', job: 'Product Designer',
    bio: 'Collecting little moments, trying new cafés, and finding beauty in everyday things. Looking for something genuine.',
    image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=1000&q=85',
    tags: ['Design', 'Coffee', 'Travel', 'Art'], online: true, verified: true, likesYou: true, compatibility: 96,
  },
  {
    id: 'p2', name: 'Aarav', age: 29, city: 'Jaipur', distance: '5 km away', job: 'Software Engineer',
    bio: 'Weekend hiker, amateur chef, and firm believer that the best conversations happen over chai.',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=1000&q=85',
    tags: ['Hiking', 'Cooking', 'Movies', 'Tech'], online: false, verified: true, likesYou: false, compatibility: 91,
  },
  {
    id: 'p3', name: 'Meera', age: 26, city: 'Jaipur', distance: '2 km away', job: 'Architect',
    bio: 'Architecture by day, pottery by night. I love slow Sundays, road trips, and conversations with depth.',
    image: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=1000&q=85',
    tags: ['Architecture', 'Pottery', 'Books', 'Road trips'], online: true, verified: true, likesYou: true, compatibility: 94,
  },
  {
    id: 'p4', name: 'Kabir', age: 30, city: 'Jaipur', distance: '7 km away', job: 'Founder',
    bio: 'Building things I care about. On the lookout for live music, mountain air, and a teammate for life.',
    image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=1000&q=85',
    tags: ['Startups', 'Music', 'Fitness', 'Mountains'], online: true, verified: false, likesYou: false, compatibility: 89,
  },
  {
    id: 'p5', name: 'Ananya', age: 28, city: 'Jaipur', distance: '4 km away', job: 'Marketing Strategist',
    bio: 'A curious mind with a camera roll full of sunsets. Here for kindness, laughter, and intentional dating.',
    image: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=1000&q=85',
    tags: ['Photography', 'Food', 'Dance', 'Travel'], online: false, verified: true, likesYou: false, compatibility: 92,
  },
  {
    id: 'p6', name: 'Rohan', age: 27, city: 'Jaipur', distance: '6 km away', job: 'Doctor',
    bio: 'Big on kindness and curiosity. I spend my free time cycling, reading and discovering hidden food spots.',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=1000&q=85',
    tags: ['Cycling', 'Reading', 'Food', 'Wellness'], online: true, verified: true, likesYou: true, compatibility: 90,
  },
];

export const initialConversations = [
  { id: 'p3', name: 'Meera', image: demoProfiles[2].image, lastMessage: 'That little bookshop sounds perfect ✨', time: '10:42 AM', unread: 2, online: true },
  { id: 'p5', name: 'Ananya', image: demoProfiles[4].image, lastMessage: 'I know a great place for that!', time: 'Yesterday', unread: 0, online: false },
];

export const initialMessages = {
  p3: [
    { id: 'm1', from: 'them', text: 'Hey! Your travel photos are lovely. Was that Udaipur?', time: '10:30 AM' },
    { id: 'm2', from: 'me', text: 'Thank you! Yes, a spontaneous weekend trip. Have you been?', time: '10:35 AM' },
    { id: 'm3', from: 'them', text: 'A couple of times. There is a tiny bookshop by the lake I adore.', time: '10:38 AM' },
    { id: 'm4', from: 'them', text: 'That little bookshop sounds perfect ✨', time: '10:42 AM' },
  ],
  p5: [
    { id: 'm5', from: 'them', text: 'I know a great place for that!', time: 'Yesterday' },
  ],
};
