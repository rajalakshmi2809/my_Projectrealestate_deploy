import React, { useState } from 'react';
// Import our mock data containing the tickets
import { maintenanceTickets } from '../../data/mockData';

const Maintenance = () => {
  // 1. Beginner Logic: useState to keep track of what the user types in the search bar
  const [searchTerm, setSearchTerm] = useState('');

  // 2. Beginner Logic: A simple function to handle adding a new complaint
  const handleNewComplaint = () => {
    // We use window.prompt to ask the user for basic text input (very beginner friendly!)
    const issue = window.prompt("What is the maintenance issue you would like to report?");
    
    // If the user actually typed something and hit OK, show an alert
    if (issue) {
      alert(`Complaint logged successfully: "${issue}". Our team will investigate shortly!`);
    }
  };

  // 3. Beginner Logic: Filter the tickets based on the search term
  // If the search term is empty, this simply returns all tickets.
  const filteredTickets = maintenanceTickets.filter((ticket) =>
    ticket.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="p-8 min-h-screen bg-gradient-to-br from-indigo-50 via-white to-sky-50">
      
      {/* Header & Complaint Setup Section */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-10 gap-6">
        <div>
          <h1 className="text-4xl font-extrabold text-slate-800 drop-shadow-sm mb-2">
            Maintenance & Complaints
          </h1>
          <p className="text-slate-500 text-lg font-medium">
            Manage all property issues and log new complaints easily.
          </p>
        </div>
        
        {/* Simple onClick function for a beginner friendly interaction */}
        <button 
          onClick={handleNewComplaint}
          className="bg-red-500 hover:bg-red-600 text-white font-bold py-3 px-6 rounded-full shadow-lg shadow-red-200 transition-transform transform hover:-translate-y-1 flex items-center"
        >
          <span className="text-xl mr-2">+</span> File Complaint
        </button>
      </div>

      {/* Search Bar Section using simple component state */}
      <div className="mb-10 max-w-2xl">
        <input 
          type="text" 
          placeholder="Search for an issue or title..." 
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full p-4 rounded-2xl border border-slate-200 bg-white/70 backdrop-blur-sm focus:outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-50 shadow-sm text-lg text-slate-700 transition-all font-medium"
        />
      </div>

      {/* 4. Beginner Logic: The map function to loop over filtered tickets and display them */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredTickets.map((ticket) => (
          
          /* Modern Design: Glassmorphism look with semi-transparent background, blur, and large borders */
          <div key={ticket.id} className="bg-white/60 backdrop-blur-xl border border-white/80 rounded-3xl p-6 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.1)] transition-all flex flex-col justify-between">
            
            <div className="flex justify-between items-start mb-6">
              {/* Conditional styling based on priority */}
              <span className={`px-4 py-1.5 text-xs font-bold rounded-xl uppercase tracking-widest ${
                ticket.priority.includes('HIGH') ? 'bg-red-100 text-red-700 shadow-inner' :
                ticket.priority.includes('MEDIUM') ? 'bg-orange-100 text-orange-700 shadow-inner' :
                'bg-green-100 text-green-700 shadow-inner'
              }`}>
                {ticket.priority}
              </span>
              <span className="text-slate-400 font-bold text-xs bg-slate-100/50 px-3 py-1 rounded-lg">
                {ticket.date}
              </span>
            </div>

            <h2 className="text-xl font-bold text-slate-800 mb-6 leading-relaxed line-clamp-2">
              {ticket.title}
            </h2>
            
            <div className="bg-white/50 p-4 rounded-2xl border border-slate-100/50 mb-6 mt-auto">
              <p className="text-slate-500 text-sm mb-3 flex justify-between">
                <span className="font-bold text-slate-400 uppercase tracking-wider text-[10px]">Property</span> 
                <span className="font-semibold text-slate-700">{ticket.property}</span>
              </p>
              <p className="text-slate-500 text-sm flex justify-between">
                <span className="font-bold text-slate-400 uppercase tracking-wider text-[10px]">Assigned To</span> 
                <span className="font-semibold text-slate-700">{ticket.assignedTo}</span>
              </p>
            </div>

            <div className="flex justify-between items-center pt-2 border-t border-slate-100/50">
              <span className="font-bold text-blue-600 bg-blue-50 px-4 py-2 rounded-xl text-sm">
                {ticket.status}
              </span>
              
              <button 
                onClick={() => alert(`Sending a quick reminder to ${ticket.assignedTo} to resolve the issue at ${ticket.property}!`)}
                className="text-white bg-slate-800 hover:bg-slate-900 font-bold py-2 px-5 rounded-xl shadow-md transition-colors text-sm"
              >
                Remind
              </button>
            </div>
            
          </div>
        ))}
        
        {/* If no tickets match the search, show a friendly message */}
        {filteredTickets.length === 0 && (
          <div className="col-span-full flex flex-col items-center justify-center py-20">
            <div className="text-6xl mb-4">🔍</div>
            <h3 className="text-2xl text-slate-600 font-bold">No complaints found.</h3>
            <p className="text-slate-400 mt-2">Try searching with a different keyword!</p>
          </div>
        )}
      </div>

    </div>
  );
};

export default Maintenance;
