import { Route, Routes } from "react-router-dom";
import BotNav from "./components/BotNav";
import Home from "./pages/home/Index";
import Feeds from "./pages/feeds/Index";
import Message from "./pages/message/Index";
import Shop from "./pages/shop/Index";
import Profile from "./pages/profile/Index";

function App() {
  return (
    <>
      <BotNav />
      <Routes>
        {/* path="/" ==> menandakan default page atau default index */}
        <Route path="/" element={<Home />} />{" "}
        <Route path="/home" element={<Home />} />
        <Route path="/feeds" element={<Feeds />} />
        <Route path="/message" element={<Message />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </>
  );
}

export default App;
