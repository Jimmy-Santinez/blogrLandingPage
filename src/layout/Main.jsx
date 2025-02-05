// import React from "react";

const Main = () => {
  return (
    <main className="relative mt-20 mb-20">
      {/* First section */}
      <section className="container mx-auto mb-20">
        <h2 className="font-overpass text-veryDarkBlue text-center text-2xl font-bold">
          Designed for the future
        </h2>

        <div className="mt-10 md:flex md:flex-row-reverse">
          <figure className="md:w-1/2">
            <img
              src="/assets/illustration-editor-mobile.svg"
              alt="Editor illustration"
              className="w-full"
            />
          </figure>

          <div className="m-8 md:w-1/2">
            <article className="mt-6 text-center md:text-left">
              <h3 className="font-overpass text-veryDarkBlue text-xl font-bold">
                Introducing an extensible editor
              </h3>
              <p className="text-gray-500 mt-2">
                Blogr features an exceedingly intuitive interface which lets you
                focus on one thing: creating content. The editor supports
                management of multiple blogs and allows easy manipulation of
                embeds such as images, videos, and Markdown. Extensibility with
                plugins and themes provide easy ways to add functionality or
                change the looks of a blog.
              </p>
            </article>

            <article className="mt-10 text-center md:text-left">
              <h3 className="font-overpass text-veryDarkBlue text-xl font-bold">
                Robust content management
              </h3>
              <p className="text-gray-500 mt-2">
                Flexible content management enables users to easily move through
                posts. Increase the usability of your blog by adding customized
                categories, sections, format, or flow. With this functionality,
                you’re in full control.
              </p>
            </article>
          </div>
        </div>
      </section>

      {/* Second section */}
      <section className="container mx-auto mt-40  bg-gradient-to-b from-gradientVeryDarkDesaturatedBlue to-gradientVeryDarkGrayBlue rounded-bl-[150px] rounded-tr-[150px]  lg:max-w-full">
        {/* SVG section */}
        <div className="flex flex-col lg:flex-row items-center">
          {/* Back SVG */}
          <div className="relative w-full lg:w-1/2 h-[300px] lg:h-[400px]">
            <img
              src="/assets/bg-pattern-circles.svg"
              alt="Background Circles"
              className="absolute inset-0 w-full h-full scale-150 transition duration-500 ease-in-out"
            />
            {/* Front SVG */}
            <img
              src="/assets/illustration-phones.svg"
              alt="Phones"
              className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-3/4 w-76 z-10"
            />
          </div>

          {/* Content Section */}
          <div className="relative -top-16 lg:pt-10 lg:w-1/2 px-6">
            <article className="text-center lg:text-left">
              <h2 className="font-overpass text-white text-3xl lg:text-4xl font-bold">
                State of the Art Infrastructure
              </h2>
              <div className="w-16 h-[2px] bg-white mx-auto mt-4"></div>
              <p className="font-overpass text-white mt-6 text-lg">
                With reliability and speed in mind, worldwide data centers
                provide the backbone for ultra-fast connectivity. This ensures
                your site will load instantly, no matter where your readers are,
                keeping your site competitive.
              </p>
            </article>
          </div>
        </div>
      </section>

      {/* Third section */}
      <section className="mt-16 lg:mt-32 md:flex md:flex-row md:justify-center md:items-center">
        <figure className="lg:w-1/2 flex justify-center">
          <img
            src="/assets/illustration-laptop-mobile.svg"
            alt="pc"
            className="scale-125 lg:scale-150"
          />
        </figure>
        <div className="font-overpass text-center m-8 space-y-8 lg:w-1/2">
          <article>
            <h3 className="text-veryDarkBlue text-xl font-bold">
              Free, open, simple
            </h3>
            <p className="text-gray-500 mt-6 text-lg">
              Blogr is a free and open source application backed by a large
              community of helpful developers. It supports features such as code
              syntax highlighting, RSS feeds, social media integration,
              third-party commenting tools, and works seamlessly with Google
              Analytics. The architecture is clean and is relatively easy to
              learn.
            </p>
          </article>
          <article>
            <h3 className="text-veryDarkBlue text-xl font-bold">
              Powerful tooling
            </h3>
            <p className="text-gray-500 mt-6 text-lg">
              Batteries included. We built a simple and straightforward CLI tool
              that makes customization and deployment a breeze, but capable of
              producing even the most complicated sites.
            </p>
          </article>
        </div>
      </section>
    </main>
  );
};

export default Main;
