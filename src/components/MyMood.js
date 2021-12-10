
function MyMood({userEntry}){
      
  return ( 
   
   <div> 
{/* userEntry needs to go in this sentence not the button */}
    {/* <h1>Your choice indicates that you feel {moods}</h1> */}
{/* Used button as test/placeholder */}
{/* I think that the slider will replace the button in determining the num */}
    <button onClick ={userEntry}>My Mood</button>
    </div> 
  );
  } 
export default MyMood;