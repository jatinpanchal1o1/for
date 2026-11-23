import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useApp } from '../context/AppContext';
import Icon from '../components/Icons';

const interests = ['Travel', 'Food', 'Music', 'Fitness', 'Books', 'Art', 'Movies', 'Nature', 'Photography', 'Coffee', 'Technology', 'Cooking', 'Dancing', 'Volunteering', 'Fashion', 'Wellness'];

export default function Onboarding() {
  const { currentUser, setCurrentUser } = useApp();
  const navigate = useNavigate();
  const [step, setStep] = useState(1);
  const [form, setForm] = useState({ name: currentUser.name, city: currentUser.city, age: currentUser.age, gender: '', lookingFor: '', relationshipGoal: 'A long-term relationship', interests: currentUser.interests || [], bio: currentUser.bio });
  const [error, setError] = useState('');
  const toggleInterest = (interest) => setForm((current) => ({ ...current, interests: current.interests.includes(interest) ? current.interests.filter((item) => item !== interest) : [...current.interests, interest] }));
  const next = () => {
    if (step === 1 && (!form.name.trim() || !form.city.trim() || form.age < 18)) { setError('Add your name, city, and confirm that you are at least 18.'); return; }
    if (step === 2 && (!form.gender || !form.lookingFor)) { setError('Choose the options that feel right for you.'); return; }
    if (step === 3 && form.interests.length < 3) { setError('Choose at least three interests to help people get to know you.'); return; }
    setError('');
    if (step < 4) setStep((current) => current + 1);
    else {
      setCurrentUser((current) => ({ ...current, name: form.name.trim(), age: Number(form.age), city: form.city.trim(), bio: form.bio, interests: form.interests, role: current.role, gender: form.gender, lookingFor: form.lookingFor, relationshipGoal: form.relationshipGoal }));
      navigate('/discover');
    }
  };
  return <div className="onboarding-page"><div className="onboarding-top"><span className="brand-mark"><Icon name="heart" size={19} /></span><span className="brand-name">FOR<span>.</span></span><span className="onboarding-progress-label">STEP {step} OF 4</span></div><div className="onboarding-progress"><span style={{ width: `${step * 25}%` }} /></div><div className="onboarding-content"><div className="onboarding-heading"><span className="eyebrow">Let's make this yours</span><h1>{['First, the basics.', 'Who are you hoping to meet?', 'What makes you, you?', 'A few words from you.'][step - 1]}</h1><p>{['Start with a few details. You can always update them later.', 'There is no right answer. Choose what feels authentic.', 'Shared interests make lovely conversation starters.', 'Give someone a glimpse of the person behind the profile.'][step - 1]}</p></div>
    {step === 1 && <div className="onboarding-form"><label className="field-label">Your name<input value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} placeholder="Your display name" /></label><div className="form-two-col"><label className="field-label">Age<input type="number" min="18" max="99" value={form.age} onChange={(e) => setForm({ ...form, age: Number(e.target.value) })} /></label><label className="field-label">Your city<input value={form.city} onChange={(e) => setForm({ ...form, city: e.target.value })} placeholder="City" /></label></div></div>}
    {step === 2 && <div className="onboarding-form"><label className="field-label">I identify as<select value={form.gender} onChange={(e) => setForm({ ...form, gender: e.target.value })}><option value="">Choose an option</option><option>Woman</option><option>Man</option><option>Non-binary</option><option>Prefer to self-describe</option><option>Prefer not to say</option></select></label><label className="field-label">I'm interested in meeting<select value={form.lookingFor} onChange={(e) => setForm({ ...form, lookingFor: e.target.value })}><option value="">Choose an option</option><option>Women</option><option>Men</option><option>Everyone</option><option>Prefer to decide later</option></select></label><label className="field-label">I'm looking for<select value={form.relationshipGoal} onChange={(e) => setForm({ ...form, relationshipGoal: e.target.value })}><option>A long-term relationship</option><option>Something meaningful, open to see</option><option>New connections and friends</option><option>Still figuring it out</option></select></label></div>}
    {step === 3 && <div className="onboarding-interest-grid">{interests.map((interest) => <button type="button" key={interest} onClick={() => toggleInterest(interest)} className={form.interests.includes(interest) ? 'interest-choice selected' : 'interest-choice'}>{form.interests.includes(interest) && <Icon name="check" size={14} />}{interest}</button>)}</div>}
    {step === 4 && <div className="onboarding-form"><label className="field-label">Your introduction<textarea rows="6" maxLength="280" value={form.bio} onChange={(e) => setForm({ ...form, bio: e.target.value })} placeholder="A little about what makes your days yours..." /></label><div className="textarea-meta">{form.bio.length}/280 characters</div><div className="onboarding-summary"><Icon name="sparkles" size={17} /><span>Your profile is a work in progress. A genuine introduction is always enough to begin.</span></div></div>}
    {error && <p className="form-error onboarding-error">{error}</p>}<div className="onboarding-actions"><button className="button-outline" onClick={() => step === 1 ? navigate('/discover') : setStep((current) => current - 1)}>{step === 1 ? 'Skip for now' : 'Back'}</button><button className="button-primary" onClick={next}>{step === 4 ? 'Finish profile' : 'Continue'} <Icon name="arrowRight" size={16} /></button></div><p className="onboarding-footnote"><Icon name="lock" size={13} /> Your personal details are private and under your control.</p></div></div>;
}
