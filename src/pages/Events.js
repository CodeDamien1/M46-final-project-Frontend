import { useState, useEffect } from 'react';
import '../App.css';

function Events({ setPage, user, setEvent, setEvents, setCities, dmas, dma })
{
    const [tours, setTours] = useState([])

    useEffect(() => 
    {
        const fetchData = async () => 
        {

            try 
            {
                let response = await fetch('https://app.ticketmaster.com/discovery/v2/events.json?&dmaId='+dma+'&apikey=n2Y9JJ9fQzEOez9pLe5PNoxrHWhlE3tx')
                //let response = await fetch('https://app.ticketmaster.com/discovery/v2/events.json?classificationName=music&dmaId=605&apikey=cAnBaAqHpdzdMJ5O67XOv52RdwJpNn1G')
  
                if (!response.ok) 
                {
                    throw new Error(response.statusText)
                }
                const data = await response.json()
                const tour = []
                const event = []
                const cities = []


                for (let i in data['_embedded']['events'])
                {
                    let name = data['_embedded']['events'][i].name
                    let url = data['_embedded']['events'][i].url
                    let venue = data['_embedded']['events'][i]['_embedded']['venues'][0].name
                    let date = data['_embedded']['events'][i]['dates']['start'].localDate
                    let time = data['_embedded']['events'][i]['dates']['start'].localTime
                    let city = data['_embedded']['events'][i]['_embedded']['venues'][0]['city'].name
                    //let state = data['_embedded']['events'][i]['_embedded']['venues'][0]['state'].name


                        if (!event[name])
                        {
                            event[name] = []
                            tour.push(name)
                            cities[name] = []
                        }
                        if (!event[name][city])
                        {
                            event[name][city] = []
                            cities[name].push(city)
                        }
                        if (!event[name][city][date])
                        {
                            event[name][city][date] = []
                        }
                        event[name][city][date].push({name:name, url:url, venue:venue, date:date, time:time, city:city})
                }
                /*
                for (let i in event['Shania Twain: Queen Of Me Tour'])
                {
                    alert(i)
                }
                
                event['Shania Twain: Queen Of Me Tour'].map(evt => {alert(evt.city)})
                */
                setTours(tour.sort())
                setCities(cities.sort())
                setEvents(event)
  
            } 
            catch (error) 
            {
                console.log(error)
            }
        }


        fetchData()
      }, [])


    function users()
    {
        setPage('u')
    }

    function event(name)
    {
        setEvent(name)
        setPage('e')
    }


  return (
    <div className="App">
        <div>Events   User: {user.username}   <input type="button" value="users" onClick={ () => users() } /> </div>

        <div className="event-list">
            {
                tours.map
                ((tour, index) =>
                    {
                        return <div><input type="button" value={tour} onClick={ () => event(tour) }/></div>
                    }
                )
            }
        </div>
    </div>
  )
}

export default Events