import React, {useState} from 'react'
import SuperRange from './common/c7-SuperRange/SuperRange'
import SuperDoubleRange from './common/c8-SuperDoubleRange/SuperDoubleRange'
import s from './HW11.module.css'


function HW11() {
    const [value1, setValue1] = useState<number>(0)
    const [value2, setValue2] = useState<number>(100)

    const onChangeDoubleInputRangeHandle = (value: Array<number>) => {
        setValue1(value[0])
        setValue2(value[1])
    }

    return (
        <div>
            <hr/>
            <div style={{color: '#800080', fontWeight: 'bold', marginBottom:"30px"}}>homeworks 11</div>

            <div className={s.containerRange}>
                <span className={s.value}>{value1}</span>
                <SuperRange
                    value={value1}
                    onChangeRange={setValue1}
                />
            </div>

            <div className={s.containerSuperRange}>
                <span className={s.value}>{value1}</span>
                <div className={s.slider}>
                    <SuperDoubleRange value={[value1, value2]}
                                      onChangeRange={onChangeDoubleInputRangeHandle}/>
                </div>
                <span className={s.value}>{value2}</span>
            </div>

            <hr/>
            {/*для личного творчества, могу проверить*/}
            {/*<AlternativeSuperRange/>*/}
            {/*<AlternativeSuperDoubleRange/>*/}
            <hr/>
        </div>
    )
}

export default HW11
