const FooterCard = () => {
  return (
    <div className="flex justify-center gap-1">
      <a
        href="mailto:josh@joshlawrence.dev?subject=Introduction&amp;body=Hello Josh,"
        className="text-neutral-600 hover:text-neutral-300"
      >
        email me
      </a>
      <p className="text-neutral-600">|</p>
      <a
        href="https://docs.google.com/document/d/1MdDLoQdBwiiFj7b7xI1iSWhh-75gnUxy0pwWHqVYOeE/edit?usp=sharing"
        className="text-neutral-600 hover:text-neutral-300"
      >
        resume
      </a>
    </div>
  );
};

export default FooterCard;
