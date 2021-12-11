import MyMood from "./components/MyMood";
import MoodsDef from "./components/MoodsDef";
import MyJournal from "./components/MyJournal";
import {useState} from 'react';
 import {
  BrowserRouter as Router, 
  Routes, 
  Route,
 Link } from "react-router-dom";

const userEntry = [ 
     'anxious',
     'frustrated',
     'discouraged',
     'content',
     'optimistic',
     'energized'
  ];


function App() {
  const [num, setNum] = useState(0);

  // useEffect(()=> {
  //   alert("Your mood has displayed");
  // }, [num]);
  function newNum() {
    if (num < userEntry.length -1){
      setNum(num + 1);
    }else {
      setNum(0);
    }
  }
  
  return (
    <div>
      <h1>Mood Tracker</h1>
      <MyMood userEntry = {newNum} />
      <h1>Your answer indicates that you feel {userEntry[num]}.</h1>
      <br></br>
  <Router>
      <div>
          <h2> Click here to change your response:  
     <Link to ="/">  MoodsDef.</Link></h2>
     <br></br>
     <h2> Click here to make a journal entry: 
     <Link to ="/">  MyJournal.</Link></h2>
     <br></br>
     <h2> Click here to end your session: 
     <Link to ="/">  exit.</Link></h2>
     </div>
     <Routes>
       <Route exact path= "/" component = 
         {MoodsDef}/>
       <Route exact path= "/" component =
         {MyJournal}/>
     </Routes>
</Router>
    </div>
  );
}

export default App;
