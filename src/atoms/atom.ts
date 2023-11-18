import { atom, selector } from "recoil";

// export const commentState = atom<"note" | "issue">({
//   key: "commentState",
//   default: "note",
// });

export const personalityState = atom<string | null>({
  key: "personalityState",
  default: null,
});

export const nextPageState = atom({
  key: "nextPageState",
  default: false,
});

export const chatState = atom<"chat" | "result">({
  key: "chatState",
  default: "chat",
});

export const firstConversation = atom({
  key: "firstConversation",
  default: true,
});

interface ConversationProps {
  role: "user" | "assistant";
  content: string;
}

export const conversationHistory = atom<ConversationProps[]>({
  key: "conversationHistory",
  default: [],
});

export const chatLoading = atom({
  key: "chatLoading",
  default: false,
});

export const isResult = atom({
  key: "isResult",
  default: false,
});

export const chatResultContent = atom({
  key: "chatResultContent",
  default: "",
});
