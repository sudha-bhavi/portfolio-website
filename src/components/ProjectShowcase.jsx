import { useCallback, useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";

// A screenshot presented as a browser window: glowing, floating, tilting toward the cursor,
// with a carousel for several shots and a click-to-enlarge view. A slide with a `video` URL
// shows a poster with a play button and opens the video in a new tab instead of enlarging.
export default function ProjectShowcase({ images, host }) {
  const [index, setIndex] = useState(0);
  const [open, setOpen] = useState(false);
  const frameRef = useRef(null);

  const many = images.length > 1;
  const current = images[index];
  const isVideo = Boolean(current.video);

  const go = useCallback((step) => setIndex((i) => (i + step + images.length) % images.length), [images.length]);
  const close = useCallback(() => setOpen(false), []);

  function onPointerMove(e) {
    const el = frameRef.current;
    if (!el || e.pointerType === "touch") return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const rect = el.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5; // -0.5 .. 0.5
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    el.style.transform = `perspective(900px) rotateY(${x * 9}deg) rotateX(${-y * 7}deg) scale(1.02)`;
    el.style.setProperty("--gx", `${(x + 0.5) * 100}%`);
    el.style.setProperty("--gy", `${(y + 0.5) * 100}%`);
  }

  function onPointerLeave() {
    if (frameRef.current) frameRef.current.style.transform = "";
  }

  const picture = (
    <>
      <img
        key={current.src}
        src={current.src}
        alt={current.alt}
        width={current.width}
        height={current.height}
        loading="lazy"
        className="showcase-img block h-auto w-full"
      />
      {/* light sheen that follows the pointer */}
      <span aria-hidden="true" className="showcase-shine pointer-events-none absolute inset-0" />
    </>
  );

  return (
    <div className="mb-5">
      <div className="showcase group relative">
        {/* soft colour glow behind the window */}
        <div
          aria-hidden="true"
          className="absolute -inset-3 rounded-3xl bg-gradient-to-r from-blue-500/30 via-cyan-400/20 to-fuchsia-500/25 blur-2xl opacity-60 group-hover:opacity-100 transition-opacity duration-500"
        />

        <div className="showcase-float relative">
          <div
            ref={frameRef}
            onPointerMove={onPointerMove}
            onPointerLeave={onPointerLeave}
            className="showcase-frame relative overflow-hidden rounded-xl border border-slate-600/60 bg-slate-950 shadow-2xl shadow-blue-950/60"
          >
            {/* window title bar */}
            <div className="flex items-center gap-2 border-b border-slate-700/70 bg-slate-900 px-3 py-2">
              <span className="h-2.5 w-2.5 rounded-full bg-red-400/80" aria-hidden="true" />
              <span className="h-2.5 w-2.5 rounded-full bg-amber-400/80" aria-hidden="true" />
              <span className="h-2.5 w-2.5 rounded-full bg-emerald-400/80" aria-hidden="true" />
              {host && (
                <span className="ml-3 min-w-0 flex-1 truncate rounded-md bg-slate-800 px-3 py-0.5 text-[11px] text-slate-400">
                  {host}
                </span>
              )}
            </div>

            {isVideo ? (
              <a
                href={current.video}
                target="_blank"
                rel="noreferrer"
                aria-label={`Watch the demo video (opens in a new tab): ${current.alt}`}
                className="relative block w-full cursor-pointer"
              >
                {picture}
                <span className="absolute inset-x-0 bottom-5 flex justify-center">
                  <span className="video-play inline-flex items-center gap-2 rounded-full bg-blue-600 px-5 py-2.5 text-sm font-semibold text-white shadow-lg shadow-blue-600/40">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                      <path d="M8 5v14l11-7z" />
                    </svg>
                    Watch the demo
                  </span>
                </span>
              </a>
            ) : (
              <button
                type="button"
                onClick={() => setOpen(true)}
                aria-label={`Enlarge screenshot: ${current.alt}`}
                className="relative block w-full cursor-zoom-in"
              >
                {picture}
                <span className="absolute bottom-2 right-2 rounded border border-slate-700 bg-slate-950/80 px-2 py-1 text-[11px] text-slate-300 opacity-0 transition-opacity group-hover:opacity-100 group-focus-within:opacity-100">
                  Click to enlarge
                </span>
              </button>
            )}
          </div>
        </div>
      </div>

      {(many || current.caption) && (
        <div className="mt-3 flex items-center justify-between gap-3">
          <p className="min-w-0 truncate text-xs text-slate-400">{current.caption}</p>
          {many && (
            <div className="flex shrink-0 items-center gap-2">
              <button
                type="button"
                onClick={() => go(-1)}
                aria-label="Previous screenshot"
                className="h-7 w-7 rounded-full border border-slate-700 text-slate-300 hover:border-blue-400 hover:text-white"
              >
                ‹
              </button>
              <div className="flex gap-1.5" role="group" aria-label="Choose screenshot">
                {images.map((img, i) => (
                  <button
                    key={img.src}
                    type="button"
                    onClick={() => setIndex(i)}
                    aria-label={`Slide ${i + 1} of ${images.length}`}
                    aria-current={i === index}
                    className={`h-2 rounded-full transition-all ${i === index ? "w-5 bg-blue-400" : "w-2 bg-slate-600 hover:bg-slate-400"}`}
                  />
                ))}
              </div>
              <button
                type="button"
                onClick={() => go(1)}
                aria-label="Next screenshot"
                className="h-7 w-7 rounded-full border border-slate-700 text-slate-300 hover:border-blue-400 hover:text-white"
              >
                ›
              </button>
            </div>
          )}
        </div>
      )}

      {open && !isVideo && <Lightbox image={current} many={many} onClose={close} onNav={go} />}
    </div>
  );
}

// Full-size view. Rendered through a portal because a transformed ancestor (the hovering card)
// would otherwise make "position: fixed" relative to the card instead of the screen.
function Lightbox({ image, many, onClose, onNav }) {
  const closeRef = useRef(null);

  useEffect(() => {
    const previous = document.activeElement;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeRef.current?.focus();

    function onKey(e) {
      if (e.key === "Escape") onClose();
      if (many && e.key === "ArrowRight") onNav(1);
      if (many && e.key === "ArrowLeft") onNav(-1);
    }
    document.addEventListener("keydown", onKey);

    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = previousOverflow;
      previous?.focus?.();
    };
  }, [onClose, onNav, many]);

  return createPortal(
    <div
      role="dialog"
      aria-modal="true"
      aria-label={image.alt}
      onClick={onClose}
      className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/90 p-4 backdrop-blur-sm"
    >
      <button
        ref={closeRef}
        type="button"
        onClick={onClose}
        aria-label="Close"
        className="absolute right-4 top-4 h-10 w-10 rounded-full border border-slate-600 bg-slate-900 text-xl text-slate-200 hover:border-blue-400"
      >
        ×
      </button>
      <figure onClick={(e) => e.stopPropagation()} className="max-h-full max-w-6xl">
        <img src={image.src} alt={image.alt} className="max-h-[82vh] w-auto max-w-full rounded-lg border border-slate-700 shadow-2xl" />
        {image.caption && <figcaption className="mt-3 text-center text-sm text-slate-400">{image.caption}</figcaption>}
      </figure>
    </div>,
    document.body,
  );
}
