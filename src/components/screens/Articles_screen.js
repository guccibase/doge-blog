import React from 'react'
import AppTitle from '../homepage_components/App_title'
import {Container} from 'react-bootstrap'
import './Articles_screen.css'
import NewArticleBtn from '../homepage_components/New_article_btn'
import Articles from '../homepage_components/Articles'

function ArticlesScreen() {
    return (
            <div>
                <main>
                <AppTitle></AppTitle>
                </main>

                <div>
                <NewArticleBtn></NewArticleBtn>
                </div>
                <div>
                <Articles></Articles>
                </div>
            </div>
    )
}

export default ArticlesScreen
