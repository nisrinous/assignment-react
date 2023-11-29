export default function ButtonSecondary({
  text,
  action,
}: {
  text?: string;
  action?: React.MouseEventHandler<HTMLButtonElement>;
}): JSX.Element {
  return (
    <button
      className=" bg-[#D84727] border-none h-10 w-[112px] rounded-none text-white my-5"
      onClick={action}
    >
      {text}
    </button>
  );
}
