import React, { useState } from "react";
import EmojiPicker from "emoji-picker-react";
import "./chat.css";

const Chat = () => {
  const [open, setOpen] = useState(false);
  const [text, setText] = useState("");

  const handleEmogi = (e) => {
    setText((prev) => prev + e.emoji);
  };

  return (
    <div className="chat">
      <div className="top">
        <div className="user">
          <img src="public/avatar.png" alt="" />
          <div className="texts">
            <span>Monsaf ali</span>
            <p>Lorem ipsum dolor sit amet consectetur.</p>
          </div>
        </div>
        <div className="icons">
          <img src="public/phone.png" alt="" />
          <img src="public/video.png" alt="" />
          <img src="public/info.png" alt="" />
        </div>
      </div>
      <div className="center">
        <div className="message">
          <img src="public/avatar.png" alt="" />
          <div className="texts">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde,
              optio nam suscipit reiciendis minus beatae nesciunt nemo illo
              aliquid dolores quod consequuntur debitis vitae nostrum adipisci
              quibusdam aspernatur recusandae ullam?
            </p>
            <span>1 min ago</span>
          </div>
        </div>
        <div className="message own">
          <div className="texts">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde,
              optio nam suscipit reiciendis minus beatae nesciunt nemo illo
              aliquid dolores quod consequuntur debitis vitae nostrum adipisci
              quibusdam aspernatur recusandae ullam?
            </p>
            <span>1 min ago</span>
          </div>
        </div>

        <div className="message">
          <img src="public/avatar.png" alt="" />
          <div className="texts">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde,
              optio nam suscipit reiciendis minus beatae nesciunt nemo illo
              aliquid dolores quod consequuntur debitis vitae nostrum adipisci
              quibusdam aspernatur recusandae ullam?
            </p>
            <span>1 min ago</span>
          </div>
        </div>

        <div className="message own">
          <div className="texts">
            <img
              src="https://images.pexels.com/photos/28860862/pexels-photo-28860862/free-photo-of-vibrant-nightlife-on-fremont-street-las-vegas.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
              alt=""
            />
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde,
              optio nam suscipit reiciendis minus beatae nesciunt nemo illo
              aliquid dolores quod consequuntur debitis vitae nostrum adipisci
              quibusdam aspernatur recusandae ullam?
            </p>
            <span>1 min ago</span>
          </div>
        </div>

        <div className="message">
          <img src="public/avatar.png" alt="" />
          <div className="texts">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde,
              optio nam suscipit reiciendis minus beatae nesciunt nemo illo
              aliquid dolores quod consequuntur debitis vitae nostrum adipisci
              quibusdam aspernatur recusandae ullam?
            </p>
            <span>1 min ago</span>
          </div>
        </div>
      </div>
      <div className="bottom">
        <div className="icons">
          <img src="public/img.png" alt="" />
          <img src="public/camera.png" alt="" />
          <img src="public/mic.png" alt="" />
        </div>
        <input
          type="text"
          placeholder="Type a Message ..."
          value={text}
          onChange={(e) => setText(e.target.value)}
        />

        <div className="emoji">
          <img
            src="public/emoji.png"
            alt=""
            onClick={() => setOpen((prev) => !prev)}
          />
          <div className="picker">
            <EmojiPicker open={open} onEmojiClick={handleEmogi} />
          </div>
        </div>
        <button className="sendButton">Send</button>
      </div>
    </div>
  );
};

export default Chat;
