import IntroCard from "./IntroCard";
import SocialCard from "./SocialCard";

const App = () => {
  return (
    <div className="h-screen w-screen flex bg-neutral-900">
      <div className="m-auto">
        <IntroCard />
        <div className="mt-6">
          <SocialCard />
        </div>
        <div className="justify-center flex mt-6">
          <a
            href="mailto:josh@joshlawrence.dev?subject=Introduction&amp;body=Hello Josh,"
            className="text-neutral-600 hover:text-neutral-300"
          >
            email me
          </a>
        </div>
      </div>
    </div>
  );
};

export default App;
