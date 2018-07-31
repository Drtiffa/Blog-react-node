import React from 'react'
import { Route } from 'react-router-dom'
import ShowArticles from './ShowArticles'
import Login from './Login'
import Register from './Register'
import EditArticle from './EditArticle';

const Main = () => (
    <div>
        
        <Route exact path='/' component={ShowArticles}/>
        <Route path='/register' component={Register}/>
        <Route path='/login' component={Login}/>
        <Route path='/new_article' component={EditArticle}/>
        
    </div>
    )


export default Main