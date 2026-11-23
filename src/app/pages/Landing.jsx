import { Link } from 'react-router-dom';
import Icon from '../components/Icons';
import Avatar from '../components/Avatar';
import { demoProfiles } from '../data/demoData';

export default function Landing() {
  return (
    <div className="landing-page">
      <nav className="landing-nav flex items-center justify-between">
        <Link to="/" className="brand-lockup"><span className="brand-mark"><Icon name="heart" size={20} /></span><span className="brand-name">FOR<span>.</span></span></Link>
        <div className="landing-nav-links"><a href="#how-it-works">How it works</a><a href="#safety">Your safety</a></div>
        <div className="landing-nav-actions"><Link to="/login" className="landing-login">Log in</Link><Link to="/signup" className="button-primary">Create account <Icon name="arrowRight" size={16} /></Link></div>
      </nav>

      <main>
        <section className="landing-hero">
          <div className="hero-copy">
            <div className="eyebrow"><span className="eyebrow-sparkle"><Icon name="sparkles" size={13} /></span> A more thoughtful way to meet</div>
            <h1>Less swiping.<br /><em>More feeling.</em></h1>
            <p className="hero-description">Meet people who share your curiosity, your values, and the little things that make you, you.</p>
            <div className="hero-actions"><Link to="/signup" className="button-primary button-large">Find your person <Icon name="arrowRight" size={17} /></Link><Link to="/discover" className="button-quiet">Explore the experience <Icon name="playCircle" size={17} /></Link></div>
            <div className="hero-proof"><div className="avatar-stack">{demoProfiles.slice(0, 4).map((person) => <Avatar key={person.id} src={person.image} name={person.name} size="sm" />)}</div><div><strong>A little more intentional.</strong><span>Connections built around who you are.</span></div></div>
          </div>
          <div className="hero-visual">
            <div className="hero-image-frame"><img src="https://images.unsplash.com/photo-1522673607200-164d1b6ce486?auto=format&fit=crop&w=1200&q=90" alt="A couple enjoying a quiet moment together" loading="eager" fetchPriority="high" decoding="async" /></div>
            <div className="hero-float-card hero-float-top"><span className="float-heart"><Icon name="heart" size={17} /></span><div><strong>Good energy, found.</strong><small>It starts with a hello.</small></div></div>
            <div className="hero-float-card hero-float-bottom"><Avatar src={demoProfiles[2].image} name="Meera" size="md" online /><div><strong>Meera, 26</strong><small><Icon name="map" size={12} /> Jaipur · 2 km away</small></div><span className="float-match">94% match</span></div>
            <div className="hero-orbit orbit-one" /><div className="hero-orbit orbit-two" />
          </div>
        </section>

        <section className="landing-stats"><div><strong>01</strong><span>Start with what matters</span></div><div><strong>02</strong><span>Meet with intention</span></div><div><strong>03</strong><span>Build something real</span></div></section>

        <section className="landing-section how-section" id="how-it-works">
          <div className="section-heading"><span className="eyebrow">A softer kind of dating</span><h2>Good connections<br /><em>begin with you.</em></h2><p>We make space for more than a first impression. Share what lights you up and discover people who get it.</p></div>
          <div className="steps-grid"><article className="step-card"><span className="step-number">01</span><div className="step-icon"><Icon name="user" size={23} /></div><h3>Show up as you</h3><p>Create a profile that feels like you, with your interests, stories, and the things you value.</p></article><article className="step-card step-card-featured"><span className="step-number">02</span><div className="step-icon"><Icon name="compass" size={23} /></div><h3>Find your kind of people</h3><p>Explore thoughtful profiles shaped around shared interests and meaningful compatibility.</p></article><article className="step-card"><span className="step-number">03</span><div className="step-icon"><Icon name="message" size={23} /></div><h3>Let it unfold</h3><p>When the interest is mutual, start a conversation and see where it takes you.</p></article></div>
        </section>

        <section className="landing-section safety-section" id="safety"><div className="safety-visual"><div className="safety-art"><div className="safety-art-circle"><Icon name="shield" size={62} /></div><span className="safety-dot dot-a" /><span className="safety-dot dot-b" /><span className="safety-dot dot-c" /></div></div><div className="safety-copy"><span className="eyebrow">Care comes first</span><h2>Connection feels better<br />when <em>you feel safe.</em></h2><p>Dating should feel exciting, never uncertain. FOR is designed with privacy, respectful interactions, and member controls at its heart.</p><ul><li><Icon name="checkCircle" /> Profile and photo review workflows</li><li><Icon name="checkCircle" /> Block and report controls</li><li><Icon name="checkCircle" /> Privacy-first profile visibility</li><li><Icon name="checkCircle" /> Clear community expectations</li></ul><Link to="/signup" className="text-link">Start with confidence <Icon name="arrowRight" size={15} /></Link></div></section>

        <section className="landing-cta"><div className="cta-spark cta-spark-one">✳</div><div className="cta-spark cta-spark-two">✧</div><span className="eyebrow">Your next chapter could start here</span><h2>Make space for<br /><em>something lovely.</em></h2><p>Come as you are. We'll take it from there.</p><Link to="/signup" className="button-primary button-large">Create your free profile <Icon name="arrowRight" size={17} /></Link></section>
      </main>

      <footer className="landing-footer"><Link to="/" className="brand-lockup"><span className="brand-mark"><Icon name="heart" size={18} /></span><span className="brand-name">FOR<span>.</span></span></Link><span>Made for meaningful connections.</span><div><a href="#safety">Safety</a><Link to="/login">Log in</Link><Link to="/signup">Join FOR</Link></div></footer>
    </div>
  );
}
