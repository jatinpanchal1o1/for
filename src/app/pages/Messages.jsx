import { useEffect, useRef, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { useApp } from '../context/AppContext';
import Avatar from '../components/Avatar';
import Icon from '../components/Icons';
import EmptyState from '../components/EmptyState';

export default function Messages() {
  const { conversations, messages, sendMessage, profiles, matchIds } = useApp();
  const [searchParams, setSearchParams] = useSearchParams();
  const [draft, setDraft] = useState('');
  const [search, setSearch] = useState('');
  const bottomRef = useRef(null);
  const availableConversations = conversations.filter((conversation) => matchIds.includes(conversation.id));
  const activeId = searchParams.get('id') || availableConversations[0]?.id || '';
  const active = availableConversations.find((conversation) => conversation.id === activeId);
  const activeProfile = profiles.find((person) => person.id === activeId);
  const thread = messages[activeId] || [];
  const filtered = availableConversations.filter((item) => item.name.toLowerCase().includes(search.toLowerCase()));

  useEffect(() => { bottomRef.current?.scrollIntoView({ behavior: 'smooth' }); }, [thread.length, activeId]);

  const handleSend = (event) => {
    event.preventDefault();
    if (!draft.trim() || !activeId) return;
    sendMessage(activeId, draft);
    setDraft('');
  };

  return <div className="messages-layout">
    <aside className="messages-people"><div className="messages-people-head"><div><h3>Conversations</h3><p>{availableConversations.length} connections</p></div><button className="icon-button" aria-label="More conversation options"><Icon name="more" /></button></div><label className="search-field messages-search"><Icon name="search" size={16} /><input value={search} onChange={(e) => setSearch(e.target.value)} placeholder="Search messages" /></label>
      <div className="conversation-list">{filtered.map((person) => <button key={person.id} className={`conversation-item ${activeId === person.id ? 'conversation-active' : ''}`} onClick={() => setSearchParams({ id: person.id })}><Avatar src={person.image} name={person.name} online={person.online} /><span className="conversation-copy"><strong>{person.name}</strong><small>{person.lastMessage}</small></span><span className="conversation-meta"><small>{person.time}</small>{person.unread > 0 && <span className="unread-count">{person.unread}</span>}</span></button>)}
        {!filtered.length && <p className="conversation-empty">No conversations found.</p>}
      </div><div className="messages-safety-note"><Icon name="shield" size={15} /><span>Only message people you've matched with. You can block or report anyone at any time.</span></div>
    </aside>
    {active ? <section className="chat-panel"><header className="chat-panel-head"><div className="chat-person"><Avatar src={active.image} name={active.name} online={active.online} /><div><strong>{active.name}</strong><small>{active.online ? 'Online now' : 'Your FOR connection'}</small></div></div><div className="chat-panel-actions"><button className="icon-button" aria-label="View profile"><Icon name="user" /></button><button className="icon-button" aria-label="More options"><Icon name="more" /></button></div></header>
      <div className="chat-day-divider"><span>Today</span></div><div className="chat-messages">{thread.map((message) => <div className={`chat-message-row ${message.from === 'me' ? 'chat-message-mine' : ''}`} key={message.id}>{message.from !== 'me' && <Avatar src={active.image} name={active.name} size="xs" />}<div className="chat-bubble-wrap"><div className="chat-bubble">{message.text}</div><span className="chat-time">{message.time}</span></div></div>)}<div ref={bottomRef} /></div>
      <form className="chat-compose" onSubmit={handleSend}><button type="button" className="icon-button compose-extra" title="Photo sharing requires a configured upload service"><Icon name="image" /></button><input value={draft} onChange={(e) => setDraft(e.target.value)} placeholder={`Message ${active.name}...`} aria-label="Write a message" /><button type="button" className="icon-button compose-extra" title="Emoji picker is not configured"><Icon name="smile" /></button><button type="submit" className="send-button" disabled={!draft.trim()} aria-label="Send message"><Icon name="send" size={18} /></button></form><p className="chat-demo-caption">Preview conversation · Messages are saved in this browser only</p>
    </section> : <section className="chat-panel chat-empty"><EmptyState icon="message" title="Your conversations live here" description="Match with someone to open a private conversation. Keep it kind and be yourself." action="Discover people" to="/discover" /></section>}
  </div>;
}
