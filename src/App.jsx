import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import Progressbar from './components/Progressbar';
import { useEffect, useState } from 'react';

function App () {

  const [progress, setProgress] = useState(0);

  useEffect(
    ()=> {
          setInterval(
                 ()=>{
                  setProgress(
                     (val)=> val + 1
                  );
                 }, 100
          );
    }, [ ]
   );
 

  return (
    <>
      <div className='App'>
        <div className='container'>
          <h1 className='mt-3 mb-3'>Progress bar</h1>
          <div className='row justify-content-md-center'>
            <div className='col-md-6'>
              <Progressbar  value={ progress }/>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
export default App
