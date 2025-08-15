import type { AvailableMediaType } from "../types/media";
import { fieldMapping } from "../models/utils";

interface MediaItemProps {
  media: AvailableMediaType;
  handleMediaSelect: (mediaId: string) => void;
}

export function MediaItem({ media, handleMediaSelect }: MediaItemProps) {
  const { title } = media;
  const mappedMedia = fieldMapping(media);

  return (
    <div
      className="p-4 mb-4 rounded-md border shadow-md"
      onClick={() => handleMediaSelect(media.id)}
    >
      <h3 className="text-xl font-bold">{title}</h3>
      <p>{mappedMedia.mainContributor}</p>
      <p>{mappedMedia.year}</p>
    </div>
  );
}
