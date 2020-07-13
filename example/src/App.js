import React from "react"

import { Button } from "my-common-components"

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
        </>
    )
}

export default App
