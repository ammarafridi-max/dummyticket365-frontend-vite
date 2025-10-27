import { useState } from 'react';
import { pages } from './Navigation';
import { HiOutlineXMark, HiOutlineBars3 } from 'react-icons/hi2';
import Container from './Container';

export default function MobileNavigation() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="block lg:hidden font-outfit sticky top-0 z-[60]">
      {/* Top Nav Bar */}
      <nav className="bg-white/80 backdrop-blur-sm shadow-sm">
        <Container className="flex justify-between items-center py-2">
          <a href="/" className="w-[160px] flex items-center">
            <img
              src="/logo.webp"
              alt="Dummy Ticket 365 Logo"
              title="Dummy Ticket 365"
              className="w-full h-auto object-contain"
            />
          </a>

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            name="mobileMenu"
            className="text-gray-800 focus:outline-none"
          >
            {menuOpen ? (
              <HiOutlineXMark className="text-3xl" />
            ) : (
              <HiOutlineBars3 className="text-3xl" />
            )}
          </button>
        </Container>
      </nav>

      {/* Overlay & Menu */}
      {menuOpen && (
        <>
          {/* 🔹 Overlay (covers full viewport) */}
          <div
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-[70]"
            onClick={() => setMenuOpen(false)}
          />

          {/* 🔹 Menu */}
          <div
            className="fixed top-[65px] left-0 right-0 z-[80] px-4 animate-slideDown"
            onClick={() => setMenuOpen(false)}
          >
            <div className="bg-white rounded-xl shadow-xl border border-gray-100 overflow-hidden">
              {pages.map((page, i) => (
                <a
                  key={i}
                  href={page.link}
                  onClick={() => setMenuOpen(false)}
                  className={`block px-6 py-3 text-center text-[16px] font-medium transition-all duration-200 ${
                    page.cta
                      ? 'bg-[#ff6b00] text-white hover:bg-[#e65e00]'
                      : 'text-gray-700 hover:bg-gray-50'
                  }`}
                >
                  {page.name}
                </a>
              ))}
            </div>
          </div>
        </>
      )}
    </header>
  );
}
