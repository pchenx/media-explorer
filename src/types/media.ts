export interface Media {
  title: string;
  id: string;
}

export interface Book extends Media {
  type: "book";
  author: string;
  yearPublished: number;
}

export interface Movie extends Media {
  type: "movie";
  director: string;
  yearReleased: number;
}

export type AvailableMediaType = Book | Movie;
