import React from 'react'
import moment from 'moment'

import dayStyles from './days.module.scss';

const DaysGrid = ({ ownData, monthCheck, dayClick }) => {
    const { fullDate, evtArr } = ownData.own;// this is data distinct for each day

    const presentDay = moment().format("YYYY-MM-DD")
    const formedDay = moment(fullDate).format("D")
    return (
        <div className={dayStyles.container}>
            <div className={monthCheck && fullDate === presentDay ? dayStyles.currentDate : dayStyles.calendarDay}
                onClick={() => dayClick(fullDate)}
            >
                <button>{formedDay}</button>
                {evtArr.map((item, idx) => (
                    <p key={idx} className={item.daytag}>{item.slug}</p>
                ))}
            </div>
        </div>
    )

}

export default DaysGrid;
