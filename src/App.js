import {useContext} from 'react';
import Student from './components/Student';
import {AppContext} from './contexts/context';
import './App.css'


function App() {

  let {students} = useContext(AppContext)
  return (
    <div className='App'>

    {students.map((student) => {
    return  <Student student={student} />
    })}

    
    </div>



  );
}


export default App;
