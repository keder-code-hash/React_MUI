import logo from './logo.svg';
import './App.css';
import TodoApp from './components/Todo';
import LoginControl from "./components/LogInLogOutHandler";
import ListView from './components/ListView';
import FormExm from './components/Form';
import MultInput from './components/handlingMultipleInput';
import Datatable from './components/DataTable';

function App() {
  return (
    <div className='App'>
      {/* <div className='card'>
        <TodoApp/>
        <LoginControl/>
        <ListView/>
        <FormExm/>
        <MultInput/>
      </div> */}
        <Datatable/>
      
    </div>
  );
}

export default App;
