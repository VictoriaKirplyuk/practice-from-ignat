import React from "react";
import Message from "./Message";
import {messagesType} from "./Dialog";
import s from './Message.module.css'

type WindowMessagesPropsType = {
    messages: Array<messagesType>
}

function WindowMessages(props: WindowMessagesPropsType) {
    return(<div>
            {
                props.messages.map(mes => {
                    return (
                        <div className={s.messagesList}>
                            <Message
                                avatar={mes.avatar}
                                name={mes.name}
                                message={mes.message}
                                time={mes.time}
                            />
                        </div>
                    )
                })
            }
        </div>)
}

export default WindowMessages;