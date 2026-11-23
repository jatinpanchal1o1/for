import { useApp } from '../context/AppContext';
import { useNavigate } from 'react-router-dom';
import Avatar from '../components/Avatar';
import Icon from '../components/Icons';
import EmptyState from '../components/EmptyState';

export default function Matches() {
  const { profiles, matchIds } = useApp();
  const navigate = useNavigate();
  const matches = profiles.filter((profile) => matchIds.includes(profile.id));
  return <div className="page-stack">
    <div className="matches-banner"><div className="matches-banner-icon"><Icon name="heart" size={27} /></div><div><span className="eyebrow">Mutual interest looks good on you</span><h2>It's a <em>match.</em></h2><p>Both of you said yes. Now the fun part begins.</p></div><div className="matches-banner-spark">✳</div></div>
    <div className="results-heading"><div><h3>Your connections</h3><p>{matches.length} mutual connections</p></div><span className="results-note"><Icon name="shield" size={14} /> Your matches stay private</span></div>
    {matches.length ? <div className="matches-grid">{matches.map((person) => <article className="match-card" key={person.id}><div className="match-card-photo"><img src={person.image} alt={person.name} /><span className="match-heart"><Icon name="heart" size={16} fill="currentColor" /></span></div><div className="match-card-copy"><h3>{person.name}, {person.age}</h3><p>{person.job} · {person.city}</p><div className="match-card-score"><Icon name="sparkles" size={13} /> {person.compatibility}% shared compatibility</div><button className="button-primary button-full" onClick={() => navigate(`/messages?id=${person.id}`)}><Icon name="message" size={16} /> Say hello</button></div></article>)}</div> : <EmptyState icon="users" title="Your first match is waiting" description="When you and another person like each other, your new connection will appear here." />}
    <section className="match-tip"><span><Icon name="sparkles" size={18} /></span><div><strong>A little conversation starter</strong><p>Ask about something on their profile. A shared interest is a lovely place to begin.</p></div></section>
  </div>;
}
