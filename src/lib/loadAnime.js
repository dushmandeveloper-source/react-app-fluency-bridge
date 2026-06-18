let loadingPromise = null;

export function loadAnime() {
  if (typeof window !== "undefined" && window.anime) return Promise.resolve(window.anime);
  if (loadingPromise) return loadingPromise;

  loadingPromise = new Promise((resolve) => {
    const existing = document.querySelector('script[data-anime-cdn="true"]');
    if (existing) {
      if (window.anime) {
        resolve(window.anime);
      } else {
        existing.addEventListener("load", () => resolve(window.anime));
      }
      return;
    }
    const script = document.createElement("script");
    script.src = "https://cdnjs.cloudflare.com/ajax/libs/animejs/2.0.2/anime.min.js";
    script.async = true;
    script.dataset.animeCdn = "true";
    script.onload = () => resolve(window.anime);
    document.body.appendChild(script);
  });

  return loadingPromise;
}
