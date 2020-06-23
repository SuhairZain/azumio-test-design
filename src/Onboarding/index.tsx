import React, { PureComponent } from 'react';

import { FocusArea, FocusAreaId } from './types';

import strings from '../global/strings';
import FocusAreaSelectionButton from './FocusAreaSelectionButton';
import Pagination from './Pagination';

const focusAreas: FocusArea[] = [
    { id: 'blood_glucose', name: strings.onboardingFocusAreaNames.blood_glucose },
    { id: 'medication', name: strings.onboardingFocusAreaNames.medication },
    { id: 'food_tracking', name: strings.onboardingFocusAreaNames.food_tracking },
    { id: 'exercise', name: strings.onboardingFocusAreaNames.exercise },
    { id: 'weight_management', name: strings.onboardingFocusAreaNames.weight_management },
    { id: 'blood_pressure', name: strings.onboardingFocusAreaNames.blood_pressure },
    { id: 'a1c', name: strings.onboardingFocusAreaNames.a1c },
];

type State = {
    focusAreaSelection: Partial<{ [key in FocusAreaId]: boolean }>;
};

class Onboarding extends PureComponent<{}, State> {
    state: State = {
        focusAreaSelection: {},
    };

    render() {
        const { focusAreaSelection } = this.state;

        return (
            <div style={{ flex: 1, padding: '0 24px' }}>
                <div style={{ paddingTop: 32, overflow: 'scroll' }}>
                    <h1>{strings.onboardingHeader}</h1>
                    <h3 style={{ marginTop: 16 }}>{strings.onboardingReason}</h3>
                    <div style={{ flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-between' }}>
                        {focusAreas.map(focusArea => {
                            const selected = !!focusAreaSelection[focusArea.id];

                            return (
                                <FocusAreaSelectionButton
                                    key={focusArea.id}
                                    focusArea={focusArea}
                                    selected={selected}
                                    onClick={(focusArea) => {
                                        this.setState({
                                            focusAreaSelection: {
                                                ...this.state.focusAreaSelection,
                                                [focusArea.id]: !selected,
                                            },
                                        })
                                    }} />
                            );
                        })}
                    </div>
                </div>
                <div style={{ flex: 1, justifyContent: 'flex-end', paddingBottom: 24, marginTop: 48 }}>
                    <Pagination currentIndex={4} numberOfPages={5} />
                </div>
            </div>
        );
    }
}

export default Onboarding;
