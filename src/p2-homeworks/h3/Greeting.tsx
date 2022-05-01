import React, {ChangeEvent} from 'react'
import s from './Greeting.module.css'

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
                <input value={name} onChange={setNameCallback} className={inputClass}/>
                <button onClick={addUser}>add</button>
                <span className={s.usersCount}>{totalUsers}</span>
            </div>
            <span className={s.error}>{error}</span>
        </div>
    )
}

export default Greeting
