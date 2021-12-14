// import {
// Routes, 
// Route,} from "react-router-dom";
import MyMood from "./components/MyMood";
import MoodsDef from "./components/MoodsDef";
import MyJournal from "./components/MyJournal";
import {useState} from 'react';


const userEntry = [ 
     'optimistic',
     'happy',
     'content',
     'discouraged',
     'upset',
     'depressed'
  ];


function App() {
  const [num, setNum] = useState(5);

  function newNum() {
    if (num === 0){
      setNum(0);
    }else if (num === 1){
      setNum(1);
    }else if (num === 2){
      setNum(2);
    }else if (num === 3){
      setNum(3);
    }else if (num === 4){
      setNum(4);
    }else if (num === 5){
      setNum(5);}
    
    }
  
  
  return (
    <div>
      <MoodsDef />,
      <MyJournal />
      <h1>Mood Tracker</h1>
      <MyMood userEntry = {newNum} />
      <h1>Your answer indicates that you feel {userEntry[num]}.</h1>
      
{/* function Nav() {
 <div>
  <link to = "mymood">
    <h1>My Mood</h1>
  </link>
  <link to = "myjournal">
    <h1>My Journal</h1>
  </link>
  <link to = "moodsdef">
    <h1>My Defined</h1>
  </link>
  </div>
} */}

{/* <Routes>
                <Route path = 'moodsdef' element= {<MyMood/>}/>
                <Route path = 'myjournal'element={<MyJournal/>}/>
                <Route path = 'moodsdef'element ={<MoodsDef/>}/>
            </Routes> */}
      </div>
  );   
  }
export default App;
