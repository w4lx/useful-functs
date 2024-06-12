declare module "useful-functs" {
  /**
   * Validates if a text string is a valid URL.
   * @param str The text string to validate as URL.
   * @returns true if the string is a valid URL, false otherwise.
   */
  export function isURL(str: string): boolean;

  /**
   * Validates if a URL is an image.
   * @param url The URL to verify.
   * @returns A Promise that resolves to true if the URL is an image, false otherwise.
   */
  export function isImageURL(url: string): Promise<boolean>;

  /**
   * Gets the content type of a given URL.
   * @param url The URL from which you want to get the content type.
   * @returns A Promise that resolves to a Response object containing type information, or undefined.
   */
  export function getType(url: string): Promise<Response | undefined>;

  /**
   * Shuffles the elements of an Array randomly.
   * @param array The array to shuffle.
   * @returns The shuffled array.
   */
  export function shuffleArray<T>(array: T[]): T[];

  /**
   * Randomly shuffles the characters of a text string.
   * @param str The string to shuffle.
   * @param removeSpaces Remove whitespace characters from the string (optional, default false).
   * @returns The shuffled string.
   */
  export function shuffleString(str: string, removeSpaces?: boolean): string;

  /**
   * Shortens a text string based on the specified limit.
   * @param str The text string to shorten.
   * @param limit The character limit to shorten the text.
   * @param suffix The optional suffix to add at the end of the shortened text.
   * @returns The shortened text string.
   */
  export function shortenText(
    str: string,
    limit: number,
    suffix?: string
  ): string;

  /**
   * Response object containing type information.
   */
  export interface Response {
    type: string;
    ext: string;
    mimetype: string;
  }
}
