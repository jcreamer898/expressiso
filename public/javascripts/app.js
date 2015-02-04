var React = require("react"),
    App = React.createFactory(require("components/app"));
    
if (typeof window !== "undefined") {
  window.onload = function() {
    React.render(App(), document.getElementById("content"));
  };
}