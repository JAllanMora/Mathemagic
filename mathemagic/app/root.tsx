import React, { useContext, useEffect } from "react";
import { withEmotionCache } from "@emotion/react";
import { ChakraProvider } from "@chakra-ui/react";
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";
import { LinksFunction } from "@remix-run/node"; // Depends on the runtime you choose
import type { V2_MetaFunction } from "@remix-run/node";

import { ServerStyleContext, ClientStyleContext } from "./context";

export const meta: V2_MetaFunction = () => {
  return [
    { title: "Pitaya Digital" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function App() {
  return (
    <html lang="en">
      <head>
        <Meta />
        <Links />
      </head>
      <body>
        <ChakraProvider>
          <Outlet />
        </ChakraProvider>

        <Scripts />
      </body>
    </html>
  );
}
