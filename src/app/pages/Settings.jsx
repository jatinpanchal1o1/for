import { useState } from 'react';
import { useApp } from '../context/AppContext';
import Icon from '../components/Icons';
import { useNavigate } from 'react-router-dom';

function SettingSwitch({ checked, onChange, label, description }) {
  return <label className="setting-row"><span><strong>{label}</strong><small>{description}</small></span><span className="switch-control"><input type="checkbox" checked={checked} onChange={(event) => onChange(event.target.checked)} /><i /></span></label>;
}

export default function Settings() {
  const { preferences, setPreferences } = useApp();
  const [notice, setNotice] = useState('');
  const navigate = useNavigate();
  const update = (key, value) => { setPreferences((current) => ({ ...current, [key]: value })); setNotice('Your preview settings have been saved.'); window.setTimeout(() => setNotice(''), 2200); };
  return <div className="page-stack settings-page">
    {notice && <div className="success-inline"><Icon name="checkCircle" size={16} /> {notice}</div>}
    <section className="section-card settings-card"><div className="section-card-header"><div><h3><Icon name="eye" size={18} /> Discovery preferences</h3><p>Choose how people find and see you.</p></div></div><SettingSwitch label="Show my profile" description="Allow eligible members to discover your profile." checked={preferences.profileVisible} onChange={(value) => update('profileVisible', value)} /><SettingSwitch label="Show online status" description="Let your matches know when you're currently active." checked={preferences.showOnline} onChange={(value) => update('showOnline', value)} /></section>
    <section className="section-card settings-card"><div className="section-card-header"><div><h3><Icon name="bell" size={18} /> Notifications</h3><p>Stay in the loop, on your terms.</p></div></div><SettingSwitch label="App notifications" description="Get notified about new matches and messages." checked={preferences.notifications} onChange={(value) => update('notifications', value)} /></section>
    <section className="section-card settings-card"><div className="section-card-header"><div><h3><Icon name="sliders" size={18} /> Distance preference</h3><p>Set the maximum distance for nearby suggestions.</p></div><strong className="setting-value">{preferences.distance} km</strong></div><input className="range-slider" type="range" min="5" max="100" step="5" value={preferences.distance} onChange={(event) => update('distance', Number(event.target.value))} /><div className="range-labels"><span>5 km</span><span>100 km</span></div></section>
    <section className="section-card settings-card"><div className="section-card-header"><div><h3><Icon name="shield" size={18} /> Your privacy and safety</h3><p>You're in control of your experience.</p></div></div><button className="settings-link-row" onClick={() => setNotice('Blocked members management will be available after backend integration.')}><span><strong>Blocked members</strong><small>Manage people you no longer want to interact with.</small></span><Icon name="chevronRight" /></button><button className="settings-link-row" onClick={() => setNotice('Privacy policy page needs your published policy URL.')}><span><strong>Privacy policy</strong><small>Learn how personal information is handled.</small></span><Icon name="chevronRight" /></button><button className="settings-link-row" onClick={() => setNotice('Account deletion requires a secure backend workflow.')}><span><strong>Delete account</strong><small>Request permanent removal of your account and data.</small></span><Icon name="chevronRight" /></button></section>
    <div className="settings-bottom"><div><strong>Preview account</strong><p>Authentication, data export, and account deletion are not connected yet.</p></div><button className="button-outline" onClick={() => navigate('/login')}><Icon name="logout" size={16} /> Return to sign in</button></div>
  </div>;
}
