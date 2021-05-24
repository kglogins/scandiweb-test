/* eslint-disable import/no-duplicates */
/* eslint-disable @scandipwa/scandipwa-guidelines/use-namespace */
/* eslint-disable @scandipwa/scandipwa-guidelines/derived-class-names */
import CheckoutProgressBar from 'Component/CheckoutProgressBar/CheckoutProgressBar.component';
import ContentWrapper from 'Component/ContentWrapper';
import { Checkout as CheckoutSource } from 'SourceRoute/Checkout/Checkout.component';

import 'SourceRoute/Checkout/Checkout.component';
import './Checkout.override.style.scss';

/** @namespace ScandiwebTask/Route/Checkout/Component/CheckoutComponent */
export class CheckoutComponent extends CheckoutSource {
    renderCheckoutStep() {
        const { checkoutStep } = this.props;
        return checkoutStep;
    }

    render() {
        return (
            <main block="Checkout">
                <CheckoutProgressBar checkoutStep={ this.renderCheckoutStep() } />
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
