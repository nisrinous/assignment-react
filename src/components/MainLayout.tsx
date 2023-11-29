import Aside from "./Aside";
import MainHeader from "./MainHeader";
import AddProductContent from "./AddProductContent";

export default function MainLayout(): JSX.Element {
  return (
    <div className="relative flex bg-white min-h-screen">
      <Aside />
      <div className="flex-grow text-zinc-800 ml-24 md:ml-64">
        <main className="p-6 md:p-10">
          <MainHeader title="ADD NEW PRODUCT 2/3" />
          <AddProductContent />
        </main>
      </div>
    </div>
  );
}
