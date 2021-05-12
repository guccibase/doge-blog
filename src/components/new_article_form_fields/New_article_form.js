import React,{useState} from 'react'
import NewArticleCancelBtn from './New_article_cancel_btn'
import NewArticleDescription from './New_article_description'
import NewArticleMarkdown from './New_article_markdown'
import NewArticleSubmitBtn from './New_article_submit_btn'
import NewArticleTitle from './New_article_title'
import {Form} from 'react-bootstrap'
import './New_article.css'

export default function NewArticleForm() {
    const [articleData, setArticleData] = useState({title:"", description:"", markdown:""})
    const [navigate, setNavigate] = useState(false)
    return (
        <div class="container">
           <h1 class="mb-4">New Article</h1>
           <Form>
               <NewArticleTitle setArticleData={setArticleData}/>
               <NewArticleDescription setArticleData={setArticleData}/>
                <NewArticleMarkdown setArticleData={setArticleData}/>
               <NewArticleCancelBtn />
               <NewArticleSubmitBtn articleData={articleData}/>
          </Form>  

       </div>

    )
}
