
import { useEffect, useState } from 'react';
import PricingPlanCard from './PricingPlanCard';
import { options } from './ui/Dropdown';
import { extractPricingString } from '../lib/helper';
import { PricingGrid } from './styles/Elements.styles';
import BillingTab from './BillingTab';

const PricingSection = () => {
    const [planData, setPlanData] = useState([]);
    console.log("✨ ~ file: PricingSection.jsx:7 ~ PricingSection ~ planData:", planData)
    const [visitorsForGrowth, setVisitorsForGrowth] = useState(options[1]);

    useEffect(() => {
        getPlanData();
    }, [])


    const getPlanData = async () => {
        const res = await fetch('/data.json');
        const data = await res.json();
        console.log(data);

        if (data?.plans) {
            const { plans, features, } = data;

            const formattedData = plans.map((plan) => {
                const planObj = { plan };
                if (extractPricingString(plan.title) === visitorsForGrowth.name) {
                    planObj.plan = plan;
                }
                else planObj.plan = plan;
                if (plan.name === "Free") {
                    const planFeatures = features?.filter((feature) => feature.is_pro === "0");
                    planObj.features = planFeatures;
                }
                else {
                    const planFeatures = features?.filter((feature) => feature.is_pro !== "0");
                    planObj.features = planFeatures;
                }
                return planObj
            })

            setPlanData(formattedData);
        }
    }


    return (
        <div className="container">
            <BillingTab/>
            {/* 4 column card grid */}
            <PricingGrid>
                {
                    planData.slice(0, 4).map((plan, index) => (
                        <PricingPlanCard key={index} planInfo={plan} />
                    ))
                }
            </PricingGrid>
        </div>
    );
};

export default PricingSection;