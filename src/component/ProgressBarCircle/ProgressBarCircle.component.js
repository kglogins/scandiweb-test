/* eslint-disable @scandipwa/scandipwa-guidelines/derived-class-names */
import PropTypes from 'prop-types';
import { PureComponent } from 'react';

/** @namespace ScandiwebTask/Src/Component/ProgressBarCircle/Component/ProgressBarCircle */
export class ProgressBarCircle extends PureComponent {
    static propTypes = {
        stepNumber: PropTypes.number.isRequired,
        title: PropTypes.string.isRequired,
        isActive: PropTypes.bool.isRequired,
        isCompleted: PropTypes.bool.isRequired
    };

    renderStepNumber() {
        const { stepNumber, isCompleted } = this.props;
        return isCompleted ? <span>&#10003;</span> : stepNumber;
    }

    renderStepTitle() {
        const { title } = this.props;
        return title;
    }

    renderIsActive() {
        const { isActive, isCompleted } = this.props;
        return isActive || isCompleted;
    }

    render() {
        return (
            <div
              block={ `ProgressBarCircle ${this.renderIsActive() ? 'ProgressBarCircle--active' : ''} ` }
            >
                <div block="ProgressBarCircle__circle">{ this.renderStepNumber() }</div>
                <div block="ProgressBarCircle__title">{ this.renderStepTitle() }</div>
            </div>
        );
    }
}

export default ProgressBarCircle;
