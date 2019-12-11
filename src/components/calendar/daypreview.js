import React, { useState, useEffect } from 'react'
import moment from 'moment'

import dayPreviewStyles from './dayPreview.module.scss';
import allEventsData from '../../hooks/use-alleventspreview'


const DayPreview = ({ previewDate }) => {
    // console.log("dayPreviewClicked", previewDate)
    const [DBCallParameter, setDBCallParameter] = useState('default')

    const [applyClass, setApplyClass] = useState('HI!')

    useEffect(() => {
        setDBCallParameter(previewDate)
        setApplyClass(applyClass)       
    },[previewDate,applyClass])
    
    const db = allEventsData(DBCallParameter)

    return (
        <div className={dayPreviewStyles.container}>
            <h2>{moment(previewDate).format("MMM Do")}</h2>
            <ul className={dayPreviewStyles.previewList}>
            {db.map((item, idx)=>(
                <li key={idx}>
                    <p>{item.event.title}</p>
                    <p>{item.event.hours}</p>
                <hr/>
                <p>{item.event.desc}</p>
                {/* <Link to={item.event.slug}>find out more!</Link> */}
                </li>
            ))}
            </ul>
        </div>
    )
}

export default DayPreview;