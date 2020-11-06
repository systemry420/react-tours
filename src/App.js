import React, {useState, useEffect} from 'react';
import './App.css';
import Tour from './Tour'

const url = "https://course-api.netlify.app/api/react-tours-project"

function App() {
  const [tours, setTours] = useState([
    {
      id:1,
      name: "abc",
      info: `src/App.js
      Line 1:26:   'useEffect' is defined but never used           no-unused-vars
      Line 8:17:   'setTours' is assigned a value but never used   no-unused-vars
      Line 18:11:  'fetchData' is assigned a value but never used  no-unused-vars`,

      image: 'https://images.prismic.io/digitalocean/21ab4275-bcf3-42ac-b148-6f81d516ca1d_Twitter_graphic.png?auto=compress,format&rect=0,61,1024,387&w=370&h=140',
      price: '222'
    },
    {
      id:1,
      name: "abc",
      info: `src/App.js
      Line 1:26:   'useEffect' is defined but never used           no-unused-vars
      Line 8:17:   'setTours' is assigned a value but never used   no-unused-vars
      Line 18:11:  'fetchData' is assigned a value but never used  no-unused-vars`,

      image: 'https://images.prismic.io/digitalocean/21ab4275-bcf3-42ac-b148-6f81d516ca1d_Twitter_graphic.png?auto=compress,format&rect=0,61,1024,387&w=370&h=140',
      price: '222'
    },
  ])
      
    const fetchData = () => {
        fetch(url)
        .then(res => res.json())
        .then(data => {
            console.log(data)
            // setTours(data)
        })
    }

    // useEffect(() => {
    //   // fetchData()
    // }, []);


  return (
    <div className="App">
      <h1>Our Tours</h1>
      <div className="ruler"></div>
      {tours.map(tour=>{
        return <Tour {...tour} key={tour.id}/>
      })}
    </div>
  );
}

export default App;
