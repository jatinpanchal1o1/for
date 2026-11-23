import { useNavigate } from 'react-router-dom';
import Icon from './Icons';

export default function EmptyState({ icon = 'heart', title, description, action = 'Explore people', to = '/discover' }) {
  const navigate = useNavigate();
  return <div className="empty-state"><div className="empty-state-icon"><Icon name={icon} size={25} /></div><h3>{title}</h3><p>{description}</p><button className="button-primary button-small" onClick={() => navigate(to)}>{action}<Icon name="arrowRight" size={15} /></button></div>;
}
