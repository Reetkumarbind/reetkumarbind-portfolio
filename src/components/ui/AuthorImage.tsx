import Image from 'next/image';

type Props = { src: string; alt: string };

const AuthorImage = ({ src, alt }: Props) => {
  return (
    <div className="relative w-60 h-60 group sm:w-auto sm:h-auto">
      <Image
        src={src}
        alt={alt}
        width={250}
        height={250}
        className="rounded shadow-full"
      />
      <div className="absolute inset-0 border-[16px] z-[-1] rounded border-accent translate-x-12 translate-y-12 group-hover:translate-x-4 group-hover:translate-y-4 duration-200 hidden sm:block"></div>
    </div>
  );
};

export default AuthorImage;
