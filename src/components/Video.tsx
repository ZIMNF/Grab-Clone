import Image from "next/image";

const Video = () => {
  return (
    <>
      <div className="h-auto md:h-[85vh] w-auto flex justify-center pb-3 pt-20">
        <Image src={require("../../public/v2.gif")} alt="abot" className="h-auto w-auto rounded-lg" />
        {/* <video src={require("../../public/v2.webm")} autoPlay loop muted className="rounded-md" /> */}
      </div>

      <h1 className="text-3xl md:text-5xl text-center pb-4">
        Grab. Making <br /> Everyday better.
      </h1>
      <hr />
    </>
  );
};

export default Video;
