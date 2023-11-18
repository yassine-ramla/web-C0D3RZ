import iconLocation from "../assets/images/icon-location.svg";
import iconPhone from "../assets/images/icon-phone.svg";
import iconLinkedin from "../assets/images/icon-linkedin.svg";
import iconFacebook from "../assets/images/icon-facebook.svg";
import iconInstagram from "../assets/images/icon-instagram.svg";

export default function ContactUs() {
  return (
    <footer
      id="contact-us"
      className="w-full flex justify-start items-center gap-x-16 rounded-3xl px-16 py-14 from-[#251188] to-[#92e3a9] bg-gradient-to-tl"
    >
      <form action="" className="flex flex-col gap-y-10 w-1/2">
        <legend className="text-center w-full font-bold text-3xl text-white mb-4">
          Contact Us
        </legend>
        <input
          type="text"
          className="bg-transparent focus:outline-none text-white border-b-2 border-white placeholder:text-white text-2xl placeholder:opacity-75"
          placeholder="full name..."
          id="full name"
        />
        <input
          type="text"
          className="bg-transparent focus:outline-none text-white border-b-2 border-white placeholder:text-white text-2xl placeholder:opacity-75"
          placeholder="email..."
          id="email"
        />
        <textarea
          type="text"
          className="bg-transparent focus:outline-none text-white border-b-2 border-white placeholder:text-white text-2xl placeholder:opacity-75"
          placeholder="your message..."
          id="message"
        />
      </form>
      <div className="h-full flex flex-col justify-between gap-y-5 items-center">
        <div className="w-full flex items-center text-white font-medium gap-x-4 text-2xl">
          <img src={iconLocation} alt="location" className="h-10" />
          <em>mila, la dayra el ghomri</em>
        </div>
        <div className="w-full flex items-center text-white font-medium gap-x-4 text-2xl">
          <img src={iconLinkedin} alt="linkedin" className="h-10" />
          <em>@retentifyX</em>
        </div>
        <div className="w-full flex items-center text-white font-medium gap-x-4 text-2xl">
          <img src={iconPhone} alt="phone" className="h-10" />
          <em>+213 554255139</em>
        </div>
        <div className="w-full flex items-center text-white font-medium gap-x-4 text-2xl">
          <img src={iconFacebook} alt="facebook" className="h-10" />
          <em>retentifyX</em>
        </div>
        <div className="w-full flex items-center text-white font-medium gap-x-4 text-2xl">
          <img src={iconInstagram} alt="instagram" className="h-10" />
          <em>@retentifyX</em>
        </div>
      </div>
    </footer>
  );
}
