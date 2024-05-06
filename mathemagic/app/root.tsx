import { ChakraProvider } from "@chakra-ui/react";
import { Links, Meta, Outlet, Scripts } from "@remix-run/react";
import type { V2_MetaFunction } from "@remix-run/node";
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
