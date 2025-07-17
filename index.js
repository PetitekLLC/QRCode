export default {
  async fetch(request) {
    let url = new URL(request.url);
    let path = url.pathname.substring(1); // Extract path after domain

    const redirects = {
      "setup": "https://petitek.com?",
      "amazon": "https://www.amazon.com/dp/B0D6QQPWJQ",
      "marketing": "https://petitek.com",
      "training": "https://petitek.com"
    };

    if (redirects[path]) {
      return Response.redirect(redirects[path], 302, {
        headers: {
          "Cache-Control": "no-store"
        }
      });
    }

    let serialNumberPattern = /^CHT\d{5,}$/;
    if (serialNumberPattern.test(path)) {
      let baseFormURL = "https://docs.google.com/forms/d/e/1FAIpQLSdiHjd3WcEK9n-7XAUPVpJ5jG7GiZVgzBVCFXDxcJ6zZhfl3w/viewform?usp=pp_url&entry.1714918339=";
      let redirectURL = baseFormURL + encodeURIComponent(path);
      return Response.redirect(redirectURL, 302, {
        headers: {
          "Cache-Control": "no-store"
        }
      });
    }

    return new Response("Not Found", { status: 404 });
  }
};

