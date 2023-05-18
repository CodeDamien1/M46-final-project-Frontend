import { useState, useEffect } from "react";
import "../../App.css";
import "./Events.css";

function Events({ setPage, setEvent, dma }) 
{
  const [events, setEvents] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        let response = await fetch(
          `${process.env.REACT_APP_API_URL}${dma}${process.env.REACT_APP_API_KEY}`
        );

        if (!response.ok) {
          throw new Error(response.statusText);
        }

        const data = await response.json();
        const events = [];

        for (let i in data["_embedded"]["events"]) {
          let event = data["_embedded"]["events"][i];

          // Get event image
          let imageUrl = "";
          let imageUrl2 = "";
          if (event["images"] && event["images"].length > 0) {
            imageUrl = event["images"][0]["url"]
            imageUrl2 = event["images"][0]["url"]

            for (let j in event["images"])
            {
              if (imageUrl !== event["images"][j]["url"])
              {
                imageUrl2 = event["images"][j]["url"]
              }
            }
          }


          events.push({
            name: event["name"],
            url: event["url"],
            venue: event["_embedded"]["venues"][0]["name"],
            date: event["dates"]["start"]["localDate"],
            time: event["dates"]["start"]["localTime"],
            city: event["_embedded"]["venues"][0]["city"]["name"],
            imageUrl: imageUrl,
            imageUrl2: imageUrl2
          });
        }

        setEvents(events);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
    //eslint-disable-next-line
  }, []);

  function users() {
    setPage("u");
  }

  function viewEvent(event) {
    setEvent(event)
    setPage("e")
  }

  return (
    <div className="App">
      <div>
        <span className="event-title">Events</span>
        <input
          type="button"
          value="users"
          className="user-button"
          onClick={() => users()}
        />
      </div>

      <div className="events-list">
        {events.map((event, index) => {
          return (
            <div className="events-item" key={index}>
              <div className="events-name">{event.name}</div>
              <img
                    src={event.imageUrl}
                    alt={event.name}
                    className="events-image"
              />
              <div>{event.city}</div>
              <div>{event.date}</div>
              <input
                type="button"
                value="select"
                className="events-button"
                onClick={() => viewEvent(event)}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Events;
