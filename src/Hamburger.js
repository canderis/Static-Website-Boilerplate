module.exports = function(navId, widthThreshold = false) {
    const hamburger = document.createElement("div");
    const nav = document.getElementById(navId);
    nav.append(hamburger);
    hamburger.setAttribute("id", "hamburger");
    hamburger.append(document.createElement("span"));
    hamburger.append(document.createElement("span"));
    hamburger.append(document.createElement("span"));

    const element = document.createElement("style");
    document.head.appendChild(element);
    const stylesheet = element.sheet;

    let css = [
        `#hamburger{
            opacity: 1;
            transform: rotate(0);
        }`,
        `#${navId}.-show #hamburger{
            transform: rotate(90deg);
        }`,
        `#${navId}:not(.-show) ul {
            opacity: 0;
        }`,
        `#${navId} ul {
            opacity: 1;
            transition: 1s;
        }`
    ];

    if (widthThreshold) {
        css = [
            `@media only screen and (max-width: ${widthThreshold}px) {
                ${css.join("")}
            }`
        ];
    }

    css.forEach(val => {
        stylesheet.insertRule(val);
    });

    stylesheet.insertRule(`
        #hamburger {
            display: grid;
            transition: 1s;
            position: fixed;
            cursor: pointer;
            opacity: 0;
            top: 20px;
            left: 20px;
            width: 30px;
            grid-gap: 6px;
            z-index: 9001;
        }`);
    stylesheet.insertRule(`
        #hamburger span {
            display: block;
            width: 30px;
            height: 4px;
            background-color: #fffc;
            margin: auto;
            border-radius: 3px;
        }`);

    let navVisible = false;
    hamburger.addEventListener("click", () => {
        if (!navVisible) {
            nav.classList.add("-show");
        } else {
            nav.classList.remove("-show");
        }
        navVisible = !navVisible;
    });
};
