export const FancyTitle = () => {
  return (
    <h2
      className="m-0 font-sans text-3xl font-black text-white border-0 border-solid lg:text-5xl xl:text-6xl sm:text-5xl border-stone-300"
      style={{ lineHeight: "1.2" }}
    >
      Focused on
      <span
        className="text-6xl text-cyan-400 "
        style={{ lineHeight: "1.3rem" }}
      >
        web standards
      </span>
      and
      <span
        className="text-6xl text-green-400 "
        style={{ lineHeight: "1.3rem" }}
      >
        modern web app
      </span>
      UX, you’re simply going to
      <span
        className="text-6xl text-yellow-400 "
        style={{ lineHeight: "1.3rem" }}
      >
        build better websites
      </span>
    </h2>
  );
};
