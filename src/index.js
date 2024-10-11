import React,{ lazy, Suspense} from "react";
import ReactDOM from "react-dom/client";
import "../src/index.css";
import MenuBar from "./components/MenuBar";
import { createHashRouter, RouterProvider,  Outlet } from "react-router-dom";
import { setTheme } from "@ui5/webcomponents-base/dist/config/Theme";
import { ThemeProvider } from '@ui5/webcomponents-react';


// const Debit = lazy(() => import("./components/Debit"));
// const Credit = lazy(() => import("./components/Credit"));
// const History = lazy(() => import("./components/History"));

const htmlRoot = document.getElementById("root");
const reactRoot = ReactDOM.createRoot(htmlRoot);

setTheme('sap_horizon');
document.body.classList.add("ui5-content-density-compact");



const AppLayout  = () => {
    return (
       
            <ThemeProvider>
                <div className="tool-layout">
                    <MenuBar />
                    {/* <div className="ui5-dynamic-page">
                        <Outlet />
                    </div> */}
                </div>
            </ThemeProvider>

  
    );
};

const appRouter = createHashRouter([
    {
      path: "/",
      element: <AppLayout />

      // children: [
      //   {
      //     path: "/",
      //     element: <Debit />,
      //   }]
    //     {
    //       path: "/debit",
    //       element: (
    //         <Suspense fallback={<CircularProgress />}>
    //           <Debit />
    //         </Suspense>
    //       )
    //     },
    //     {
    //       path: "/credit",
    //       element: (
    //         <Suspense fallback={<CircularProgress />}>
    //           <Credit />
    //         </Suspense>
    //       )
    //     },
    //     {
    //       path: "/history",
    //       element: (
    //         <Suspense fallback={<CircularProgress />}>
    //           <History />
    //         </Suspense>
    //       )
    //     },
    //   ]
    }
  ]);




   
  reactRoot.render(<RouterProvider router={appRouter} />);
