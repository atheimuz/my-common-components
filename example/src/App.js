import React from "react"

import { Button, Message } from "my-common-components"

const App = () => {
    return (
        <>
            <Button className="test" theme="primary">
                primary
            </Button>
            <Button className="test" theme="secondary">
                secondary
            </Button>
            <Button className="test" theme="text">
                text
            </Button>
            <Button className="test" theme="link">
                link
            </Button>
            <Button className="test" theme="dashed">
                dashed
            </Button>
            <Button className="test" theme="dashed">
                dashed
            </Button>
            <Message>안녕</Message>
        </>
    )
}

export default App
