import type { MetaFunction } from "@remix-run/node";
import { BellRing, Check, Command, Link } from "lucide-react";
import { Button } from "~/components/ui/button";
import { ThemeToggle } from "./resources.theme-toggle";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "~/components/ui/card";
import { Switch } from "@radix-ui/react-switch";
import { cn } from "~/lib/utils";
import { FancyTitle } from "~/components/fancy-title";

export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function Index() {
  return (
    <section className="w-full min-h-screen flex flex-col">
      <nav className="flex items-center justify-between p-4 w-full">
        <Link to="/" className="flex items-center space-x-2">
          <Command className="h-8 w-8" />
        </Link>
        <div className="text-xl font-semibold">Remix Shadcns Quick Start</div>
        <ThemeToggle />
      </nav>

      <div className="container mx-auto">
        <section className="flex relative flex-col gap-2 items-start px-4 pt-8 pb-4 leading-6 text-white border-0 border-solid lg:pb-12 md:pt-12 md:pb-8 border-slate-700">
          <h1
            className="bg-gradient-to-r from-blue-600 via-green-500 to-indigo-400 
          text-5xl font-extrabold leading-10 
          font-sans
          w-full h-24
          inline-block text-transparent bg-clip-text"
          >
            Starter of Z
          </h1>
          <FancyTitle />
          <span
            className="inline-block text-lg leading-7 
            font-serif
            align-top border-0 border-solid sm:text-xl sm:leading-7 border-slate-700 text-neutral-400"
            data-br=":Rjrqdtsla:"
            data-brr="1"
          >
            Create automatic CSS variables as a color palette. Can be used for
            Shadcn UI &amp; Tailwind CSS or any other CSS framework. Customize
            the theme at{" "}
            <code>https://gradient.page/tools/shadcn-ui-theme-generator</code>
          </span>
        </section>

        <div className="grid grid-cols-3 items-center gap-4">
          <CardDemo />
          <div className="text-base font-serif">
            Prosciutto biltong tenderloin shankle salami t-bone pig pork belly
            corned beef. Meatloaf pig boudin t-bone, bacon pastrami kevin filet
            mignon biltong shank turducken corned beef beef ribs prosciutto.
            Ribeye landjaeger shank beef sirloin bresaola fatback. Corned beef
            chuck tongue porchetta salami pork belly tail pig meatball.
          </div>
          <div className="text-base font-sans">
            Prosciutto biltong tenderloin shankle salami t-bone pig pork belly
            corned beef. Meatloaf pig boudin t-bone, bacon pastrami kevin filet
            mignon biltong shank turducken corned beef beef ribs prosciutto.
            Ribeye landjaeger shank beef sirloin bresaola fatback. Corned beef
            chuck tongue porchetta salami pork belly tail pig meatball.
          </div>
        </div>
      </div>
    </section>
  );
}
type CardProps = React.ComponentProps<typeof Card>;

export function CardDemo({ className, ...props }: CardProps) {
  return (
    <Card className={cn("w-[380px]", className)} {...props}>
      <CardHeader>
        <CardTitle>Notifications</CardTitle>
        <CardDescription>You have 3 unread messages.</CardDescription>
      </CardHeader>
      <CardContent className="grid gap-4">
        <div className=" flex items-center space-x-4 rounded-md border p-4">
          <BellRing />
          <div className="flex-1 space-y-1">
            <p className="text-sm font-medium leading-none">
              Push Notifications
            </p>
            <p className="text-sm text-muted-foreground">
              Send notifications to device.
            </p>
          </div>
          <Switch />
        </div>
      </CardContent>
      <CardFooter>
        <Button variant="default" className="w-full">
          <Check className="mr-2 h-4 w-4" /> Mark all as read
        </Button>
      </CardFooter>
    </Card>
  );
}
