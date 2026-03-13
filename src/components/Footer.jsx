import React from 'react';
import { footerData } from '../constants/content';
import footerLogo from '../assets/MyKlikBNW.svg';

export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-[#012169] to-[#2659cc] text-white pt-20 pb-10">
      <div className="mx-auto max-w-7xl px-8 grid grid-cols-1 lg:grid-cols-2 gap-16">
        <div className="space-y-10">
          <img src={footerLogo} className="h-16 w-auto" alt="Logo" />
          <p className="text-white/80">{footerData.description}</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {footerData.sections.map((section, i) => (
            <div key={i} className="space-y-4">
              <h4 className="text-lg font-bold">{section.title}</h4>
              <ul className="space-y-3 text-white/70 text-sm">
                {section.links.map((link, j) => (
                  <li key={j}><a href={link.url} className="hover:text-white">{link.label}</a></li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
      <div className="text-center mt-16 pt-8 border-t border-white/20 text-white/60">
        <p>© {new Date().getFullYear()} MyKlik. All rights reserved.</p>
      </div>
    </footer>
  );
}