import React from "react";
import {
    withKnobs,
    text,
    boolean,
    select,
    object
} from "@storybook/addon-knobs";
import { Button } from 'my-common-components'
// import mdx from "./Button.mdx";
import cx from "classnames";

import "../styles/storybook.css";

export default {
    title: "Button",
    component: Button,
    parameters: {
        decorators: [withKnobs],
        docs: {
            // page: mdx
        }
    }
};

export const style = () => {
    const theme = select(
        "theme",
        [
            "primary",
            "secondary",
            "text",
            "link",
            "dashed"
        ],
        "primary"
    );
    const disabled = boolean("disabled", false);
    const children = text("children", "test");

    return (
        <div className="story-book-content-wrapper">
            <Button
                className={cx(theme)}
                disabled={disabled}
            >
                {children}
            </Button>
        </div>
    );
};

export const theme = () => (
    <div className="story-book-content-wrapper">
        <Button theme="primary">primary</Button>
        <Button theme="secondary">secondary</Button>
        <Button theme="text">text</Button>
        <Button theme="link">link</Button>
        <Button theme="dashed">dashed</Button>
    </div>
);

style.story = {
    name: "Default"
};
