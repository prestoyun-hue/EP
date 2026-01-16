import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 text-slate-400 py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center text-center mb-8">
          <h3 className="text-white font-bold text-lg mb-4">Contact</h3>
          <ul className="text-sm space-y-2">
            <li>이메일 : sales@estc.co.kr</li>
            <li>평일 09:00 - 18:00 (점심시간 12:00 - 13:00 | 주말/공휴일 휴무)</li>
          </ul>
        </div>
        <div className="border-t border-slate-800 pt-8 text-center text-xs">
          <p>&copy; {new Date().getFullYear()} ESTC. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;