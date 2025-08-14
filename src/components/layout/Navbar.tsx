'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  const isActive = (path: string) => {
    if (path === '/') {
      return pathname === '/';
    }
    return pathname.startsWith(path);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-xl border-b border-slate-200/50 shadow-lg">
      {/* Premium accent line */}
      <div className="h-1 bg-gradient-to-r from-blue-600 via-slate-800 to-blue-600"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Enhanced Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center space-x-3 group">
              {/* Premium Logo Container */}
              <div className="relative w-14 h-14 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-all duration-500 shadow-lg group-hover:shadow-2xl overflow-hidden">
                {/* Subtle inner glow */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                {/* Original Car Logo with Modern Styling */}
                <div className="relative z-10">
                  <svg 
                    className="w-8 h-8 text-white" 
                    viewBox="0 0 24 24" 
                    fill="currentColor"
                  >
                    <path d="M18.92 6.01C18.72 5.42 18.16 5 17.5 5h-11c-.66 0-1.21.42-1.42 1.01L3 12v8c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-1h12v1c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-8l-2.08-5.99zM6.5 16c-.83 0-1.5-.67-1.5-1.5S5.67 13 6.5 13s1.5.67 1.5 1.5S7.33 16 6.5 16zm11 0c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zM5 11l1.5-4.5h11L19 11H5z"/>
                  </svg>
                </div>
                
                {/* Premium badge indicator */}
                <div className="absolute -top-1 -right-1 w-4 h-4 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full border-2 border-white shadow-sm"></div>
              </div>
              
              {/* Enhanced Brand Text */}
              <div className="hidden sm:block">
                <span className="text-2xl font-bold bg-gradient-to-r from-slate-900 via-blue-800 to-slate-900 bg-clip-text text-transparent">
                  Sham Automobile
                </span>
                <div className="text-slate-600 text-xs font-medium mt-1 flex items-center">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mr-2 animate-pulse"></div>
                  Ihr Gebrauchtwagen-Händler
                </div>
              </div>
            </Link>
          </div>

          {/* Enhanced Desktop Navigation */}
          <div className="hidden lg:block">
            <div className="flex items-center space-x-1">
              <Link 
                href="/" 
                className={`group relative px-4 py-2 font-medium transition-all duration-300 rounded-lg hover:bg-gradient-to-r hover:from-blue-50 hover:to-slate-50 ${
                  isActive('/') ? 'text-slate-900 bg-gradient-to-r from-blue-50 to-slate-50' : 'text-slate-700 hover:text-slate-900'
                }`}
              >
                Home
                <span className={`absolute bottom-0 h-0.5 bg-gradient-to-r from-blue-600 to-slate-800 transition-all duration-300 ${
                  isActive('/') ? 'left-0 w-full' : 'left-1/2 w-0 group-hover:w-full group-hover:left-0'
                }`}></span>
              </Link>
              <Link 
                href="/kaufen" 
                className={`group relative px-4 py-2 font-medium transition-all duration-300 rounded-lg hover:bg-gradient-to-r hover:from-blue-50 hover:to-slate-50 ${
                  isActive('/kaufen') ? 'text-slate-900 bg-gradient-to-r from-blue-50 to-slate-50' : 'text-slate-700 hover:text-slate-900'
                }`}
              >
                Kaufen
                <span className={`absolute bottom-0 h-0.5 bg-gradient-to-r from-blue-600 to-slate-800 transition-all duration-300 ${
                  isActive('/kaufen') ? 'left-0 w-full' : 'left-1/2 w-0 group-hover:w-full group-hover:left-0'
                }`}></span>
              </Link>
              <Link 
                href="/verkaufen" 
                className={`group relative px-4 py-2 font-medium transition-all duration-300 rounded-lg hover:bg-gradient-to-r hover:from-blue-50 hover:to-slate-50 ${
                  isActive('/verkaufen') ? 'text-slate-900 bg-gradient-to-r from-blue-50 to-slate-50' : 'text-slate-700 hover:text-slate-900'
                }`}
              >
                Verkaufen
                <span className={`absolute bottom-0 h-0.5 bg-gradient-to-r from-blue-600 to-slate-800 transition-all duration-300 ${
                  isActive('/verkaufen') ? 'left-0 w-full' : 'left-1/2 w-0 group-hover:w-full group-hover:left-0'
                }`}></span>
              </Link>
              <Link 
                href="/ueber-uns" 
                className={`group relative px-4 py-2 font-medium transition-all duration-300 rounded-lg hover:bg-gradient-to-r hover:from-blue-50 hover:to-slate-50 ${
                  isActive('/ueber-uns') ? 'text-slate-900 bg-gradient-to-r from-blue-50 to-slate-50' : 'text-slate-700 hover:text-slate-900'
                }`}
              >
                Über uns
                <span className={`absolute bottom-0 h-0.5 bg-gradient-to-r from-blue-600 to-slate-800 transition-all duration-300 ${
                  isActive('/ueber-uns') ? 'left-0 w-full' : 'left-1/2 w-0 group-hover:w-full group-hover:left-0'
                }`}></span>
              </Link>
              <Link 
                href="/kontakt" 
                className={`group relative px-4 py-2 font-medium transition-all duration-300 rounded-lg hover:bg-gradient-to-r hover:from-blue-50 hover:to-slate-50 ${
                  isActive('/kontakt') ? 'text-slate-900 bg-gradient-to-r from-blue-50 to-slate-50' : 'text-slate-700 hover:text-slate-900'
                }`}
              >
                Kontakt
                <span className={`absolute bottom-0 h-0.5 bg-gradient-to-r from-blue-600 to-slate-800 transition-all duration-300 ${
                  isActive('/kontakt') ? 'left-0 w-full' : 'left-1/2 w-0 group-hover:w-full group-hover:left-0'
                }`}></span>
              </Link>
            </div>
          </div>

          {/* Enhanced CTA Button - Desktop */}
          <div className="hidden lg:block">
            <Link 
              href="/kontakt"
              className="group relative inline-block px-6 py-3 bg-gradient-to-r from-blue-600 to-slate-800 hover:from-blue-700 hover:to-slate-900 text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-2xl overflow-hidden"
            >
              {/* Button background animation */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-slate-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              
              <span className="relative flex items-center">
                Termin vereinbaren
                <svg className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </span>
            </Link>
          </div>

          {/* Enhanced Mobile menu button */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 text-slate-700 hover:text-slate-900 hover:bg-gradient-to-r hover:from-blue-50 hover:to-slate-50 rounded-lg transition-all duration-200"
              aria-label="Menü öffnen"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>

        {/* Enhanced Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden border-t border-slate-200/50 bg-white/95 backdrop-blur-xl">
            <div className="px-2 py-4 space-y-2">
              <Link 
                href="/" 
                onClick={() => setIsMenuOpen(false)}
                className={`block px-4 py-3 rounded-lg transition-all duration-200 font-medium ${
                  isActive('/') ? 'text-slate-900 bg-gradient-to-r from-blue-50 to-slate-50' : 'text-slate-700 hover:text-slate-900 hover:bg-gradient-to-r hover:from-blue-50 hover:to-slate-50'
                }`}
              >
                Home
              </Link>
              <Link 
                href="/kaufen" 
                onClick={() => setIsMenuOpen(false)}
                className={`block px-4 py-3 rounded-lg transition-all duration-200 font-medium ${
                  isActive('/kaufen') ? 'text-slate-900 bg-gradient-to-r from-blue-50 to-slate-50' : 'text-slate-700 hover:text-slate-900 hover:bg-gradient-to-r hover:from-blue-50 hover:to-slate-50'
                }`}
              >
                Kaufen
              </Link>
              <Link 
                href="/verkaufen" 
                onClick={() => setIsMenuOpen(false)}
                className={`block px-4 py-3 rounded-lg transition-all duration-200 font-medium ${
                  isActive('/verkaufen') ? 'text-slate-900 bg-gradient-to-r from-blue-50 to-slate-50' : 'text-slate-700 hover:text-slate-900 hover:bg-gradient-to-r hover:from-blue-50 hover:to-slate-50'
                }`}
              >
                Verkaufen
              </Link>
              <Link 
                href="/ueber-uns" 
                onClick={() => setIsMenuOpen(false)}
                className={`block px-4 py-3 rounded-lg transition-all duration-200 font-medium ${
                  isActive('/ueber-uns') ? 'text-slate-900 bg-gradient-to-r from-blue-50 to-slate-50' : 'text-slate-700 hover:text-slate-900 hover:bg-gradient-to-r hover:from-blue-50 hover:to-slate-50'
                }`}
              >
                Über uns
              </Link>
              <Link 
                href="/kontakt" 
                onClick={() => setIsMenuOpen(false)}
                className={`block px-4 py-3 rounded-lg transition-all duration-200 font-medium ${
                  isActive('/kontakt') ? 'text-slate-900 bg-gradient-to-r from-blue-50 to-slate-50' : 'text-slate-700 hover:text-slate-900 hover:bg-gradient-to-r hover:from-blue-50 hover:to-slate-50'
                }`}
              >
                Kontakt
              </Link>
              
              {/* Enhanced Mobile CTA Button */}
              <div className="pt-4 border-t border-slate-200/50">
                <Link 
                  href="/kontakt"
                  onClick={() => setIsMenuOpen(false)}
                  className="block w-full text-center px-6 py-3 bg-gradient-to-r from-blue-600 to-slate-800 hover:from-blue-700 hover:to-slate-900 text-white font-semibold rounded-lg transition-all duration-300"
                >
                  Termin vereinbaren
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
