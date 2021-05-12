import React from 'react'
import NewArticleBtn from '../homepage_components/New_article_btn'
import Articles from '../homepage_components/Articles'
import Tracker from '../homepage_components/Tracker'
import ProfileHeader from '../profile_page/Profile_header'
import CurrentUserArticles from '../profile_page/Current_user_articles'
import UserDetails from '../profile_page/User_details'

function Profile() {
    return (
        <div>
            <ProfileHeader />
            <div>
                <UserDetails />
            </div>
            <div>
                <NewArticleBtn />
            </div>
            <div>
                <CurrentUserArticles/>
            </div>
        </div>
    )
}

export default Profile
