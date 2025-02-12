import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import MenuBar from "./components/MenuBar";
import { createHashRouter, RouterProvider, Outlet } from "react-router-dom";
import CircularProgress from '@mui/material/CircularProgress';
import { ThemeProvider } from '@ui5/webcomponents-react';
import { setTheme } from '@ui5/webcomponents-base/dist/config/Theme';
import {IntlProvider} from 'react-intl';

import en from './lang/strings_en-US.json'

// const Debit = lazy(() => import("./components/Debit"));
// const Credit = lazy(() => import("./components/Credit"));
// const History = lazy(() => import("./components/History"));
const ErrorPage = lazy(() => import("./components/ErrorPage"));
const DetailPagePage = lazy(() => import("./components/DetailPage"));


const locale = navigator.language;

const htmlRoot = document.getElementById("root");
const reactRoot = ReactDOM.createRoot(htmlRoot);

setTheme('sap_horizon');
document.body.classList.add("ui5-content-density-compact");

const MESSAGES = {
  'en-US': en
}

const AppLayout = () => {
  return (

    <ThemeProvider>
      <div className="tool-layout">
        <MenuBar />
        <div className="ui5-dynamic-page">
        <DetailPagePage />
        </div>
      </div>
    </ThemeProvider>


  );
};

const appRouter = createHashRouter([
  {
    path: "/",
    element: <IntlProvider locale={locale} messages={MESSAGES['en-US']}> <AppLayout /> </IntlProvider>,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <IntlProvider locale={locale} messages={MESSAGES['en-US']}><DetailPagePage /> </IntlProvider>,
        errorElement: <ErrorPage />
      },
      {
        path: "/DetailPagePage",
        element: (
          <Suspense fallback={<CircularProgress />}>
            <IntlProvider locale={locale} messages={MESSAGES['en-US']}> <DetailPagePage /> </IntlProvider>
          </Suspense>
        ),
        errorElement: <ErrorPage />
      }
    ]
  },
]);





reactRoot.render(<RouterProvider router={appRouter} />);
