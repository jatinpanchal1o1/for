import { useMemo, useState } from 'react';
import ProfileCard from '../components/ProfileCard';
import EmptyState from '../components/EmptyState';
import Icon from '../components/Icons';
import { Tag, VerifiedBadge } from '../components/Badge';
import { useApp } from '../context/AppContext';

export default function Discover() {
  const { profiles, likedIds, passedIds, matchIds, likeProfile, passProfile } = useApp();
  const [query, setQuery] = useState('');
  const [activeFilter, setActiveFilter] = useState('For you');
  const [selectedProfile, setSelectedProfile] = useState(null);
  const [showFilters, setShowFilters] = useState(false);
  const [verifiedOnly, setVerifiedOnly] = useState(false);
  const [onlineOnly, setOnlineOnly] = useState(false);

  const visibleProfiles = useMemo(() => profiles.filter((profile) => {
    if (likedIds.includes(profile.id) || passedIds.includes(profile.id) || matchIds.includes(profile.id)) return false;
    const search = query.toLowerCase();
    const matchesQuery = !search || [profile.name, profile.city, profile.job, ...profile.tags].join(' ').toLowerCase().includes(search);
    const matchesFilter = activeFilter === 'For you' || (activeFilter === 'Nearby' && Number.parseInt(profile.distance, 10) <= 5) || (activeFilter === 'Online' && profile.online);
    return matchesQuery && matchesFilter && (!verifiedOnly || profile.verified) && (!onlineOnly || profile.online);
  }), [profiles, likedIds, passedIds, matchIds, query, activeFilter, verifiedOnly, onlineOnly]);

  return (
    <div className="page-stack">
      <section className="discover-welcome"><div><div className="welcome-kicker"><span className="welcome-spark">✳</span> YOUR PEOPLE ARE OUT THERE</div><h2>Meet someone <em>new.</em></h2><p>Good conversations start with a little curiosity.</p></div><div className="welcome-illustration"><div className="welcome-blob blob-one" /><div className="welcome-blob blob-two" /><Icon name="heart" size={43} /></div></section>

      <div className="discover-toolbar"><div className="discover-tabs" role="tablist" aria-label="Profile discovery filters">{['For you', 'Nearby', 'Online'].map((filter) => <button key={filter} role="tab" aria-selected={activeFilter === filter} className={activeFilter === filter ? 'discover-tab active' : 'discover-tab'} onClick={() => setActiveFilter(filter)}>{filter}</button>)}</div><div className="discover-tools"><label className="search-field"><Icon name="search" size={17} /><input value={query} onChange={(e) => setQuery(e.target.value)} placeholder="Search people or interests" /></label><button className={`filter-button ${showFilters ? 'active' : ''}`} onClick={() => setShowFilters((value) => !value)}><Icon name="sliders" size={17} /> Filters</button></div></div>

      {showFilters && <div className="filter-panel"><div><strong>Profile preferences</strong><span>Fine-tune who appears in your discovery feed.</span></div><label className="switch-line"><span>Verified profiles only</span><input type="checkbox" checked={verifiedOnly} onChange={(e) => setVerifiedOnly(e.target.checked)} /><i /></label><label className="switch-line"><span>Online now</span><input type="checkbox" checked={onlineOnly} onChange={(e) => setOnlineOnly(e.target.checked)} /><i /></label><button className="clear-filters" onClick={() => { setVerifiedOnly(false); setOnlineOnly(false); }}>Reset filters</button></div>}

      <div className="results-heading"><div><h3>People to get to know</h3><p>{visibleProfiles.length} profiles to explore</p></div><div className="results-note"><Icon name="shield" size={14} /> You control who can contact you</div></div>
      {visibleProfiles.length > 0 ? <div className="profile-grid">{visibleProfiles.map((profile) => <ProfileCard key={profile.id} profile={profile} onLike={likeProfile} onPass={passProfile} onOpen={() => setSelectedProfile(profile)} />)}</div> : <EmptyState icon="compass" title="You've seen everyone in this set" description="Try another filter or come back later for new introductions." action="Reset filters" to="/discover" />}

      {selectedProfile && <div className="modal-backdrop" role="presentation" onClick={() => setSelectedProfile(null)}><section className="profile-modal" role="dialog" aria-modal="true" aria-label={`${selectedProfile.name}'s profile`} onClick={(event) => event.stopPropagation()}><button className="modal-close" onClick={() => setSelectedProfile(null)} aria-label="Close"><Icon name="close" /></button><img src={selectedProfile.image} alt={`${selectedProfile.name}`} className="profile-modal-image" /><div className="profile-modal-copy"><div className="profile-name-line"><h2>{selectedProfile.name}, {selectedProfile.age}</h2>{selectedProfile.verified && <VerifiedBadge />}</div><p className="profile-modal-meta"><Icon name="map" size={15} /> {selectedProfile.city} · {selectedProfile.distance} <span>·</span> {selectedProfile.job}</p><p>{selectedProfile.bio}</p><h4>Things we might talk about</h4><div className="profile-tags">{selectedProfile.tags.map((tag) => <Tag key={tag}>{tag}</Tag>)}</div><div className="modal-match-note"><Icon name="sparkles" size={17} /> {selectedProfile.compatibility}% shared compatibility</div><div className="profile-modal-actions"><button className="pass-button" onClick={() => { passProfile(selectedProfile.id); setSelectedProfile(null); }}><Icon name="close" /></button><button className="button-primary" onClick={() => { likeProfile(selectedProfile.id); setSelectedProfile(null); }}> <Icon name="heart" size={17} /> Send a like</button></div></div></section></div>}
    </div>
  );
}
