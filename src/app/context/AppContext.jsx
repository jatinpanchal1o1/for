import { createContext, useContext, useEffect, useMemo, useState } from 'react';
import { demoProfiles, initialConversations, initialMessages } from '../data/demoData';

const AppContext = createContext(null);
const STORAGE_KEY = 'FOR-demo-state-v1';

const getInitialState = () => {
  if (typeof window === 'undefined') return {};
  try {
    return JSON.parse(window.localStorage.getItem(STORAGE_KEY) || '{}');
  } catch {
    return {};
  }
};

export function AppProvider({ children }) {
  const [saved] = useState(getInitialState);
  const [profiles] = useState(demoProfiles);
  const [likedIds, setLikedIds] = useState(saved.likedIds || []);
  const [passedIds, setPassedIds] = useState(saved.passedIds || []);
  const [matchIds, setMatchIds] = useState(saved.matchIds ?? ['p3', 'p5']);
  const [messages, setMessages] = useState(saved.messages || initialMessages);
  const [conversations, setConversations] = useState(saved.conversations || initialConversations);
  const [currentUser, setCurrentUser] = useState(saved.currentUser || {
    name: 'Alex Morgan', age: 27, city: 'Jaipur, Rajasthan', role: 'Product professional', gender: '', lookingFor: '', relationshipGoal: '',
    bio: 'Curious about people, places, and the stories that make us who we are.',
    image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=500&q=85',
    interests: ['Travel', 'Coffee', 'Design', 'Music'],
  });
  const [preferences, setPreferences] = useState(saved.preferences || { showOnline: true, profileVisible: true, notifications: true, distance: 25, ageRange: [24, 34] });

  useEffect(() => {
    try {
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify({ likedIds, passedIds, matchIds, messages, conversations, currentUser, preferences }));
    } catch {
      // The preview still works for the current session if browser storage is unavailable.
    }
  }, [likedIds, passedIds, matchIds, messages, conversations, currentUser, preferences]);

  const likeProfile = (id) => {
    const profile = profiles.find((item) => item.id === id);
    if (!profile) return;
    setLikedIds((current) => current.includes(id) ? current : [...current, id]);
    setPassedIds((current) => current.filter((item) => item !== id));
    if (profile.likesYou) {
      setMatchIds((current) => current.includes(id) ? current : [...current, id]);
      setConversations((current) => current.some((item) => item.id === id) ? current : [{
        id, name: profile.name, image: profile.image, lastMessage: 'You matched! Say hello 👋', time: 'Now', unread: 0, online: profile.online,
      }, ...current]);
      setMessages((current) => ({ ...current, [id]: current[id] || [{ id: `welcome-${id}`, from: 'them', text: `Hey! Glad we matched 😊`, time: 'Now' }] }));
    }
  };

  const passProfile = (id) => {
    setPassedIds((current) => current.includes(id) ? current : [...current, id]);
  };

  const sendMessage = (profileId, text) => {
    const body = text.trim();
    if (!body) return;
    setMessages((current) => ({
      ...current,
      [profileId]: [...(current[profileId] || []), { id: `msg-${Date.now()}`, from: 'me', text: body, time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }) }],
    }));
    const profile = profiles.find((item) => item.id === profileId);
    setConversations((current) => current.map((item) => item.id === profileId ? { ...item, lastMessage: body, time: 'Now' } : item));
    if (profile) setConversations((current) => current.some((item) => item.id === profileId) ? current : [{ id: profileId, name: profile.name, image: profile.image, lastMessage: body, time: 'Now', unread: 0, online: profile.online }, ...current]);
  };

  const value = useMemo(() => ({
    profiles, likedIds, passedIds, matchIds, messages, conversations, currentUser, preferences,
    setCurrentUser, setPreferences, likeProfile, passProfile, sendMessage,
  }), [profiles, likedIds, passedIds, matchIds, messages, conversations, currentUser, preferences]);

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}

export function useApp() {
  const context = useContext(AppContext);
  if (!context) throw new Error('useApp must be used inside AppProvider');
  return context;
}
