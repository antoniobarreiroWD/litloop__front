import { RouterProvider, createBrowserRouter } from "react-router-dom"
import Layout from "../layouts/Layout"
import HomePage from "../pages/HomePage/HomePage"
import LoginPage from "../pages/LoginPage/LoginPage"
import SignupPage from "../pages/SignupPage/SignupPage"
import ProfilePage from "../pages/ProfilePage/ProfilePage"
import NotFoundPage from "../pages/NotFoundPage/NotFoundPage"
import AuthMiddleware from "../middlewares/AuthMiddleware"

import BookDetails from "../pages/BookDetails/BookDetails"

const AppRoutes = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <HomePage />,
        },
       
        {
          path: "/login",
          element: <LoginPage />,
        },



        {
          path: "/signup",
          element: <SignupPage />,
        },
        {
          path: "/profile",
          element: (
            <AuthMiddleware>
              <ProfilePage />
            </AuthMiddleware>
          ),
        },
        {
          path: "/book/:id",
          element: <BookDetails />,
        },
      
       
       
        {
          path: "*",
          element: <NotFoundPage />,
        },
      ],
    },
    
  ])

  return <RouterProvider router={router}></RouterProvider>
}

export default AppRoutes