import React from "react";

type MainHeaderChild = {
  children: React.ReactNode;
};

export default function MainHeader({ children }: MainHeaderChild): JSX.Element {
  return (
    <header className="block items-center h-16 bg-white">
      <div className="font-extrabold text-xl text-[#333] mt-2">{children}</div>
    </header>
  );
}
