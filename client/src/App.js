// // import logo from './logo.svg';

// // function App() {
// //   return (
// //     <div className="App">
// //       <header className="App-header">
// //         <img src={logo} className="App-logo" alt="logo" />
// //         <p>
// //           Edit <code>src/App.js</code> and save to reload.
// //         </p>
// //         <a
// //           className="App-link"
// //           href="https://reactjs.org"
// //           target="_blank"
// //           rel="noopener noreferrer"
// //         >
// //           Learn React
// //         </a>
// //       </header>
// //     </div>
// //   );
// // }

// // export default App;

// import {Button} from 'antd';
// import './stylesheets/theme.css';
// import './stylesheets/alignments.css';
// import './stylesheets/textelements.css';
// import './stylesheets/custom-components.css';
// import './stylesheets/form-elements.css';
// import './stylesheets/layout.css';
// import { BrowserRouter, Routes, Route } from 'react-router-dom'
// import Login from './pages/common/Login';
// import Register from './pages/common/Register/index.js';
// import ProtectedRoute from "./components/ProtectedRoute.js";
// import Home from "./pages/common/Home";
// import Exams from "./pages/admin/Exams";
// import AddEditExam from './pages/admin/Exams/AddEditExams.js';
// import Loader from './components/Loader.js';
// import { useSelector } from 'react-redux';
// import WriteExam from "./pages/user/WriteExam";
// import UserReports from "./pages/user/UserReports";
// import AdminReports from "./pages/admin/AdminReports";
// import Profile from './pages/user/Profile';

// function App() {
//   const {loading} = useSelector(state => state.loader)
//   return (
//     <>
//       {loading && <Loader/>}
//       <BrowserRouter>
//       <Routes>
//         <Route path="/login" element={<Login/>} />
//         <Route path="/register" element={<Register/>}/>

//       </Routes>
//       </BrowserRouter>
//     </>
//   )
// }
// export default App


// import { Button } from 'antd';
import './stylesheets/theme.css'
import './stylesheets/alignments.css'
import './stylesheets/textelements.css'
import './stylesheets/custom-components.css'
import './stylesheets/form-elements.css'
import './stylesheets/layout.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Login from './pages/common/Login/index.js';
import Register from './pages/common/Register/index.js';
import ProtectedRoute from "./components/ProtectedRoute.js";
import Home from "./pages/common/Home/index.js";
import Exams from "./pages/admin/Exams/index.js";
import AddEditExam from './pages/admin/Exams/AddEditExams.js';
import Loader from './components/Loader.js';
import { useSelector } from 'react-redux';
import WriteExam from "./pages/user/WriteExam/index.jsx";
import UserReports from "./pages/user/UserReports/index.js";
import AdminReports from "./pages/admin/AdminReports/index.js";
import Profile from './pages/user/Profile/index.js';

function App() {
  const { loading } = useSelector(state => state.loader)
  return (
    <>
      {loading && <Loader />}
      <BrowserRouter>
        <Routes>
          {/*Common Routes */}
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />

          {/* User Routes- */}
          <Route path="/" element={<ProtectedRoute>
            <Home />
          </ProtectedRoute>} />

          <Route path="/user/write-exam/:id" element={<ProtectedRoute>
            <WriteExam />
          </ProtectedRoute>
          }
          />

          <Route path="/user/reports" element={<ProtectedRoute>
            <UserReports />
          </ProtectedRoute>
          }
          />

          <Route path="/user/profile" element={<ProtectedRoute>
             <Profile />
             </ProtectedRoute>} />

          {/*Admin Routes */}
          <Route path="/admin/exams" element={<ProtectedRoute>
            <Exams />
          </ProtectedRoute>} />

          <Route path="/admin/exams/add" element={<ProtectedRoute>
            <AddEditExam />
          </ProtectedRoute>} />


          <Route path="/admin/exams/edit/:id" element={<ProtectedRoute>
            <AddEditExam />
          </ProtectedRoute>} />

          <Route
            path="/admin/reports" element={ <ProtectedRoute>
                <AdminReports />
              </ProtectedRoute>
            }
          />
        </Routes>
      </BrowserRouter>

    </>
  );
}

export default App;