const url    = new URL(window.location.href);
const params = new URLSearchParams(location.search);
/**
 * Without specific parameters, redirect to URL with parameters
 */
if (params.has('ov') === false) {
    url.searchParams.set('ov', '1');
    location.href = url;
}
