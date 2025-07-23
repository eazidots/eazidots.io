import { useState } from "react";
import Layout from "@/components/Layout";
import Head from "next/head";
import AnimatedText from "@/components/AnimatedText";
import TransitionEffect from "@/components/TransitionEffect";
import { useRouter } from "next/router";
import { HireMe2 } from "@/components/HireMe2";
import ScrollToTop from "@/components/ScrollToTop";

export default function Contact() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const myForm = e.target;
    const formData = new FormData(myForm);
    try {
      const response = await fetch("/", {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: new URLSearchParams(formData).toString(),
      });

      if (response.ok) {
        router.push("/thanks");
      } else {
        console.error("Form submission failed!", response);
      }
    } catch (error) {
      console.error("An error occurred during form submission:", error);
    }
  };

  return (
    <>
      <Head>
        <title>Contact | Emmanuel Dotse Azilafu</title>
        <meta
          name="description"
          content="Get in touch with Emmanuel Dotse Azilafu for collaboration, opportunities, or technical discussions."
        />
      </Head>

      <TransitionEffect />
      <main className="flex w-full flex-col items-center justify-center dark:text-light relative overflow-hidden px-4 sm:px-3">
        {/* Grey Theme Gradient Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-grey-lightest via-grey-light/40 to-grey-dark dark:from-grey-darkest dark:via-grey-dark/40 dark:to-grey-lightest z-0"></div>
        <div className="absolute inset-0 bg-gradient-to-tl from-transparent via-grey-light/15 to-transparent dark:from-transparent dark:via-grey-dark/15 dark:to-transparent z-0"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-grey-light/20 to-transparent dark:from-transparent dark:via-grey-dark/20 dark:to-transparent z-0"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-grey-light/8 to-transparent dark:from-transparent dark:via-grey-dark/8 dark:to-transparent z-0"></div>
        
        {/* Content */}
        <div className="relative z-10 w-full max-w-6xl mx-auto flex flex-col items-center justify-center px-4 sm:px-3">
          <Layout className="pt-6 md:pt-4 sm:pt-2">
            <AnimatedText
              text="Let's Connect & Collaborate"
              className="mb-8 !text-4xl !leading-tight lg:!text-3xl sm:mb-4 sm:!text-2xl xs:!text-xl text-center"
            />
            <div className="flex w-full flex-col lg:flex-row items-center justify-center gap-6 sm:gap-4">
              <div className="flex w-full flex-col items-start justify-start max-w-xl">
                <h2 className="my-3 text-xl font-bold capitalize text-grey-dark dark:text-grey-light sm:text-lg">
                  Ready to Work Together?
                </h2>
                <div className="space-y-6 sm:space-y-4">
                  <p className="text-grey-dark/90 dark:text-grey-light/90 text-sm sm:text-xs leading-relaxed">
                    I'm always open to discussing new opportunities, collaborations, or technical challenges. 
                    Whether you're interested in scientific computing projects, infrastructure solutions, 
                    or just want to connect, feel free to reach out.
                  </p>
                  <div className="space-y-4 sm:space-y-3">
                    <div className="flex items-center space-x-3">
                      <span className="text-grey-dark dark:text-grey-light font-semibold text-base sm:text-sm">Email:</span>
                      <a 
                        href="mailto:dotse@eazidots.com" 
                        className="text-grey-dark/90 dark:text-grey-light/90 hover:text-grey-dark dark:hover:text-grey-light transition-colors text-base sm:text-sm"
                      >
                        dotse@eazidots.com
                      </a>
                    </div>
                    <div className="flex items-center space-x-3">
                      <span className="text-grey-dark dark:text-grey-light font-semibold text-base sm:text-sm">Phone:</span>
                      <a 
                        href="tel:+233553654116" 
                        className="text-grey-dark/90 dark:text-grey-light/90 hover:text-grey-dark dark:hover:text-grey-light transition-colors text-base sm:text-sm"
                      >
                        (+233) 553654116
                      </a>
                    </div>
                    <div className="flex items-center space-x-3">
                      <span className="text-grey-dark dark:text-grey-light font-semibold text-base sm:text-sm">Location:</span>
                      <span className="text-grey-dark/90 dark:text-grey-light/90 text-base sm:text-sm">
                        Kumasi, Ghana
                      </span>
                    </div>
                  </div>
                  <div className="mt-6 sm:mt-4">
                    <h3 className="text-lg font-semibold mb-3 text-grey-dark dark:text-grey-light sm:text-base">
                      Areas of Interest:
                    </h3>
                    <div className="flex flex-wrap gap-2 sm:gap-1">
                      <span className="px-3 py-1 bg-grey-light/30 text-grey-dark dark:text-grey-light rounded-full text-sm sm:text-xs font-medium backdrop-blur-sm border border-grey-light/20 dark:border-grey-dark/30">
                        Scientific Computing
                      </span>
                      <span className="px-3 py-1 bg-grey-light/30 text-grey-dark dark:text-grey-light rounded-full text-sm sm:text-xs font-medium backdrop-blur-sm border border-grey-light/20 dark:border-grey-dark/30">
                        Infrastructure
                      </span>
                      <span className="px-3 py-1 bg-grey-light/30 text-grey-dark dark:text-grey-light rounded-full text-sm sm:text-xs font-medium backdrop-blur-sm border border-grey-light/20 dark:border-grey-dark/30">
                        Cloud Solutions
                      </span>
                      <span className="px-3 py-1 bg-grey-light/30 text-grey-dark dark:text-grey-light rounded-full text-sm sm:text-xs font-medium backdrop-blur-sm border border-grey-light/20 dark:border-grey-dark/30">
                        Research Projects
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="relative w-full max-w-xl">
                <div className="relative w-full rounded-2xl border border-solid border-grey-light/20 dark:border-grey-dark/20 bg-light/40 dark:bg-dark/40 backdrop-blur-xl p-6 sm:p-4 shadow-lg">
                  {/* Form Card Gradient Background */}
                  <div className="absolute inset-0 bg-gradient-to-br from-light/30 via-grey-light/15 to-grey-dark/30 dark:from-dark/30 dark:via-grey-dark/10 dark:to-grey-light/30 z-0"></div>
                  <div className="absolute inset-0 bg-gradient-to-tl from-transparent via-grey-light/4 to-transparent dark:from-transparent dark:via-grey-dark/4 dark:to-transparent z-0"></div>
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-grey-light/8 to-transparent dark:from-transparent dark:via-grey-dark/8 dark:to-transparent z-0"></div>
                  {/* Form Content */}
                  <div className="relative z-10">
                    <form
                      name="contact-form"
                      method="POST"
                      onSubmit={handleSubmit}
                      className="space-y-6"
                    >
                      <input
                        type="hidden"
                        name="form-name"
                        value="contact-form"
                      />
                      <p className="hidden">
                        <label>
                          Name
                          <input name="bot-field" />
                        </label>
                      </p>
                      <div>
                        <label className="block text-base font-medium text-grey-dark dark:text-grey-light mb-2 sm:text-sm">
                          Your Name *
                        </label>
                        <input
                          type="text"
                          name="name"
                          required
                          autoComplete="name"
                          className="w-full p-3 sm:p-2 border border-solid border-grey-light rounded-lg bg-light/60 dark:border-grey-dark dark:bg-dark/60 dark:text-light focus:border-grey-dark dark:focus:border-grey-light focus:outline-none transition-colors text-base sm:text-sm"
                          onChange={handleChange}
                        />
                      </div>
                      <div>
                        <label className="block text-base font-medium text-grey-dark dark:text-grey-light mb-2 sm:text-sm">
                          Your Email *
                        </label>
                        <input
                          type="email"
                          name="email"
                          required
                          autoComplete="email"
                          className="w-full p-3 sm:p-2 border border-solid border-grey-light rounded-lg bg-light/60 dark:border-grey-dark dark:bg-dark/60 dark:text-light focus:border-grey-dark dark:focus:border-grey-light focus:outline-none transition-colors text-base sm:text-sm"
                          onChange={handleChange}
                        />
                      </div>
                      <div>
                        <label className="block text-base font-medium text-grey-dark dark:text-grey-light mb-2 sm:text-sm">
                          Subject *
                        </label>
                        <input
                          type="text"
                          name="subject"
                          required
                          className="w-full p-3 sm:p-2 border border-solid border-grey-light rounded-lg bg-light/60 dark:border-grey-dark dark:bg-dark/60 dark:text-light focus:border-grey-dark dark:focus:border-grey-light focus:outline-none transition-colors text-base sm:text-sm"
                          onChange={handleChange}
                        />
                      </div>
                      <div>
                        <label className="block text-base font-medium text-grey-dark dark:text-grey-light mb-2 sm:text-sm">
                          Message *
                        </label>
                        <textarea
                          name="message"
                          required
                          rows="5"
                          className="w-full p-3 sm:p-2 border border-solid border-grey-light rounded-lg bg-light/60 dark:border-grey-dark dark:bg-dark/60 dark:text-light focus:border-grey-dark dark:focus:border-grey-light focus:outline-none transition-colors resize-none text-base sm:text-sm"
                          onChange={handleChange}
                        ></textarea>
                      </div>
                      <button
                        type="submit"
                        className="w-full px-6 py-3 sm:px-4 sm:py-2 font-semibold text-light bg-grey-dark border-2 border-solid border-grey-dark rounded-lg hover:bg-transparent hover:text-grey-dark dark:bg-grey-light dark:text-dark dark:border-grey-light dark:hover:bg-transparent dark:hover:text-grey-light transition-all duration-300 text-base sm:text-sm"
                      >
                        Send Message
                      </button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </Layout>
        </div>
        <HireMe2 />
        <ScrollToTop />
      </main>
    </>
  );
}
