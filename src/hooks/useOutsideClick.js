import { useEffect, useRef } from "react";

function useOutsideClick(handler) {
  const ref = useRef(null);

  useEffect(() => {
    function handleClick(e) {
      if (ref.current && !ref.current.contains(e.target)) {
        handler();
      }
    }

    document.body.addEventListener("click", handleClick);

    return () => {
      document.body.addEventListener("click", handleClick);
    };
  }, []);

  return ref;
}

export default useOutsideClick;
