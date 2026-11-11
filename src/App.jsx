import { Routes, BrowserRouter, Route, Navigate } from "react-router-dom";
// import Homepage from './pages/Homepage';
import Login from "./pages/auth/Login";
import SignUp from "./pages/auth/SignUp";
import AppLayout from "./layouts/AppLayout";
import MyBoats from "./pages/owner/MyBoats";
import PortLog from "./pages/owner/PortLog";
import Support from "./pages/owner/Support";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/" element={<AppLayout />}>
          <Route index element={<Navigate to="my-boats" />} />
          <Route path="my-boats" element={<MyBoats />} />
          <Route path="port-log" element={<PortLog />} />
          <Route path="support" element={<Support />} />
        </Route>
        <Route path="*" element={<Navigate to="/login" replace />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
