import Image from "next/image";

const About = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-y-2">
      <h1 className="text-2xl">Sobre o projeto</h1>
      <p className="w-80 text-center leading-tight">O projeto tem como função ...</p>
      <Image
        src="/images/charizard.png"
        alt="charizard"
        width={200}
        height={300}
      />
    </div>
  );
};

export default About;
