import React from 'react';
import './ServerError.css';

const ServerError = () => {
    return (
        <div className="serv-err">
            <div className="serv-err-404">
                <h1>упс!</h1>
            </div>
            <h2>Сервер недоступен</h2>
            <p>
                К сожелению сервер в данный момент не может обработать запрос в связи с временной перегрузкой или
                другими обстоятельствами. Зайдите позже или обратитесь к администратору.
            </p>
        </div>
    );
};

export default ServerError;
