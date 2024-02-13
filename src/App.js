import './App.scss';
import {
    createBrowserRouter,
    RouterProvider,
    Route,
    Outlet
} from "react-router-dom";
import React from 'react';
import Home from './container/Home';
import Register from './container/Register';
import Login from './container/Login';
import Single from './container/Single';
import Write from './container/Write';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { Bounce, ToastContainer } from 'react-toastify';

const Layout = () => {
    return (
        <React.Fragment>
            <Navbar />
            <Outlet />
            <Footer />
        </React.Fragment>
    )
}
const router = createBrowserRouter([
    // <React.Fragment>
    //     <Navbar />
    //     <Component />
    //     <Footer />
    // </React.Fragment>
    {
        path: "/",
        element: <Layout />,
        children: [
            { path: '/', element: <Home /> }
        ]
    },
    {
        path: "/register",
        element: <Register />
    },
    {
        path: "/login",
        element: <Login />,
    },
    {
        path: "/post/:id",
        element: <Layout />,
        children: [
            { path: '/post/:id', element: <Single /> }
        ]
    },
    {
        path: "/write",
        element: <Layout />,
        children: [
            { path: '/write', element: <Write /> }
        ]
    },
]);
function App(props) {
    return (
        <div className="App">
            <div className='container'>
                <RouterProvider router={router} />
            </div>
            <ToastContainer
                position="bottom-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={true}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="dark"
                transition={Bounce}
            />
        </div>
    );
}

export default App