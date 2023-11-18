import AboutUs from "../components/aboutUs";
import ContactUs from "../components/contactUs";
import LandingPage from "../components/landingPage";
import OurServices from "../components/ourServices";

export default function HomePage() {
  return (
    <div className="px-6 py-8 m-auto max-w-[1400px] font-sans scroll-smooth">
      <LandingPage />
      <AboutUs />
      <OurServices />
      <ContactUs />
    </div>
  );
}
