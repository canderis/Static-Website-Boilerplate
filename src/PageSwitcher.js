// transition options: bottom, top, left, right, fade
module.exports = function(
  homePageId,
  homeLinkId,
  transition = "fade",
  onTo = () => {},
  onFrom = () => {}
) {
  const app = {
    pages: [],
    activeState: null
  };

  const element = document.createElement("style");
  document.head.appendChild(element);
  const stylesheet = element.sheet;

  stylesheet.insertRule(`
    .pageSwitcher.-pageSwitcherActive{
      transform: translateY(0) translateX(0);
      opacity: 1;
    }`);
  stylesheet.insertRule(`
    .pageSwitcher.-pageSwitcherleft {
      width: 100vw;
      height: 100vh;
      position: fixed;
      transition: 1s;
      top: 0;
      transform: translateX(-100vw);
    }`);

  stylesheet.insertRule(`
    .pageSwitcher.-pageSwitcherright {
      width: 100vw;
      height: 100vh;
      position: fixed;
      transition: 1s;
      top: 0;
      transform: translateX(100vw);
    }`);

  stylesheet.insertRule(`
    .pageSwitcher.-pageSwitchertop {
      width: 100vw;
      height: 100vh;
      position: fixed;
      transition: 1s;
      top: 0;
      transform: translateY(-100vh);
    }`);
  stylesheet.insertRule(`
    .pageSwitcher.-pageSwitcherbottom {
      width: 100vw;
      height: 100vh;
      position: fixed;
      transition: 1s;
      top: 0;
      transform: translateY(100vh);
    }`);
  stylesheet.insertRule(`
    .pageSwitcher.-pageSwitcherfade {
      width: 100vw;
      height: 100vh;
      position: fixed;
      transition: 1s;
      top: 0;
      opacity: 0;
    }`);

  const createPage = (pageId, linkId, transition, onTo, onFrom) => {
    const page = document.getElementById(pageId);
    const link = document.getElementById(linkId);
    page.classList.add("pageSwitcher");
    page.classList.add(`-pageSwitcher${transition}`);

    const state = {
      from: () => {
        page.classList.remove("-pageSwitcherActive");
        link.classList.remove("-active");
        onFrom();
      },
      to: () => {
        page.classList.add("-pageSwitcherActive");
        link.classList.add("-active");
        onTo();
      }
    };

    link.addEventListener("click", () => {
      app.transition(state);
    });

    return state;
  };

  app.addPage = (
    pageId,
    linkId,
    transition = "fade",
    onTo = () => {},
    onFrom = () => {}
  ) => {
    app.pages.push(createPage(pageId, linkId, transition, onTo, onFrom));
  };

  app.transition = to => {
    app.activeState.from();
    app.activeState = to;
    app.activeState.to();
  };

  app.activeState = createPage(
    homePageId,
    homeLinkId,
    transition,
    onTo,
    onFrom
  );
  app.pages.push(app.activeState);
  app.activeState.to();

  return app;
};
