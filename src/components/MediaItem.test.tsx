import { screen, render } from "@testing-library/react";
import { MediaItem } from "./MediaItem";

describe("MediaItem tests", () => {
  it("should render the title", () => {
    const requiredProps = {
      media: {
        id: "8c1c",
        type: "book" as const,
        title: "Book 1",
        author: "Author 1",
        yearPublished: 2019,
      },
      handleMediaSelect: () => {},
    };

    render(<MediaItem {...requiredProps} />);

    expect(
      screen.getByRole("heading", {
        level: 3,
      })
    ).toHaveTextContent("Book 1");
  });
});
