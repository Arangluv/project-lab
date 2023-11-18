import axios from "axios";
import { BASE_URL } from "../utill/url";

interface MessageProps {
  question: string;
}
export const postMessage = async (data: MessageProps) => {
  return await axios({
    url: `${BASE_URL}/ask/`,
    method: "POST",
    data,
  }).then((result) => result.data);
};

export const postSummary = async (data: MessageProps) => {
  return await axios({
    url: `${BASE_URL}/summary/`,
    method: "POST",
    data,
  }).then((result) => result.data.response);
};
interface ResetProps {
  role: string;
}
export const postReset = async (data: ResetProps) => {
  return await axios({
    url: `${BASE_URL}/reset/`,
    method: "POST",
    data,
  });
};
