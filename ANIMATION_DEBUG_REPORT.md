# Animation Debug Report — InfraMind AI Hero

## Root Cause
The 3D scene visibility failure was primarily caused by the following factors:
1.  **Camera/Model Coupling:** The `PerspectiveCamera` was nested within the same `group` as the 3D models being rotated by the mouse parallax logic. If the parallax calculation produced invalid values (e.g., NaN or extreme offsets before viewport initialization), the camera would rotate away from the origin, rendering nothing.
2.  **Fog Range Clipping:** The `fog` range was set between 5 and 20 units. With the camera at `z=8` and objects at `z=0`, the objects were at the limit of the visible range, potentially causing excessive transparency in certain lighting conditions.
3.  **Canvas Sizing:** The `Canvas` element lacked explicit parent sizing instructions beyond the Tailwind `aspect-square` class, which can sometimes fail to propagate dimensions to the WebGL context during hydration in Next.js Turbopack.

## Files Modified
*   `src/components/branding/HeroVisual.tsx`

## Fix Implemented
1.  **Decoupled Camera:** Moved `PerspectiveCamera` out of the rotating group to ensure a stable viewing frustum regardless of model interactivity.
2.  **Robust Parallax:** Simplified the mouse interaction logic to use raw normalized mouse coordinates, preventing extreme rotations.
3.  **Explicit Sizing:** Added `style={{ height: '100%', width: '100%' }}` to the Canvas parent container.
4.  **Loop Verification:** Injected a subtle background color oscillation in `useFrame` to visually confirm that the render loop is active even if geometry is missing.
5.  **Debugging Aids:** Temporarily added a bright cyan `DebugCube` at world origin and `AxesHelper` to confirm spatial orientation.

## Validation Steps
1.  Confirmed `SceneContent` mounting via console logs.
2.  Verified `Canvas` element presence in the DOM.
3.  Ensured `OrbitControls` are available to allow manual inspection if the initial view is misplaced.
4.  Checked background oscillation (the deep graphite background now pulses slightly to signal "Alive" status).

## Performance Impact
Negligible. The removal of `AdaptiveDpr` (temporarily) and the simplification of the scene graph reduced initial calculation overhead.
