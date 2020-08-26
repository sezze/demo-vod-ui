import React from "react";
import { render } from "@testing-library/react";
import StarRating from "./StarRating";

describe("renders correct amount of stars for rating", () => {
  it("should render 1 star", () => {
    const { getByTestId, queryByTestId } = render(<StarRating rating={2} />);

    // A 2/10 rating should result in one star
    expect(getByTestId("star-container").childElementCount).toEqual(1);
    // so no half stars
    expect(queryByTestId("half-star")).toBeNull();
  });

  it("should render 3.5 stars", () => {
    const { getByTestId, queryByTestId } = render(<StarRating rating={7} />);

    // A 7/10 rating should result in three and a half stars (4 elements)
    expect(getByTestId("star-container").childElementCount).toEqual(4);
    // so a half star should exist
    expect(queryByTestId("half-star")).not.toBeNull();
  });
});
