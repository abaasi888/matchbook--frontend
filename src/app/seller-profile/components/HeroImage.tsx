import Image from "next/image";

export default function HeroImage() {
  return (
    <div className="hero-image">
      <Image
        src="/images/business_diagram_2(1).jpg"
        alt="Laundromat interior"
        fill
        className="hero-image__image"
        priority
      />
    </div>
  );
}