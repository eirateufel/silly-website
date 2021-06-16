function vh() {
    return Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
}

function vw() {
    return Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
}

function vmin() {
    return Math.min(vh(), vw());
}

function vmax() {
    return Math.max(vh(), vw());
}

export {vmin, vmax, vh, vw}