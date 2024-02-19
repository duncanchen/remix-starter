import type { MetaFunction } from "@remix-run/node";
import { Command, Link } from "lucide-react";
import { Button } from "~/components/ui/button";
import { ThemeToggle } from "./resources.theme-toggle";

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
        <div className="text-2xl font-serif">
          Prosciutto biltong tenderloin shankle salami t-bone pig pork belly
          corned beef. Meatloaf pig boudin t-bone, bacon pastrami kevin filet
          mignon biltong shank turducken corned beef beef ribs prosciutto.
          Ribeye landjaeger shank beef sirloin bresaola fatback. Corned beef
          chuck tongue porchetta salami pork belly tail pig meatball.
        </div>
        <div className="text-2xl font-sans mt-4">
          Prosciutto biltong tenderloin shankle salami t-bone pig pork belly
          corned beef. Meatloaf pig boudin t-bone, bacon pastrami kevin filet
          mignon biltong shank turducken corned beef beef ribs prosciutto.
          Ribeye landjaeger shank beef sirloin bresaola fatback. Corned beef
          chuck tongue porchetta salami pork belly tail pig meatball.
        </div>
      </div>
    </section>
  );
}
