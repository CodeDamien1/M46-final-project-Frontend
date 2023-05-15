import '../../App.css';

function Event({ setPage, event})
{


  return (
    <div className="App">
        <div className="event-item">
            <div>{event.name}</div>
            <div>{event.city}</div>
            <div>{event.date}</div>
        </div>
        <div><input type="button" value="events" onClick={ () => setPage('l')} /></div>
    </div>
  )
}

export default Event