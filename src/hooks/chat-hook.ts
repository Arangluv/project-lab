import { useMutation, useQuery } from "@tanstack/react-query";
import { postMessage, postSummary } from "../api/chat-api";
import { SetterOrUpdater } from "recoil";
import { UseFormSetValue } from "react-hook-form";

interface ConversationProps {
  role: "user" | "assistant";
  content: string;
}
interface ChatProps {
  setIsFirstConversation: SetterOrUpdater<boolean>;
  isFirstConversation: boolean;
  setCovHistory: SetterOrUpdater<ConversationProps[]>;
  setIsChatLoading: SetterOrUpdater<boolean>;
}
interface ChatDataProps {
  conversation_history: ConversationProps[];
  question: string; //user 질문
  response: string;
}
export const useChatMutation = ({
  setIsFirstConversation,
  isFirstConversation,
  setCovHistory,
  setIsChatLoading,
}: ChatProps) => {
  const { mutate: chatMutate } = useMutation({
    mutationFn: postMessage,
    onSuccess: (data: ChatDataProps) => {
      if (isFirstConversation) {
        setIsFirstConversation(false);
      }
      setCovHistory((pre) => [
        ...pre,
        { role: "assistant", content: data.response },
      ]);
      setIsChatLoading(false);
    },
    onError: (error) => {
      console.log(error);
    },
  });
  return chatMutate;
};

interface SummaryProps {
  setChatLoading: SetterOrUpdater<boolean>;
  setChatResultContent: SetterOrUpdater<string>;
}

export const useSummaryMutation = ({
  setChatLoading,
  setChatResultContent,
}: SummaryProps) => {
  const { mutate: chatSummaryMutate } = useMutation({
    mutationFn: postSummary,
    onSuccess: (data: string) => {
      console.log("result");
      console.log(data);
      setChatLoading(false);
      setChatResultContent(data);
    },
    onError: () => {
      console.log("result err");
    },
  });
  return chatSummaryMutate;
};
