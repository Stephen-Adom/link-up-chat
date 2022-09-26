import Picker, { IEmojiData } from "emoji-picker-react";
import { ChangeEvent, useRef, useState } from "react";

const SendMessageForm = () => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [emojiPicker, setEmojiPicker] = useState<boolean>(false);
  const [images, setImages] = useState<string[]>([]);
  const [message, setMessage] = useState<string>("");

  const fileInputRef = useRef<HTMLInputElement>(null!);

  const onEmojiClick = (
    event: React.MouseEvent<Element, MouseEvent>,
    emojiObject: IEmojiData
  ) => {
    setMessage((message) => message + emojiObject.emoji);
  };

  const uploadFile = (e: ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;

    files &&
      Array.from(files).forEach(async (file) => {
        await getBase64(file).then((base64: any) => {
          setImages((current) => [...current, base64]);
        });
      });
  };

  const triggerFileUpload = () => {
    fileInputRef.current.click();
  };

  const getBase64 = (file: File): Promise<any> => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result);
      reader.onerror = (error) => reject(error);
    });
  };

  const removeImage = (imageIndex: number) => {
    setImages((images) =>
      images.filter((image, index) => index !== imageIndex)
    );
  };

  return (
    <>
      {emojiPicker && <Picker onEmojiClick={onEmojiClick} />}

      {images.length ? (
        <div className="file-Upload-Container">
          {images.map((image, index) => {
            return (
              <div className="image-container" key={index}>
                <button
                  type="button"
                  className="removeImageBtn"
                  onClick={() => removeImage(index)}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-4 h-4 stroke stroke-gray-300"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
                <img src={image} className="w-full" alt="" />
              </div>
            );
          })}
        </div>
      ) : null}

      <div className="send-message-form bg-white">
        <div className="search-input bg-gray-200 px-3 py-2 rounded-full flex items-center w-[90%] ">
          <button
            type="button"
            onClick={() => setEmojiPicker((current) => (current = !current))}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6 stroke-gray-500"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.182 15.182a4.5 4.5 0 01-6.364 0M21 12a9 9 0 11-18 0 9 9 0 0118 0zM9.75 9.75c0 .414-.168.75-.375.75S9 10.164 9 9.75 9.168 9 9.375 9s.375.336.375.75zm-.375 0h.008v.015h-.008V9.75zm5.625 0c0 .414-.168.75-.375.75s-.375-.336-.375-.75.168-.75.375-.75.375.336.375.75zm-.375 0h.008v.015h-.008V9.75z"
              />
            </svg>
          </button>
          <input
            type="text"
            className="Type a message bg-gray-200 outline-none w-full px-2"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
          <input
            type="file"
            hidden
            onChange={(e) => uploadFile(e)}
            multiple
            ref={fileInputRef}
          />
          <button type="button" onClick={triggerFileUpload}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6 stroke-gray-500"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M18.375 12.739l-7.693 7.693a4.5 4.5 0 01-6.364-6.364l10.94-10.94A3 3 0 1119.5 7.372L8.552 18.32m.009-.01l-.01.01m5.699-9.941l-7.81 7.81a1.5 1.5 0 002.112 2.13"
              />
            </svg>
          </button>
        </div>

        <div>
          <button
            type="button"
            className="w-[50px] h-[50px] flex items-center justify-center rounded-full bg-primaryColor"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="w-6 h-6 stroke stroke-white -rotate-45"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5"
              />
            </svg>
          </button>
        </div>
      </div>
    </>
  );
};

export default SendMessageForm;
