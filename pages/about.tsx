// Framework imports
import { useState } from "react";
import type { NextPage } from "next";

// Dependency imports
import { nanoid } from "nanoid";
import { Tab } from "@headlessui/react";

// Data imports
import { skills } from "../data/skills";
import { tabHeaderData } from "../data/tabHeaderData";
import { tabItemData } from "../data/tabItemData";

// Component imports
import Button from "../components/Button";
import SkillItem from "../components/SkillItem";
import TabHeader from "../components/TabHeader";
import TabItem from "../components/TabItem";

const About: NextPage = () => {
  const [open, setOpen] = useState<boolean>(false);
  const [isShowing, setIsShowing] = useState<boolean>(false);

  const handleClick = () => setOpen(!open);

  const skillItemsMapped = skills.map((skill) => {
    return <SkillItem key={nanoid()} skill={skill} />;
  });

  const tabHeaderDataMapped = tabHeaderData.map((item) => <TabHeader key={nanoid()} emoji={item.emoji} />);

  const tabItemDataMapped = tabItemData.map((item) => (
    <TabItem key={nanoid()} src={item.src} title={item.title} description={item.description} />
  ));

  return (
    <main className="mx-4 my-8 min-h-fit space-y-8 p-4 md:mx-32 md:mt-16 lg:mx-64">
      <h1 className="font-serif text-6xl">
        About<span className="text-red-600">.</span>
      </h1>

      <div className="space-y-4 text-justify leading-relaxed opacity-80">
        <p>I&apos;m a 24-year-old self-taught frontend web developer. But I wasn&apos;t always one.</p>
        <p>
          I have a bachelor&apos;s degree in International Business for Asia from the Rotterdam University of Applied
          Sciences. During my studies, I have done a five-month student exchange programme at Donghua University in
          Shanghai, China. During that same year, in 2019, I did an internship at a coding school in Kuala Lumpur,
          Malaysia. This is where my interest for software development originated.
        </p>
        <p>
          After graduating, I have temporarily worked as an Inside Sales Specialist in Breda, the Netherlands and as a
          Customer Support Agent in Athens, Greece. I am now looking for a role as a &#40;junior&#41; frontend web
          developer.
        </p>
        <br />
        <p>Technologies I work with</p>
        <div className="-mx-2 -my-1 flex flex-wrap justify-start">{skillItemsMapped}</div>
      </div>

      <br />

      <div className="space-y-4">
        <div className="flex justify-start">
          <Button
            onClick={handleClick}
            text={"Get to know me in 5 fun GIFs"}
            iClassName={open ? "ri-arrow-up-s-line ml-1" : "ri-arrow-down-s-line ml-1"}
          />
        </div>

        {open ? (
          <Tab.Group>
            <Tab.List className="flex justify-between rounded border border-neutral-300 bg-neutral-200 p-4 text-2xl dark:border-neutral-700 dark:bg-neutral-800">
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
