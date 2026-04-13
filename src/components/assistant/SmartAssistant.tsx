"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Sparkles, X, Send, User, Bot } from "lucide-react";

type Message = {
  id: string;
  sender: "user" | "ai";
  text: string;
};

export function SmartAssistant() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { id: "1", sender: "ai", text: "Hi Alex! I'm VenueAI. I see you're in Section 114. Need help finding anything?" }
  ]);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);

  const handleSend = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;

    const userText = input.trim();
    setInput("");
    
    // Add User Message
    const newUserMsg: Message = { id: Date.now().toString(), sender: "user", text: userText };
    setMessages(prev => [...prev, newUserMsg]);
    setIsTyping(true);

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: userText })
      });
      const data = await res.json();
      
      const aiMsg: Message = { id: (Date.now() + 1).toString(), sender: "ai", text: data.reply || "Connection error." };
      setMessages(prev => [...prev, aiMsg]);
    } catch (err) {
      setMessages(prev => [...prev, { id: Date.now().toString(), sender: "ai", text: "Sorry, the network here is causing interference." }]);
    } finally {
      setIsTyping(false);
    }
  };

  return (
    <>
      <AnimatePresence>
        {!isOpen && (
          <motion.button
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
            onClick={() => setIsOpen(true)}
            className="fixed bottom-28 right-6 z-50 w-14 h-14 rounded-full bg-gradient-to-r from-brand-600 to-neon-purple shadow-[0_0_15px_rgba(176,38,255,0.4)] flex items-center justify-center hover:scale-105 transition-transform"
          >
            <Sparkles className="w-6 h-6 text-white" />
          </motion.button>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            className="fixed bottom-28 right-4 left-4 sm:left-auto sm:w-96 h-[400px] z-50 bg-dark-800/95 backdrop-blur-xl border border-white/10 rounded-3xl shadow-2xl flex flex-col overflow-hidden"
          >
            {/* Header */}
            <div className="flex items-center justify-between p-4 bg-dark-900 border-b border-white/5">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-gradient-to-r from-brand-500 to-neon-blue flex items-center justify-center">
                  <Sparkles className="w-4 h-4 text-white" />
                </div>
                <span className="font-bold text-white">VenueAI</span>
              </div>
              <button onClick={() => setIsOpen(false)} className="p-2 bg-white/5 rounded-full hover:bg-white/10">
                <X className="w-4 h-4 text-gray-400" />
              </button>
            </div>

            {/* Chat Area */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4">
              {messages.map((msg) => (
                <div key={msg.id} className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
                  <div className={`p-3 rounded-2xl max-w-[85%] text-sm ${
                    msg.sender === 'user' 
                      ? 'bg-brand-600 text-white rounded-br-sm' 
                      : 'bg-dark-700 border border-white/5 text-gray-200 rounded-bl-sm'
                  }`}>
                    {msg.text}
                  </div>
                </div>
              ))}
              {isTyping && (
                <div className="flex justify-start">
                  <div className="p-3 rounded-2xl bg-dark-700 border border-white/5 rounded-bl-sm flex gap-1">
                    <span className="w-2 h-2 rounded-full bg-gray-500 animate-bounce" />
                    <span className="w-2 h-2 rounded-full bg-gray-500 animate-bounce delay-75" />
                    <span className="w-2 h-2 rounded-full bg-gray-500 animate-bounce delay-150" />
                  </div>
                </div>
              )}
            </div>

            {/* Input Area */}
            <div className="p-3 bg-dark-900 border-t border-white/5">
              <form onSubmit={handleSend} className="flex gap-2 relative">
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder="Ask VenueAI..."
                  className="w-full bg-dark-800 border gap-2 border-white/10 rounded-full py-2 pl-4 pr-10 text-white text-sm focus:outline-none focus:border-brand-500"
                />
                <button 
                  type="submit" 
                  disabled={!input.trim() || isTyping}
                  className="absolute right-1 top-1 p-2 bg-brand-500 rounded-full disabled:opacity-50"
                >
                  <Send className="w-3 h-3 text-white" />
                </button>
              </form>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
