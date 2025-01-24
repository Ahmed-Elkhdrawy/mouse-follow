type UseMouseFollowOptions = {
    boundaryX?: number;
    boundaryY?: number;
    duration?: number;
    follow?: boolean;
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
declare const useMouseFollow: (elementRef: React.RefObject<HTMLElement>, { boundaryX, boundaryY, duration, follow }?: UseMouseFollowOptions) => import("react").RefObject<HTMLElement>;
export default useMouseFollow;
