import React from "react";

const EmailSection = () => {
  return (
    <section className="grid md:grid-cols-2 my-12 md:my-12 py-24 gap-4">
      <div>
        <h5 className="text-xl font-bold text-white my-2">Let's Connect</h5>
        <p className="text-[#ADB7BE] mb-4 max-w-md">
          {" "}
          I'm always open to new opportunities and collaborations. Feel free to
          reach out to me.
        </p>
        <div className="socials flex flex-row gap-2"></div>
      </div>
    </section>
  );
};

export default EmailSection;
