import React, {useState} from 'react';
import MyChart from "./presentation";

const Dashboard = () => {
    const [Isloaded, setIsLoaded] = useState(true);
    return (
      <div className='dashboard' >
        {Isloaded && <MyChart setIsLoaded={setIsLoaded} />}
        
      </div>
    );
}


export default Dashboard;