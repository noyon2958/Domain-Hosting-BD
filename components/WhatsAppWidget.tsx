"use client";

import React, { useState } from 'react';
import { MessageCircle, X, HelpCircle } from 'lucide-react';
import { AnimatePresence } from 'motion/react';
import * as motion from 'motion/react-client';

export default function WhatsAppWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const phoneNumber = "01750749652";
  const whatsappUrl = `https://wa.me/88${phoneNumber}`;

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            transition={{ duration: 0.2 }}
            className="mb-4 w-80 bg-white rounded-2xl shadow-2xl border border-slate-100 overflow-hidden"
          >
            <div className="bg-blue-600 p-4 flex justify-between items-center text-white">
              <div className="flex items-center gap-2 font-bold">
                <MessageCircle className="w-5 h-5" />
                Domain Hosting BD
              </div>
              <button 
                onClick={() => setIsOpen(false)}
                className="text-white/80 hover:text-white transition-colors"
                aria-label="Close chat"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            
            <div className="p-6 bg-slate-50 flex flex-col">
              <div className="flex items-center gap-2 text-slate-900 font-bold mb-2 text-sm">
                <HelpCircle className="w-4 h-4 text-blue-600" /> Need help?
              </div>
              <p className="text-xs text-slate-500 mb-4">Get instant help from our experts via WhatsApp. 24/7!</p>
              
              <div className="bg-blue-50 rounded-lg border border-blue-100 p-4 mb-4">
                <div className="flex items-center gap-2 mb-2">
                  <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse"></span>
                  <span className="text-xs text-slate-600 font-medium">Online Now</span>
                </div>
                <p className="text-lg font-black text-blue-700">{phoneNumber}</p>
              </div>
              
              <a 
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-2.5 bg-blue-600 hover:bg-blue-700 text-white text-sm font-bold rounded-lg transition-colors flex items-center justify-center gap-2"
              >
                <MessageCircle className="w-4 h-4" /> Chat with Us
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-14 h-14 bg-blue-600 hover:bg-blue-700 text-white rounded-full shadow-xl flex items-center justify-center transition-transform hover:scale-105 active:scale-95"
        aria-label="Open chat"
      >
        {isOpen ? <X className="w-6 h-6" /> : <MessageCircle className="w-6 h-6" />}
      </button>
    </div>
  );
}
