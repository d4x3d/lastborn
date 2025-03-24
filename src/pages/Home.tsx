import HeroSection from '@/components/home/HeroSection';
import StatsSection from '@/components/home/StatsSection';
import FeaturesSection from '@/components/home/FeaturesSection';
import WhyChooseUsSection from '@/components/home/WhyChooseUsSection';
import InvestmentPlansSection from '@/components/home/InvestmentPlansSection';
import TestimonialsSection from '@/components/home/TestimonialsSection';
import CTASection from '@/components/home/CTASection';

export default function Home() {
  return (
    <div className="relative min-h-screen bg-gradient-to-b from-gray-900 via-blue-900 to-black">
      {/* Content */}
      <div className="relative z-10">
        <HeroSection />
        <StatsSection />
        <FeaturesSection />
        <WhyChooseUsSection />
        <InvestmentPlansSection />
        <TestimonialsSection />
        <CTASection />
      </div>
    </div>
  );
}