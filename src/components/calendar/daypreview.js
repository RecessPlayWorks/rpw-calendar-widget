import React, { useState, useEffect, useRef } from 'react'
import { gsap } from "gsap";
import moment from 'moment'
import dayPreviewStyles from './daypreview.module.scss';
import allEventsData from '../../hooks/use-alleventspreview'



const DayPreview = ({ previewDate }) => {
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
        // var tl = gsap.timeline({ defaults: {  delay: 2 } });
           gsap.set(dateRef,{opacity:0, y:-100})
           gsap.set(listRef,{opacity:0, y:30})
           

           const tl = gsap.timeline({defaults: {opacity: 1,y:0}})
           tl.to(dateRef, { duration:1, ease: 'elastic(1,0.8)', delay: 0.5})
             .to(listRef, { duration:1, ease: "back(1.4)", delay: 0.5})
        
        console.log("dateref: ", dateRef)
            
        // tl.from(['dateRef', 'listRef'], 0.5,{ opacity: 0, ease: Power0.easeOut })            
        // .from(listRef, .8,{ opacity: 0, ease: Power4.easeInOut }, '-=0.5')


    }, [previewDate])

    const db = allEventsData(DBCallParameter)
    console.log("dbLen: ", db.length)
    /* GSAP STUFF */



    /***********************/
    return (

        // <section className={dayPreviewStyles.section}>
        <div className={dayPreviewStyles.container}>
            <h1 ref={elem => dateRef = elem}
            >{moment(previewDate).format("MMM Do")}
            </h1>
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







