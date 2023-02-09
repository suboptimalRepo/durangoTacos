type Props = {
  src: string;
  alt: string;
  width: number;
  height: number;
};

export default function WebImage({
  src,
  alt,
  width,
  height,
}: Props): JSX.Element {
  const [name, _] = src.split(".");
  return (
    <picture>
      <source type="image/webp" srcSet={`/images/${name}.webp`} />
      <img src={`/images/${src}`} alt={alt} width={width} height={height} />
    </picture>
  );
}
