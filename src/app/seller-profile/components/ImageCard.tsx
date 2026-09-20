import Image from "next/image";

type ImageCardProps = {
  title: string;
  description: string;
  image: string;
};

export default function ImageCard({
  title,
  description,
  image,
}: ImageCardProps) {
  return (
    <div className="border rounded-lg p-4 shadow-md">
      <Image
        src={image}
        alt={title}
        width={300}
        height={200}
        className="rounded mb-3 w-full h-40 object-cover"
      />

      <h2 className="text-xl font-semibold">{title}</h2>

      <p className="text-gray-600">{description}</p>
    </div>
  );
}