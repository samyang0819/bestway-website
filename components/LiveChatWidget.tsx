'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { MessageCircle, Send, X, Clock, CheckCircle } from 'lucide-react'

interface ChatMessage {
  id: string
  sender: 'bot' | 'user'
  text: string
  timestamp: Date
}

const initialMessages: ChatMessage[] = [
  {
    id: '1',
    sender: 'bot',
    text: 'Hi! 👋 How can we help with your immigration journey today?',
    timestamp: new Date(),
  },
]

const quickResponses = [
  'Visa options',
  'Timeline & costs',
  'Schedule call',
  'Other questions',
]

export function LiveChatWidget() {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState<ChatMessage[]>(initialMessages)
  const [input, setInput] = useState('')
  const [showCallbackForm, setShowCallbackForm] = useState(false)
  const [isResponding, setIsResponding] = useState(false)

  // Simulate bot responses
  const handleQuickResponse = async (response: string) => {
    // Add user message
    const userMsg: ChatMessage = {
      id: Date.now().toString(),
      sender: 'user',
      text: response,
      timestamp: new Date(),
    }
    setMessages((prev) => [...prev, userMsg])
    setIsResponding(true)

    // Simulate delay for bot response
    await new Promise((resolve) => setTimeout(resolve, 1200))

    const botResponses: Record<string, string> = {
      'Visa options': 'We help with Canada Express Entry, Australia skilled migration, UK student visas, and more. Which country interests you? 🌍',
      'Timeline & costs': 'Most cases take 4-8 months. Costs typically range from $2,000-$5,000. Want a personalized quote? 💼',
      'Schedule call': 'Great! Our experts are available today. Would you like to schedule a free 30-min consultation? 📅',
      'Other questions': "Feel free to ask anything! Or you can book a call with our team for personalized guidance. 💬",
    }

    const botMsg: ChatMessage = {
      id: (Date.now() + 1).toString(),
      sender: 'bot',
      text: botResponses[response] || 'Thanks for your interest! Our team will get back to you shortly.',
      timestamp: new Date(),
    }
    setMessages((prev) => [...prev, botMsg])
    setIsResponding(false)
  }

  const handleSendMessage = async () => {
    if (!input.trim()) return

    const userMsg: ChatMessage = {
      id: Date.now().toString(),
      sender: 'user',
      text: input,
      timestamp: new Date(),
    }
    setMessages((prev) => [...prev, userMsg])
    setInput('')
    setIsResponding(true)

    await new Promise((resolve) => setTimeout(resolve, 1500))

    const botMsg: ChatMessage = {
      id: (Date.now() + 1).toString(),
      sender: 'bot',
      text: "Thanks! Our team will review your message and get back to you within 2 minutes. In the meantime, would you like to schedule a call? 📞",
      timestamp: new Date(),
    }
    setMessages((prev) => [...prev, botMsg])
    setIsResponding(false)
  }

  return (
    <>
      {/* Chat Widget Container */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.3 }}
            className="fixed bottom-24 right-6 w-full max-w-sm z-40"
          >
            {/* Chat Window */}
            <div className="rounded-2xl shadow-2xl overflow-hidden bg-gradient-to-b from-slate-800 to-slate-900 border border-cyan-500/20">
              {/* Chat Header */}
              <div className="bg-gradient-to-r from-cyan-600 to-blue-600 p-4 text-white">
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center">
                      <MessageCircle className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="font-bold">BestWay Team</h3>
                      <div className="flex items-center gap-1 text-xs text-cyan-100">
                        <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                        Online
                      </div>
                    </div>
                  </div>
                  <button
                    onClick={() => setIsOpen(false)}
                    className="p-1 hover:bg-white/20 rounded-lg transition-all"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>

                {/* Response Time Indicator */}
                <div className="flex items-center gap-1 text-xs text-cyan-100 bg-white/10 px-2 py-1 rounded-lg w-fit">
                  <Clock className="w-3 h-3" />
                  <span>Avg. response: 2 min</span>
                </div>
              </div>

              {/* Messages Area */}
              <div className="h-80 overflow-y-auto p-4 space-y-4 bg-slate-800/50 custom-scrollbar">
                {messages.map((msg, i) => (
                  <motion.div
                    key={msg.id}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.1 }}
                    className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                  >
                    <div
                      className={`max-w-xs px-4 py-3 rounded-2xl ${
                        msg.sender === 'user'
                          ? 'bg-gradient-to-r from-cyan-600 to-blue-600 text-white rounded-br-none'
                          : 'bg-slate-700 text-slate-100 rounded-bl-none'
                      }`}
                    >
                      <p className="text-sm">{msg.text}</p>
                      <span className="text-xs opacity-70 mt-1 block">
                        {msg.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                      </span>
                    </div>
                  </motion.div>
                ))}

                {isResponding && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="flex gap-2 p-2"
                  >
                    <div className="w-2 h-2 rounded-full bg-cyan-500 animate-bounce" />
                    <div className="w-2 h-2 rounded-full bg-cyan-500 animate-bounce" style={{ animationDelay: '0.1s' }} />
                    <div className="w-2 h-2 rounded-full bg-cyan-500 animate-bounce" style={{ animationDelay: '0.2s' }} />
                  </motion.div>
                )}
              </div>

              {/* Quick Response Buttons */}
              {!showCallbackForm && messages.length <= 3 && (
                <div className="p-4 border-t border-slate-700 space-y-2">
                  <p className="text-xs text-slate-400 mb-2">Quick responses:</p>
                  <div className="grid grid-cols-2 gap-2">
                    {quickResponses.map((response) => (
                      <button
                        key={response}
                        onClick={() => handleQuickResponse(response)}
                        disabled={isResponding}
                        className="px-3 py-2 text-xs font-medium rounded-lg bg-slate-700 hover:bg-slate-600 text-cyan-300 transition-all disabled:opacity-50"
                      >
                        {response}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Callback Form */}
              {showCallbackForm && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="p-4 border-t border-slate-700 space-y-3 bg-slate-700/30"
                >
                  <h4 className="text-sm font-bold text-white">Schedule a callback</h4>
                  <input
                    type="email"
                    placeholder="Your email"
                    className="w-full px-3 py-2 text-sm rounded-lg bg-slate-700 border border-slate-600 text-white placeholder-slate-400 focus:outline-none focus:border-cyan-500"
                  />
                  <input
                    type="tel"
                    placeholder="Your phone"
                    className="w-full px-3 py-2 text-sm rounded-lg bg-slate-700 border border-slate-600 text-white placeholder-slate-400 focus:outline-none focus:border-cyan-500"
                  />
                  <button className="w-full px-3 py-2 rounded-lg bg-gradient-to-r from-cyan-600 to-blue-600 text-white text-sm font-bold hover:from-cyan-500 hover:to-blue-500 transition-all">
                    Schedule Call
                  </button>
                  <button
                    onClick={() => setShowCallbackForm(false)}
                    className="w-full text-xs text-slate-400 hover:text-white transition-all"
                  >
                    Back to chat
                  </button>
                </motion.div>
              )}

              {/* Input Area */}
              {!showCallbackForm && (
                <div className="p-4 border-t border-slate-700 flex gap-2 bg-slate-800">
                  <input
                    type="text"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                    placeholder="Type your message..."
                    disabled={isResponding}
                    className="flex-1 px-4 py-2 text-sm rounded-lg bg-slate-700 border border-slate-600 text-white placeholder-slate-400 focus:outline-none focus:border-cyan-500 disabled:opacity-50"
                  />
                  <button
                    onClick={handleSendMessage}
                    disabled={!input.trim() || isResponding}
                    className="px-4 py-2 rounded-lg bg-gradient-to-r from-cyan-600 to-blue-600 text-white hover:from-cyan-500 hover:to-blue-500 transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2"
                  >
                    <Send className="w-4 h-4" />
                  </button>
                </div>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating Chat Button */}
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 z-50 w-16 h-16 rounded-full bg-gradient-to-br from-cyan-500 to-blue-600 text-white shadow-2xl hover:shadow-cyan-500/50 flex items-center justify-center group transition-all hover:from-cyan-400 hover:to-blue-500"
      >
        {isOpen ? (
          <X className="w-6 h-6" />
        ) : (
          <>
            <MessageCircle className="w-6 h-6 group-hover:scale-110 transition-transform" />
            {/* Pulsing dot indicator */}
            <motion.div
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="absolute top-0 right-0 w-4 h-4 rounded-full bg-red-500 flex items-center justify-center"
            >
              <div className="w-2 h-2 rounded-full bg-white" />
            </motion.div>
          </>
        )}
      </motion.button>

      {/* Chat Badge - Floating above button */}
      <AnimatePresence>
        {!isOpen && (
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 20 }}
            transition={{ duration: 0.3 }}
            className="fixed bottom-28 right-6 z-40 px-4 py-2 rounded-lg bg-gradient-to-r from-cyan-600 to-blue-600 text-white text-xs font-bold shadow-lg"
          >
            💬 Chat with us!
            <motion.div
              animate={{ x: [0, 4, 0] }}
              transition={{ duration: 0.8, repeat: Infinity }}
              className="absolute left-1 top-1/2 transform -translate-y-1/2"
            >
              →
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

export default LiveChatWidget
