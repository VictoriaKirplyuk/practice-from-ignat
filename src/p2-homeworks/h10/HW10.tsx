import React from 'react'
import SuperButton from '../h4/common/c2-SuperButton/SuperButton'
import {useDispatch, useSelector} from "react-redux";
import {AppStoreType} from "./bll/store";
import {loadingAC} from "./bll/loadingReducer";
import Preloader from './6mz.gif'
import s from './HW10.module.css'

function HW10() {

    const loading = useSelector<AppStoreType, boolean>(s => s.loading.loading)
    const dispatch = useDispatch()

    const setLoading = () => {
        dispatch(loadingAC(true))
        console.log('loading...')
        setTimeout(() => {
            dispatch(loadingAC(false))
        }, 2000)
    };

    return (
        <div>
            <hr/>
            <div style={{color: '#800080', fontWeight: 'bold', marginBottom:"30px"}}>homeworks 10</div>

            {/*should work (должно работать)*/}
            <div className={s.loadingForm}>
                {
                    loading
                    ? (<img src={Preloader} alt='' className={s.preImg}/>)
                    : (<div className={s.preload}><SuperButton onClick={setLoading}>set loading...</SuperButton></div>)
                }
            </div>

            <hr/>
            {/*для личного творчества, могу проверить*/}
            {/*<Alternative/>*/}
            <hr/>
        </div>
    )
}

export default HW10;
