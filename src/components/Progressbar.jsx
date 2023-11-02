import { useEffect, useState } from 'react';

// eslint-disable-next-line react/prop-types
export default function Progressbar({initialValue=0}) {

    const[percent, setPercent] = useState(initialValue);
    useEffect( ()=> {
          if( percent < 100 ) {
            setTimeout( ()=> setPercent(newval => newval + 1), 200 );
          }
        }, [percent] );
   
  return (
    <div>
        <div className="progressbar">
            <div className="progressbarfill">  { percent }  </div>
        </div>
    </div>
  )
}
