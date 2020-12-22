import './ResultCard.css';

import React from 'react';

import { Typography, Paper } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import LinkContainer from '../linkContainer/LinkContainer';
import Factor from '../factor/Factor';

const useStyles = makeStyles({
    root: {
        padding: 25,
    },
    text: {
        marginBottom: 15,
    },
    resultsTitle: {
        marginTop: 15,
        marginBottom: 65,
    },
});

const ResultCard = ({ result }) => {
    const classes = useStyles();

    return (
        <div className="result-container mt-5 mb-5">
            <Paper elevation={4} className={classes.root}>
                <div className={classes.resultsTitle}>
                    <Typography variant="h5" component="h2">
                        Спасибо за прохождение теста Кеттелла!
                    </Typography>
                    <Typography variant="h5" component="h2">
                        Результаты:
                    </Typography>
                </div>
                <div>
                    {result.map((item, index) => (
                        <Factor key={index} factor={item.factor} configuration={item.configuration} />
                    ))}
                </div>

                <div className="mt-3 mb-3">
                    <Typography variant="body2" component="p" color="textSecondary" align="left">
                        н,с,в - диапазон средних значений
                    </Typography>
                    <Typography variant="body2" component="p" color="textSecondary" align="left">
                        н – низкое
                    </Typography>
                    <Typography variant="body2" component="p" color="textSecondary" align="left">
                        с – среднее
                    </Typography>
                    <Typography variant="body2" component="p" color="textSecondary" align="left">
                        в – высокое
                    </Typography>
                </div>
                <LinkContainer className="mt-5" />
                <Typography variant="caption" component="p" color="textSecondary" align="center">
                    Created by Sophia Yakimova
                </Typography>
            </Paper>
        </div>
    );
};

export default ResultCard;
