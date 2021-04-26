import createDomPurify from 'dompurify'
import { JSDOM } from 'jsdom'
import marked from 'marked'



const dompurify = createDomPurify(new JSDOM().window)


function purifyHTML(html){
    let sanitizedHTML = '';
    if (html) {
        sanitizedHTML = dompurify.sanitize(marked(html))
        console.log(html);
    }

    return sanitizedHTML;
}


export default purifyHTML
