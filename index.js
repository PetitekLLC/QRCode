addEventListener("fetch", event => {
    event.respondWith(handleRequest(event.request));
});

async function handleRequest(request) {
    // Get the request URL
    let url = new URL(request.url);

    // Extract the serial number (everything after /)
    let serial = url.pathname.substring(1);

    // Base Google Form URL
    let baseFormURL = "https://docs.google.com/forms/d/e/1FAIpQLSdiHjd3WcEK9n-7XAUPVpJ5jG7GiZVgzBVCFXDxcJ6zZhfl3w/viewform?usp=pp_url&entry.1714918339=";

    // Construct the redirect URL
    let redirectURL = baseFormURL + serial;

    return Response.redirect(redirectURL, 301); // Permanent Redirect
}
