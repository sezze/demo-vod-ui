import React from "react";
import { render } from "@testing-library/react";
import useSources from "hooks/useSources";
import Poster from "./Poster";

jest.mock("hooks/useSources");

type MockedUseSource = jest.Mock<ReturnType<typeof useSources>>;

describe("renders correctly", () => {
  test("without source", () => {
    (useSources as MockedUseSource).mockReturnValue({
      src: undefined,
      srcSet: undefined,
    });

    render(<Poster width={64} height={128} />);
  });

  test("with mocked source", () => {
    (useSources as MockedUseSource).mockReturnValue({
      src: "/source",
      srcSet: "/source-set",
    });

    const { getByTestId } = render(<Poster height={128} width={64} />);
    const img = getByTestId("poster-image") as HTMLImageElement;

    expect(img.src).toContain("/source");
    expect(img.srcset).toContain("/source-set");
  });
});
