import React, { Fragment } from 'react';
import { Api, GET_TEST, POST_ANSWER } from '../../utilities';
import QuestionCard from '../questionCard/QuestionCard';
import { Loader } from '..';

var answers;

class TestContainer extends React.Component {
    constructor(props) {
        super(props);

        this.state = { test: null, counter: 0, startUTC: this.getNow(), lastTime: this.getNow(), hasMore: true };
        this.handleAnswerClick = this.handleAnswerClick.bind(this);
        this.backClickHandler = this.backClickHandler.bind(this);
    }

    componentDidMount() {
        this.loadTest();
    }

    async loadTest() {
        try {
            const resp = await Api.get(GET_TEST);

            if (resp.status === 200) {
                answers = new Array(resp.data.length);
                this.setState({ test: resp.data });
            }
        } catch {
            const { history } = this.props;
            history.push('/error');
        }
    }

    handleAnswerClick(questionId, answerId) {
        const { test, counter, lastTime } = this.state;
        const { history } = this.props;
        const duration = this.getNow() - lastTime;

        answers[counter] = { questionId, answerId, duration };

        if (counter === test.questions.length - 1) {
            this.setState({ hasMore: false });
            Api.post(POST_ANSWER, this.createResult()).then((resp) => history.push(`/result/${resp.data}`));
        } else {
            this.setState({ counter: counter + 1, lastTime: this.getNow() });
        }
    }

    createResult() {
        const { startUTC } = this.state;
        const duration = this.getNow() - startUTC;

        return { answers, startUTC: startUTC.toUTCString(), duration, info: this.getInfo() };
    }

    getInfo() {
        return {
            timezone: new Date().getTimezoneOffset() / 60,
            pageon: window.location.pathname,
            referrer: document.referrer,
            browserName: navigator.appName,
            browserEngine: navigator.product,
            browserVersion1a: navigator.appVersion,
            browserVersion1b: navigator.userAgent,
            browserLanguage: navigator.language,
            browserOnline: navigator.onLine,
            browserPlatform: navigator.platform,
            javaEnabled: navigator.javaEnabled(),
            dataCookiesEnabled: navigator.cookieEnabled,
        };
    }

    getNow() {
        return new Date();
    }

    backClickHandler() {
        const { counter } = this.state;

        if (counter > 0) this.setState({ counter: counter - 1 });
    }

    render() {
        const { test, counter, hasMore } = this.state;
        var render = <Loader />;

        if (test && hasMore) {
            const progress = (counter / test.questions.length) * 100;

            render = (
                <Fragment>
                    <QuestionCard
                        number={counter + 1}
                        answer={answers[counter]}
                        question={test.questions[counter]}
                        onAnswer={this.handleAnswerClick}
                        onBack={this.backClickHandler}
                        progress={progress}
                    />
                </Fragment>
            );
        }

        return render;
    }
}

export default TestContainer;
