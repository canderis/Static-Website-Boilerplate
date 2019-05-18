module.exports = function(navId) {
    const hamburger = document.createElement('div');
    document.getElementById(navId).append(hamburger);
    hamburger.setAttribute('id', 'hamburger');
    hamburger.append(document.createElement('span'));
    hamburger.append(document.createElement('span'));
    hamburger.append(document.createElement('span'));
};
