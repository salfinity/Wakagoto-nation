"use client";

import React from "react";
import Image from "next/image";
import { useState } from "react";
import axios from "axios";
import circleImg from "/public/circletextquotes.png";
import whatsappImg from "/public/quotes.png";
import AiChatModal from "../Quotes/AiChatModal";
import TypingAnimation from "/src/components/TypingAnimation";

export default function CircleQuotes() {
  const [isAiModalOpen, setAiModalOpen] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const [chatLog, setChatLog] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const handleAiButtonClick = () => {
    setAiModalOpen(!isAiModalOpen);
  };

  const handleRefresh = () => {
    // Add logic to clear the chat or perform any other refresh actions
    setChatLog([]);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setChatLog((prevChatLog) => [
      ...prevChatLog,
      { type: "user", message: inputValue },
    ]);

    sendMessage(inputValue);

    setInputValue("");
  };

  const sendMessage = (message) => {
    const url = "/api/chat";

    const data = {
      model: "gpt-3.5-turbo-1106",
      messages: [{ role: "user", content: message }],
    };

    setIsLoading(true);

    axios
      .post(url, data)
      .then((response) => {
        console.log(response);
        setChatLog((prevChatLog) => [
          ...prevChatLog,
          { type: "bot", message: response.data.choices[0].message.content },
        ]);
        setIsLoading(false);
      })
      .catch((error) => {
        setIsLoading(false);
        console.log(error);
      });
  };

  return (
    <div className="fixed right-4 bottom-4 flex items-center justify-center overflow-hidden z-50">
      <div className="w-48 h-auto flex items-center justify-center relative">
        <Image
          src={circleImg}
          alt="animation text"
          className="w-full h-auto rounded-full fill-black dark:fill-slate-50 animate-spin-slow"
          priority
        />
        <button
          className="flex items-center justify-center absolute
        left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 cursor-pointer p-4 hover:opacity-80 focus:outline-none"
          onClick={handleAiButtonClick}
        >
          <Image
            src={whatsappImg}
            alt="quotesBahaidar"
            width={100}
            height={100}
          />
        </button>
        <AiChatModal
          isOpen={isAiModalOpen}
          onClose={handleAiButtonClick}
          onRefresh={handleRefresh}
        >
          <div className="flex-grow p-2 md:p-6 tracking-[px] font-mono">
            <div className="flex flex-col space-y-4 h-[500px] md:h-[300px] overflow-y-scroll">
              {chatLog.map((message, index) => (
                <div
                  key={index}
                  className={`flex ${
                    message.type === "user" ? "justify-end" : "justify-start"
                  }`}
                >
                  <div
                    className={`${
                      message.type === "user"
                        ? "bg-purple-500"
                        : "bg-neutral-800"
                    } rounded-xl p-2 text-white max-w-sm`}
                  >
                    {message.message}
                  </div>
                </div>
              ))}
              {isLoading && (
                <div key={chatLog.length} className="flex justify-start">
                  <div className="bg-zinc-800 rounded-r-xl p-4 text-white max-w-sm">
                    <TypingAnimation />
                  </div>
                </div>
              )}
            </div>
          </div>
          <form onSubmit={handleSubmit} className="flex-none p-3">
            <div className="flex rounded-xl bg-zinc-800">
              <input
                type="text"
                className="flex-grow px-4 py-2 bg-transparent text-white border-none focus:outline-none focus:rounded-l-xl"
                placeholder="I am a Bot Ask Anything..."
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
              />

              <button
                type="submit"
                className="bg-purple-500 rounded-r-xl px-4 md:px-8 py-2 text-white font-semibold focus:outline-none hover:bg-purple-600 transition-colors duration-300"
              >
                Send
              </button>
            </div>
          </form>
        </AiChatModal>
      </div>
    </div>
  );
}
