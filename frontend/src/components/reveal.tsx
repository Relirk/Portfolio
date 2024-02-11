// src/components/reveal.tsx
'use client'
import React, { useEffect, useRef, useState } from 'react';
const RevealComp = (props: { children: any; threshold: any; duration: any; x: any; y: any; }) => {
    const { children, threshold, duration, x, y } = props;
    const ref = useRef(null)
    const [intersecting, setIntersecting] = useState(false)

    useEffect(() => {
      if (ref.current) {
          const intersectionObserver = new IntersectionObserver((entries) => {
              if (entries[0].isIntersecting) {
                  setIntersecting(true)
              } else {
                  setIntersecting(false)
              }
          }, {
              threshold
          })
  
          intersectionObserver.observe(ref.current)
  
          return () => {
              if (ref.current) {
                  intersectionObserver.unobserve(ref.current)
              }
          }
      }
  }, [])

  return (
    <div
        style={
            {
                transitionDuration: duration,
                transform:!intersecting ? `translate(${x}px, ${y}px)` : "translate(0px, 0px)"
            }
        }
        className={`transition ${intersecting ? "opacity-100" : "opacity-0"}`} ref={ref}>
        {children}
    </div>
)
};
export default RevealComp;