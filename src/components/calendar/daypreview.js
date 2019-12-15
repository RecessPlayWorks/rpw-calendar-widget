import React, { useState, useEffect, useRef } from 'react'
import gsap  from "gsap";
import moment from 'moment';
import dayPreviewStyles from './daypreview.module.scss';
import allEventsData from '../../hooks/use-alleventspreview';

const DayPreview = ({ previewDate }) => {
    const [DBCallParameter, setDBCallParameter] = useState('default')

    useEffect(() => {
        setDBCallParameter(previewDate)
    }, [previewDate])

    let dateRef = useRef(null)
    let listRef = useRef(null)

    useEffect(() => {
        gsap.set(dateRef, { opacity: 0, y: -100 })
        gsap.set(listRef, { opacity: 0, y: 30 })

        const tl = gsap.timeline({ defaults: { opacity: 1 } })

        tl.to(dateRef, { duration: .6, y: 0, ease: 'elastic(1,0.8)', delay: 0.2 })
          .to(listRef, { duration: .8, y: 0, ease: "back(1.4)" }, '-=0.5')
    }, [previewDate])

    const db = allEventsData(DBCallParameter)

    /***********************/
    return (

        <div className={dayPreviewStyles.container}>
            <h1 ref={elem => dateRef = elem}>{moment(previewDate).format("MMM Do")}</h1>

            <ul ref={elem => listRef = elem}
                className={dayPreviewStyles.previewList} >
                {db.map((item, idx) => (
                    <li key={idx}>
                        <p>{item.event.title}</p>
                        <p>{item.event.hours}</p>
                        <hr />
                        <p>{item.event.desc}</p>
                        {/* <Link to={item.event.slug}>find out more!</Link> */}
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default DayPreview;
