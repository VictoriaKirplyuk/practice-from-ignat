import React from 'react'
import {AffairType} from "./HW2";
import s from './Affairs.module.css'

type AffairPropsType = {
    affair: AffairType
    deleteAffairCallback: (_id: number) => void
}

function Affair(props: AffairPropsType) {
    const deleteCallback = () => {
        props.deleteAffairCallback(props.affair._id)
    }

    return (<div className={s.item}>
            <div className={s.affairName}>{props.affair.name}</div>
            <div className={s.affairPriority}>{props.affair.priority}</div>
            <div className={s.deleteButton}><button onClick={deleteCallback}>X</button></div>
        </div>
    )
}

export default Affair
