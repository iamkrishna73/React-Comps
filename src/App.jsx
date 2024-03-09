import Route from './components/Route';
import Sidebar from './components/Sidebar';
import AccordionPage from './Pages/AccordianPage';
import DropDownPage from './Pages/DropDownPage';
import ButtonsPage from './Pages/ButtonsPage';
import ModelPage from './Pages/ModelPage';

function App() {
  return (
    <div className='container mx-auto grid grid-cols-6 gap-4 mt-4'>
      <Sidebar />

      <div className='col-span-5'>
        <Route path='/'>
          <DropDownPage />
        </Route>
        <Route path='/accordion'>
          <AccordionPage />
        </Route>
        <Route path='/buttons'>
          <ButtonsPage />
        </Route>
        <Route path='/model'>
          <ModelPage />
        </Route>
      </div>
    </div>
  );
}
export default App;
