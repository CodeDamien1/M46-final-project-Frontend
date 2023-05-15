import { useState, useEffect } from 'react';
import '../../App.css'
import './Events.css'

function Events({ setPage, user, setEvent, dma }) {
    const [events, setEvents] = useState([])

    useEffect(() => {
        const fetchData = async () => {

            try {
                let response = await fetch(`${process.env.REACT_APP_API_URL}${dma}${process.env.REACT_APP_API_KEY}`)

                if (!response.ok) {
                    throw new Error(response.statusText)
                }
                const data = await response.json()
                const tour = []
                const events = []
                const cities = []


                for (let i in data['_embedded']['events']) {
                    let name = data['_embedded']['events'][i].name
                    let url = data['_embedded']['events'][i].url
                    let venue = data['_embedded']['events'][i]['_embedded']['venues'][0].name
                    let date = data['_embedded']['events'][i]['dates']['start'].localDate
                    let time = data['_embedded']['events'][i]['dates']['start'].localTime
                    let city = data['_embedded']['events'][i]['_embedded']['venues'][0]['city'].name

                    /*
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
                    */

                    tour.push(name)

                    events.push({ name: name, url: url, venue: venue, date: date, time: time, city: city })
                }

                //setTours(tour.sort())
                //setCities(cities.sort())

                setEvents(events)

            }
            catch (error) {
                console.log(error)
            }
        }


        fetchData()
        //eslint-disable-next-line
    }, [])


    function users() {
        setPage('u')
    }

    function viewEvent(event) {
        setEvent(event)
        setPage('e')
    }


    return (
        <div className="App">
            <div><span className="event-title">Events</span>   <span className="user-name">User: <i>{user.username}</i> </span>  <input type="button" value="users" className="user-button" onClick={() => users()} /> </div>

            <div className="event-list">
                {
                    events.map
                        ((event, index) => {
                            return <div className="event-item">
                                <img src={event.url} height="10vw" width="10vw" />
                                <div>{event.name}</div>
                                <div>{event.city}</div>
                                <div>{event.date}</div>
                                <input type="button" value="select" className="event-button" onClick={() => viewEvent(event)} />
                            </div>
                        }
                        )
                }
            </div>
        </div>
    )
}

export default Events