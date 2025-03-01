import { faLinkedin } from "@fortawesome/free-brands-svg-icons/faLinkedin";
import {
  faMapMarkerAlt,
  faEnvelope,
  faPhone,
  faClock,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  SiFacebook,
  SiFiverr,
  SiInstagram,
  SiUpwork,
} from "@icons-pack/react-simple-icons";
import React, { useEffect } from "react";
import ContactForm from "./contact-form";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faXTwitter } from "@fortawesome/free-brands-svg-icons";
import ScrollReveal from "./ScrollReveal";

const Contact = () => {
  const socialLinks = [
    {
      icon: <SiFacebook />,
      url: "http://facebook.com/godentsie",
      name: "Facebook",
    },
    {
      icon: <SiInstagram />,
      url: "https://www.instagram.com/godfred_0",
      name: "Instagram",
    },
    {
      icon: <FontAwesomeIcon icon={faXTwitter} />,
      url: "https://x.com/jaywebs_",
      name: "Twitter",
    },
    {
      icon: <FontAwesomeIcon icon={faGithub} />,
      url: "https://github.com/jayfaculty-design",
      name: "GitHub",
    },
    {
      icon: <SiUpwork />,
      url: "https://www.upwork.com/freelancers/~010b25b2a5a595563d?mp_source=share",
      name: "Upwork",
    },
    {
      icon: <FontAwesomeIcon icon={faLinkedin} />,
      url: "https://www.linkedin.com/in/godfred-entsie-952a69223/",
      name: "LinkedIn",
    },
  ];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="mt-24 font-space-grotesk sm:mt-28 md:mt-32 px-4 sm:px-6 md:px-8 max-w-7xl mx-auto mb-8 sm:mb-10 md:mb-12">
      <div className="flex flex-col gap-5 sm:gap-6 md:gap-8">
        {/* Contact Header */}
        <ScrollReveal direction="up" delay={0.1} distance={30}>
          <div
            className="text-center border border-card-background bg-card-background 
              px-5 sm:px-6 md:px-8 lg:px-10
              py-6 sm:py-7 md:py-8 
              rounded-[15px] sm:rounded-[18px] md:rounded-[20px]"
          >
            <ScrollReveal direction="up" delay={0.2} distance={20}>
              <span className="text-[14px] sm:text-[15px] text-primary-color font-medium">
                Get In Touch
              </span>

              <h1
                className="text-[24px] sm:text-[28px] md:text-[32px] 
                  font-bold text-heading-color 
                  leading-tight mt-1 mb-3"
              >
                Let's Work Together
              </h1>

              <p
                className="text-[14px] sm:text-[15px] md:text-[16px] 
                  leading-[22px] sm:leading-[24px] md:leading-[26px] 
                  text-center
                  max-w-[95%] sm:max-w-[85%] md:max-w-[75%] lg:max-w-[65%] mx-auto"
              >
                I'm available for freelance projects and full-time
                opportunities. Whether you have a project in mind or just want
                to connect, I'd love to hear from you.
              </p>
            </ScrollReveal>
          </div>
        </ScrollReveal>

        {/* Main Contact Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {/* Contact Info Column */}
          <div className="md:col-span-1 flex flex-col gap-5">
            {/* Contact Cards */}
            <ScrollReveal direction="left" delay={0.2} distance={30}>
              <div
                className="border border-card-background bg-card-background 
                  px-5 sm:px-6
                  py-6 sm:py-7
                  rounded-[15px] sm:rounded-[18px] md:rounded-[20px]"
              >
                <ScrollReveal direction="up" delay={0.3} distance={20}>
                  <h2
                    className="text-[18px] sm:text-[20px] 
                      font-bold text-heading-color mb-4"
                  >
                    Contact Information
                  </h2>
                </ScrollReveal>

                {/* Phone */}
                <ScrollReveal direction="up" delay={0.4} distance={20}>
                  <div className="flex items-start gap-3 mb-5 group">
                    <div
                      className="bg-background-color p-2.5 rounded-full mt-0.5
                        group-hover:bg-primary-color/20 transition-colors duration-300"
                    >
                      <FontAwesomeIcon
                        icon={faPhone}
                        className="text-[16px] text-primary-color"
                      />
                    </div>
                    <div>
                      <h3 className="text-[16px] font-medium text-white mb-1">
                        Phone
                      </h3>
                      <p className="text-[14px] text-gray-300 mb-1">
                        (+233) 240-536-268
                      </p>
                      <div className="flex items-center gap-2">
                        <div className="h-2 w-2 rounded-full bg-green-500 animate-pulse"></div>
                        <p className="text-[12px] text-green-400">
                          Available for calls
                        </p>
                      </div>
                    </div>
                  </div>
                </ScrollReveal>

                {/* Email */}
                <ScrollReveal direction="up" delay={0.5} distance={20}>
                  <div className="flex items-start gap-3 mb-5 group">
                    <div
                      className="bg-background-color p-2.5 rounded-full mt-0.5
                        group-hover:bg-primary-color/20 transition-colors duration-300"
                    >
                      <FontAwesomeIcon
                        icon={faEnvelope}
                        className="text-[16px] text-primary-color"
                      />
                    </div>
                    <div>
                      <h3 className="text-[16px] font-medium text-white mb-1">
                        Email
                      </h3>
                      <p className="text-[14px] text-gray-300 mb-1">
                        hello@gentsie.com
                      </p>
                      <p className="text-[12px] text-gray-400">
                        Response time: ~24 hours
                      </p>
                    </div>
                  </div>
                </ScrollReveal>

                {/* Location */}
                <ScrollReveal direction="up" delay={0.6} distance={20}>
                  <div className="flex items-start gap-3 mb-5 group">
                    <div
                      className="bg-background-color p-2.5 rounded-full mt-0.5
                        group-hover:bg-primary-color/20 transition-colors duration-300"
                    >
                      <FontAwesomeIcon
                        icon={faMapMarkerAlt}
                        className="text-[16px] text-primary-color"
                      />
                    </div>
                    <div>
                      <h3 className="text-[16px] font-medium text-white mb-1">
                        Location
                      </h3>
                      <p className="text-[14px] text-gray-300">Accra, Ghana</p>
                    </div>
                  </div>
                </ScrollReveal>

                {/* Working Hours */}
                <ScrollReveal direction="up" delay={0.7} distance={20}>
                  <div className="flex items-start gap-3 group">
                    <div
                      className="bg-background-color p-2.5 rounded-full mt-0.5
                        group-hover:bg-primary-color/20 transition-colors duration-300"
                    >
                      <FontAwesomeIcon
                        icon={faClock}
                        className="text-[16px] text-primary-color"
                      />
                    </div>
                    <div>
                      <h3 className="text-[16px] font-medium text-white mb-1">
                        Working Hours
                      </h3>
                      <p className="text-[14px] text-gray-300">
                        Monday - Friday: 9am - 6pm
                      </p>
                      <p className="text-[14px] text-gray-300">
                        Weekend: By appointment
                      </p>
                    </div>
                  </div>
                </ScrollReveal>
              </div>
            </ScrollReveal>

            {/* Social Media */}
            <ScrollReveal direction="left" delay={0.3} distance={30}>
              <div
                className="border border-card-background bg-card-background 
                  px-5 sm:px-6
                  py-6 sm:py-7
                  rounded-[15px] sm:rounded-[18px] md:rounded-[20px]"
              >
                <ScrollReveal direction="up" delay={0.3} distance={20}>
                  <h2
                    className="text-[18px] sm:text-[20px] 
                      font-bold text-heading-color mb-4"
                  >
                    Connect With Me
                  </h2>
                </ScrollReveal>

                <div className="grid grid-cols-3 gap-4">
                  {socialLinks.map((social, index) => (
                    <ScrollReveal
                      key={index}
                      direction="up"
                      delay={0.4 + index * 0.05}
                      distance={15}
                    >
                      <a
                        href={social.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`Visit my ${social.name} profile`}
                        className="flex flex-col items-center justify-center 
                            border border-border-color rounded-lg
                            py-3 px-2
                            hover:border-primary-color/30
                            hover:bg-primary-color/5
                            transition-all duration-300
                            group"
                      >
                        <div
                          className="text-[20px] sm:text-[22px] text-white 
                            group-hover:text-primary-color group-hover:scale-110 
                            transition-all duration-300"
                        >
                          {social.icon}
                        </div>
                        <span className="text-[11px] sm:text-[12px] mt-2 text-gray-400 group-hover:text-gray-300">
                          {social.name}
                        </span>
                      </a>
                    </ScrollReveal>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          </div>

          {/* Contact Form Column */}
          <ScrollReveal
            direction="right"
            delay={0.2}
            distance={30}
            className="md:col-span-2"
          >
            <div
              className="border border-card-background bg-card-background 
                rounded-[15px] sm:rounded-[18px] md:rounded-[20px] 
                overflow-hidden"
            >
              <ScrollReveal direction="up" delay={0.3} distance={20}>
                <div className="px-5 sm:px-6 md:px-8 py-6 sm:py-7 md:py-8 border-b border-border-color">
                  <h2
                    className="text-[18px] sm:text-[20px] md:text-[22px] 
                      font-bold text-heading-color"
                  >
                    Send Me a Message
                  </h2>
                  <p className="text-[14px] text-gray-300 mt-1">
                    I'll get back to you as soon as possible.
                  </p>
                </div>
              </ScrollReveal>

              <ScrollReveal direction="up" delay={0.4} distance={20}>
                <div className="px-5 sm:px-6 md:px-8 py-6 sm:py-7 md:py-8">
                  <ContactForm />
                </div>
              </ScrollReveal>
            </div>
          </ScrollReveal>
        </div>

        {/* FAQ Section */}
        <ScrollReveal direction="up" delay={0.3} distance={30}>
          <div
            className="border border-card-background bg-card-background 
              px-5 sm:px-6 md:px-8 lg:px-10
              py-6 sm:py-7 md:py-8 
              rounded-[15px] sm:rounded-[18px] md:rounded-[20px]"
          >
            <ScrollReveal direction="up" delay={0.4} distance={20}>
              <div className="text-center mb-6">
                <h2
                  className="text-[20px] sm:text-[22px] md:text-[24px] 
                    font-bold text-heading-color"
                >
                  Frequently Asked Questions
                </h2>
                <p className="text-[14px] sm:text-[15px] text-gray-300 mt-1">
                  Common questions about working with me
                </p>
              </div>
            </ScrollReveal>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {[
                {
                  question: "What is your typical project process?",
                  answer:
                    "My process typically includes discovery, planning, design, development, testing, and launch phases. I maintain clear communication throughout to ensure your vision is realized.",
                },
                {
                  question: "What are your payment terms?",
                  answer:
                    "I typically require a 50% deposit to begin work, with the remaining balance due upon project completion. For larger projects, we can establish a milestone-based payment schedule.",
                },
                {
                  question: "How long does a typical project take?",
                  answer:
                    "Project timelines vary based on scope and complexity. A simple website might take 2-4 weeks, while more complex applications can take 2-3 months or more.",
                },
                {
                  question: "Do you offer maintenance services?",
                  answer:
                    "Yes, I offer ongoing maintenance and support services to keep your website secure, up-to-date, and performing optimally. We can discuss a maintenance plan that suits your needs.",
                },
              ].map((faq, index) => (
                <ScrollReveal
                  key={index}
                  direction="up"
                  delay={0.5 + index * 0.1}
                  distance={20}
                >
                  <div
                    className="border border-border-color rounded-lg p-4 sm:p-5
                      hover:border-primary-color/30 transition-all duration-300"
                  >
                    <h3 className="text-[16px] sm:text-[17px] font-medium text-white mb-2">
                      {faq.question}
                    </h3>
                    <p className="text-[14px] text-gray-300">{faq.answer}</p>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </ScrollReveal>

        {/* Map or Location */}
        <ScrollReveal direction="up" delay={0.4} distance={30}>
          <div
            className="border border-card-background bg-card-background 
              rounded-[15px] sm:rounded-[18px] md:rounded-[20px] 
              overflow-hidden"
          >
            <div className="aspect-[16/9] w-full">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d254170.1903066751!2d-0.2661015!3d5.5912055!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xfdf9084b2b7a773%3A0xbed14ed8650e2dd3!2sAccra%2C%20Ghana!5e0!3m2!1sen!2sus!4v1650000000000!5m2!1sen!2sus"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="My location"
                className="filter grayscale contrast-125 brightness-75"
              ></iframe>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </div>
  );
};

export default Contact;
