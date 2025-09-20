import React, { useState } from 'react';

const chatbotResponses = {
  "hola": "¡Hola, hermosa! Soy Sutkubo, ¿cómo puedo iluminar tu día hoy? ✨",
  "cómo estás": "Estoy muy bien, gracias por preguntar, bella. 😊 Me alegra saber que te preocupas por mí. ¿Y tú? ¿Cómo te sientes? ❤️",
  "quién eres": "Soy Sutkubo, un chatbot creado para llenar tu corazón de palabras bonitas y respuestas llenas de amor. 💖",
  "adiós": "Oh, ¿ya te vas, preciosa? 😢 ¡Hasta luego, mi querida! Espero que volvamos a hablar pronto. 🥰",
  "cuál es tu nombre": "Mi nombre es Sutkubo, pero puedes llamarme como tú quieras. Siempre estaré aquí para ti. 💕",
  "default": "Perdón, no entendí eso 💭, pero siempre estoy aquí para ti ❤️."
};

const Chatbot = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [isOpen, setIsOpen] = useState(true);
  const [isMinimized, setIsMinimized] = useState(false);

  const handleUserInput = (event) => {
    setInput(event.target.value);
  };

  const handleSendMessage = () => {
    if (input.trim() === "") return;

    const newMessages = [...messages, { sender: "user", text: input }];
    const botResponse = chatbotResponses[input.toLowerCase()] || chatbotResponses["default"];
    newMessages.push({ sender: "bot", text: botResponse });

    setMessages(newMessages);
    setInput("");
  };

  const toggleChatbot = () => {
    setIsOpen(!isOpen);
  };

  const toggleMinimized = () => {
    setIsMinimized(!isMinimized);
  };

  return (
    <div 
      className={`
        fixed bottom-0 sm:bottom-10 right-0 sm:right-10 
        w-full sm:w-80 md:w-[400px] lg:w-[450px] 
        transition-all duration-300 
        ${isOpen ? "h-[70vh] sm:h-[500px]" : "h-[60px]"} 
        bg-gradient-to-b from-pink-400 via-pink-500 to-pink-600 
        rounded-t-2xl sm:rounded-lg shadow-xl p-4 overflow-hidden
      `}
    >
      <div className="flex flex-col h-full">
        {/* Header */}
        <div 
          className="flex justify-between items-center cursor-pointer text-white p-2 hover:bg-pink-600 rounded-t-lg transition-all"
          onClick={toggleMinimized}
        >
          <div className="font-semibold text-lg">
            {isMinimized ? "Sutkubo" : "Sutkubo - Chatbot"}
          </div>
          <div className="text-white" onClick={toggleChatbot}>
            {isOpen ? "❌" : "💬"}
          </div>
        </div>

        {/* Mensajes */}
        {isMinimized ? null : (
          <div className="space-y-2 flex-grow pr-2 overflow-y-auto scrollbar-thin scrollbar-thumb-pink-500 scrollbar-track-transparent">
            {messages.map((message, index) => (
              <div key={index} className={`flex ${message.sender === "user" ? "justify-end" : "justify-start"}`}>
                <div className={`${
                  message.sender === "user" ? "bg-green-500" : "bg-blue-500"
                } text-white p-3 rounded-xl max-w-xs transition-all duration-500`}>
                  {message.text}
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Input */}
        {isMinimized ? null : (
          <div className="flex mt-4">
            <input
              type="text"
              className="flex-grow p-3 border-2 border-pink-300 rounded-full mr-2 text-base sm:text-lg focus:outline-none focus:ring-2 focus:ring-pink-400"
              value={input}
              onChange={handleUserInput}
              onKeyDown={(e) => e.key === 'Enter' && handleSendMessage()}
              placeholder="Escribe tu mensaje..."
            />
            <button 
              className="bg-pink-500 text-white p-3 rounded-full hover:bg-pink-600 transition-all duration-300"
              onClick={handleSendMessage}
            >
              💌
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Chatbot;
