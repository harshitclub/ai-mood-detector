import { Message } from "@/types/chat";

import EmotionCard from "./EmotionCard";

interface Props {
  message: Message;
}

export default function MessageBubble({ message }: Props) {
  const isUser = message.sender === "user";

  return (
    <div
      className={`
        flex
        w-full
        ${isUser ? "justify-end" : "justify-start"}
      `}
    >
      <div
        className={`
          max-w-[85%]
          rounded-2xl
          px-4
          py-3
          text-sm
          leading-7

          md:max-w-[70%]

          ${
            isUser
              ? `
                bg-zinc-900
                text-white
              `
              : `
                border
                border-zinc-200
                bg-white
                text-zinc-800
              `
          }
        `}
      >
        <p>{message.text}</p>

        {message.analysis && <EmotionCard analysis={message.analysis} />}
      </div>
    </div>
  );
}
