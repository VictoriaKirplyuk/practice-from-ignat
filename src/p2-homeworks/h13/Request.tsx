import React, {ChangeEvent, useState} from "react"
import {RequestAPI} from "./RequestAPI";
import SuperButton from "../h4/common/c2-SuperButton/SuperButton";
import SuperCheckbox from "../h4/common/c3-SuperCheckbox/SuperCheckbox";

type ResponseType = {
    ok: boolean
    redirected: boolean
    status: number
    statusText: string
    type: string
    url: string
}

function Request() {

    const [checked, setChecked] = useState<boolean>(false)
    const [info, setInfo] = useState<ResponseType>()

    function request() {
        if (checked) {
            RequestAPI.firstRequest(checked)
                .then(res => {
                    console.log(res)
                    if (res.status === 200) {
                        setInfo({
                            ok: res.ok,
                            redirected: res.redirected,
                            status: res.status,
                            statusText: res.statusText,
                            type: res.type,
                            url: res.url
                        })
                    }
                })
                .catch(error => {
                    console.log({...error});
                    console.log(error.response ? error.response.data.errorText : error.message);
                    setInfo({
                        ok: error.ok,
                        redirected: error.redirected,
                        status: error.status,
                        statusText: error.statusText,
                        type: error.type,
                        url: error.url
                    })
                })
        }

    }

    return (<div>
        <span style={{color: "white"}}>{info && JSON.stringify(info)}</span>
        <div>
            <SuperButton
                onClick={request}>
                CLICK
            </SuperButton>
            <SuperCheckbox
                checked={checked}
                onChange={(e: ChangeEvent<HTMLInputElement>) => {
                    setChecked(e.currentTarget.checked)
                }}
            />
        </div>
    </div>)
}

export default Request;