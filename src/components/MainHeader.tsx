export default function MainHeader({ title }: { title: string }): JSX.Element {
  return (
    <header className="flex items-center h-20 bg-white">
      <div className="flex flex-col items-end leading-tight">
        <span className="font-extrabold text-xl text-[#333] mt-2">{title}</span>
      </div>
    </header>
  );
}
