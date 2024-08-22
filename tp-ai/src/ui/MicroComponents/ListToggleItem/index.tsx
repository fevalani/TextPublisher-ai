import { useState, isValidElement } from "react";

type ListToggleitemProps = {
  children: React.ReactNode;
  parentTitle?: string;
};

export default function ListToggleitem({
  children,
  parentTitle,
}: ListToggleitemProps) {
  const [open, setOpen] = useState(false);
  if (!children) return null;
  const { title, value } = isValidElement(children) ? children.props : {};

  return (
    <li className="flex flex-col items-start shadow-md shadow-gray-500 p-2 rounded-xl gap-2">
      <button
        className="w-full text-left flex justify-between rounded-xl"
        onClick={() => {
          setOpen(!open);
        }}
      >
        <span>{`${parentTitle ?? title}`}</span>
        <div>{open ? svgArrow(open) : svgArrow(false)}</div>
      </button>
      {open && children}
    </li>
  );
}

const svgArrow = (open: boolean) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={`icon icon-tabler ${
      open ? "rotate-180" : "rotate-90"
    } icons-tabler-outline icon-tabler-arrow-badge-up transition-all`}
  >
    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
    <path d="M17 11v6l-5 -4l-5 4v-6l5 -4z" />
  </svg>
);
