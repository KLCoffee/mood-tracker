import MyMood from "./components/MyMood";
import {useState, useEffect} from 'react';

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

  useEffect(()=> {
    alert("Your mood has displayed");
  }, [num]);
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
    </div>
  );
}

export default App;
