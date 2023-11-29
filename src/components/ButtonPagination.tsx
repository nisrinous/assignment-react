import ButtonSecondary from "./ButtonSecondary";

export default function ButtonPagination({
  left,
  right,
  actionLeft,
  actionRight,
}: {
  left?: string;
  right?: string;
  actionLeft?: React.MouseEventHandler<HTMLButtonElement>;
  actionRight?: React.MouseEventHandler<HTMLButtonElement>;
}): JSX.Element {
  return (
    <div className="bottom-10 flex justify-end gap-5">
      {left && <ButtonSecondary text={left} action={actionLeft} />}
      {right && <ButtonSecondary text={right} action={actionRight} />}
    </div>
  );
}
