import { NavBar } from "./components/navbar/NavBar";
import { Header } from "./components/header/Header";
import ProductSection from "./components/products";
import { Separator } from "./components/separator/Separator";
import { StepsSection } from "./components/steps/StepsSection";
import { TestimonialsSection } from "./components/testimonials/TestimonialsSection";
import { PackagesSection } from "./components/packages/PackagesSection";
import { PortfolioSection } from "./components/portfolio/PortfolioSection";
import { useMouseDragScroll } from "./hooks/useMouseDragScroll";
import { CTASection } from "./components/cta/CTASection";
import { ServicesSection } from "./components/services/ServicesSection";
import { FAQSection } from "./components/faq/FAQSection";

function App() {
    useMouseDragScroll({ sensitivity: 1.5 });

    return (
        <div
            className={"flex flex-col gap-28"}
            style={{
                padding: "1.6875rem 0rem 2.44519rem 0rem",
            }}
        >
            <NavBar />
            <Header />
            <ProductSection />
            <Separator />
            <StepsSection />
            <Separator />
            <TestimonialsSection />
            <PackagesSection />
            <div />
            <PortfolioSection />
            <ServicesSection />
            <FAQSection />
            <CTASection />
            <footer>
                <div></div>
            </footer>
        </div>
    );
}

export default App;
