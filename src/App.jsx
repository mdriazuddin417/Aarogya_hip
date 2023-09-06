import { Route, Routes } from "react-router-dom";
import { CreateUserModels, DataTransfer, Home, LinkedRecords } from "./pages";
import Login from "./pages/LogInPages/Login";
import NotFound from "./pages/NotFound";
import { Toaster } from "react-hot-toast";
import RequireAuth from "./pages/RequireAuth";
const App = () => {
  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            <RequireAuth>
              <Home />
            </RequireAuth>
          }
        >
          <Route index element={<CreateUserModels />} />
          <Route path="linked_records" element={<LinkedRecords />} />
          <Route path="data_transfer" element={<DataTransfer />} />
        </Route>
        <Route path="/login" element={<Login />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Toaster />
    </>
  );
};

export default App;
