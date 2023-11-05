import { useEffect, useRef } from "react";

export function useMouseDragScroll({ sensitivity = 1.2 }) {
    const isPressed = useRef(false);
    const onMouseMove = (e: MouseEvent) => {
        if (isPressed.current) {
            e.preventDefault();
            window.getSelection()?.empty();
            const dy = e.movementY;
            window.scrollBy(0, -dy * sensitivity);
        }
    };
    const onMouseClick = (e: MouseEvent) => {
        isPressed.current = true;
    };
    const onMouseUp = (e: MouseEvent) => {
        isPressed.current = false;
    };
    useEffect(() => {
        document.addEventListener("mousedown", onMouseClick);
        document.addEventListener("mouseup", onMouseUp);
        document.addEventListener("mousemove", onMouseMove);
        return () => {
            document.removeEventListener("mousedown", onMouseClick);
            document.removeEventListener("mouseup", onMouseUp);
            document.removeEventListener("mousemove", onMouseMove);
        };
    }, []);
}
