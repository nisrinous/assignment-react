export default function ButtonRounded({
  text,
  action,
  target,
}: {
  text?: string;
  action?: React.MouseEventHandler<HTMLButtonElement>;
  target?: string;
}): JSX.Element {
  return (
    <button
      className="bg-[#D84727] text-white text-sm px-3 py-2 rounded-lg"
      onClick={action}
    >
      <a href={target}>{text}</a>
    </button>
  );
}
