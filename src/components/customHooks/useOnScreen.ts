import { MutableRefObject, useState } from "react";
import useIsomorphicLayoutEffect from "./useIsomorphicLayoutEffect";

export const useOnScreen = (
  ref: MutableRefObject<null>,
  rootMargin: string = "0px"
): boolean => {
  const [isIntersecting, setIntersecting] = useState<boolean>(false);
  useIsomorphicLayoutEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setIntersecting(true);
          }
        });
      },
      { rootMargin }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }
    return () => {
      ref.current && observer.unobserve(ref.current);
    };
  }, []);

  return isIntersecting;
};
