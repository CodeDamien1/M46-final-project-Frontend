import '../../App.css'
import './Event.css'

function Event({ setPage, event})
{

  return (
    <div className="App">
        <div className="event-item">
            <div>{event.name}</div>
            <div><img src={event.imageUrl2} className="event-image" alt={event.name} /></div>
            <div>{event.city}</div>
            <div>{event.date}</div>
            <div>{event.time}</div>
            <div>{event.venue}</div>
        </div>
        <div><input type="button" value="events" className="event-button" onClick={ () => setPage('l')} /></div>
    </div>
  )
}

export default Event