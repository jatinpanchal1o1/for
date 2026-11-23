import { useState } from 'react';
import Icon from './Icons';
import { Tag, VerifiedBadge } from './Badge';

export default function ProfileCard({ profile, onLike, onPass, onOpen }) {
  const [expanded, setExpanded] = useState(false);
  return (
    <article className="profile-card">
      <button className="profile-photo-button" onClick={onOpen} aria-label={`View ${profile.name}'s profile`}>
        <img className="profile-card-photo" src={profile.image} alt={`${profile.name}'s profile`} loading="lazy" />
        <div className="photo-gradient" />
        <div className="photo-topline">
          <span className="match-score"><Icon name="sparkles" size={13} /> {profile.compatibility}% match</span>
          <button className="photo-more" onClick={(event) => { event.stopPropagation(); setExpanded((value) => !value); }} aria-label="More profile options"><Icon name="more" size={19} /></button>
        </div>
        {expanded && <div className="profile-more-menu"><button onClick={() => setExpanded(false)}>Hide this profile</button><button onClick={() => setExpanded(false)}>Report profile</button></div>}
        <div className="profile-photo-caption">
          <div className="profile-name-line"><h3>{profile.name}, {profile.age}</h3>{profile.verified && <VerifiedBadge />}</div>
          <p><Icon name="map" size={14} /> {profile.city} · {profile.distance}</p>
        </div>
      </button>
      <div className="profile-card-body">
        <div className="profile-job"><span className="profile-job-dot" />{profile.job}{profile.online && <span className="online-label">Online now</span>}</div>
        <p className="profile-bio">{profile.bio}</p>
        <div className="profile-tags">{profile.tags.slice(0, 4).map((tag) => <Tag key={tag}>{tag}</Tag>)}</div>
        <div className="profile-card-actions">
          <button className="pass-button" onClick={() => onPass(profile.id)} aria-label={`Pass on ${profile.name}`}><Icon name="close" size={21} /></button>
          <button className="like-button" onClick={() => onLike(profile.id)}><Icon name="heart" size={18} /> Like</button>
          <button className="comment-button" onClick={onOpen} aria-label={`View ${profile.name}'s profile`}><Icon name="message" size={19} /></button>
        </div>
      </div>
    </article>
  );
}
