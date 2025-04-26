import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from "./Pages/Login/Login"
import Background from "./Components/LoginBackground/Background"
import Signup from "./Pages/Signup/Signup"
import "./app.css"
import Layout from "./Components/Layout/Layout"
import CustomImage from "./Pages/CustomImage/CustomImage"
import ForgetPassword from "./Pages/ForgetPassord/ForgetPassword"
import HomeLayout from "./Components/Layout/HomeLayout"
import Home from "./Pages/Home/Home"
import Profile from "./Pages/Profile/Profile"
import Friends from "./Pages/Frinds/Friends"
import Pages from "./Pages/Pages/Pages"
import NewPage from "./Pages/NewPage/NewPage"
import YourFriend from "./Pages/YourFriend/YourFriend"
import AcceptFriends from "./Pages/AcceoptFriends/AcceptFriends"
import CreatePost from "./Pages/CreatePost/CreatePost"
import PopUpLayout from "./Components/Layout/PopUpLayout"
import CreatePage from "./Pages/CreatePage/CreatePage"
function App() {
 
  return (
    <BrowserRouter basename="/Final_facepost"> {/* 👈 VERY IMPORTANT */}
    <Routes>

      {/* Main Layout */}
      <Route path="/" element={<Layout />}>
        <Route index element={<Login />} />
        <Route path="signup" element={<Signup />} />
        <Route path="customImage" element={<CustomImage />} />
        <Route path="ForgetPassword" element={<ForgetPassword />} />
      </Route>

      {/* Home Layout */}
      <Route path="/Home" element={<HomeLayout />}>
        <Route index element={<Home />} />
        <Route path="profile" element={<Profile />} />
        <Route path="Friends" element={<Friends />} />
        <Route path="Pages" element={<Pages />} />
        <Route path="Page" element={<NewPage />} />
        <Route path="YourFriend" element={<YourFriend />} />
        <Route path="AcceptFriend" element={<AcceptFriends />} />
      </Route>

      {/* PopUp Layout */}
      <Route path="/Home" element={<PopUpLayout />}>
        <Route path="CreatePost" element={<CreatePost />} />
        <Route path="CreatePage" element={<CreatePage />} />
      </Route>

    </Routes>
  </BrowserRouter>
  )
}

export default App
