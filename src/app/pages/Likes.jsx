import { useApp } from '../context/AppContext';
import { Link } from 'react-router-dom';
import Icon from '../components/Icons';
import Avatar from '../components/Avatar';
import EmptyState from '../components/EmptyState';
import { VerifiedBadge } from '../components/Badge';

export default function Likes() {
  const { profiles, likedIds, matchIds, likeProfile } = useApp();
  const likedYou = profiles.filter((profile) => profile.likesYou && !matchIds.includes(profile.id) && !likedIds.includes(profile.id));
  const peopleYouLiked = profiles.filter((profile) => likedIds.includes(profile.id));
  return <div className="page-stack">
    <div className="likes-intro"><div><span className="eyebrow">A little lovely surprise</span><h2>Someone's thinking<br /><em>about you.</em></h2><p>These people have already sent a like your way. See a spark? Send one back.</p></div><div className="likes-heart-art"><Icon name="heart" size={46} /><span>♥</span></div></div>
    <section className="section-card"><div className="section-card-header"><div><h3>People who like you</h3><p>{likedYou.length} new introductions</p></div><span className="count-pill">{likedYou.length}</span></div>
      {likedYou.length ? <div className="likes-list">{likedYou.map((person) => <article className="like-row" key={person.id}><Avatar src={person.image} name={person.name} size="lg" online={person.online} /><div className="like-person"><div className="profile-name-line"><h4>{person.name}, {person.age}</h4>{person.verified && <VerifiedBadge />}</div><p>{person.job} · {person.distance}</p><span className="like-note"><Icon name="heart" size={12} /> Likes you</span></div><div className="like-actions"><button className="like-action-button" onClick={() => likeProfile(person.id)}><Icon name="heart" size={16} /> Match back</button></div></article>)}</div> : <EmptyState icon="heart" title="No new likes just yet" description="Your next introduction might be around the corner. Keep exploring people who feel interesting." />}
    </section>
    <section className="section-card"><div className="section-card-header"><div><h3>Your likes</h3><p>People you've shown interest in</p></div><Link to="/discover" className="subtle-link">Discover more <Icon name="arrowRight" size={14} /></Link></div>
      {peopleYouLiked.length ? <div className="mini-profile-grid">{peopleYouLiked.map((person) => <div className="mini-profile" key={person.id}><img src={person.image} alt={person.name} /><div><strong>{person.name}, {person.age}</strong><small>{matchIds.includes(person.id) ? 'It’s a match!' : 'Waiting for a response'}</small></div><span className={matchIds.includes(person.id) ? 'status-dot status-match' : 'status-dot'} /></div>)}</div> : <p className="section-empty-copy">You haven't sent a like yet. The discover page is a good place to start.</p>}
    </section>
  </div>;
}
