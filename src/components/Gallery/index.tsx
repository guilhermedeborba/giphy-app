import { GalleryImageProps, GalleryProps } from "./types";

export function Image({ url }: GalleryImageProps) {
  return (
    <div className="flex w-1/3 flex-wrap">
      <div className="w-full p-1 md:p-2">
        <img
          loading="lazy"
          alt="gallery"
          className="block h-full w-full rounded-lg object-cover object-center"
          src={url}
        />
      </div>
    </div>
  );
}

export default function Gallery({ images }: GalleryProps) {
  return (
    <div className="container mx-auto px-5 py-2 lg:px-32 lg:pt-12">
      <div className="-m-1 flex flex-wrap md:-m-2">
        {images.map((img) => (
          <Image url={img.images.original.url} key={img.url} />
        ))}
      </div>
    </div>
  );
}
