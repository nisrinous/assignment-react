export default function Brand({
  src,
  alt,
}: {
  src: string;
  alt?: string | undefined;
}): JSX.Element {
  return (
    <img
      src={src}
      className="absolute w-[120px] md:w-[178px] top-10 right-10"
      alt={alt}
    ></img>
  );
}
