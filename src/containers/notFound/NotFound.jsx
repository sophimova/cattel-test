import React from 'react';
import './NotFound.css';

import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
        <div className="notfound">
            <div className="notfound-404">
                <h1>404</h1>
            </div>
            <h2>упс! Ничего не найдено</h2>
            <p>
                Возможно, страница, которую вы ищете, была удалена, изменилось ее имя или временно недоступна.
                <Link to="/">Вернуться к тесту</Link>
            </p>
        </div>
    );
};

export default NotFound;
