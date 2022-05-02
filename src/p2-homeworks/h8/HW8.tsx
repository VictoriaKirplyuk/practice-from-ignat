import React, {useState} from 'react'
import {checkAC, homeWorkReducer, sortAC} from './bll/homeWorkReducer'
import SuperButton from '../h4/common/c2-SuperButton/SuperButton'
import s from './HW8.module.css'

export type UserType = {
    _id: number
    name: string
    age: number
}

const initialPeople: Array<UserType> = [
    {_id: 0, name: 'Кот', age: 3},
    {_id: 1, name: 'Александр', age: 66},
    {_id: 2, name: 'Коля', age: 16},
    {_id: 3, name: 'Виктор', age: 44},
    {_id: 4, name: 'Дмитрий', age: 40},
    {_id: 5, name: 'Ирина', age: 55},
]

function HW8() {
    const [people, setPeople] = useState<Array<UserType>>(initialPeople)

    const finalPeople = people.map((p: UserType) => (
        <div key={p._id} className={s.usersForm}>
            <div className={s.name}>{p.name}</div>
            <div className={s.age}>{p.age}</div>
        </div>
    ))

    const sortUp = () => setPeople(homeWorkReducer(initialPeople, sortAC('up')))
    const sortDown = () => setPeople(homeWorkReducer(initialPeople, sortAC('down')))
    const check = () => setPeople(homeWorkReducer(initialPeople, checkAC(18)))


    return (
        <div>
            <hr/>
            <div style={{color: '#800080', fontWeight: 'bold', marginBottom:"30px"}}>homeworks 8</div>
            <div className={s.form}>
                <div className={s.usersGroup}>
                    {finalPeople}
                </div>

                <div className={s.buttonGroup}>
                    <div className={s.button}> <SuperButton onClick={sortUp}>sort up</SuperButton></div>
                    <div className={s.button}> <SuperButton onClick={sortDown}>sort down</SuperButton></div>
                    <div className={s.button}> <SuperButton onClick={check}>check 18</SuperButton></div>
                </div>
            </div>

            <hr/>
            {/*для личного творчества, могу проверить*/}
            {/*<AlternativePeople/>*/}
            <hr/>
        </div>
    )
}

export default HW8;
