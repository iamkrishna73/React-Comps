import Link from './components/Link';
import Route from './components/Route';
import Sidebar from './components/Sidebar';
import AccordianPage from './Pages/AccordianPage';
import DropDownPage from './Pages/DropDownPage';

function App() {
  return (
    <div>
       <Sidebar/>
       
      <div>
        <Route path='/accordian'>
          <AccordianPage />
        </Route>
        <Route path='/'>
          <DropDownPage />
        </Route> 
      </div>
    </div>
  );
}
export default App;
