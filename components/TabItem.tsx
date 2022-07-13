// Dependency imports
import { Tab } from "@headlessui/react";

type TabItemProps = {
  src: string;
  title: string;
  description: string;
};

const TabItem = (props: TabItemProps) => {
  return (
    <div className="h-fit">
      <Tab.Panel className="text-center">
        <iframe
          src={props.src}
          width="240"
          height="240"
          frameBorder="0"
          className="pointer-events-none m-auto drop-shadow-2xl"
          allowFullScreen></iframe>
        <h1 className="mt-2 font-bold">{props.title}</h1>
        <p>{props.description}</p>
      </Tab.Panel>
    </div>
  );
};

export default TabItem;

// Okay, not literally&nbsp;<span className="italic">everything</span>. But most people would desribe me as a
//           walking trash can. I like a lot of things. Mostly Asian and Italian.
