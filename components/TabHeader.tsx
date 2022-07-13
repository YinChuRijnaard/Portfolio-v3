// Framework imports
import { Fragment } from "react";

// Dependency imports
import { Tab } from "@headlessui/react";

type TabHeaderProps = {
  emoji: string;
};

const TabHeader = (props: TabHeaderProps) => {
  return (
    <>
      <Tab as={Fragment}>
        {({ selected }) => (
          <button
            className={
              selected ? "underline decoration-neutral-800 underline-offset-4 dark:decoration-neutral-200" : ""
            }>
            {props.emoji}
          </button>
        )}
      </Tab>
    </>
  );
};

export default TabHeader;
