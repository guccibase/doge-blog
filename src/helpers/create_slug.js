import slugify from 'slugify'


function createSlug(title){
    let slug = ''
    const time = new Date();
    if (this.title) {
        slug = slugify(title + "-created-" + time, { lower: true, strict: true })
    }

    return slug

}


export default createSlug