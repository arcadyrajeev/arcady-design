import DualCard from "./ui/dualCard";

const services = [
  {
    imgLink: "/images/brand2.png",
    title: "Brand Identity Design",
    desc: "We create bold, future-ready brand identities that inspire trust and credibility in fintech and tech spaces. From logo to visual systems, every detail is built for recognition and investor confidence.",
    orientation: "xl:flex-row",
    link: "/brand",
  },
  {
    imgLink: "/images/web1.png",
    title: "Website Design & Development",
    desc: "Your website is your first pitch. We hand-code fast, secure, and scalable websites that deliver performance, clarity, and seamless experiences across devices, tailored for growth.",
    orientation: "xl:flex-row-reverse",
    link: "/website",
  },
  {
    imgLink: "/images/user1.png",
    title: "Performance Optimization",
    desc: "We optimise websites and apps for speed, scalability, and seamless user experience. Faster load times, smoother journeys, and stronger results - turning underperforming products into high-performance experiences built to scale.",
    orientation: "xl:flex-row",
    link: "/userEx",
  },
  {
    imgLink: "/images/product.png",
    title: "Product Design App & SaaS",
    desc: "From dashboards to mobile apps, we design products that are intuitive, user-friendly, and ready to handle complex financial and technical interactions with simplicity and confidence.",
    orientation: "xl:flex-row-reverse",
    link: "/saas",
  },
  {
    imgLink: "/images/market.png",
    title: "Marketing & Copywriting",
    desc: "Clear messaging builds trust. We craft landing pages, campaign assets, and investor decks that simplify complex fintech ideas, attract customers, and communicate value effortlessly.",
    orientation: "xl:flex-row",
    link: "/marketing",
  },
  {
    imgLink: "/images/user.png",
    title: "User Experience & Flow",
    desc: "We design user journeys that make financial products seamless. Every interaction is optimized to reduce friction, build trust, and keep customers engaged for the long term.",
    orientation: "xl:flex-row-reverse",
    link: "/userEx",
  },
];

const OurServices = () => {
  return (
    <section className="flex flex-col w-full py-30 bg-secondary items-center gap-20 mt-20">
      <h1 className="flex w-full justify-center xl:w-[48%] md:text-[6rem] xl:text-[10rem] fontheading text-accent-foreground leading-40">
        Our Services
      </h1>

      <h3 className="w-[70%] xl:w-[45%]  fontbody1 text-[1.6rem] xl:text-[1.2rem] text-background-primary tracking-wider leading-10 xl:leading-8 text-center">
        From brand identities to full-scale apps, we design and develop
        experiences that are built to last.
      </h3>
      <div className="flex flex-col w-full p-20 gap-50">
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
