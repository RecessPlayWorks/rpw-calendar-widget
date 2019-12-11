import React from 'react'
import { Link } from 'gatsby'
import moment from 'moment'


import evtPrevStyles from './eventspreview.module.scss';

const EventsPreview =({event}) => {
    // console.log(">evtPrev: event", event);
    return (
        <article className={evtPrevStyles.container}>
            <h1>{event.title}</h1>
            <h2>start date: {moment(event.startDate).format("MMMM Do, YYYY")}</h2>
            <h3>{event.desc}</h3>
            <p>{event.excerpt}</p><Link to={`/${event.slug}`} >...learn more!</Link>
        </article>
    )

}

export default EventsPreview;