import innovation from "../assets/images/Innovation.svg";
import intelligence from "../assets/images/intelligence.svg";
import creativity from "../assets/images/Creativity.svg";
import aboutUs from "../assets/images/about-us.svg";

export default function AboutUs() {
  return (
    <div
      className="w-full grid grid-cols-[3fr_2fr] grid-rows-[1fr] my-4 max-h-[900px]"
      id="about-us"
    >
      <div className="w-full h-[80svh] max-h-[900px]">
        <img src={aboutUs} alt="about us" className="h-full m-auto" />
      </div>
      <main className="w-[90%] flex flex-col gap-y-5 justify-center px-8 items-start max-h-[900px]">
        <h1 className="text-4xl font-bold text-gray-900">
          <span className="w-4 h-4 inline-block bg-[#7053ff] mr-4 from-[#251188] to-[#92e3a9] bg-gradient-to-tl"></span>
          01 . About Us
        </h1>
        <p className="text-xl font-normal text-gray-900 my-6">
          Retentify is company that provides tech related solutions and help
          other companies improve and increase their growth potential, our
          company was a result of the teamwork of an ambitious and skillful
          members.
        </p>
        <section className="w-full flex gap-x-4">
          <div className="flex flex-col items-center justify-center text-xl font-medium text-gray-900 gap-y-4">
            <span className="flex flex-col p-4 rounded-xl bg-[#92e3a9]">
              <img src={intelligence} alt="innovation" className="w-24" />
            </span>
            <h2>intelligence</h2>
          </div>
          <div className="flex flex-col items-center justify-center text-xl font-medium text-gray-900 gap-y-4">
            <span className="flex flex-col p-4 rounded-xl from-[#251188] to-[#92e3a9] bg-gradient-to-l">
              <img src={creativity} alt="intelligence" className="w-24" />
            </span>
            <h2>creativity</h2>
          </div>
          <div className="flex flex-col items-center justify-center text-xl font-medium text-gray-900 gap-y-4">
            <span className="flex flex-col p-4 rounded-xl bg-[#251188]">
              <img src={innovation} alt="creativity" className="w-24" />
            </span>
            <h2>innovation</h2>
          </div>
        </section>
      </main>
    </div>
  );
}
