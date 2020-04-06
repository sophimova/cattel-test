import './Factor.css';

import React from 'react';

import { Slider, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    slider: {
        margin: 0,
    },
});

function createMarks(config) {
    var result = [
        {
            value: config.minValue,
            label: config.minValue,
        },
        {
            value: config.maxValue,
            label: config.maxValue,
        },
    ];

    if (config.expectedValue > 0) {
        result = result.concat([
            {
                value: config.expectedValue,
                label: 'с',
            },
            {
                value: config.expectedValue - config.standardDeviation,
                label: 'н',
            },
            {
                value: config.expectedValue + config.standardDeviation,
                label: 'в',
            },
        ]);
    }

    return result;
}

const Factor = ({ factor, configuration }) => {
    const classes = useStyles();

    return (
        <div className="mt-4 mr-0 ml-0">
            <div className="row">
                <div className="col-2 factor-container p-0 m-0">
                    <Typography variant="h5" component="h6">
                        {factor.name}
                        <sup>-</sup>
                    </Typography>
                </div>
                <div className="col-8 p-1">
                    <div className="row">
                        <div className="col-5 lfactor-title">
                            <Typography variant="caption" component="p" color="textSecondary" align="left">
                                {configuration.minValueName}
                            </Typography>
                        </div>
                        <div className="col-2">{factor.value}</div>
                        <div className="col-5 rfactor-title">
                            <Typography variant="caption" component="p" color="textSecondary" align="right">
                                {configuration.maxValueName}
                            </Typography>
                        </div>
                    </div>
                    <div>
                        <Slider
                            className={classes.slider}
                            value={factor.value}
                            aria-labelledby="slider"
                            step={1}
                            marks={createMarks(configuration)}
                            min={0}
                            max={12}
                        />
                    </div>
                </div>

                <div className="col-2 factor-container p-0 m-0">
                    <Typography variant="h5" component="h6">
                        {factor.name}
                        <sup>+</sup>
                    </Typography>
                </div>
            </div>
        </div>
    );
};

export default Factor;
