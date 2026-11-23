import { useState } from 'react';
import { useApp } from '../context/AppContext';
import Avatar from '../components/Avatar';
import Icon from '../components/Icons';
import { Tag } from '../components/Badge';

export default function Profile() {
  const { currentUser, setCurrentUser } = useApp();
  const [editing, setEditing] = useState(false);
  const [form, setForm] = useState({ ...currentUser, interests: currentUser.interests.join(', ') });
  const [saved, setSaved] = useState(false);

  const saveProfile = (event) => {
    event.preventDefault();
    setCurrentUser({ ...form, interests: form.interests.split(',').map((item) => item.trim()).filter(Boolean) });
    setEditing(false);
    setSaved(true);
    window.setTimeout(() => setSaved(false), 2600);
  };

  return <div className="page-stack">
    <div className="profile-page-grid"><section className="profile-preview-card"><div className="profile-cover"><span className="cover-shape cover-shape-one" /><span className="cover-shape cover-shape-two" /></div><div className="profile-preview-content"><div className="profile-preview-top"><Avatar src={currentUser.image} name={currentUser.name} size="xl" className="profile-main-avatar" /><span className="profile-complete"><Icon name="checkCircle" size={14} /> Your profile</span></div><h2>{currentUser.name}, {currentUser.age}</h2><p className="profile-location"><Icon name="map" size={14} /> {currentUser.city}</p><p className="profile-about">{currentUser.bio}</p><div className="profile-tags">{currentUser.interests.map((item) => <Tag key={item}>{item}</Tag>)}</div><div className="profile-preview-meta"><div><strong>Profile visibility</strong><span>Only shown to your preferences</span></div><span className="visibility-status"><i /> Visible</span></div></div></section>
      <section className="profile-edit-card"><div className="section-card-header"><div><h3>Personal details</h3><p>Keep your profile current and authentic.</p></div><button className="edit-trigger" onClick={() => { setForm({ ...currentUser, interests: currentUser.interests.join(', ') }); setEditing((value) => !value); }}><Icon name={editing ? 'close' : 'edit'} size={15} /> {editing ? 'Cancel' : 'Edit profile'}</button></div>
        {saved && <div className="success-inline"><Icon name="checkCircle" size={16} /> Profile updated in this preview.</div>}
        {editing ? <form className="profile-edit-form" onSubmit={saveProfile}><label className="field-label">Display name<input required value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} /></label><div className="form-two-col"><label className="field-label">Age<input type="number" min="18" max="99" required value={form.age} onChange={(e) => setForm({ ...form, age: Number(e.target.value) })} /></label><label className="field-label">City<input value={form.city} onChange={(e) => setForm({ ...form, city: e.target.value })} /></label></div><label className="field-label">What do you do?<input value={form.role} onChange={(e) => setForm({ ...form, role: e.target.value })} /></label><label className="field-label">A little about you<textarea rows="4" maxLength="280" value={form.bio} onChange={(e) => setForm({ ...form, bio: e.target.value })} /></label><label className="field-label">Interests <small>Separate with commas</small><input value={form.interests} onChange={(e) => setForm({ ...form, interests: e.target.value })} /></label><button type="submit" className="button-primary button-full">Save changes <Icon name="check" size={16} /></button></form> : <div className="profile-detail-list"><div><span>Full name</span><strong>{currentUser.name}</strong></div><div><span>Age</span><strong>{currentUser.age}</strong></div><div><span>Location</span><strong>{currentUser.city}</strong></div><div><span>Profession</span><strong>{currentUser.role}</strong></div><div><span>About me</span><strong>{currentUser.bio}</strong></div><div><span>Interests</span><strong>{currentUser.interests.join(' · ')}</strong></div></div>}
      </section></div>
    <section className="profile-guidance"><div className="guidance-icon"><Icon name="sparkles" size={19} /></div><div><strong>A profile tip, just for you</strong><p>Add a detail that makes it easy for someone to start a conversation. Your favourite weekend ritual or a place you want to visit can be a lovely opener.</p></div></section>
  </div>;
}
