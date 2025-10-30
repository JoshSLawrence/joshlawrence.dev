const IntroCard = () => {
  return (
    <div className="flex w-100 flex-col gap-2 rounded-xl bg-neutral-900 p-4 text-left leading-7 text-neutral-50">
      <h2 className="text-5xl tracking-wide  text-neutral-200">
        Josh Lawrence
      </h2>
      <h3 className="pb-2 text-left text-lg text-neutral-400">
        Senior Cloud Architect, DevOps @ Quadax Inc.
      </h3>
      <div className="flex flex-col gap-2">
        <p>Hey, thanks for stopping by!</p>
        <p>
          I'm Josh, a Microsoft certified Azure Solutions Architect based in
          Ohio.
        </p>
        <p>
          For the past seven years, I have been dedicated to delivering
          innovative, scalable solutions that address complex challenges for
          clients in both the public and private sectors.
        </p>
      </div>
    </div>
  );
};

export default IntroCard;
