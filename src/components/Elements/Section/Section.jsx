const Section = ({ children, classname, id }) => {
  return (
    <section
      id={id}
      className={`${classname} h-[600px] max-w-7xl mx-auto px-5 bg-whiteColor `}
    >
      {children}
    </section>
  );
};

export default Section;
