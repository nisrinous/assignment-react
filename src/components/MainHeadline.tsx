export default function MainHeadline({
  title,
  isSupportingContent,
  supportingContent,
}: {
  title: string;
  isSupportingContent: boolean;
  supportingContent?: string;
}): JSX.Element {
  return (
    <div className="flex flex-col items-left justify-between font-semibold gap-1">
      <h1 className="text-2xl font-semibold">{title}</h1>
      {isSupportingContent ? (
        <span className="font-bold text-xl text-gray-400">
          {supportingContent}
        </span>
      ) : null}
    </div>
  );
}
