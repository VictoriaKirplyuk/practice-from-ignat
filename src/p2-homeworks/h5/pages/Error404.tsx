import React from 'react'
import s from './Error404.module.css'

function Error404() {
    return (
        <div>
            <div className={s.error}>404 PAGE NOT FOUND</div>
            <div className={s.errorText}>This page isn't available. Sorry about that. <br/>Try searching for something else.</div>
        </div>
    )
}

export default Error404
