// Framework imports
import { useState } from "react";
import type { NextPage } from "next";

// Dependency imports
import { nanoid } from "nanoid";
import { Tab } from "@headlessui/react";

// Data imports
import { tabHeaderData } from "../data/tabHeaderData";
import { tabItemData } from "../data/tabItemData";

// Component imports
import Button from "../components/Button";
import TabHeader from "../components/TabHeader";
import TabItem from "../components/TabItem";

const About: NextPage = () => {
  const [open, setOpen] = useState<boolean>(false);

  const handleClick = () => setOpen(!open);

  const tabHeaderDataMapped = tabHeaderData.map((item) => <TabHeader key={nanoid()} emoji={item.emoji} />);

  const tabItemDataMapped = tabItemData.map((item) => (
    <TabItem key={nanoid()} src={item.src} title={item.title} description={item.description} />
  ));

  return (
    <main className="mx-4 mt-8 h-screen space-y-16 p-4 md:mx-32 md:mt-16 lg:mx-64">
      <h1 className="font-serif text-6xl">
        About<span className="text-red-600">.</span>
      </h1>

      <div className="space-y-4">
        <div className="flex justify-start text-lg">
          <Button
            onClick={handleClick}
            text={"Get to know me in 5 fun GIFs"}
            iClassName={open ? "ri-arrow-up-s-line ml-1" : "ri-arrow-down-s-line ml-1"}
          />
        </div>

        {open ? (
          <Tab.Group>
            <Tab.List className="flex justify-between rounded border border-neutral-300 bg-neutral-200 px-4 py-2 text-2xl dark:border-neutral-700 dark:bg-neutral-800">
              {tabHeaderDataMapped}
            </Tab.List>
            <Tab.Panels className="rounded bg-neutral-200 p-4 dark:bg-neutral-800">{tabItemDataMapped}</Tab.Panels>
          </Tab.Group>
        ) : null}
      </div>
    </main>
  );
};

export default About;
