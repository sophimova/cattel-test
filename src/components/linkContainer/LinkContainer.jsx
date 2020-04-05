import './LinkContainer.css';

import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { TextField } from '@material-ui/core';

const useStyles = makeStyles({
    link: {
        marginTop: 5,
        marginBottom: 5,
    },
});

const LinkContainer = () => {
    const classes = useStyles();

    return (
        <div className="link-container">
            <TextField className={classes.link} label="url" value={window.location.href} size="small" />

            <Button
                variant="contained"
                size="small"
                color="primary"
                onClick={() => navigator.clipboard.writeText(window.location.href)}
            >
                Копировать
            </Button>
        </div>
    );
};

export default LinkContainer;
