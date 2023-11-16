import { useState } from 'react';
import './App.css';
import BotReply from "./bot/botReply";

function App() {
  const [ apiParam, setApiParam ] = useState("");
  const [ msg, setMsg ] = useState("");

  const send = (e) => {
    e.preventDefault();
    setApiParam(msg);
    console.log(apiParam);
  }

  return (
    <div className="App">
      <div className="box">
          <div className="item">
              <div className="icon">
                  <i className="fa fa-user"></i>
              </div>
              <div className="msg">
                  <p>Hello, What are you Looking For?</p>
              </div>
          </div>
          <BotReply/>
      </div>
      
      <form onSubmit={send} >
        <div className="typing-area">
            <div className="input-field">
                <input type="text" id="clientChat" value={msg} placeholder="Type your message" onChange={ (e) => { setMsg(e.target.value) } } required />
            </div>
            <button className='btn'>Send</button>
        </div>
      </form>

    </div>
  );
}

export default App;
