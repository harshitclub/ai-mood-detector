import { AnalyzeResult } from "@/types/analyze";

interface Props {
  analysis: AnalyzeResult;
}

export default function EmotionCard({ analysis }: Props) {
  return (
    <div
      className="
        mt-3
        grid
        grid-cols-2
        gap-3
        rounded-2xl
        border
        border-zinc-200
        bg-zinc-50
        p-4
      "
    >
      <div>
        <p
          className="
            text-xs
            text-zinc-500
          "
        >
          Mood
        </p>

        <p
          className="
            mt-1
            text-sm
            font-medium
          "
        >
          {analysis.mood}
        </p>
      </div>

      <div>
        <p
          className="
            text-xs
            text-zinc-500
          "
        >
          Emotion
        </p>

        <p
          className="
            mt-1
            text-sm
            font-medium
          "
        >
          {analysis.emotion}
        </p>
      </div>

      <div>
        <p
          className="
            text-xs
            text-zinc-500
          "
        >
          Sentiment Score
        </p>

        <p
          className="
            mt-1
            text-sm
            font-medium
          "
        >
          {analysis.sentiment_score}
        </p>
      </div>

      <div>
        <p
          className="
            text-xs
            text-zinc-500
          "
        >
          Emoji
        </p>

        <p className="mt-1 text-lg">{analysis.emoji}</p>
      </div>
    </div>
  );
}
