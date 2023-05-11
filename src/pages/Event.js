import '../App.css';

function Event({ setPage, events, event, cities, users })
{

    function details(city)
    {
        let dates = 'These are the dates' + "\n"
        for (let i in events[event].city)
        {
            dates += i + "\n"
        }

        alert(dates)
    }

  return (
    <div className="App">
        <div>{event}</div>
        <div>
            {
                cities[event].map
                ((city, index) =>
                {
                    return <div><input type="button" value={city} onClick={ () => details(city) }/></div>
                }
            )
            }
        </div>
        <div><input type="button" value="events" onClick={ () => setPage('l')} /></div>
    </div>
  )
}

export default Event