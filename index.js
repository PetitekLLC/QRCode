export default {
  async fetch(request) {
    let url = new URL(request.url);
    let serialNumber = url.pathname.substring(1); // Extract serial number from URL

    // Base Google Form URL with the correct pre-fill format
    let baseFormURL = "https://docs.google.com/forms/d/e/1FAIpQLSdiHjd3WcEK9n-7XAUPVpJ5jG7GiZVgzBVCFXDxcJ6zZhfl3w/viewform?usp=pp_url&entry.1714918339=";

    // Generate the final pre-filled form URL with the serial number
    let redirectURL = baseFormURL + encodeURIComponent(serialNumber);

    // Only allow GET requests
    if (request.method !== "GET") {
      return new Response("Only GET requests are allowed", { status: 405 });
    }

    // Redirect to the dynamically generated Google Form URL
    return Response.redirect(redirectURL, 301);
  },
};
