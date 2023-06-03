import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import ListEmployeeComponent from './components/ListEmployeeComponent';
import HeaderComponent from './components/HeaderComponent';
import FooterComponent from './components/FooterComponent';
import NotFoundPageComponent from "./components/NotFoundPageComponent";
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import CreateEmployeeComponent from './components/CreateEmployeeComponent';
import UpdateEmployeeComponent from './components/UpdateEmployeeComponent';

function App() {
  return (
    <div>
      <Router>
        <div>
              <HeaderComponent/>
              <div className="container">
                <Routes>
                  <Route path='/' exact element = {<ListEmployeeComponent/>}></Route>
                  <Route path='/employees' element = {<ListEmployeeComponent/>}></Route>
                  <Route path="/add-employee" element = {<CreateEmployeeComponent/>}></Route>
                  <Route path="/update-employee/:id" element = {<UpdateEmployeeComponent/>}></Route>

                  <Route path="*" element = {<NotFoundPageComponent/>}></Route>
                </Routes>
              </div>
              <FooterComponent/>
        </div>
      </Router>
    </div>
     
  );
}

export default App;
