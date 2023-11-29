export default function SideImage({
  src,
  alt,
}: {
  src: string;
  alt?: string | undefined;
}): JSX.Element {
  return (
    <div className="hidden md:block w-full md:w-1/2 h-screen">
      <img src={src} className="w-full h-full object-cover" alt={alt}></img>
    </div>
  );
}
