import LinkedInLogo from "./assets/linkedin.svg?react";
import GitHubLogo from "./assets/github.svg?react";

const SocialCard = () => {
  return (
    <div className="flex flex-row items-center justify-center gap-8 p-4">
      <a href="https://www.linkedin.com/in/joshslawrence">
        <LinkedInLogo className="h-10 w-10 fill-neutral-600 hover:fill-neutral-300" />
      </a>
      <a href="https://github.com/JoshSLawrence">
        <GitHubLogo className="h-10 w-10 fill-neutral-600 hover:fill-neutral-300" />
      </a>
    </div>
  );
};

export default SocialCard;
