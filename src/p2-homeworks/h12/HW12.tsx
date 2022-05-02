import React from "react";
import s from "./HW12.module.css";
import {useDispatch, useSelector} from "react-redux";
import {changeThemeC} from "./bll/themeReducer";
import {AppStoreType} from "../h10/bll/store";

function HW12() {

    const theme = useSelector<AppStoreType, string>(state => state.theme.setTheme)
    const dispatch = useDispatch()

    const onChangeCallback = (theme: string) => {
        dispatch(changeThemeC(theme))
    }

    return (
        <div className={s[theme]}>
            <hr/>
            <span className={s[theme + '-text']}>
                homeworks 12
                <input type='button' value='Dark theme' onClick={() => onChangeCallback('dark')}/>
                <input type='button' value='Red theme' onClick={() => onChangeCallback('red')}/>
                <input type='button' value='Some theme' onClick={() => onChangeCallback('some')}/>
            </span>
            <hr/>
        </div>
    );
}

export default HW12;
