type SkillItemProps = {
  skill: string;
};

const SkillItem = (props: SkillItemProps) => {
  return <p className="mx-2 my-1 rounded border border-neutral-300 px-4 py-2 dark:border-neutral-700">{props.skill}</p>;
};

export default SkillItem;
