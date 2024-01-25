import { Route, Routes } from "react-router-dom";
import { FogotPassword, SignIn, SignUp, Dashboard, Home, NavBar } from "./components";

const App = () => {
  return (
    <div className="w-full h-full fixed flex">
      <Routes>
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/fogotpassword" element={<FogotPassword />} />
        <Route path="/" element={<Home />} />

        <Route
          path="*"
          element={
            <>
              {/* Nav bar------------------------ */}
              <NavBar />
              {/* Main--------------------------- */}
              <Routes>
                <Route path="/dashboard" element={<Dashboard />} />
              </Routes>
            </>
          }
        />
      </Routes>
    </div>
  );
};

export default App;
