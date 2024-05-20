import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import NavigationBar from './components/NavigationBar';
import Dashboard from './components/Dashboard/Dashboard';
import RegisterPage from './components/RegisterPage/RegisterPage';
import LoginPage from './components/LoginPage/LoginPage';

function App() {
  return (
    <div className="App">
       
       <Routes>
          
         

          <Route path="/" element={<RegisterPage />} />
          <Route path="/login" element={<LoginPage />}/>
          <Route path="/dashboard" element={<Dashboard />} />
          
          {/* <Route path="/departments/:id" element={<DepartmentPage />} />
          <Route path="/projects/:id" element={<ProjectPage />} />
          <Route path="/modules/:id" element={<ModulePage />} />
          <Route path="/tasks/:id" element={<TaskPage />} />
          <Route path="/time-tracking" element={<TimeTrackingPage />} />
          <Route path="/reports" element={<ReportsPage />} /> */}
        </Routes>

        
      
    </div>
  );
}

export default App;
