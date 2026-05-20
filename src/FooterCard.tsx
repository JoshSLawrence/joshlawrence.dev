const FooterCard = () => {
  return (
    <div className="flex justify-center gap-1">
      <a
        href="mailto:josh@joshlawrence.dev?subject=Introduction&amp;body=Hello Josh,"
        className="text-neutral-600 hover:text-neutral-300"
      >
        email me
      </a>
    </div>
  );
};

export default FooterCard;
