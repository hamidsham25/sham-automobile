'use client';

import React from 'react';
import { useState } from 'react';
import Link from 'next/link';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-xl border-b border-slate-200 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center space-x-3 group">
              <div className="w-12 h-12 bg-slate-900 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-sm">
                <svg 
                  className="w-7 h-7 text-white" 
                  viewBox="0 0 24 24" 
                  fill="currentColor"
                >
                  <path d="M18.92 6.01C18.72 5.42 18.16 5 17.5 5h-11c-.66 0-1.21.42-1.42 1.01L3 12v8c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-1h12v1c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-8l-2.08-5.99zM6.5 16c-.83 0-1.5-.67-1.5-1.5S5.67 13 6.5 13s1.5.67 1.5 1.5S7.33 16 6.5 16zm11 0c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zM5 11l1.5-4.5h11L19 11H5z"/>
                </svg>
              </div>
              <div className="hidden sm:block">
                <span className="text-2xl font-bold text-slate-900">Sham Automobile</span>
                <div className="text-slate-600 text-xs font-medium">Ihr Gebrauchtwagen-Händler</div>
              </div>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:block">
            <div className="flex items-center space-x-1">
              <Link 
                href="/" 
                className="group relative px-4 py-2 text-slate-700 hover:text-slate-900 font-medium transition-colors duration-300 rounded-lg hover:bg-slate-50"
              >
                Home
                <span className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-slate-900 group-hover:w-full group-hover:left-0 transition-all duration-300"></span>
              </Link>
              <Link 
                href="/kaufen" 
                className="group relative px-4 py-2 text-slate-700 hover:text-slate-900 font-medium transition-colors duration-300 rounded-lg hover:bg-slate-50"
              >
                Kaufen
                <span className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-slate-900 group-hover:w-full group-hover:left-0 transition-all duration-300"></span>
              </Link>
              <Link 
                href="/verkaufen" 
                className="group relative px-4 py-2 text-slate-700 hover:text-slate-900 font-medium transition-colors duration-300 rounded-lg hover:bg-slate-50"
              >
                Verkaufen
                <span className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-slate-900 group-hover:w-full group-hover:left-0 transition-all duration-300"></span>
              </Link>
              <Link 
                href="/ueber-uns" 
                className="group relative px-4 py-2 text-slate-700 hover:text-slate-900 font-medium transition-colors duration-300 rounded-lg hover:bg-slate-50"
              >
                Über uns
                <span className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-slate-900 group-hover:w-full group-hover:left-0 transition-all duration-300"></span>
              </Link>
              <Link 
                href="/kontakt" 
                className="group relative px-4 py-2 text-slate-700 hover:text-slate-900 font-medium transition-colors duration-300 rounded-lg hover:bg-slate-50"
              >
                Kontakt
                <span className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-slate-900 group-hover:w-full group-hover:left-0 transition-all duration-300"></span>
              </Link>
            </div>
          </div>

          {/* CTA Button - Desktop */}
          <div className="hidden lg:block">
            <Link 
              href="/kontakt"
              className="inline-block px-6 py-3 bg-slate-900 hover:bg-slate-800 text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
              <span className="flex items-center">
                Termin vereinbaren
                <svg className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </span>
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-lg text-slate-700 hover:text-slate-900 hover:bg-slate-100 focus:outline-none focus:ring-2 focus:ring-slate-500 transition-all duration-300"
              aria-expanded="false"
            >
              <span className="sr-only">Hauptmenü öffnen</span>
              {!isMenuOpen ? (
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              ) : (
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {isMenuOpen && (
        <div className="lg:hidden">
          <div className="px-4 pt-2 pb-6 space-y-2 bg-white/95 backdrop-blur-xl border-t border-slate-200 shadow-xl">
            <Link 
              href="/" 
              className="group block px-4 py-3 text-slate-700 hover:text-slate-900 font-medium transition-all duration-300 rounded-lg hover:bg-slate-50"
              onClick={closeMenu}
            >
              <span className="flex items-center">
                Home
                <span className="ml-auto w-2 h-2 bg-slate-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
              </span>
            </Link>
            <Link 
              href="/kaufen" 
              className="group block px-4 py-3 text-slate-700 hover:text-slate-900 font-medium transition-all duration-300 rounded-lg hover:bg-slate-50"
              onClick={closeMenu}
            >
              <span className="flex items-center">
                Kaufen
                <span className="ml-auto w-2 h-2 bg-slate-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
              </span>
            </Link>
            <Link 
              href="/verkaufen" 
              className="group block px-4 py-3 text-slate-700 hover:text-slate-900 font-medium transition-all duration-300 rounded-lg hover:bg-slate-50"
              onClick={closeMenu}
            >
              <span className="flex items-center">
                Verkaufen
                <span className="ml-auto w-2 h-2 bg-slate-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
              </span>
            </Link>
            <Link 
              href="/ueber-uns" 
              className="group block px-4 py-3 text-slate-700 hover:text-slate-900 font-medium transition-all duration-300 rounded-lg hover:bg-slate-50"
              onClick={closeMenu}
            >
              <span className="flex items-center">
                Über uns
                <span className="ml-auto w-2 h-2 bg-slate-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
              </span>
            </Link>
            <Link 
              href="/kontakt" 
              className="group block px-4 py-3 text-slate-700 hover:text-slate-900 font-medium transition-all duration-300 rounded-lg hover:bg-slate-50"
              onClick={closeMenu}
            >
              <span className="flex items-center">
                Kontakt
                <span className="ml-auto w-2 h-2 bg-slate-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
              </span>
            </Link>
            
            {/* Mobile CTA Button */}
            <div className="pt-4 px-4">
              <Link 
                href="/kontakt"
                className="inline-block w-full bg-slate-900 hover:bg-slate-800 text-white py-4 px-6 rounded-lg font-semibold text-center transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
                onClick={closeMenu}
              >
                Termin vereinbaren
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
