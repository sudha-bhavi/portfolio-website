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
}
