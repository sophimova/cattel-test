import React from 'react';

import { withStyles } from '@material-ui/core/styles';
import { Slider, Typography, Tooltip } from '@material-ui/core';

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

const HtmlTooltip = withStyles((theme) => ({
    tooltip: {
        padding: 10,
        backgroundColor: '#f5f5f9',
        color: 'rgba(0, 0, 0, 0.87)',
        maxWidth: 220,
        fontSize: theme.typography.pxToRem(15),
        border: '1px solid #dadde9',
    },
}))(Tooltip);

const Factor = ({ factor, configuration }) => {
    return (
        <div className="row mt-4 mr-0 ml-0">
            <div className="col-2">
                <HtmlTooltip title={configuration.minValueName}>
                    <Typography variant="subtitle1" component="p">
                        {factor.name}
                        <sup>-</sup>
                    </Typography>
                </HtmlTooltip>
            </div>
            <div className="col-8">
                <Slider
                    value={factor.value}
                    aria-labelledby="slider"
                    step={1}
                    marks={createMarks(configuration)}
                    min={0}
                    max={12}
                    valueLabelDisplay="on"
                />
            </div>

            <div className="col-2">
                <HtmlTooltip title={configuration.maxValueName}>
                    <Typography variant="subtitle1" component="h6">
                        {factor.name}
                        <sup>+</sup>
                    </Typography>
                </HtmlTooltip>
            </div>
        </div>
    );
};

export default Factor;
