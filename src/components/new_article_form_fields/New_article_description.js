import React from 'react'

export default function New_article_description({setArticleData}) {
    return (
       <div class="form-group">
         <label for="description">Description</label>
         <textarea required name="description" id="description" cols="30"  rows="2" class="form-control" onChange={(text)=> 
         {
                const description = text.target.value

         setArticleData(prev => { 
             return {
                     ...prev,description}
                 })}}></textarea>
        </div>
    )
}
