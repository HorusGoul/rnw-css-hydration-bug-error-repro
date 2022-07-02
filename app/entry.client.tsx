import { RemixBrowser } from "@remix-run/react";
// @ts-ignore
import { hydrateRoot } from "react-dom";
import { renderToStaticMarkup } from "react-dom/server";
import { AppRegistry } from "react-native";
import { ReactNativeStylesContext } from "./rn-styles";

const serverStyleMarkup = document.getElementById(
  "react-native-stylesheet"
)?.outerHTML;

console.log("%c Server Markup", "color: red");
console.info(serverStyleMarkup);

const App = () => <RemixBrowser />;

AppRegistry.registerComponent("App", () => App);

// @ts-ignore
const { getStyleElement } = AppRegistry.getApplication("App");

const clientStyleMarkup = renderToStaticMarkup(getStyleElement());

// console log colored red
console.log("%c Client Markup", "color: red");
console.info(clientStyleMarkup);

hydrateRoot(
  document,
  <ReactNativeStylesContext.Provider value={getStyleElement()}>
    <App />
  </ReactNativeStylesContext.Provider>
);
