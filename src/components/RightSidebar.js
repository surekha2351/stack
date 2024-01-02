// RightSidebar.js
import React from 'react';

const RightSidebar = () => {
  return (
    <> 
    <div className="right-sidebar">
    
      <div className="looking-out-for">
        <h3 className='head'>Looking Out for...</h3>
        
          <p className='topic1'>FrontEnd Developer With Angular</p>
          <div className='topic1-dir'>
          <p>WalletHub</p>
          <div className='place-type'>
          <p className='place-type-pad'>Washington,DC</p>
          <p className="place-type-pad"> Remote</p>
          </div>
          </div>
          <div className='place-type'>
          <p className='place-type-but'>angular.js</p>
          <p className='place-type-but place-type-buton'>cordova</p>
          </div>

          <p className='topic1'>FrontEnd Developer With Angular</p>
          <div className='topic1-dir'>
          <p>Perk.com INC.</p>
          <div className='place-type'>
          <p className='place-type-pad'>Bangalour,India</p>
          <p className="place-type-pad"> In office</p>
          </div>
          </div>
          <div className='place-type'>
          <p className='place-type-but'>ios</p>
          <p className='place-type-but place-type-buton'>iPhone</p>
          </div>

          <p className='topic1'>FrontEnd Developer With Angular</p>
        <div className='topic1-dir'>
          <p>SparkNET Technologies</p>
          <p className='topic-salary'>$20,000 - $40,000</p>
          <div className='place-type'>
          <p className='place-type-pad'>No Location</p>
          <p className="place-type-pad"> Remote</p>
          </div>
          </div>
          <div className='place-type'>
          <p className='place-type-but'>ios</p>
          <p className='place-type-but place-type-buton'>ruby on rails</p>
          </div>
          <h5 className='topic1'>View all jobs </h5>
      </div>
      <div className="network-questions">
        <h3 className='head'>Network Questions</h3>
        {/* Display network questions dynamically */}
        <p className="network-questions-para">Were there women who were against giving women the right to vote?</p>
        <p className="network-questions-para">Why does everybody typedef over standard C types?</p>
        <p className="network-questions-para">An English word describing a pseudo-job</p>
        <p className="network-questions-para">When flying on a very tight schedule, are you obligated to run to make it to the next gate on a connection?</p>
        <p className="network-questions-para">Does 1 pixel have a standard size?</p>
        <h5 className='topic1 jobs'>View all jobs </h5>
      </div>
    </div>
    </>
  );
};

export default RightSidebar;
