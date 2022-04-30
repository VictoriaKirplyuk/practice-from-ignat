import React from "react"
import s from "./Message.module.css";

type MessagePropsType = {
    avatar: string
    name: string
    message: string
    time: string
}

function Message(props: MessagePropsType) {
    return (<div className={s.messageForm} >
        <img className={s.avatar} src={props.avatar}/>
        <div className={s.triangle}></div>
        <div className={s.messageWindow}>
            <div className={s.name}>{props.name}</div>
            <div className={s.sms}>
                <span className={s.text}>{props.message}</span>
                <div className={s.time}>{props.time}</div>
            </div>
        </div>
    </div>)
}

export default Message;