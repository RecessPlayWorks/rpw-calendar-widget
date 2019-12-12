import React from "react"
import Layout from "../components/layout"
import EventsPreview from '../components/eventspreview'
import useEvents from '../hooks/use-alleventsdata'
import {Link} from 'gatsby'


const IndexPage = () => {
  
  const events = useEvents();
  // console.log("Evts @ IndexPage: ", events)
  return(
    <Layout >
      <h1>IndexPage</h1>
     <h2>read my events!</h2>
     <Link to="/about">Calendar</Link>
     {
       events.map((evt, idx)=>(
         <EventsPreview key={idx} event={evt}/>
       ))
     }
    </Layout>
  )
}

export default IndexPage

/*
   {
       events.map((evt, idx)=>(
         (idx===3)? <pre key={idx}>{JSON.stringify(evt, null, 2)}</pre>:<pre>none</pre>
       ))
     } 
             //  <pre key={idx}>{JSON.stringify(evt, null, 2)}</pre>
*/