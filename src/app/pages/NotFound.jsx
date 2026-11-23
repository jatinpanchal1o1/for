import { Link } from 'react-router-dom';
import Icon from '../components/Icons';

export default function NotFound() {
  return <div className="not-found"><span className="not-found-icon"><Icon name="compass" size={26} /></span><h1>Looks like a little detour.</h1><p>We couldn't find that page. Let's get you back to the good part.</p><Link className="button-primary" to="/">Back to FOR <Icon name="arrowRight" size={16} /></Link></div>;
}
