import { createContext, useState, useCallback, useRef } from "react";
import type { AvailableMediaType } from "../types/media";

type MediaContextType = {
  listOfMedia: AvailableMediaType[];
  fetchMedia: () => Promise<void>;
};

const MediaContext = createContext<MediaContextType>({
  listOfMedia: [],
  fetchMedia: async () => {},
});

function Provider({ children }: { children: React.ReactNode }) {
  const mediaFetchedRef = useRef<{ page: number; complete: boolean }>({
    page: 0,
    complete: false,
  });
  const [combinedList, setCombinedList] = useState<AvailableMediaType[]>([]);

  const fetchMedia = useCallback(async () => {
    const mediaAllComplete = mediaFetchedRef.current.complete;
    const booksPage = mediaFetchedRef.current.page;

    if (mediaAllComplete) {
      return;
    }

    let newlyFetchedList: AvailableMediaType[] = [];
    try {
      const params = new URLSearchParams();
      const nextPage = booksPage + 1;
      params.append("_page", `${nextPage}`);
      params.append("_per_page", "1");
      const response = await fetch(`http://localhost:3001/media?${params}`, {});
      const booksPagingStatus = (await response.json()) as {
        data: AvailableMediaType[];
        pages: number;
      };
      console.log(`pdb: (${nextPage})`, booksPagingStatus);
      mediaFetchedRef.current.page = nextPage;
      if (nextPage >= booksPagingStatus.pages) {
        mediaFetchedRef.current.complete = true;
      }
      newlyFetchedList = booksPagingStatus.data;
    } catch (err) {
      console.error("Error: ", err);
    }

    // FIXME
    setCombinedList((currentList) => {
      const [m1] = newlyFetchedList;

      if (!m1) {
        return currentList;
      }

      const hasItemAlready = currentList.find((_) => _.id === m1.id);

      if (hasItemAlready) {
        return currentList;
      }

      return [...currentList, ...newlyFetchedList];
    });
  }, []);

  const valueToShare = {
    listOfMedia: combinedList,
    fetchMedia,
  };

  return (
    <MediaContext.Provider value={valueToShare}>
      {children}
    </MediaContext.Provider>
  );
}

export { Provider, MediaContext };
