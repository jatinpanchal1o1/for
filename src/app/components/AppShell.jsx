import { NavLink, Outlet, useLocation, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { useApp } from '../context/AppContext';
import Avatar from './Avatar';
import Icon from './Icons';

const navigation = [
  { to: '/discover', label: 'Discover', icon: 'compass' },
  { to: '/likes', label: 'Likes you', icon: 'heart', count: '3' },
  { to: '/matches', label: 'Your matches', icon: 'users' },
  { to: '/messages', label: 'Messages', icon: 'message', count: '2' },
];

const secondary = [
  { to: '/profile', label: 'My profile', icon: 'user' },
  { to: '/settings', label: 'Settings', icon: 'settings' },
];

function SidebarLink({ item, onClick }) {
  return (
    <NavLink to={item.to} onClick={onClick} className={({ isActive }) => `sidebar-link ${isActive ? 'sidebar-link-active' : ''}`}>
      <Icon name={item.icon} size={19} />
      <span>{item.label}</span>
      {item.count && <span className="sidebar-count">{item.count}</span>}
    </NavLink>
  );
}

export default function AppShell() {
  const { currentUser } = useApp();
  const location = useLocation();
  const navigate = useNavigate();
  const [mobileOpen, setMobileOpen] = useState(false);
  const titles = {
    '/discover': ['Discover', 'Meet people who make your world a little bigger.'],
    '/likes': ['Likes you', 'People who have already shown an interest.'],
    '/matches': ['Your matches', 'A good connection starts with a hello.'],
    '/messages': ['Messages', 'Keep the conversation going.'],
    '/profile': ['My profile', 'A little more about you.'],
    '/settings': ['Settings', 'Make your experience feel right.'],
    '/admin': ['Admin overview', 'Platform operations and member safety.'],
    '/onboarding': ['Your story', 'Set up your profile at your own pace.'],
  };
  const [title, subtitle] = titles[location.pathname] || ['Welcome back', 'Your next great conversation could be here.'];

  const closeMobile = () => setMobileOpen(false);

  return (
    <div className="app-shell flex min-h-screen">
      <aside className={`app-sidebar flex flex-col ${mobileOpen ? 'app-sidebar-open' : ''}`}>
        <button className="brand-lockup" onClick={() => navigate('/discover')} aria-label="FOR home">
          <span className="brand-mark"><Icon name="heart" size={20} /></span>
          <span className="brand-name">FOR<span>.</span></span>
        </button>
        <div className="sidebar-section-label">MENU</div>
        <nav className="sidebar-nav" aria-label="Main navigation">
          {navigation.map((item) => <SidebarLink key={item.to} item={item} onClick={closeMobile} />)}
        </nav>
        <div className="sidebar-divider" />
        <div className="sidebar-section-label">ACCOUNT</div>
        <nav className="sidebar-nav" aria-label="Account navigation">
          {secondary.map((item) => <SidebarLink key={item.to} item={item} onClick={closeMobile} />)}
        </nav>
        <div className="sidebar-promo">
          <div className="promo-icon"><Icon name="sparkles" size={18} /></div>
          <p className="promo-title">Make room for more</p>
          <p className="promo-copy">Thoughtful connections begin with being open to them.</p>
          <button onClick={() => navigate('/discover')} className="promo-link">Explore people <Icon name="arrowRight" size={14} /></button>
        </div>
        <button className="sidebar-user" onClick={() => navigate('/profile')}>
          <Avatar src={currentUser.image} name={currentUser.name} size="sm" />
          <span className="sidebar-user-meta"><strong>{currentUser.name}</strong><small>View your profile</small></span>
          <Icon name="more" size={19} />
        </button>
      </aside>

      {mobileOpen && <button className="mobile-scrim" onClick={closeMobile} aria-label="Close navigation" />}

      <div className="app-main">
        <header className="app-topbar sticky top-0 flex items-center justify-between">
          <div className="topbar-mobile-brand">
            <button className="icon-button mobile-menu-button" onClick={() => setMobileOpen(true)} aria-label="Open navigation"><Icon name="menu" /></button>
            <button className="brand-lockup brand-lockup-compact" onClick={() => navigate('/discover')}><span className="brand-mark"><Icon name="heart" size={17} /></span><span className="brand-name">FOR<span>.</span></span></button>
          </div>
          <div className="topbar-heading">
            <h1>{title}</h1>
            <p>{subtitle}</p>
          </div>
          <div className="topbar-actions">
            <button className="icon-button notification-button" aria-label="Notifications" onClick={() => navigate('/likes')}><Icon name="bell" size={19} /><span /></button>
            <button className="topbar-profile" onClick={() => navigate('/profile')}><Avatar src={currentUser.image} name={currentUser.name} size="sm" /><span>{currentUser.name.split(' ')[0]}</span><Icon name="chevronDown" size={15} /></button>
          </div>
        </header>
        <main className="app-content"><div className="demo-notice"><Icon name="shield" size={15} /><span>Preview mode · Profiles and interactions use sample data. Connect a backend before launching publicly.</span></div><Outlet /></main>
        <footer className="app-footer"><span>© 2026 FOR</span><span>Made for meaningful connections</span><a href="/">About FOR</a></footer>
      </div>

      <nav className="mobile-bottom-nav" aria-label="Mobile navigation">
        {navigation.map((item) => <NavLink key={item.to} to={item.to} className={({ isActive }) => `mobile-bottom-link ${isActive ? 'active' : ''}`}><Icon name={item.icon} size={20} /><span>{item.label.split(' ')[0]}</span></NavLink>)}
      </nav>
    </div>
  );
}
