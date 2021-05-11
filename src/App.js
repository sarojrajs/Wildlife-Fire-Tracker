import {useState,useEffect} from 'react'
import Map from './components/Map'
import Loader from './components/Loader'

function App() {
  const [eventData,setEventData]=useState([])
  const [loading,setLoading]=useState(false)

  useEffect(()=>{
    const fetchEvents= async()=>{
      // setLoading(true)
      // const res=await fetch('https://eonet.sci.gsfc.nasa.gov/api/v2.1/events')
      // const {events}=await res.json()
      // console.log(events);
      // setEventData(events)
      // setLoading(false)
      
      setLoading(true);
      await fetch("https://eonet.sci.gsfc.nasa.gov/api/v2.1/events")
      .then(response=>response.json())
      .then((data)=>{
        setEventData(data.events);
        setLoading(false);
      })
    }
    fetchEvents()
  },[])

  return (
    <div className="App">
      {!loading?<Map eventData={eventData} zoom={1}/>:<Loader/>}
    </div>
  );
}

export default App;
