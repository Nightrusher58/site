import React from "react";

function Intro() {
  return (
    <div className="flex items-center justify-center flex-col text-center pt-20 pb-6">
      <h1 className="text-4xl md:text -7xl dark:text-white mb-1 md:mb-3 font-bold">
        Tobi Durojaiye
      </h1>
      <p className="text-base md:text-xl mb-3 font-medium">
        Software Developer and Cloud Analyst
      </p>
      <p className="text -sm max-w-xl mb-6 font-bold">
        Hi &#128075;&#127997; I'm Tobi! I'm a software developer, HCM cloud
        analyst, and programming content creator based in Pittsburgh.
        <br />
        I created this website to showcase my work, learn new frameworks, and
        explore new ways of building web experiences.
        <br />
        This iteration of tobidurojaiye.com has a sleek and minimalistic design,
        and was built using Vite, React, and Tailwind. <br />
        Thanks for stopping by!
      </p>
    </div>
  );
}

export default Intro;
