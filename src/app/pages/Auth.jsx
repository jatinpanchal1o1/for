import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Icon from '../components/Icons';
import { useApp } from '../context/AppContext';

export default function AuthPage({ mode = 'login' }) {
  const isSignup = mode === 'signup';
  const navigate = useNavigate();
  const { setCurrentUser } = useApp();
  const [form, setForm] = useState({ name: '', email: '', password: '', ageConfirmed: false, agreed: false });
  const [error, setError] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    setError('');
    if (isSignup && (!form.ageConfirmed || !form.agreed)) {
      setError('Please confirm that you are 18 or older and accept the terms.');
      return;
    }
    if (form.password.length < 8) {
      setError('Use at least 8 characters for your password.');
      return;
    }
    if (isSignup && form.name.trim()) {
      setCurrentUser((user) => ({ ...user, name: form.name.trim() }));
      navigate('/onboarding');
    } else {
      navigate('/discover');
    }
  };

  return (
    <div className="auth-page">
      <div className="auth-aside"><Link to="/" className="brand-lockup"><span className="brand-mark"><Icon name="heart" size={20} /></span><span className="brand-name">FOR<span>.</span></span></Link><div className="auth-aside-content"><span className="eyebrow">A little more meaningful</span><h1>Come as you are.<br /><em>Find what feels right.</em></h1><p>Good connections aren't a numbers game. They're about finding someone who sees the little things that make you, you.</p><div className="auth-aside-quote"><div className="quote-stars">✳ ✳ ✳ ✳ ✳</div><p>“The best part wasn't the match. It was how easy the conversation felt.”</p><span>— A FOR community story <small>(illustrative quote)</small></span></div></div><div className="auth-aside-foot">Thoughtful dating, at your own pace.</div></div>
      <div className="auth-main"><div className="auth-mobile-brand"><Link to="/" className="brand-lockup"><span className="brand-mark"><Icon name="heart" size={19} /></span><span className="brand-name">FOR<span>.</span></span></Link></div><div className="auth-card"><div className="auth-heading"><span className="auth-icon"><Icon name={isSignup ? 'sparkles' : 'heart'} size={21} /></span><h2>{isSignup ? 'Create your account' : 'Welcome back'}</h2><p>{isSignup ? 'A few details, then the good part.' : 'Pick up where your story left off.'}</p></div>
        <form className="auth-form" onSubmit={handleSubmit}>
          {isSignup && <label className="field-label">Your name<input value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} placeholder="e.g. Alex Morgan" required autoComplete="name" /></label>}
          <label className="field-label">Email address<input type="email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} placeholder="you@example.com" required autoComplete="email" /></label>
          <label className="field-label">Password<div className="password-wrap"><input type={showPassword ? 'text' : 'password'} value={form.password} onChange={(e) => setForm({ ...form, password: e.target.value })} placeholder="At least 8 characters" required autoComplete={isSignup ? 'new-password' : 'current-password'} /><button type="button" onClick={() => setShowPassword((value) => !value)} aria-label={showPassword ? 'Hide password' : 'Show password'}><Icon name="eye" size={17} /></button></div></label>
          {isSignup && <div className="auth-checks"><label><input type="checkbox" checked={form.ageConfirmed} onChange={(e) => setForm({ ...form, ageConfirmed: e.target.checked })} /> I confirm I am 18 years of age or older.</label><label><input type="checkbox" checked={form.agreed} onChange={(e) => setForm({ ...form, agreed: e.target.checked })} /> I agree to the <a href="#terms">Terms</a> and <a href="#privacy">Privacy Policy</a>.</label></div>}
          {error && <p className="form-error" role="alert">{error}</p>}
          <button className="button-primary button-full" type="submit">{isSignup ? 'Create account' : 'Log in'} <Icon name="arrowRight" size={16} /></button>
        </form>
        {!isSignup && <button type="button" className="auth-forgot" onClick={() => setError('Password recovery needs a configured authentication provider.')}>Forgot your password?</button>}
        <div className="auth-switch">{isSignup ? 'Already have an account?' : 'New to FOR?'} <Link to={isSignup ? '/login' : '/signup'}>{isSignup ? 'Log in' : 'Create an account'}</Link></div>
        <div className="auth-demo-note"><Icon name="info" size={15} /> Preview only: this form does not create a real account. Connect a secure authentication service before production.</div>
      </div><Link to="/" className="auth-back"><Icon name="arrowLeft" size={15} /> Back to home</Link></div>
    </div>
  );
}
