import React, { useState, useEffect, useRef } from 'react'
import gsap, { Power0,Power4 } from 'gsap'
import moment from 'moment'
import dayPreviewStyles from './daypreview.module.scss';
import allEventsData from '../../hooks/use-alleventspreview'



const DayPreview = ({ previewDate }) => {
    // console.log("Bounce: ", Bounce)
    // console.log("cust: ease", CustomEase)
    const [DBCallParameter, setDBCallParameter] = useState('default')
    
    useEffect(() => {
        setDBCallParameter(previewDate)
    }, [previewDate])

    let dateRef = useRef(null)
    let listRef = useRef(null)
    // let titleRef = useRef(null)
    // let hoursRef = useRef(null)
    // let hrRef = useRef(null)
    // let descRef = useRef(null)
    useEffect(() => {
        var tl = gsap.timeline({ defaults: { duration: 3, delay: 0.1 } });
        tl  .from(dateRef, 0.5,{ opacity: 0, ease: Power0.easeOut })
            
            .from(listRef, .8,{ opacity: 0, ease: Power4.easeInOut }, '-=0.5')


    }, [previewDate])

    const db = allEventsData(DBCallParameter)
    console.log("dbLen: ", db.length)
    /* GSAP STUFF */



    /***********************/
    return (

        // <section className={dayPreviewStyles.section}>
        <div className={dayPreviewStyles.container}>
            <h2
                ref={elem => dateRef = elem}
            >{moment(previewDate).format("MMM Do")}
            </h2>
            <ul ref={elem => listRef = elem}
                className={dayPreviewStyles.previewList}>
                {db.map((item, idx) => (
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
        // </section>
    )
}

export default DayPreview;

// [ containerRef, dateRef, listRef, titleRef, hoursRef, hrRef, descRef ]







