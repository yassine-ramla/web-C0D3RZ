export default function FeatureCard({
  scale = false,
  img,
  title,
  description,
}) {
  return (
    <article
      className={`w-1/3 rounded-3xl py-16 px-6 flex flex-col bg-gradient-to-br bg-[#7053ff41] hover:from-[#92e3a960] hover:to-[#25118857] ${
        scale ? "scale-y-105" : ""
      }`}
    >
      <img src={img} alt="img" className="w-full aspect-square rounded-t-2xl" />
      <h2 className="text-3xl font-medium text-gray-900 text-center px-8 mb-4">
        {title}
      </h2>
      <p className="text-xl font-normal text-gray-900 text-center px-8">
        {description}
      </p>
    </article>
  );
}
