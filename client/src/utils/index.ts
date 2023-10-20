/**
 * Scroll the scrollable element by the given number of pixels
 * @param scrollRef - React ref to the scrollable element
 * @param scrollOffset - Number of pixels to scroll
 */
export const scrollTo = (
  scrollRef: React.MutableRefObject<HTMLElement | null>,
  scrollOffset: number
) => {
  if (scrollRef.current) {
    scrollRef.current.scrollLeft += scrollOffset;
  }
};
