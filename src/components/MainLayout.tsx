import Aside from "./Aside";

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}): JSX.Element {
  return (
    <div className="relative flex bg-white min-h-screen">
      <Aside />
      <div className="flex-grow text-zinc-800 ml-24 md:ml-64">
        <main className="p-10 md:px-28">{children}</main>
      </div>
    </div>
  );
}
