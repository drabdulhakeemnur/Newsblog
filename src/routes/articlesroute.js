const express=require('express')
const router= express.Router()
const articles=[{
title:'Bloggy',
createdAt:new Date(),
description:"sample article news....."
    },
    {
title:'Bloggy',
createdAt : new Date(),
description:"sample article news....."
    },{
title:'Bloggy',
createdAt:new Date(),
description:"sample article news....."
    }]

    // routes
router.get('/', (req,res)=>{
    
    res.render('articles/home', {articles: articles})
})
router.get('/new', (req, res)=>{
res.render('articles/newarticle')
})
module.exports=router