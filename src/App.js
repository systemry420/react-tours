import React, {useState, useEffect} from 'react';
import './App.css';
import Tour from './Tour'
import logo from'./logo.svg'

const url = "https://course-api.netlify.app/api/react-tours-project"

function App() {
  const [isLoading, setIsLoading] = useState(false)
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
      id:2,
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
      setIsLoading(true)
        fetch(url)
        .then(res => res.json())
        .then(data => {
            console.log(data)
            setTours(data)
            setIsLoading(false)
        })
    }

    useEffect(() => {
      fetchData()
    }, []);


  return (
    <div>
      {isLoading? (
          <div className="App-header">
            <img src={logo} alt="logo" className="App-logo" />
            <h1 style={{textAlign:"center"}}>
              Loading ...
            </h1>
          </div>
      ):(
        <div className="App">
          <h1>Our Tours</h1>
            <div className="ruler"></div>
            {tours.map(tour=>{
              return <Tour {...tour} key={tour.id}/>
            })}
        </div>
      )}
    </div>
  );
}

export default App;
