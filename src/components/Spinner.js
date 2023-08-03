import React from 'react'
import loading from 'C:/Users/sheta/OneDrive/Desktop/.vscode/react/newsapp/src/loading.gif.gif'

const Spinner = () => {

    return (
        <div className="text-center">
            <img className="my-3" src={loading} alt="loading" />
        </div>
    )

}

export default Spinner