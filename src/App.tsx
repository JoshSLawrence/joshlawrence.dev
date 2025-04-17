import FooterCard from "./FooterCard";
import IntroCard from "./IntroCard";
import SocialCard from "./SocialCard";

const App = () => {
  return (
    <div className="flex h-screen w-screen bg-neutral-900">
      <div className="m-auto flex flex-col">
        <IntroCard />
        <SocialCard />
        <FooterCard />
      </div>
    </div>
  );
};

export default App;
