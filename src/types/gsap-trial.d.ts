declare module "gsap-trial/SplitText" {
  export class SplitText {
    chars: Element[];
    words: Element[];
    lines: Element[];

    constructor(
      target: string | Element | Element[] | NodeList,
      vars?: {
        type?: string;
        linesClass?: string;
        wordsClass?: string;
        charsClass?: string;
        [key: string]: unknown;
      }
    );

    revert(): void;
    split(vars?: object): this;
  }
}
