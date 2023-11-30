export default function ButtonPrimary({
  text,
  action,
  target,
}: {
  text: string;
  action?: React.MouseEventHandler<HTMLButtonElement>;
  target?: string;
}): JSX.Element {
  return (
    <button
      className="absolute border-[#D84727] border bg-none bottom-10 w-[80%] h-10"
      onClick={action}
    >
      <a className="block w-full" href={target}>
        {text}
      </a>
    </button>
  );
}
