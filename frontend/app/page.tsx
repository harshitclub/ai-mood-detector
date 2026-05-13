"use client";

import { useState } from "react";

import ChatBox from "@/components/ChatBox";
import ChatInput from "@/components/ChatInput";

import { Message } from "@/types/chat";

import { analyzeText } from "@/services/analyze.service";

export default function HomePage() {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: crypto.randomUUID(),
      text: "Hello 👋 How are you feeling today?",
      sender: "ai",
    },
  ]);

  const [isTyping, setIsTyping] = useState(false);

  const sendMessage = async (text: string) => {
    try {
      const userMessage: Message = {
        id: crypto.randomUUID(),
        text,
        sender: "user",
      };

      setMessages((prev) => [...prev, userMessage]);

      setIsTyping(true);

      const analysis = await analyzeText(text);

      const aiMessage: Message = {
        id: crypto.randomUUID(),

        sender: "ai",

        text: analysis.response,

        analysis,
      };

      setMessages((prev) => [...prev, aiMessage]);
    } catch (error) {
      const errorMessage: Message = {
        id: crypto.randomUUID(),

        sender: "ai",

        text: "Something went wrong while analyzing your message.",
      };

      setMessages((prev) => [...prev, errorMessage]);
    } finally {
      setIsTyping(false);
    }
  };

  return (
    <main
      className="
        flex
        h-screen
        bg-[#f5f5f4]
        p-3
        md:p-6
      "
    >
      <section
        className="
          flex
          w-full
          flex-col
          overflow-hidden
          rounded-3xl
          border
          border-zinc-200
          bg-white
        "
      >
        {/* Header */}
        <header
          className="
            border-b
            border-zinc-200
            bg-white
          "
        >
          <div
            className="
              mx-auto
              flex
              h-16
              max-w-5xl
              items-center
              px-5
            "
          >
            <div className="flex items-center gap-3">
              <div
                className="
                  flex
                  h-10
                  w-10
                  items-center
                  justify-center
                  rounded-xl
                  border
                  border-zinc-200
                  bg-zinc-50
                "
              >
                🧠
              </div>

              <div>
                <h1
                  className="
                    text-sm
                    font-semibold
                  "
                >
                  AI Mood Detector
                </h1>

                <p
                  className="
                    text-xs
                    text-zinc-500
                  "
                >
                  Emotion & sentiment analysis
                </p>
              </div>
            </div>
          </div>
        </header>

        {/* Chat */}
        <div
          className="
            flex-1
            overflow-hidden
            bg-[#fcfcfc]
          "
        >
          <div
            className="
              mx-auto
              flex
              h-full
              max-w-5xl
              flex-col
            "
          >
            <ChatBox messages={messages} isTyping={isTyping} />

            <ChatInput onSend={sendMessage} disabled={isTyping} />
          </div>
        </div>
      </section>
    </main>
  );
}
