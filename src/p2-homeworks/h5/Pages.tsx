import React from 'react'
import {Route, Routes, Navigate} from 'react-router-dom'
import Junior from "./pages/Junior";
import JuniorPlus from "./pages/JuniorPlus";
import PreJunior from "./pages/PreJunior";
import Error404 from "./pages/Error404";


export const PATH = {
    PRE_JUNIOR: '/pre-junior',
    JUNIOR: '/junior',
    JUNIOR_PlUS: '/junior-plus'
}

function Pages() {
    return (<Routes>
        <Route path={'/'} element={<Navigate to={PATH.PRE_JUNIOR}/>}/>
        <Route path={PATH.PRE_JUNIOR} element={<PreJunior/>}/>
        <Route path={PATH.JUNIOR} element={<Junior/>}/>
        <Route path={PATH.JUNIOR_PlUS} element={<JuniorPlus/>}/>
        <Route path={'*'} element={<Error404/>}/>
    </Routes>)
}

export default Pages
