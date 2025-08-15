import { useState, useEffect, useCallback, useMemo } from "react";
import { useMediaContext } from "../hooks/use-media-context";
import { MediaList } from "./MediaList";
import { Modal } from "./Modal";
import { MediaDetails } from "./MediaDetails";

interface MediaSectionProps {
  searchTerm: string;
  filterBy: string;
}

export function MediaSection({ searchTerm, filterBy }: MediaSectionProps) {
  const [selectedMediaId, setSelectedMediaId] = useState("");
  const { listOfMedia, fetchMedia } = useMediaContext();

  useEffect(() => {
    fetchMedia();
  }, [fetchMedia]);

  const handleMoreClick = useCallback(() => {
    fetchMedia();
  }, [fetchMedia]);

  function handleClose() {
    setSelectedMediaId("");
  }

  function handleMediaSelect(mediaId: string) {
    setSelectedMediaId(mediaId);
  }

  const selectedMedia = useMemo(() => {
    if (!selectedMediaId) return null;
    return listOfMedia.find(({ id }) => id === selectedMediaId);
  }, [selectedMediaId, listOfMedia]);

  const modal = selectedMedia ? (
    <Modal onClose={handleClose}>
      <MediaDetails media={selectedMedia} />
      <div className="absolute right-0 top-0">
        <button onClick={handleClose}>X</button>
      </div>
    </Modal>
  ) : null;

  return (
    <div>
      <MediaList
        listOfMedia={listOfMedia}
        handleMediaSelect={handleMediaSelect}
        handleMoreClick={handleMoreClick}
        searchTerm={searchTerm}
        filterBy={filterBy}
      />
      {modal}
    </div>
  );
}
