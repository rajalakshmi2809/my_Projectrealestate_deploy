import React from 'react';
import { useNavigate } from 'react-router-dom';
import { MdSearch, MdNotificationsNone, MdSettings, MdLogout } from 'react-icons/md';

const Topbar = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    navigate('/login');
  };

  return (
    <header className="h-16 bg-white border-b border-slate-200 flex items-center justify-between px-6 z-10 w-full sticky top-0">
      <div className="flex items-center">
        <h1 className="text-xl font-bold text-slate-800 tracking-tight ml-64 lg:ml-0 hidden lg:block">
          Estate<span className="font-normal">Curator</span>
        </h1>
      </div>

      <div className="flex-1 max-w-2xl px-6">
        <div className="relative">
          <MdSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 text-xl" />
          <input
            type="text"
            placeholder="Search portfolio, analytics, assets..."
            className="w-full bg-slate-100/70 border-none rounded-lg pl-10 pr-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all font-medium placeholder-slate-400 text-slate-700"
          />
        </div>
      </div>

      <div className="flex items-center gap-4">
        <button className="relative p-2 text-slate-600 hover:bg-slate-100 rounded-full transition-colors">
          <MdNotificationsNone className="text-xl" />
          <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-red-500 rounded-full border-2 border-white"></span>
        </button>
        <button className="p-2 text-slate-600 hover:bg-slate-100 rounded-full transition-colors">
          <MdSettings className="text-xl" />
        </button>
        
        <div className="h-8 w-px bg-slate-200 mx-1"></div>
        
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-3 p-1 pr-2 rounded-full hover:bg-slate-50 transition-colors cursor-pointer">
            <div className="hidden md:flex flex-col items-end">
              <span className="text-sm font-semibold text-slate-700 leading-none">Alex Sterling</span>
              <span className="text-[10px] text-slate-500 font-medium uppercase tracking-wider mt-1">Portfolio Manager</span>
            </div>
            <img 
              src="https://api.dicebear.com/9.x/avataaars/svg?seed=Alex&backgroundColor=b6e3f4" 
              alt="Profile Avatar" 
              className="w-9 h-9 rounded-full bg-slate-200 object-cover border border-slate-200 shadow-sm"
            />
          </div>
          <button 
            onClick={handleLogout}
            title="Sign out"
            className="p-2 text-red-500 hover:bg-red-50 rounded-full transition-colors flex items-center justify-center"
          >
            <MdLogout className="text-xl" />
          </button>
        </div>
      </div>
    </header>
  );
};

export default Topbar;
