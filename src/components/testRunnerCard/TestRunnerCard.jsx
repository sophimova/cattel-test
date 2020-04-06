import React from 'react';

import { Typography, Paper } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import { BASE_PATH } from '../../utilities';

const useStyles = makeStyles({
    root: {
        width: '90%',
        maxWidth: 450,
        padding: 25,
    },
    text: {
        marginBottom: 15,
    },
});

const TestRunnerCard = ({ history }) => {
    const classes = useStyles();

    return (
        <Paper elevation={4} className={classes.root}>
            <Typography className={classes.text} variant="h5" component="h2">
                Тест содержит 109 вопросов и займет от 20 до 30 минут времени.
            </Typography>

            <Button variant="contained" size="large" color="primary" onClick={() => history.push(BASE_PATH + 'test')}>
                Начать
            </Button>
        </Paper>
    );
};

export default TestRunnerCard;
