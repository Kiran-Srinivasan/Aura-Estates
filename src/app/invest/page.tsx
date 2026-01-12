import { PageBanner } from "@/components/layout/PageBanner";
import { MarketTrends } from "@/components/invest/MarketTrends";
import { EcoTourismModel } from "@/components/invest/EcoTourismModel";
import { InvestmentBenefits } from "@/components/invest/InvestmentBenefits";

export const metadata = {
    title: "Why Invest | Aura Estates",
    description: "Discover the financial and lifestyle benefits of investing in Aura Estates managed farmlands.",
};

export default function InvestPage() {
    return (
        <main>
            <PageBanner
                title="Invest in Serenity"
                subtitle="Secure your future with assets that appreciate in value and quality of life."
                image="/images/invest/hero.png"
                enableSmoke={false}
                overlayOpacity={0.3}
            />
            <MarketTrends />
            <EcoTourismModel />
            <InvestmentBenefits />
        </main>
    );
}
