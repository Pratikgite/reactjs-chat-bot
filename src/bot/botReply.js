import React, { useState } from 'react';

const BotReply = () => {
    let [ clientMsg, setClientMsg ] = useState("");

    const handleClick = (e) => {
        e.preventDefault();
        console.log(e.target.value);
        setClientMsg(e.target.value);
    }

    return (
        <div>
            <div className="item">
                <div className="suggestionBtn">
                    <ul className="list-inline">
                        <li className="d-inline p-1">
                            <button className="btn btn-outline-primary" onClick={ handleClick } value={"Movies"} type="button">Movies</button>
                        </li>
                        <li className="d-inline p-1">
                            <button className="btn btn-outline-primary" onClick={ handleClick } value={"TV"} type="button">TV Shows</button>    
                        </li>
                    </ul>
                </div>
            </div>
            <br clear="both" />
            <div className="item right">
                <div className="icon-right">
                    <i className="fa fa-user"></i>
                </div>
                <div className="msg">
                    <p>{ clientMsg }</p>
                </div>
            </div>
        </div>
    );
}

export default BotReply;