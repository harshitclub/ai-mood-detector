import { Message } from "@/types/chat";

import MessageBubble from "./MessageBubble";

import TypingIndicator from "./TypingIndicator";

interface Props {
  messages: Message[];

  isTyping: boolean;
}

export default function ChatBox({ messages, isTyping }: Props) {
  return (
    <div
      className="
        flex-1
        overflow-y-auto
      "
    >
      <div
        className="
          mx-auto
          flex
          max-w-3xl
          flex-col
          gap-6
          px-5
          py-8
        "
      >
        {messages.map((message) => (
          <MessageBubble key={message.id} message={message} />
        ))}

        {isTyping && <TypingIndicator />}
      </div>
    </div>
  );
}
