import { atom, selector } from "recoil";

// export const commentState = atom<"note" | "issue">({
//   key: "commentState",
//   default: "note",
// });

export const personalityState = atom<
  "realistic" | "sympathetic" | "witty" | null
>({
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
