import React from "react";
import ReactDOM from "react-dom/client";
import Home from "./pages/Home";
import Location from "./pages/Location";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainLayout from "./Layout/MainLayout";
import "./index.css";

const router = createBrowserRouter([
	{
		element: <MainLayout />,
		children: [
			{
				path: "/",
				element: <Home />,
			},
			{
				path: "/location",
				element: <Location />,
			},
		],
	},
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
	<React.StrictMode>
		<RouterProvider router={router} />
	</React.StrictMode>
);
