import { Button, Theme, Text, Card } from "@radix-ui/themes";
import type { MetaFunction } from "@remix-run/node";

export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function Index() {
  return (
    <div className="min-h-screen w-full bg-stone-200">
      <div className="text-5xl font-extrabold ml-16 pt-16">
        Remix Vite Radix-Theme Tailwind Starter
      </div>
      <div className="font-sans text-2xl p-16 pt-4">
        [sans] Neil deGrasse Tyson Ipsum No one is dumb who is curious 2 Not
        enough books focus on how a culture responds to radically new ideas or
        discovery. Especially in the biography genre, they tend to focus on all
        the sordid details in the life of the person who made the discovery. I
        find this path to be voyeuristic but not enlightening.
      </div>
      <div className="font-serif text-2xl p-16 pt-0">
        [serif] Neil deGrasse Tyson Ipsum No one is dumb who is curious 2 Not
        enough books focus on how a culture responds to radically new ideas or
        discovery. Especially in the biography genre, they tend to focus on all
        the sordid details in the life of the person who made the discovery. I
        find this path to be voyeuristic but not enlightening.
      </div>

      <div className="container mx-auto ">
        <Theme appearance="light" accentColor="blue">
          <Card className="p-16">
            <Text className="text-2xl">
              Big picture. I called the it department about that ransomware
              because of the old antivirus, but he said that we were using avast
              2021 guerrilla marketing, nor downselect.
            </Text>
          </Card>
        </Theme>
      </div>
    </div>
  );
}
