import { useEffect, useState } from 'react';

// eslint-disable-next-line react/prop-types
export default function Progressbar({initialValue=0}) {

    const[percent, setPercent] = useState(initialValue);
    const idPercent = document.querySelector('progressbarfill');

    useEffect( ()=> {
          if( percent < 100 ) {
            /** velocidade rapida setPercent(newval => newval + 1), 100 );  velocidade lenta setPercent(newval => newval + 1), 200 );  200 ou mais */
            setTimeout( ()=> setPercent(newval => newval + 1), 100 );

            // Abaixo percent < 50 é limite de sua classificação

          }
        }, [percent, idPercent] );
   
  return (
    <div>
        <div className="progressbar">
            <div className="progressbarfill" id="idPercent" style={{ width: `${percent}%` }}>  { percent }%  </div>
        </div>
    </div>
  )
}
