import React, { useState, useRef } from "react";
import { FormInput } from "../util/types";

const scriptURL =
  "https://script.google.com/macros/s/AKfycbzH2BiPzBrEPoUB_e0b6zzWbrOvxv-wKuTwkk9yJxCKSzVA1NidplIJC1QwfNeeiS2pyA/exec";

const ContactForm = () => {
  const [spinning, setSpinning] = useState<boolean>(false);
  const [messageSent, setMessageSent] = useState<boolean>(false);
  const [messageFailed, setMessageFailed] = useState<boolean>(false);

  const [formInput, setFormInput] = useState<FormInput>({
    name: "",
    email: "",
    message: "",
  });

  function clearForm(): void {
    setFormInput({
      name: "",
      email: "",
      message: "",
    });
  }

  function handleInputChange(e: { target: { name: any; value: any } }) {
    const { name, value } = e.target;
    setFormInput({ ...formInput, [name]: value });
  }

  function sendMessage(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSpinning(true);
    sendMessageToGoogle(formInput);
  }

  function sendAnotherMessage() {
    setMessageSent(false);
  }

  const sendMessageToGoogle = async (input: FormInput): Promise<void> => {
    let formData = new FormData();
    formData.append("name", input.name);
    formData.append("email", input.email);
    formData.append("message", input.message);

    fetch(scriptURL, { method: "POST", body: formData })
      .then((response) => {
        clearForm();
        setSpinning(false);
        setMessageSent(true);
      })
      .catch((error) => {
        setMessageFailed(true);
      });
  };

  const inputRef = useRef<HTMLInputElement>(null);
  const messageRef = useRef<HTMLTextAreaElement>(null);

  if (messageSent) {
    return (
      <div className="w-5/6 bg-primaryBlue rounded-md flex flex-col justify-center items-center h-96 my-6">
        <h1 className="text-xl uppercase font-bold text-darkBlue">Message Successfully Sent</h1>
        <div
          className="text-lg uppercase font-bold cursor-pointer rounded-md m-2 bg-darkBlue hover:bg-extraDarkBlue p-5 text-white"
          onClick={sendAnotherMessage}
        >
          Send Again
        </div>
      </div>
    );
  }

  return (
    <div className="relative w-5/6 max-w-7xl my-10">
      {spinning ? (
        <div className="absolute w-full h-full bg-primaryBlue/50 rounded-md">
          <svg
            className="absolute left-1/4 right-1/2 top-1/4 bottom-1/2 w-1/2 h-1/2 text-gray-200 animate-spin dark:text-gray-400 fill-darkBlue"
            viewBox="0 0 100 101"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
              fill="currentColor"
            />
            <path
              d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
              fill="currentFill"
            />
          </svg>
        </div>
      ) : (
        <></>
      )}

      {messageFailed ? (
        <div className="w-full bg-primaryBlue rounded-md flex flex-col justify-center items-center h-36">
          <h1 className="text-xl uppercase font-bold text-darkBlue">Message Failed To Send</h1>
          <p className="text-xl uppercase font-bold text-darkBlue">Please Try Again</p>
        </div>
      ) : (
        <></>
      )}

      <form
        name="submit-to-google-sheet"
        className="my-5 form-input bg-gray-dark border-0 text-extraDarkBlue dark:text-white"
        onSubmit={(e) => {
          sendMessage(e);
        }}
      >
        <div className="flex flex-col p-5">
          <div className="flex flex-col md:flex-row w-full justify-around">
            <div className="flex flex-col w-full md:w-1/2 mx-2 my-5">
              <input
                type="text"
                name="name"
                aria-label="name"
                placeholder="Name"
                value={formInput.name}
                ref={inputRef}
                onChange={handleInputChange}
                className="p-5 bg-extraLightBlue dark:bg-darkBlue rounded-md border-none focus:outline-none focus:ring-2 focus:ring-primaryBlue text-extraDarkBlue dark:text-white placeholder:text-extraDarkBlue dark:placeholder:text-white"
                required
              />
            </div>
            <div className="flex flex-col w-full md:w-1/2 mx-2 my-5">
              <input
                type="text"
                name="email"
                aria-label="email"
                placeholder="Email"
                value={formInput.email}
                ref={inputRef}
                onChange={handleInputChange}
                className="p-5 bg-extraLightBlue dark:bg-darkBlue rounded-md border-none focus:outline-none focus:ring-2 focus:ring-primaryBlue text-extraDarkBlue dark:text-white placeholder:text-extraDarkBlue dark:placeholder:text-white"
                required
              />
            </div>
          </div>
          <div className="flex flex-row w-full mx-2 my-5">
            <div className="flex flex-col w-full">
              <textarea
                name="message"
                aria-label="message"
                placeholder="Message..."
                value={formInput.message}
                rows={6}
                ref={messageRef}
                onChange={handleInputChange}
                className="p-5 bg-extraLightBlue dark:bg-darkBlue rounded-md border-none focus:outline-none focus:ring-2 focus:ring-primaryBlue text-extraDarkBlue dark:text-white placeholder:text-extraDarkBlue dark:placeholder:text-white"
                required
              />
            </div>
          </div>
          <div className="flex flex-row my-5">
            <button
              type="submit"
              className="w-36 rounded-md bg-primaryBlue hover:bg-darkBlue text-white text-sm font-bold uppercase mx-2 p-3"
            >
              Send
            </button>
            <button
              className="w-36 rounded-md bg-primaryBlue hover:bg-darkBlue text-white text-sm font-bold uppercase mx-2 p-3"
              onClick={clearForm}
            >
              Clear
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};
export default ContactForm;
