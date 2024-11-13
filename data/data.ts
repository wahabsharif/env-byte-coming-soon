const currentYear = new Date().getFullYear();
const data = {
  sitename: "Env Byte",
  sitetagline: "Something great is on the way!",
  siteurl: "http://envbyte.com/",
  sitelogo: "",
  title: "Coming Soon!",
  description:
    "We&apos;re currently working hard to bring you something great, and we can&apos;t wait to share it with you. Our team is putting the finishing touches on a new project that we think you&apos;ll love.",
  newsletterheading: "Stay tuned for our live updates!",
  copyrightText: `Copyright © ${currentYear}`,
  socialIconsHeading: "Follow Us 📣",
  hideSubscribeForm: false, // make true to disable subscription form
  socialIcons: [
    {
      icon: "facebook",
      link: "https://www.facebook.com/sandeep.baikare/",
    },
    {
      icon: "twitter",
      link: "https://twitter.com/BaikareSandeep",
    },
    {
      icon: "linkedIn",
      link: "https://www.linkedin.com/in/sandip-baikare/",
    },
  ],
  hide: {
    subscribeForm: false, // make true to disable subscription form
    header: false,
    content: false,
    footer: false,
  },
};

export default data;
