import React from "react";
import s from "./HW12.module.css";
import {useDispatch, useSelector} from "react-redux";
import {changeThemeC} from "./bll/themeReducer";
import {AppStoreType} from "../h10/bll/store";
import SuperButton from "../h4/common/c2-SuperButton/SuperButton";

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
                <SuperButton onClick={() => onChangeCallback('dark')}>Dark theme</SuperButton>
                <SuperButton onClick={() => onChangeCallback('red')}>Red theme</SuperButton>
                <SuperButton onClick={() => onChangeCallback('some')}>Some theme</SuperButton>
            </span>
            <hr/>
        </div>
    );
}

export default HW12;
