import React from 'react'
import 'antd/dist/antd.css';
import {Box, Slider} from "@mui/material";

type SuperDoubleRangePropsType = {
    onChangeRange?: (value: number[]) => void
    value: number[]
}

const SuperDoubleRange: React.FC<SuperDoubleRangePropsType> = (
    {
        onChangeRange,
        value
    }
) => {

    const onChangeCallback = (e: Event, newValue: number | number[]) => {
        onChangeRange && onChangeRange(newValue as number[])
    }

    return (
        <div>
            <Box sx={{ width: 200 }}>
                <Slider
                    value={[value[0],value[1]]}
                    onChange={onChangeCallback}
                    disableSwap
                />
            </Box>
        </div>

    )
}
export default SuperDoubleRange
