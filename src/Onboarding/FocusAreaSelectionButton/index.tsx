import React, { PureComponent } from 'react';

import './FocusAreaSelectionButton.css';

import { FocusArea } from '../types';

import colors from '../../global/colors';

type Props = {
    focusArea: FocusArea;
    selected: boolean;
    onClick: (focusArea: FocusArea) => void;
};

const STYLE_SELECTED = {
    color: colors.textOnDarkBackground,
    background: colors.azumioBlue,
};

const STYLE_UNSELECTED = {
    color: colors.mutedText,
    background: colors.white,
};

class FocusAreaSelectionButton extends PureComponent<Props, never> {
    render() {
        const { focusArea, selected } = this.props;

        return (
            <button
                className={`focus-area-selection-button ${selected ? 'button-selected' : ''}`}
                style={{ ...(selected ? STYLE_SELECTED : STYLE_UNSELECTED), border: `1px solid ${selected ? colors.transparent : colors.mutedControls}` }}
                onClick={() => this.props.onClick(focusArea)}>
                <span style={{ fontSize: '1.5em' }}><b>{focusArea.name}</b></span>
            </button>
        );
    }
}

export default FocusAreaSelectionButton;
