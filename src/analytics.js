// Privacy-friendly visit counting with GoatCounter (no cookies, no personal data).
// It stays off until a site code is set at build time:
//   1. Create a free site at https://www.goatcounter.com (the code is the subdomain you pick).
//   2. In Netlify, add the environment variable VITE_GOATCOUNTER_CODE=<your code> and redeploy.
// For local builds, put the same line in a git-ignored .env.local file.
export function initAnalytics() {
  const code = import.meta.env.VITE_GOATCOUNTER_CODE;
  if (!code || !/^[a-z0-9-]+$/i.test(code)) return;

  const script = document.createElement("script");
  script.async = true;
  script.src = "https://gc.zgo.at/count.js";
  script.dataset.goatcounter = `https://${code}.goatcounter.com/count`;
  document.head.appendChild(script);

  document.addEventListener("click", trackLinkClick, true);
}

// Counts clicks on the links a recruiter cares about as GoatCounter "events",
// without touching the components: the link's href decides the event name.
function eventNameFor(href) {
  if (/Sudharani_Bhavi_Resume\.pdf$/i.test(href)) return "click-resume";
  if (href.startsWith("mailto:")) return "click-email";
  let url;
  try {
    url = new URL(href, window.location.origin);
  } catch {
    return null;
  }
  if (url.hostname.endsWith("linkedin.com")) return "click-linkedin";
  if (url.hostname === "github.com") {
    const parts = url.pathname.split("/").filter(Boolean);
    return parts.length >= 2 ? `click-repo-${parts[1].toLowerCase()}` : "click-github-profile";
  }
  if (url.origin !== window.location.origin) return "click-live-demo";
  return null;
}

function trackLinkClick(e) {
  const link = e.target instanceof Element ? e.target.closest("a[href]") : null;
  if (!link || !window.goatcounter?.count) return;
  const name = eventNameFor(link.getAttribute("href"));
  if (name) window.goatcounter.count({ path: name, title: name, event: true });
}
