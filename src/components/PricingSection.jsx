import PricingPlanCard from './PricingPlanCard';
import { PricingGrid } from './styles/Elements.styles';
import BillingTab from './BillingTab';
import { useSelector } from 'react-redux';
import { selectUniquePlans } from '../features/pricing/pricingSelector';

const PricingSection = () => {
    const planData = useSelector(selectUniquePlans)
    console.log("✨ ~ file: PricingSection.jsx:9 ~ PricingSection ~ planData:", planData)

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