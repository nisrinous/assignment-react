import ButtonSecondary from "./ButtonSecondary";

export default function ButtonPagination({
  left,
  right,
  typeLeft,
  typeRight,
  actionLeft,
  actionRight,
}: {
  left?: string;
  right?: string;
  actionLeft?: React.MouseEventHandler<HTMLButtonElement>;
  actionRight?: React.MouseEventHandler<HTMLButtonElement>;
  typeLeft?: "button" | "submit" | "reset" | undefined;
  typeRight?: "button" | "submit" | "reset" | undefined;
}): JSX.Element {
  return (
    <div className="bottom-10 flex justify-end gap-5">
      {left && (
        <ButtonSecondary text={left} action={actionLeft} type={typeLeft} />
      )}
      {right && (
        <ButtonSecondary text={right} action={actionRight} type={typeRight} />
      )}
    </div>
  );
}
