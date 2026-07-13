'use client';

import { Chat } from '@/stories/Chat';
import { useChat } from '@ai-sdk/react';
import { useTranslations } from 'next-intl';

export default function ChatPage() {
  const t = useTranslations("common");
  return (
    <div className="h-screen p-8 overflow-scroll shadow-lg rounded-lg bg-white m-8">
      <Chat {...useChat()} translationFunction={t} />
    </div>
  );
}