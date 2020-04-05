import './QuestionCard.css';

import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import LinearProgress from '@material-ui/core/LinearProgress';
import IconButton from '@material-ui/core/IconButton';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';

const useStyles = makeStyles({
    cardBody: {
        margin: 15,
    },
    header: {
        padding: 0,
    },
    button: {
        margin: 5,
        width: 300,
    },
    none: {
        display: 'none',
    },
    text: {
        margin: 5,
        textTransform: 'none',
    },
    buttonsRoot: {
        marginTop: 15,
        padding: 0,
        justifyContent: 'center',
    },
    mainText: {
        hyphens: 'none',
    },
});

const QuestionCard = ({ number, question, answer, progress, onAnswer, onBack }) => {
    const classes = useStyles();

    return (
        <div className="card-container">
            <Card elevation={4}>
                <div className={classes.cardBody}>
                    <CardContent className={classes.header}>
                        <div className="row mt-4">
                            <div className="col-2 title-btn-container">
                                <IconButton
                                    onClick={onBack}
                                    size="small"
                                    color="primary"
                                    disabled={!(progress > 0)}
                                    aria-label="back"
                                >
                                    <ArrowBackIosIcon />
                                </IconButton>
                            </div>
                            <div className="col-8">
                                <Typography variant="h5" component="h2">
                                    Вопрос №{number}
                                </Typography>
                            </div>
                        </div>

                        <div className="text-container mb-4 mt-4">
                            <Typography className="mainText" variant="h6" color="textSecondary" component="p">
                                {question.text}
                            </Typography>
                        </div>
                    </CardContent>

                    <CardActions className={classes.buttonsRoot}>
                        <div className="buttons-container">
                            {question.answers.map((item, index) => (
                                <Button
                                    key={index}
                                    size="large"
                                    variant="outlined"
                                    color={answer && answer.answerId === item.id ? 'primary' : 'default'}
                                    className={classes.button}
                                    onClick={() => onAnswer(question.id, item.id)}
                                >
                                    <Typography
                                        className={classes.text}
                                        color={answer && answer.answerId === item.id ? 'primary' : 'textSecondary'}
                                        variant="body1"
                                        component="p"
                                    >
                                        {item.text}
                                    </Typography>
                                </Button>
                            ))}
                        </div>
                    </CardActions>
                </div>

                <LinearProgress variant="determinate" value={progress} />
            </Card>
        </div>
    );
};

export default QuestionCard;
