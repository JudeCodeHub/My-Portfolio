import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import { NotFound } from "./pages/NotFound";
import { Toaster } from "@/components/ui/toaster";
import { useEffect } from "react";
import SplashCursor from "@/components/ui/SplashCursor";
import ChatWidget from "@/components/ui/ChatWidget";

function App() {
  return (
    <>
      <SplashCursor />
      <Toaster />
      <ChatWidget />
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
