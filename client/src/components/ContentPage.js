import React from 'react'
import { Link } from 'react-router-dom';
import Content from './Content';
import HomePage from './HomePage';

const ContentPage = (props) => {
    return (
        <div>
            <Content />
            {/* {
                props.auth ? <Content /> : <Link to='/'>Вернуться на главную страницу</Link>
            } */}
        </div>
    )
}

export default ContentPage;