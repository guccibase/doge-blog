import React from 'react'
import Articles from '../homepage_components/Articles'

function CurrentUserArticles() {
    return (
        <div>
            <h4 className="mt-4">
                My articles
            </h4>
            <Articles/>
        </div>
    )
}

export default CurrentUserArticles
