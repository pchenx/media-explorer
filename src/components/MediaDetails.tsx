import type { AvailableMediaType } from "../types/media";
import { fieldMapping } from "../models/utils";

interface MediaDetailsProps {
  media: AvailableMediaType;
}

export function MediaDetails({ media }: MediaDetailsProps) {
  const { title, type } = media;
  const mappedMedia = fieldMapping(media);
  const picConfig = {
    book: { width: 200, height: 300 },
    movie: { width: 200, height: 300 },
  };

  return (
    <div className="flex flex-col sm:flex-row gap-4">
      <div className="w-1/3 flex justify-center">
        <img
          src={`https://picsum.photos/seed/${media.id}/${picConfig[type].width}/${picConfig[type].height}`}
          alt="books"
        />
      </div>
      <div className="text-zinc-800">
        <h3 className="text-5xl font-extrabold text-emerald-800">{title}</h3>
        <p className="text-3xl">{mappedMedia.mainContributor}</p>
        <p className="text-xl">{mappedMedia.year}</p>
      </div>
    </div>
  );
}
