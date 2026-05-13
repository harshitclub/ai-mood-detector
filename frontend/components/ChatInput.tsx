"use client";

import { useState } from "react";

interface Props {
  onSend: (text: string) => Promise<void>;

  disabled: boolean;
}

export default function ChatInput({ onSend, disabled }: Props) {
  const [text, setText] = useState("");

  const handleSend = async () => {
    if (!text.trim()) return;

    await onSend(text);

    setText("");
  };

  return (
    <div
      className="
        border-t
        border-zinc-200
        bg-white
      "
    >
      <div
        className="
          mx-auto
          flex
          max-w-3xl
          items-center
          gap-3
          px-5
          py-4
        "
      >
        <input
          type="text"
          value={text}
          disabled={disabled}
          placeholder="Type your message..."
          onChange={(e) => setText(e.target.value)}
          onKeyDown={async (e) => {
            if (e.key === "Enter") {
              await handleSend();
            }
          }}
          className="
            h-12
            flex-1
            rounded-2xl
            border
            border-zinc-300
            bg-white
            px-4
            text-sm
            outline-none

            disabled:bg-zinc-100
          "
        />

        <button
          disabled={disabled}
          onClick={handleSend}
          className="
            h-12
            rounded-2xl
            bg-zinc-900
            px-5
            text-sm
            font-medium
            text-white

            hover:bg-zinc-800

            disabled:opacity-50
          "
        >
          Send
        </button>
      </div>
    </div>
  );
}
