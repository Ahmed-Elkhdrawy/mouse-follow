// Your code here
import { useEffect, useRef } from 'react';

type UseMouseFollowOptions = {
  boundaryX?: number; // Boundary width (default: element width)
  boundaryY?: number; // Boundary height (default: element height)
  duration?: number; // Duration of the return animation (default: 3000ms)
  follow?: boolean; // Whether the element follows the mouse or moves away (default: true)
};

/**
 * A custom React hook that enables an element to follow or move away from the mouse cursor
 * within a defined boundary. The element smoothly transitions back to its original position
 * when the mouse leaves the boundary.
 *
 * @param {React.RefObject<HTMLElement>} elementRef - A ref to the target element.
 * @param {UseMouseFollowOptions} options - Configuration options for the hook.
 * @returns {React.RefObject<HTMLElement>} - Returns the provided elementRef for potential chaining.
 */
const useMouseFollow = (
  elementRef: React.RefObject<HTMLElement>,
  { boundaryX, boundaryY, duration = 3000, follow = true }: UseMouseFollowOptions = {}
) => {
  // Ref to store the current animation frame ID for cleanup purposes
  const animationFrameRef = useRef<number | null>(null);

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return; // Early exit if the element is not available

    /**
     * Handles the mouse movement event and updates the element's position based on the mouse coordinates.
     * Uses `requestAnimationFrame` for smooth and performant animations.
     *
     * @param {MouseEvent} event - The mouse event containing clientX and clientY coordinates.
     */
    const handleMouseMove = ({ clientX, clientY }: MouseEvent) => {
      // Cancel any pending animation frame to avoid overlapping updates
      cancelAnimationFrame(animationFrameRef.current!);

      // Schedule the position update in the next animation frame
      animationFrameRef.current = requestAnimationFrame(() => {
        // Get the element's current dimensions and position relative to the viewport
        const { left, top, width: elementWidth, height: elementHeight } = element.getBoundingClientRect();

        // Calculate the boundary area for mouse interaction
        const boundary = {
          left: left + (elementWidth - (boundaryX ?? elementWidth)) / 2, // Left boundary
          right: left + (elementWidth + (boundaryX ?? elementWidth)) / 2, // Right boundary
          top: top + (elementHeight - (boundaryY ?? elementHeight)) / 2, // Top boundary
          bottom: top + (elementHeight + (boundaryY ?? elementHeight)) / 2, // Bottom boundary
        };

        // Check if the mouse is within the defined boundary area
        const isWithinBoundary =
          clientX >= boundary.left &&
          clientX <= boundary.right &&
          clientY >= boundary.top &&
          clientY <= boundary.bottom;

        if (isWithinBoundary) {
          // Calculate the offset for the element to follow or move away from the mouse
          const offsetX = clientX - (boundary.left + (boundaryX ?? elementWidth) / 2);
          const offsetY = clientY - (boundary.top + (boundaryY ?? elementHeight) / 2);

          // Apply smooth transformation to the element
          element.style.transition = 'transform 0.1s ease-out'; // Fast follow animation
          element.style.transform = `translate(${follow ? offsetX : -offsetX}px, ${
            follow ? offsetY : -offsetY
          }px)`;
        } else {
          // Reset the element's position with a smooth transition
          element.style.transition = `transform ${duration}ms ease-out`; // Slow return animation
          element.style.transform = 'translate(0, 0)';
        }
      });
    };

    // Attach the mouse movement event listener to the window
    window.addEventListener('mousemove', handleMouseMove);

    // Cleanup function to remove the event listener and cancel any pending animation frame
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animationFrameRef.current!);
    };
  }, [elementRef, boundaryX, boundaryY, duration, follow]); // Re-run effect if any of these dependencies change

  return elementRef; // Return the ref for potential chaining or external use
};

export default useMouseFollow;