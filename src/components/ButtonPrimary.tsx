export default function ButtonPrimary({
  text,
  action,
}: {
  text: string;
  action?: React.MouseEventHandler<HTMLButtonElement>;
}): JSX.Element {
  return (
    <button
      className="absolute border-[#D84727] border bg-none bottom-10 w-[80%] h-10"
      onClick={action}
    >
      {text}
    </button>
  );
}
