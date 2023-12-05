import Aside from "./Aside";

export default function ListLayout({
  children,
}: {
  children: React.ReactNode;
}): JSX.Element {
  return (
    <div className="relative flex bg-white min-h-screen">
      <Aside />
      <div className="flex-grow text-zinc-800 ml-24 md:ml-64">
        <main>{children}</main>
      </div>
    </div>
  );
}
