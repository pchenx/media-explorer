import type { AvailableMediaType } from "../types/media";

export const fieldMapping = (media: AvailableMediaType) => {
  if (media.type === "book") {
    return {
      get mainContributor() {
        return media.author;
      },
      get year() {
        return media.yearPublished;
      },
    };
  }
  if (media.type === "movie") {
    return {
      get mainContributor() {
        return media.director;
      },
      get year() {
        return media.yearReleased;
      },
    };
  }
  return {
    get mainContributor() {
      return "unknown";
    },
    get year() {
      return 0;
    },
  };
};
