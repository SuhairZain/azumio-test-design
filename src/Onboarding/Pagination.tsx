import React, { PureComponent } from 'react';

import { range } from '../utils/range';

import colors from '../global/colors';
import strings from '../global/strings';

type Props = {
    currentIndex: number;
    numberOfPages: number;
};

const DOT_SIZE = 8;
const CURR_DOT_SIZE = 12;

class Pagination extends PureComponent<Props, never> {
    render() {
        const { currentIndex, numberOfPages } = this.props;

        const isOnLastPage = currentIndex === numberOfPages - 1;

        return (
            <div style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                <span style={{ color: colors.mutedText }}>{strings.back.toLocaleUpperCase()}</span>
                <div style={{ flex: 1, flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                    {range(0, numberOfPages).map(i => {
                        const dotSize = i === currentIndex ? CURR_DOT_SIZE : DOT_SIZE;
                        const backgroundColor = i === currentIndex ? colors.azumioBlue : colors.mutedControls;

                        return (
                            <div
                                key={i}
                                style={{ height: dotSize, width: dotSize, borderRadius: dotSize / 2, backgroundColor, marginLeft: i === 0 ? 0 : 12 }} />
                        );
                    })}
                </div>
                <span style={{ color: colors.azumioBlue }}><b>{(isOnLastPage ? strings.done : strings.next).toLocaleUpperCase()}</b></span>
            </div>
        );
    }
}

export default Pagination;
