import React from 'react'
import AppTitle from '../homepage_components/App_title'
import './Articles_screen.css'
import NewArticleBtn from '../homepage_components/New_article_btn'
import Articles from '../homepage_components/Articles'
import MostLikedArticles from '../homepage_components/Most_liked_articles'
import FilterButtons from '../homepage_components/Filter_buttons'
import Tracker from '../homepage_components/Tracker'
import AccountButton from '../homepage_components/Account_button'
import { Row } from 'react-bootstrap'

function ArticlesScreen() {
    return (
            <div>
                <Row>
                <main className="col">
                <AppTitle></AppTitle>
                </main>
                <AccountButton></AccountButton>
                </Row>
                <div>
                  <Tracker>

                  </Tracker>
                </div>
              <div>
                <NewArticleBtn></NewArticleBtn>
              </div>
                <div>
                    <MostLikedArticles></MostLikedArticles>
                </div>
          
                <div>
                    <FilterButtons></FilterButtons>
                </div>
                <div>
                <Articles></Articles>
                </div>
            </div>
    )
}

export default ArticlesScreen
