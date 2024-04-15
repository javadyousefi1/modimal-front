import { RefObject, useEffect } from "react";

interface UseOutsideClickProps {
  ref: RefObject<HTMLElement>;
  exceptionId: string;
  cb: () => void;
}

const useOutsideClick = ({ ref, exceptionId, cb }: UseOutsideClickProps) => {
  useEffect(() => {
    function handleOutsideClick(event: MouseEvent) {
      if (ref.current && !ref.current.contains(event.target as Node) && event.target instanceof HTMLElement && event.target.id !== exceptionId) {
        cb();
      }
    }
    document.addEventListener("mousedown", handleOutsideClick);

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, [ref, cb, exceptionId]);
};

export default useOutsideClick;
