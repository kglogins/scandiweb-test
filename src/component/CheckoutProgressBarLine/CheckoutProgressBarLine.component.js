/* eslint-disable @scandipwa/scandipwa-guidelines/derived-class-names */
import PropTypes from 'prop-types';
import { PureComponent } from 'react';

/** @namespace ScandiwebTask/Src/Component/CheckoutProgressBarLine/Component/CheckoutProgressBarLine */
export class CheckoutProgressBarLine extends PureComponent {
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
              block={ `CheckoutProgressBarLine ${this.renderIsActive() ? 'CheckoutProgressBarLine--active' : ''} ` }
            />
        );
    }
}

export default CheckoutProgressBarLine;
