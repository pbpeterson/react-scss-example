import { useEffect, useReducer, useState } from "react";
import styles from "./styles.module.scss";

const message = "SCCS is awesome!";
const messageSize = message.length;

type MessageParams = {
  message: string;
  counter: number;
  messageSize: number;
};

type IncrementNumber = {
  type: "increment";
};

type AddLetter = {
  type: "addLetter";
  letter: string;
};

type ActionParams = IncrementNumber | AddLetter;

const dispatchMessage = (state: MessageParams, action: ActionParams) => {
  switch (action.type) {
    case "addLetter":
      return { ...state, message: state.message + action.letter };
    case "increment":
      return { ...state, counter: state.counter + 1 };
    default:
      return state;
  }
};

const defaultValues = { message: "", counter: 0, messageSize: messageSize };

export default function Home() {
  const [messageState, setMessageState] = useReducer(
    dispatchMessage,
    defaultValues,
    (v: MessageParams) => {
      return { ...v };
    }
  );

  useEffect(() => {
    if (messageState.counter < messageSize) {
      const timer = setTimeout(() => {
        setMessageState({
          type: "addLetter",
          letter: message[messageState.counter],
        });
        setMessageState({ type: "increment" });
      }, 500);
      return () => clearTimeout(timer);
    }
  }, [messageState.counter]);

  return (
    <div className={styles.wrapper}>
      {" "}
      <h1 className={styles.title}>{messageState.message}</h1>{" "}
    </div>
  );
}
