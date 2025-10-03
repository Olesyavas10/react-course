import { useRef, useEffect } from 'react'

export function useAutoScroll(dependecies) {
        const containerRef = useRef(null);

        useEffect(() => {
          const containerElem = containerRef.current;
          if (containerElem) {
            containerElem.scrollTop = containerElem.scrollHeight; //scroll on height
          }
        // eslint-disable-next-line react-hooks/exhaustive-deps
        }, dependecies); //array controls when to use effect
        return containerRef;
      }
