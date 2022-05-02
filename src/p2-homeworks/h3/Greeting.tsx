import React, {ChangeEvent} from 'react'
import s from './Greeting.module.css'
import SuperButton from "../h4/common/c2-SuperButton/SuperButton";
import SuperInputText from "../h4/common/c1-SuperInputText/SuperInputText";

type GreetingPropsType = {
    name: string
    setNameCallback: (e: ChangeEvent<HTMLInputElement>) => void
    addUser: () => void
    error: string | null
    totalUsers: number
}

// презентационная компонента (для верстальщика)
const Greeting: React.FC<GreetingPropsType> = (
    {name, setNameCallback, addUser, error, totalUsers} // деструктуризация пропсов
) => {
    const inputClass = error ? s.inputError : undefined

    return (
        <div className={s.form}>
            <div>
                <SuperInputText value={name} onChange={setNameCallback} className={inputClass}/>
                <SuperButton onClick={addUser}>add</SuperButton>
                <span className={s.usersCount}>{totalUsers}</span>
            </div>
            <span className={s.error}>{error}</span>
        </div>
    )
}

export default Greeting
