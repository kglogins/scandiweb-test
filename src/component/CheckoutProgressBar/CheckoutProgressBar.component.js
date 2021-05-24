/* eslint-disable @scandipwa/scandipwa-guidelines/derived-class-names */
/* eslint-disable @scandipwa/scandipwa-guidelines/use-namespace */
import PropTypes from 'prop-types';
import { PureComponent } from 'react';

import CheckoutProgressBarCircle from 'Component/CheckoutProgressBarCircle/CheckoutProgressBarCircle.component';
import CheckoutProgressBarLine from 'Component/CheckoutProgressBarLine/CheckoutProgressBarLine.component';
import { BILLING_STEP, DETAILS_STEP, SHIPPING_STEP } from 'Route/Checkout/Checkout.config';

import './CheckoutProgressBar.style.scss';

/** @namespace Component/CheckoutProgressBar/Component */
export class CheckoutProgressBar extends PureComponent {
    static propTypes = {
        checkoutStep: PropTypes.oneOf([
            SHIPPING_STEP,
            BILLING_STEP,
            DETAILS_STEP
        ]).isRequired
    };

    renderIsActive(step) {
        const { checkoutStep } = this.props;
        return checkoutStep === step;
    }

    renderIsActiveLine(step) {
        const { checkoutStep } = this.props;

        return step === checkoutStep || this.renderIsComplete(step);
    }

    renderIsComplete(step) {
        const { checkoutStep } = this.props;
        if (step === SHIPPING_STEP && (checkoutStep === BILLING_STEP || checkoutStep === DETAILS_STEP)) {
            return true;
        }

        if (step === BILLING_STEP && checkoutStep === DETAILS_STEP) {
            return true;
        }

        return false;
    }

    render() {
        return (
            <div block="CheckoutProgressBar">
                <CheckoutProgressBarLine isActive={ this.renderIsActiveLine(SHIPPING_STEP) } />
                <CheckoutProgressBarCircle
                  stepNumber={ 1 }
                  title="Shipping"
                  isActive={ this.renderIsActive(SHIPPING_STEP) }
                  isCompleted={ this.renderIsComplete(SHIPPING_STEP) }
                />
                <CheckoutProgressBarLine isActive={ this.renderIsActiveLine(BILLING_STEP) } />
                <CheckoutProgressBarCircle
                  stepNumber={ 2 }
                  title="Review &amp; Payments"
                  isActive={ this.renderIsActive(BILLING_STEP) }
                  isCompleted={ this.renderIsComplete(BILLING_STEP) }
                />
                <CheckoutProgressBarLine isActive={ this.renderIsActiveLine(DETAILS_STEP) } />
            </div>
        );
    }
}

export default CheckoutProgressBar;
