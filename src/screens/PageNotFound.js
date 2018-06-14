import React, {Component} from 'react';
import {Link} from 'react-router-dom'


class PageNotFound extends Component {
    render() {
        return <div>
            <h1>404</h1>
            <p>Бороздишь бессмертные просторы интернета? Тут есть секретные ссылки - но эта не одна из них.</p>
            <Link to="/">Вернуться в наш мир</Link>
        </div>

    }
}

export default PageNotFound;
