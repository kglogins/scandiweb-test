/* eslint-disable import/no-duplicates */
/* eslint-disable @scandipwa/scandipwa-guidelines/use-namespace */
/* eslint-disable @scandipwa/scandipwa-guidelines/derived-class-names */
import ContentWrapper from 'Component/ContentWrapper';
import ProgressBar from 'Component/ProgressBar/ProgressBar.component';
import { BILLING_STEP, DETAILS_STEP, SHIPPING_STEP } from 'Route/Checkout/Checkout.config';
import { Checkout as CheckoutSource } from 'SourceRoute/Checkout/Checkout.component';

import 'SourceRoute/Checkout/Checkout.component';
import './Checkout.override.style.scss';

/** @namespace ScandiwebTask/Route/Checkout/Component/CheckoutComponent */
export class CheckoutComponent extends CheckoutSource {
    renderCheckoutStep() {
        const { checkoutStep } = this.props;
        return checkoutStep;
    }

    renderProgressBarSteps() {
        return [
            {
                id: 0,
                title: 'Shipping',
                step_id: SHIPPING_STEP
            },
            {
                id: 1,
                title: 'Review & Payments',
                step_id: BILLING_STEP
            },
            {
                id: 2,
                title: 'Details',
                step_id: DETAILS_STEP
            }
        ];
    }

    render() {
        return (
            <main block="Checkout">
                <ProgressBar
                  steps={ this.renderProgressBarSteps() }
                  checkoutStep={ this.renderCheckoutStep() }
                />
                <ContentWrapper
                  wrapperMix={ { block: 'Checkout', elem: 'Wrapper' } }
                  label={ __('Checkout page') }
                >
                    { this.renderSummary(true) }
                    <div block="Checkout" elem="Step">
                        { this.renderTitle() }
                        { this.renderGuestForm() }
                        { this.renderStep() }
                        { this.renderLoader() }
                    </div>
                    <div>
                        { this.renderSummary() }
                        { this.renderPromo() }
                        { this.renderCoupon() }
                    </div>
                </ContentWrapper>
            </main>
        );
    }
}

export default CheckoutComponent;
