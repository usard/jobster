import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Landing, Register, Error, PrivateRoute } from "./pages";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {
  SharedLayout,
  AddJobs,
  AllJobs,
  Profile,
  Stats,
} from "./pages/dashboard";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />}></Route>
        {/* <Route path="/dashboard" element={<SharedLayout />}></Route> */}
        <Route path="/dashboard" element={<PrivateRoute />}>
          <Route path="/dashboard" element={<SharedLayout />}>
            <Route path="/dashboard/add-jobs" element={<AddJobs />}></Route>
            <Route path="/dashboard/profile" element={<Profile />}></Route>
            <Route path="/dashboard/all-jobs" element={<AllJobs />}></Route>
            <Route index element={<Stats />}></Route>
          </Route>
        </Route>
        <Route path="/register" element={<Register />}></Route>
        <Route path="*" element={<Error />}></Route>
      </Routes>
      <ToastContainer position="top-center"></ToastContainer>
    </BrowserRouter>
  );
}

export default App;
