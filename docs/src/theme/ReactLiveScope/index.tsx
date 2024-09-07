import React from "react";
import * as MyComponents from "@my-common-components/react"
import FlexRow from "../../components/FlexRow";

const ReactLiveScope = {
    React,
    ...React,
    ...MyComponents,
    FlexRow
};

export default ReactLiveScope;