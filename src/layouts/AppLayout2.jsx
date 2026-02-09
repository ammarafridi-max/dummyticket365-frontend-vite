import { Outlet } from 'react-router-dom';
import { Mail, Plane, Rss } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import MobileNavigation from '../components/MobileNavigation';

export const pages = [
  {
    name: 'Flight Reservation',
    links: ['/flight-reservation', '/booking/select-flights', '/booking/review-details'],
    icon: <Plane size={18} />
  },
  // DT365: travel insurance link disabled for now (UAE residents only)
  { name: 'Blog', links: ['/blog'], icon: <Rss size={18} /> },
  { name: 'Email Us', links: ['mailto:info@dummyticket365.com'], icon: <Mail size={18} /> },
];


export default function AppLayout2() {
  return (
    <>
      <Navigation pages={pages} />
      <MobileNavigation />
      <Outlet />
      <Footer />
    </>
  );
}
