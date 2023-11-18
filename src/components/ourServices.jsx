import FeatureCard from "./featureCard";
import integration from "../assets/images/integration.svg";
import recognition from "../assets/images/recognition.svg";
import workshops from "../assets/images/workshops.svg";

export default function OurServices() {
  return (
    <section className="w-full py-16" id="our-services">
      <div className=" mb-16 text-center">
        <h2 className="text-gray-900 text-4xl mb-2 font-medium text-center">
          check our services as well...
        </h2>
        <p className="text-gray-800 text-xl  font-medium text-center w-1/2 m-auto">
          we aim to make innovative, creative and intelligent solutions to
          modern companies major problems and ease their work.
        </p>
      </div>
      <div className="w-full md:flex md:flex-row flex-col justify-center items-center gap-x-4">
        <FeatureCard
          img={integration}
          title="Seamless Integration"
          description="Connect with your existing HR systems effortlessly, streamlining workflows and ensuring a cohesive employee experience."
        />
        <FeatureCard
          scale={true}
          img={recognition}
          title="Reward and Recognition"
          description="Elevate your team's skills with personalized workshops and training modules right within the app. Keep your workforce ahead of the curve."
        />
        <FeatureCard
          img={workshops}
          title="Engaging Workshops and Training"
          description="Connect with your existing HR systems effortlessly, streamlining workflows and ensuring a cohesive employee experience."
        />
      </div>
    </section>
  );
}
