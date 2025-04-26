import { createBrowserRouter, RouterProvider } from "react-router-dom"
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
 const router= createBrowserRouter(
  [{
    path:"/",
    element:<Layout/>,
    children:[
      {path:"/",element:<Login/>},
      {path:"/signup",element:<Signup/>},
      {path:"/customImage",element:<CustomImage/>},
      {path:"/ForgetPassword",element:<ForgetPassword/>},
    ]
  },
  {
    path:"/Home",
    element:<HomeLayout/>,
    children:[
      {path:"/Home",element:<Home/>},
      {path:"/Home/profile",element:<Profile/>},
      {path:"/Home/Friends" ,element:<Friends/>},
      {path:"/Home/Pages" ,element:<Pages/>},
      {path:"/Home/Page" ,element:<NewPage/>},
      {path:"/Home/YourFriend" ,element:<YourFriend/>},
      {path:"/Home/AcceptFriend" ,element:<AcceptFriends/>},
      
    ]
  },
  {path:"/Home/" ,
    element:<PopUpLayout/>,
    children:[
      {path:"/Home/CreatePost", element:<CreatePost/>},
      {path:"/Home/CreatePage", element:<CreatePage/>}
    ]
  }




]
 )

  return (
    <>
      <RouterProvider router={router}/>
    </>
  )
}

export default App
