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
      className="bg-[#D84727] text-white active:bg-indigo-600 text-xs px-3 py-1 rounded outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
      onClick={action}
    >
      <a href={target}>{text}</a>
    </button>
  );
}
