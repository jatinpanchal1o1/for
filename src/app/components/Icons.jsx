import {
  FiActivity, FiArrowLeft, FiArrowRight, FiBell, FiBookmark, FiCheck, FiCheckCircle, FiChevronDown,
  FiChevronLeft, FiChevronRight, FiCompass, FiEdit2, FiEye, FiFilter, FiFlag, FiHeart, FiHelpCircle, FiInfo,
  FiHome, FiImage, FiLock, FiLogOut, FiMapPin, FiMenu, FiMessageCircle, FiMoreHorizontal, FiPlayCircle,
  FiSearch, FiSend, FiSettings, FiShield, FiSliders, FiSmile, FiStar, FiTrash2,
  FiUser, FiUserCheck, FiUsers, FiX, FiXCircle,
} from 'react-icons/fi';

const icons = {
  activity: FiActivity, arrowLeft: FiArrowLeft, arrowRight: FiArrowRight, bell: FiBell, bookmark: FiBookmark,
  check: FiCheck, checkCircle: FiCheckCircle, chevronDown: FiChevronDown, chevronLeft: FiChevronLeft,
  chevronRight: FiChevronRight, compass: FiCompass, edit: FiEdit2, eye: FiEye, filter: FiFilter, flag: FiFlag, info: FiInfo, playCircle: FiPlayCircle,
  heart: FiHeart, help: FiHelpCircle, home: FiHome, image: FiImage, lock: FiLock, logout: FiLogOut,
  map: FiMapPin, menu: FiMenu, message: FiMessageCircle, more: FiMoreHorizontal, search: FiSearch,
  send: FiSend, settings: FiSettings, shield: FiShield, sliders: FiSliders, smile: FiSmile,
  sparkles: FiStar, star: FiStar, trash: FiTrash2, user: FiUser, userCheck: FiUserCheck,
  users: FiUsers, close: FiX, pass: FiXCircle,
};

export default function Icon({ name, size = 18, className = '', ...props }) {
  const Component = icons[name] || FiStar;
  return <Component size={size} className={className} aria-hidden="true" {...props} />;
}
