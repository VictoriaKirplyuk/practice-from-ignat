import React, {ChangeEvent, useState} from 'react'
import s from './Message.module.css'
import WindowMessages from "./WindowMessages";

export type messagesType = {
    avatar: string
    name: string
    message: string
    time: string
}

function Dialog() {

    const [messageText, setMessageText] = useState('')
    const [messages, setMessages] = useState<Array<messagesType>>([])

    const addMessage = () => {
        const newMessage = createMessage(messageText)

        setMessages([...messages, newMessage])
    }

    const createMessage = (message: string) => {
        const hour = new Date().getHours()
        const minute = new Date().getMinutes()
        const time = `${hour}:${minute}`
        return {
            avatar: 'https://i.mycdn.me/i?r=AzEOxUXG5QgodWC3x6hM10Ckx0BZLGOfgD6nXhJoLZbA4MAmq-mVtRg1TeCwydjhl-Q&fn=sqr_288',
            name: 'Victoria',
            message: message,
            time: time
        }
    }

    return (<div className={s.dialog} >
            <WindowMessages messages={messages} />
            <div className={s.form}>
                <textarea className={s.textarea}
                          value={messageText}
                          onChange={(e: ChangeEvent<HTMLTextAreaElement>) => {
                              setMessageText(e.currentTarget.value)
                          }}
                />
                <div>
                    <button className={s.sendButton} onClick={addMessage}>SEND</button>
                </div>
            </div>
        </div>
    )
}

export default Dialog