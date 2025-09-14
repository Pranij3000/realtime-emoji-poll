import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignIn from "./components/pages/SignIn";
import Error from "./components/pages/Error";
import VotingPage from "./components/pages/VotingPage";
import Signup from "./components/pages/Signup";
import RootLayout from "./components/layout/RootLayout";
import DarkModeButton from "./components/ui/DarkModeButton";

export default function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <RootLayout>
                <VotingPage />
              </RootLayout>
            }
          />
          <Route path="*" element={<Error />} />
          <Route
            path="/login"
            element={
              <RootLayout>
                <SignIn />
              </RootLayout>
            }
          />
          <Route
            path="/register"
            element={
              <RootLayout>
                <Signup />
              </RootLayout>
            }
          />
        </Routes>
      </BrowserRouter>
      <DarkModeButton />
    </>
  );
}
