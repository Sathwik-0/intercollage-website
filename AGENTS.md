<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

<!-- BEGIN:ui-debugging-golden-rule -->
# UI Debugging Golden Rule
When troubleshooting UI elements (especially buttons) that appear on screen but do not respond to clicks, immediately check for CSS Stacking Context and Overlay issues:
1. **z-index overlays:** Check if an absolutely positioned transparent element is overlapping the button.
2. **pointer-events:** Ensure `pointer-events-none` isn't trickling down, or that an overlapping element isn't set to `pointer-events-auto`.
3. **Framer Motion:** Heavy animations often create new stacking contexts. Apply `relative z-10` to the clickable element and ensure parent containers don't trap the click.
<!-- END:ui-debugging-golden-rule -->
