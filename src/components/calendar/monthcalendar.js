import React, { useState } from 'react'
import moment from 'moment'
import CalNav from './calendarnav'
import DayPrevPanel from './daypreview'
import MonthGrid from './monthgrid'
import {monthArrayMaker} from '../../utils/utils'

import monthCalendarStyles from './monthcalendar.module.scss';

const MonthCalendar = () => {
    const [selectedDate, setSelectedDate] = useState(moment().format('YYYY-MM-DD'))
    // const [selectedPreviewDisplayDay, setSelectedPreviewDisplayDay] = useState(moment().format('YYYY-MM-DD'))
    const [previewDate, setPreviewDate] = useState(moment().format('YYYY-MM-DD'))

    const incrementMonth = () => {
        let addMonth = moment(selectedDate).add(1, 'month').format("YYYY-MM-DD");
        return setSelectedDate(addMonth)
    }

    const decrementMonth = () => {
        let subtractMonth = moment(selectedDate).subtract(1, 'month').format("YYYY-MM-DD");
        return setSelectedDate(subtractMonth)
    }
    const selectDay = (dateString) => {
        // console.log("selectDay Input:", dateString)
        return setPreviewDate(dateString)
    }

    /********************************************************/
    
    
    
    const daysArr = monthArrayMaker(selectedDate)

    return (
        <div className={monthCalendarStyles.container}>
            <CalNav
                decMonth={decrementMonth}
                incMonth={incrementMonth}
                selectedDate={selectedDate}
            />
            <DayPrevPanel
                previewDate={previewDate}
            />
            <MonthGrid
                daysArr={daysArr}
                selectedDate={selectedDate}
                dayClick={selectDay}
                // data={data}
            />
        </div>
    )

}

export default MonthCalendar;




    // useEffect(() => {
    //     // code to run on component mount
    //     // const selectedMonthObj = moment().add(Number(moment().format("D")), 'month'); //moment object

    //     // console.log("YAYA!!", selectedMonthObj, Number(moment().format("D")))
    //     // const [displayObj, setdisplayObj] = useState("yeah!")


    //   }, [count])



