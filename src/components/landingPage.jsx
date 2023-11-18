import logo from "../assets/images/logo.svg";
import screens from "../assets/images/app-screens.svg";

export default function LandingPage() {
  return (
    <div className="w-full max-h-[900px] flex gap-x-12 rounded-3xl overflow-x-clip  px-12 py-10 from-[#251188] to-[#92e3a9] bg-gradient-to-br">
      <div className="w-[40%] flex flex-col justify-between items-start">
        <header className="w-full h-fit flex items-center gap-x-4">
          <a href="#">
            <img src={logo} alt="logo" className="w-20" />
          </a>
          <nav className="w-full h-fit">
            <ul className="w-full h-fit flex items-center justify-around ">
              <li className="text-white font-bold text- xl hover:-translate-y-1 duration-100 text-center">
                <a href="#about-us">About Us</a>
              </li>
              <li className="text-white font-bold text- xl hover:-translate-y-1 duration-100 text-center">
                <a href="#our-services">Our Services</a>
              </li>
              <li className="text-white font-bold text- xl hover:-translate-y-1 duration-100 text-center">
                <a href="#contact-us">Contact Us</a>
              </li>
            </ul>
          </nav>
        </header>
        <main className="w-full  -translate-y-5">
          <h1 className="text-4xl font-semibold text-white">
            Unlock the full potential of your workforce with{" "}
            <strong>Retentify</strong>
          </h1>
          <p className="text-xl font-normal text-white mt-6">
            the next-generation B2B employee retention and engagement solution.
            Designed to empower HR departments and organizations, [App Name]
            goes beyond conventional approaches, offering a comprehensive suite
            of features to foster a culture of collaboration, growth, and
            employee well-being.
          </p>
        </main>
        <footer>
          <p className="w-32 text-white font-normal">
            rretnetify, keep your gold...
          </p>
        </footer>
      </div>
      <div
        className={`w-[60%] h-full flex items-center justify-center rotate-[20deg] `}
      >
        <img src={screens} alt="screens"  className="h-full"/>
      </div>
    </div>
  );
}
