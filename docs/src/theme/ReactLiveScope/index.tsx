import React from "react";
import * as MyComponents from "my-common-components"
import FlexRow from "../../components/FlexRow";

const ReactLiveScope = {
    React,
    ...React,
    ...MyComponents,
    FlexRow
};

export default ReactLiveScope;