import React from "react"
import moment from 'moment'

import calNavStyles from './calendarnav.module.scss';

const CalNav = ({decMonth, incMonth, selectedDate}) => {
    // console.log("> calNav", selectedDate)
    return (
        <nav className={calNavStyles.nav}>
            <button onClick={decMonth}>&#x3c;</button>
            <h1>{moment(selectedDate).format("MMMM")}</h1>
            <button onClick={incMonth}>&#x3e;</button>
        </nav>
    )}

export default CalNav;