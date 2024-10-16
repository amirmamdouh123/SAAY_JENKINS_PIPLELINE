
interface IFeatureCardProps {
  imageSrc: string;
  altText: string;
  title: string;
  description: string;
}

const FeatureCard = ({ imageSrc, altText, title, description }:IFeatureCardProps) => {
  return (
    <article className="flex flex-col justify-between border rounded-lg shadow-lg hover:scale-105 transition-transform overflow-hidden">
      <img src={imageSrc} alt={altText} className="w-full h-48 object-cover" />
      <div className="p-4">
        <h5 className="text-xl font-semibold mb-2">{title}</h5>
        <p className="text-gray-600">{description}</p>
      </div>
    </article>
  );
};

export default FeatureCard;
