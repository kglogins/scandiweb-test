/* eslint-disable @scandipwa/scandipwa-guidelines/derived-class-names */
import PropTypes from 'prop-types';
import { PureComponent } from 'react';

import ProgressBarCircle from 'Component/ProgressBarCircle/ProgressBarCircle.component';
import ProgressBarLine from 'Component/ProgressBarLine/ProgressBarLine.component';

import './ProgressBar.style.scss';

/** @namespace ScandiwebTask/Src/Component/ProgressBar/Component/ProgressBar */
export class ProgressBar extends PureComponent {
    static propTypes = {
        currentStep: PropTypes.string.isRequired,
        steps: PropTypes.arrayOf(PropTypes.shape({
            id: PropTypes.number.isRequired,
            title: PropTypes.string.isRequired,
            step_id: PropTypes.string.isRequired
        })).isRequired
    };

    renderIsActive(step) {
        const { currentStep } = this.props;
        return currentStep === step;
    }

    renderIsActiveLine(step) {
        const { currentStep } = this.props;
        return step === currentStep || this.renderIsComplete(step);
    }

    renderIsComplete(step) {
        const { currentStep, steps } = this.props;

        if (steps.findIndex((x) => x.step_id === step) < steps.findIndex((x) => x.step_id === currentStep)) {
            return true;
        }

        return false;
    }

    renderSteps() {
        const { steps } = this.props;
        const firstSteps = steps.slice(0, -1);
        return firstSteps;
    }

    renderLastStepId() {
        const { steps } = this.props;
        const lastStepId = Array.from(steps).pop().step_id;
        return lastStepId;
    }

    render() {
        return (
            <div block="ProgressBar">
                { this.renderSteps().map((step) => (
                    <>
                        <ProgressBarLine key={ step.id } isActive={ this.renderIsActiveLine(step.step_id) } />
                        <ProgressBarCircle
                          stepNumber={ step.id + 1 }
                          title={ step.title }
                          isActive={ this.renderIsActive(step.step_id) }
                          isCompleted={ this.renderIsComplete(step.step_id) }
                        />
                    </>
                )) }
                <ProgressBarLine isActive={ this.renderIsActiveLine(this.renderLastStepId()) } />
            </div>
        );
    }
}

export default ProgressBar;
