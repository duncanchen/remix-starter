import {
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";

import "./assets/tailwind.css";
import { LinksFunction, LoaderFunctionArgs, json } from "@remix-run/node";
import {
  ClientHintCheck,
  getHints,
  useNonce,
  useTheme,
} from "./lib/client-hints";
import { getTheme } from "./lib/theme.server";
import clsx from "clsx";

const googleFonts = `https://fonts.googleapis.com/css2?family=IBM+Plex+Serif:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;1,100;1,200;1,300;1,400;1,500;1,600;1,700&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,500&display=swap`;

export const links: LinksFunction = () => [
  { rel: "stylesheet", href: googleFonts },
  // { rel: "stylesheet", href: tailwindcss },
];
export const loader = async ({ request }: LoaderFunctionArgs) => {
  return json({
    requestInfo: {
      hints: getHints(request),
      userPrefs: {
        theme: getTheme(request),
      },
    },
  });
};

export default function App() {
  const theme = useTheme();
  const nonce = useNonce();
  return (
    <html lang="en" className={clsx(theme)}>
      <head>
        <ClientHintCheck nonce={nonce} />
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>
        <Outlet />
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}
