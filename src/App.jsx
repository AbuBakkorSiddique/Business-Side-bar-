import { BrowserRouter, Routes, Route } from 'react-router-dom';

import HomePage from "./Pages/HomePage"
import CreatePage from "./Pages/CreatePage"
// import Layout from './MasterLayout/Layout';
import UpdatePage from './Pages/UpdatePage';

function App() {
  return (
   <>
 {/* <Layout> */}

   <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/create" element={<CreatePage />} />
        <Route path="/update" element={<UpdatePage />} />
      </Routes>
    </BrowserRouter>


    {/* </Layout> */}
   
   
   
   </>
  )
}

export default App