import { createElement } from 'react';
import {
  HiOutlineUsers,
  HiOutlineTicket,
  HiOutlineHome,
  HiArrowRightOnRectangle,
  HiOutlineRss,
  HiOutlineShieldCheck,
  HiOutlineUserGroup,
  HiOutlineCurrencyDollar,
  HiOutlineTag,
} from 'react-icons/hi2';
import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const links = [
  {
    name: 'Dashboard',
    href: '/',
    icon: HiOutlineHome,
    accessTo: ['admin', 'agent', 'blog-manager'],
  },
  {
    name: 'Orders',
    href: '/dummy-tickets',
    icon: HiOutlineTicket,
    accessTo: ['admin', 'agent'],
  },
  {
    name: 'Insurance',
    href: '/insurance',
    icon: HiOutlineShieldCheck,
    accessTo: ['admin', 'agent'],
  },
  {
    name: 'Blogs',
    href: '/blogs',
    icon: HiOutlineRss,
    accessTo: ['admin', 'blog-manager'],
  },
  {
    name: 'Blog Tags',
    href: '/blog-tags',
    icon: HiOutlineTag,
    accessTo: ['admin', 'blog-manager'],
  },
  {
    name: 'Affiliates',
    href: '/affiliates',
    icon: HiOutlineUserGroup,
    accessTo: ['admin'],
  },
  {
    name: 'Pricing',
    href: '/pricing',
    icon: HiOutlineCurrencyDollar,
    accessTo: ['admin'],
  },
  {
    name: 'Currencies',
    href: '/currencies',
    icon: HiOutlineCurrencyDollar,
    accessTo: ['admin'],
  },
  { name: 'Users', href: '/users', icon: HiOutlineUsers, accessTo: ['admin'] },
];

export default function AdminNavigation() {
  const { user } = useAuth();

  return (
    <aside className="h-full bg-gradient-to-b from-primary-900 via-primary-800 to-primary-700 p-4 border-r border-white/10 shadow-2xl">
      <div className="h-full flex flex-col">
        <nav className="space-y-1.5">
          {links.map(link => (
            <SidebarLink
              key={link.name}
              name={link.name}
              href={link.href}
              Icon={link.icon}
              accessTo={link.accessTo}
            />
          ))}
        </nav>

        <div className="mt-auto">
          <div className="mb-2 px-1">
            <p className="text-[11px] tracking-[0.14em] uppercase text-primary-200/80">Account</p>
          </div>
          <AccountPanel user={user} />
        </div>
      </div>
    </aside>
  );
}

function SidebarLink({ name, href, Icon, accessTo }) {
  const { user } = useAuth();
  const { pathname } = useLocation();
  const isActive = href && pathname.startsWith(href);

  if (!accessTo?.includes(user?.role)) return null;

  return (
    <NavLink
      to={href}
      className={`group flex items-center justify-between rounded-xl p-2 transition-all duration-200 ${
        isActive
          ? 'text-white'
          : 'bg-white/0 text-primary-100 border-transparent hover:bg-white/10 hover:text-white hover:border-white/15'
      }`}
    >
      <div className="flex items-center gap-2.5">
        <span
          className={`h-8 w-8 rounded-lg grid place-items-center transition-colors duration-200 ${
            isActive
              ? 'bg-white text-primary-800'
              : 'bg-white/10 text-primary-100 group-hover:bg-white/15'
          }`}
        >
          {createElement(Icon, { className: 'w-4 h-4' })}
        </span>
        <span className="text-[14px]">{name}</span>
      </div>
    </NavLink>
  );
}

function AccountPanel({ user }) {
  const navigate = useNavigate();
  const { logout } = useAuth();

  return (
    <div
      role="button"
      tabIndex={0}
      onClick={() => navigate('/account')}
      onKeyDown={(event) => {
        if (event.key === 'Enter' || event.key === ' ') {
          event.preventDefault();
          navigate('/account');
        }
      }}
      className="mt-4 flex cursor-pointer items-center justify-between rounded-xl border border-white/15 bg-white/5 px-3 py-2.5 transition-colors hover:bg-white/10"
    >
      <div className="min-w-0">
        <p className="mt-1 truncate text-[13px] text-white">{user?.name || 'Admin User'}</p>
        <p className="mt-0.5 text-[11px] capitalize text-primary-100/80">
          {user?.role || 'admin'}
        </p>
      </div>
      <button
        type="button"
        aria-label="Log out"
        onClick={(event) => {
          event.stopPropagation();
          void logout();
        }}
        className="ml-3 inline-flex h-9 w-9 items-center justify-center rounded-lg bg-white/10 text-primary-100 transition-colors hover:bg-white/15 hover:text-white"
      >
        <HiArrowRightOnRectangle className="h-4 w-4" />
      </button>
    </div>
  );
}
