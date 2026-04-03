import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import my_photo from "./my_photo.jpeg"
import hanuman_jayanti from "./hanuman_jayanti.jpeg"

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <img src={my_photo}/>
    <img src={hanuman_jayanti}/>
    <h1 style={{color:"orange", fontSize: "xxx-large"}}>हनुमान जयंती की हार्दिक शुभकामनाएं</h1>
    <h1>करते हैं जो भक्तों के हर सपने पूरे,
मां अंजनी के हैं वो राजदुलारे,
राम-सीता को जो सबसे प्यारे
ऐसे हनुमान जी का आशीर्वाद हमेशा आपके साथ रहे।
हनुमान जयंती की शुभकामनाएं!

संकट मोचन नाम है जिनका,
हर संकट को दूर करने वाले हनुमान प्यारे,
आपके जीवन के सभी कष्ट दूर हों।
बजरंगबली की कृपा सदा बनी रहे।
हनुमान जयंती 2026 की हार्दिक शुभकामनाएं।

रामदूत, अतुलित बलधामा,
अंजनीपुत्र पवनसुत नामा
हनुमान जी की कृपा से आपका जीवन
बल, बुद्धि और भक्ति से भर जाए।
शुभ हनुमान जयंती!

श्री हनुमान जी का आशीर्वाद
हमेशा आपके साथ बना रहे,
आपके जीवन में सुख, शांति और समृद्धि आए।
हनुमान जयंती की ढेर सारी शुभकामनाएं।</h1>
<h1 style={{fontSize: "xxx-large", color: "orange"}}>अनिल कुमार कनोडिया</h1>
    </>
    
  )
}

export default App
