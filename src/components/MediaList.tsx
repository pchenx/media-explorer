import { useMemo } from "react";
import type { AvailableMediaType } from "../types/media";
import { MediaItem } from "./MediaItem";

interface MediaListProps {
  listOfMedia: AvailableMediaType[];
  searchTerm: string;
  filterBy: string;
  handleMediaSelect: (mediaId: string) => void;
  handleMoreClick: () => void;
}

export function MediaList({
  listOfMedia,
  searchTerm,
  filterBy,
  handleMediaSelect,
  handleMoreClick,
}: MediaListProps) {
  // accept searchTerm and filterBy (mapping, movie|book -> type)
  const updatedList = useMemo(() => {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    let filterFn = (m: AvailableMediaType) => true;
    if (filterBy === "book" || filterBy === "movie") {
      filterFn = ({ type }) => type === filterBy;
    } else {
      filterFn = ({ title }) =>
        title?.toLowerCase()?.includes(searchTerm?.toLowerCase());
    }
    return listOfMedia.filter(filterFn);
  }, [listOfMedia, searchTerm, filterBy]);

  return (
    <div>
      <h2 className="text-2xl mb-4">Books and Movies</h2>
      <ul>
        {updatedList.map((media: AvailableMediaType) => (
          <li key={media.id}>
            <MediaItem media={media} handleMediaSelect={handleMediaSelect} />
          </li>
        ))}
      </ul>
      <button onClick={handleMoreClick}>Load More</button>
    </div>
  );
}
