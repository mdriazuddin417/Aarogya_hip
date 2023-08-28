import { Route, Routes } from "react-router-dom";
import { CreateUserModels, Home, LinkedRecords } from "./pages";
import Login from "./pages/LogInPages/Login";
import NotFound from "./pages/NotFound";

import { ToastContainer } from "react-toastify";
const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />}>
          <Route index element={<CreateUserModels />} />
          <Route path="linked_records" element={<LinkedRecords />} />
        </Route>
        <Route path="/login" element={<Login />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <ToastContainer />
    </>
  );
};

export default App;
