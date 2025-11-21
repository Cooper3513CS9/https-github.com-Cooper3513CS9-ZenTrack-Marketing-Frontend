
import React, { useState, useRef, useEffect } from 'react';
import { Send, Paperclip, Camera, MoreVertical, Phone, Search, Loader2, Check, CheckCheck } from 'lucide-react';
import { ChatMessage, MessageStatus } from '../../types';
import { chatWithEmma } from '../../services/geminiService';
import { birdService } from '../../services/messageBirdService';

interface ChatAreaProps {
  messages: ChatMessage[];
  setMessages: React.Dispatch<React.SetStateAction<ChatMessage[]>>;
}

// Helper to render WhatsApp ticks
const StatusTicks: React.FC<{ status?: MessageStatus }> = ({ status }) => {
  if (!status || status === 'pending') return <Loader2 className="w-3 h-3 text-slate-400 animate-spin" />;
  if (status === 'sent') return <Check className="w-3 h-3 text-slate-400" />;
  if (status === 'delivered') return <CheckCheck className="w-3 h-3 text-slate-400" />;
  if (status === 'read') return <CheckCheck className="w-3 h-3 text-blue-500" />;
  return null;
};

export const ChatArea: React.FC<ChatAreaProps> = ({ messages, setMessages }) => {
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isTyping]);

  const handleSendMessage = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputValue.trim()) return;

    const tempId = Date.now().toString();

    // 1. Optimistic UI Update (Pending State)
    const userMsg: ChatMessage = {
      id: tempId,
      text: inputValue,
      sender: 'user',
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      type: 'text',
      status: 'pending'
    };

    setMessages(prev => [...prev, userMsg]);
    setInputValue('');
    setIsTyping(true);

    // 2. Send via MessageBird Service
    // We use a default test number since we are in a demo environment
    const birdResponse = await birdService.sendMessage('+31612345678', userMsg.text);

    // 3. Update message with Sent status
    setMessages(prev => prev.map(msg => 
      msg.id === tempId ? { ...msg, status: birdResponse.status, id: birdResponse.id } : msg
    ));

    // 4. Simulate WhatsApp Webhook Delivery/Read updates
    birdService.simulateStatusUpdates(birdResponse.id, (newStatus) => {
       setMessages(prev => prev.map(msg => 
         msg.id === birdResponse.id ? { ...msg, status: newStatus } : msg
       ));
    });

    // 5. Get AI Reply (Simulating the Bot response coming back via Bird)
    const aiResponseText = await chatWithEmma(messages, userMsg.text);

    setTimeout(() => {
      const botMsg: ChatMessage = {
        id: (Date.now() + 1).toString(),
        text: aiResponseText,
        sender: 'bot',
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        type: 'text'
      };
      setMessages(prev => [...prev, botMsg]);
      setIsTyping(false);
    }, 1500);
  };

  return (
    <div className="flex-1 flex flex-col h-screen bg-[#efeae2] relative">
       {/* Chat Header */}
       <div className="bg-[#f0f2f5] px-4 py-3 flex items-center justify-between border-b border-[#d1d7db]">
         <div className="flex items-center gap-4">
            <div className="w-10 h-10 rounded-full bg-emerald-600 flex items-center justify-center text-white font-bold text-lg shadow-sm">
              Z
            </div>
            <div>
              <h2 className="font-semibold text-slate-900">Emma (ZenTrack)</h2>
              <p className="text-xs text-slate-500">WhatsApp Business • Online</p>
            </div>
         </div>
         <div className="flex items-center gap-4 text-slate-500">
            <Search className="w-5 h-5 cursor-pointer hover:text-slate-700" />
            <MoreVertical className="w-5 h-5 cursor-pointer hover:text-slate-700" />
         </div>
       </div>

       {/* Messages Area */}
       <div className="flex-1 overflow-y-auto p-4 sm:p-8 space-y-4" style={{ backgroundImage: 'url("https://user-images.githubusercontent.com/15075759/28719144-86dc0f70-73b1-11e7-911d-60d70fcded21.png")', backgroundBlendMode: 'soft-light', backgroundColor: '#efeae2' }}>
          {messages.map((msg) => (
            <div key={msg.id} className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
              <div 
                className={`max-w-[85%] sm:max-w-[60%] p-3 rounded-lg text-sm shadow-sm relative group ${
                  msg.sender === 'user' 
                    ? 'bg-[#d9fdd3] text-slate-900 rounded-tr-none' 
                    : 'bg-white text-slate-900 rounded-tl-none'
                }`}
              >
                 {msg.type === 'image' && (
                   <div className="mb-2 rounded-lg overflow-hidden border border-slate-200">
                      <div className="bg-slate-100 p-4 flex items-center justify-center">
                        <Paperclip className="w-6 h-6 text-slate-400" />
                        <span className="ml-2 text-xs text-slate-500">Bijlage.pdf</span>
                      </div>
                   </div>
                 )}
                 <p className="whitespace-pre-line leading-relaxed pr-6">{msg.text}</p>
                 
                 {/* Timestamp & Status Container */}
                 <div className="flex items-end justify-end gap-1 mt-1 -mb-1">
                   <span className="text-[10px] text-slate-500/80">{msg.timestamp}</span>
                   {msg.sender === 'user' && (
                     <div className="pb-0.5">
                       <StatusTicks status={msg.status} />
                     </div>
                   )}
                 </div>
              </div>
            </div>
          ))}
          
          {isTyping && (
             <div className="flex justify-start">
               <div className="bg-white p-3 rounded-lg rounded-tl-none shadow-sm">
                  <Loader2 className="w-4 h-4 animate-spin text-slate-400" />
               </div>
             </div>
          )}
          <div ref={messagesEndRef} />
       </div>

       {/* Input Area */}
       <div className="bg-[#f0f2f5] p-3 sm:p-4 flex items-center gap-2 sm:gap-4">
          <button className="p-2 text-slate-500 hover:bg-slate-200 rounded-full transition-colors">
             <MoreVertical className="w-6 h-6" />
          </button>
          <button className="p-2 text-slate-500 hover:bg-slate-200 rounded-full transition-colors">
             <Paperclip className="w-6 h-6" />
          </button>
          
          <form onSubmit={handleSendMessage} className="flex-1 flex items-center gap-2">
            <input 
              type="text" 
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              placeholder="Typ een bericht..."
              className="flex-1 py-3 px-4 rounded-lg border-none focus:ring-0 bg-white text-slate-900 placeholder:text-slate-500 shadow-sm"
            />
            {inputValue.trim() ? (
              <button type="submit" className="p-3 bg-emerald-600 hover:bg-emerald-700 text-white rounded-full shadow-sm transition-colors">
                 <Send className="w-5 h-5" />
              </button>
            ) : (
               <button type="button" className="p-3 text-slate-500 hover:bg-slate-200 rounded-full transition-colors">
                 <Phone className="w-5 h-5" />
               </button>
            )}
          </form>
       </div>
    </div>
  );
};
