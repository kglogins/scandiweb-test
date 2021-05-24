/* eslint-disable @scandipwa/scandipwa-guidelines/derived-class-names */
import PropTypes from 'prop-types';
import { PureComponent } from 'react';

/** @namespace ScandiwebTask/Src/Component/ProgressBarLine/Component/ProgressBarLine */
export class ProgressBarLine extends PureComponent {
    static propTypes = {
        isActive: PropTypes.bool.isRequired
    };

    renderIsActive() {
        const { isActive } = this.props;
        return isActive;
    }

    render() {
        return (
            <div
              block={ `ProgressBarLine ${this.renderIsActive() ? 'ProgressBarLine--active' : ''} ` }
            />
        );
    }
}

export default ProgressBarLine;
