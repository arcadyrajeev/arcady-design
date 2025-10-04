import DualCard from "./ui/dualCard";

const services = [
  {
    imgLink: "/images/brand2.png",
    title: "Brand Identity Design",
    desc: "We create bold, future-ready brand identities that inspire trust and credibility in fintech and tech spaces. From logo to visual systems, every detail is built for recognition and investor confidence.",
    orientation: "landscape:flex-row",
    link: "/brand",
  },
  {
    imgLink: "/images/web1.png",
    title: "Website Design & Development",
    desc: "Your website is your first pitch. We hand-code fast, secure, and scalable websites that deliver performance, clarity, and seamless experiences across devices, tailored for growth.",
    orientation: "landscape:flex-row-reverse",
    link: "/website",
  },
  {
    imgLink: "/images/user1.png",
    title: "Performance Optimization",
    desc: "We optimise websites and apps for speed, scalability, and seamless user experience. Faster load times, smoother journeys, and stronger results, turning underperforming products into high-performance experiences.",
    orientation: "landscape:flex-row",
    link: "/userEx",
  },

  {
    imgLink: "/images/product.png",
    title: "Product Design App & SaaS",
    desc: "From dashboards to mobile apps, we design products that are intuitive, user-friendly, and ready to handle complex financial and technical interactions with simplicity and confidence.",
    orientation: "landscape:flex-row-reverse",
    link: "/saas",
  },
  {
    imgLink: "/images/market.png",
    title: "Marketing & Copywriting",
    desc: "Clear messaging builds trust. We craft landing pages, campaign assets, and investor decks that simplify complex fintech ideas, attract customers, and communicate value effortlessly.",
    orientation: "landscape:flex-row",
    link: "/marketing",
  },
  {
    imgLink: "/images/user.png",
    title: "User Experience & Flow",
    desc: "We design user journeys that make financial products seamless. Every interaction is optimized to reduce friction, build trust, and keep customers engaged for the long term.",
    orientation: "landscape:flex-row-reverse",
    link: "/userEx",
  },
];

const OurServices = () => {
  return (
    <section
      className="flex flex-col w-full 
                 py-12 sm:py-16 md:py-20 lg:py-28 xl:py-30 
                 bg-secondary items-center 
                 gap-12 sm:gap-16 md:gap-20 lg:gap-24 xl:gap-20 
                 mt-10 sm:mt-12 md:mt-16 lg:mt-20"
    >
      {/* Heading */}
      <h1
        className="flex w-full justify-center text-left
                   fontheading text-accent-foreground leading-tight 
                   text-[2.5rem] sm:text-[3.5rem] md:text-[5rem] lg:text-[6rem] 
                   xl:w-[48%] xl:text-[10rem] xl:leading-40"
      >
        Our Services
      </h1>

      {/* Subheading */}
      <h3
        className="w-[90%] sm:w-[80%] md:w-[70%] xl:w-[45%] 
                   fontbody1 text-center text-background-primary tracking-wide 
                   text-[1rem] sm:text-[1.2rem] md:text-[1.4rem] lg:text-[1.6rem] xl:text-[1.2rem] 
                   leading-6 sm:leading-7 md:leading-8 lg:leading-10 xl:leading-8"
      >
        From brand identities to full-scale apps, we design and develop
        experiences that are built to last.
      </h3>

      {/* Services List */}
      <div
        className="flex flex-col w-full 
                   p-4 sm:p-8 md:p-12 lg:p-16 xl:p-20 
                   gap-12 sm:gap-16 md:gap-20 lg:gap-32 xl:gap-50"
      >
        {services.map((service, index) => (
          <DualCard
            key={service.title ?? index}
            title={service.title}
            desc={service.desc}
            imgLink={service.imgLink}
            orientation={service.orientation}
            buttonlink={service.link}
          />
        ))}
      </div>
    </section>
  );
};

export default OurServices;
