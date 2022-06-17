import { registerApplication, start } from "single-spa";

registerApplication({
  name: "@sofka/mf-footer",
  app: () => System.import("@sofka/mf-footer"),
  activeWhen: ["/angular-app"],
});

registerApplication({
  name: "@sofka/mf-footer2",
  app: () => System.import("@sofka/mf-footer2"),
  activeWhen: ["/angular2-app"],
});

registerApplication({
  name: "@sofka/header",
  app: () => System.import("@sofka/header"),
  activeWhen: ["/react-app"],
});

start({
  urlRerouteOnly: true,
});
