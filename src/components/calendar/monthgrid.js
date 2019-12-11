import React from 'react'
import styled from "styled-components"
import moment from 'moment'

import PrevMonthBuffer from './prevmonthbuffer'
import Days from './days'

import eventsDaysdisplay from '../../hooks/use-alleventsdaysdisplay'



const Month = styled.div`  
    grid-row: 2;
    grid-column: 2;
    display: grid;
    grid-template-columns: repeat(7, 1fr);
    grid-template-rows: repeat(6, 1fr);
    // border: 2px dashed fuchsia;
     &  span {
        // border: 1px dashed white;
    }
`

const MonthGrid = ({ selectedDate, daysArr, dayClick }) => {
    // console.log("selectedMonth: monthGrid", "")
    const dayData = eventsDaysdisplay()
    // console.log("DD: ", dayData)
    /********** Today-Highlight Check **********/
    const currentMonth = moment(selectedDate).format("M")
    const monthCheck = (currentMonth === currentMonth); // eslint-disable-line no-self-compare
    const firstDay = moment(selectedDate).startOf("month"); //String

    return (
        <Month>
            <PrevMonthBuffer firstDay={firstDay} selectedDate={selectedDate} />
            {daysArr.map((item, idx) => {
                // console.log("IT: ", item.own.fullDate)
                let filteredDB = dayData.filter(evtItem => {
                    let hasEvt = evtItem.datesArr.indexOf(item.own.fullDate)
                    return hasEvt !== -1;
                })
                filteredDB.map(fdbitem => (
                    item.own.evtArr.push({ slug: fdbitem.slug, daytag: fdbitem.daytag })
                ))
                return (
                    <Days
                        key={idx}
                        ownData={item}
                        monthCheck={monthCheck}
                        dayClick={dayClick}
                    />
                )
            })}
        </Month>
    )

}

export default MonthGrid;