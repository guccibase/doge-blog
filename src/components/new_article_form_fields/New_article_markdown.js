import React from 'react'

export default function New_article_markdown({setArticleData}) {
    return (
       <div class="form-group">
    <label for="markdown">Markdown</label>
    <textarea required name="markdown" id="markdown" cols="30" rows="10" class="form-control" onChange={(text)=>{
        console.log(text.target.value)
        const markdown = text.target.value;
        setArticleData(prev => { 
            console.log(prev)
            
            return {
                     ...prev,markdown}
                     
                 })
             }}> </textarea>
        </div>
    )
}
