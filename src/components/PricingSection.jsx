import { useSelector } from 'react-redux';

import PricingPlanCard from './PricingPlanCard';
import { PricingGrid } from './styles/Elements.styles';
import BillingTab from './BillingTab';
import { selectUniquePlans } from '../features/pricing/pricingSelector';

const PricingSection = () => {
    const planData = useSelector(selectUniquePlans)

    return (
        <div className="container">
            <BillingTab />
            {/* 4 column card grid */}
            <PricingGrid>
                {
                    planData.map((plan, index) => (
                        <PricingPlanCard key={index} planInfo={plan} />
                    ))
                }
            </PricingGrid>
        </div>
    );
};

export default PricingSection;