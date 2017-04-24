import * as React from "react";
import * as ReactDOM from "react-dom";

import { Todos } from "./components/Todos";

ReactDOM.render(
    <Todos title="Todos list"/>,
    document.getElementById("example")
);
