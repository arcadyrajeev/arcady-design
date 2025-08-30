import DualCard from "./ui/dualCard";

const services = [
  {
    imgLink: "/images/brand.png",
    title: "Brand Design",
    desc: "We create bold, future-ready brand identities that inspire trust and credibility in fintech and tech spaces. From logo to visual systems, every detail is built for recognition and investor confidence.",
    orientation: "flex-row",
    link: "/",
  },
  {
    imgLink: "/images/web.png",
    title: "Website Design & Development",
    desc: "Your website is your first pitch. We hand-code fast, secure, and scalable websites that deliver performance, clarity, and seamless experiences across devices, tailored for growth.",
    orientation: "flex-row-reverse",
    link: "/",
  },
  {
    imgLink: "/images/product.png",
    title: "Product Design",
    desc: "From dashboards to mobile apps, we design products that are intuitive, user-friendly, and ready to handle complex financial and technical interactions with simplicity and confidence.",
    orientation: "flex-row",
    link: "/",
  },
  {
    imgLink: "/images/market.png",
    title: "Marketing & Copywriting",
    desc: "Clear messaging builds trust. We craft landing pages, campaign assets, and investor decks that simplify complex fintech ideas, attract customers, and communicate value effortlessly.",
    orientation: "flex-row-reverse",
    link: "/",
  },
  {
    imgLink: "/images/user.png",
    title: "User Flow",
    desc: "We design user journeys that make financial products seamless. Every interaction is optimized to reduce friction, build trust, and keep customers engaged for the long term.",
    orientation: "flex-row",
    link: "/",
  },
];

const OurServices = () => {
  return (
    <section className="flex flex-col w-full py-30 bg-secondary items-center gap-20 mt-20">
      <h1 className="w-[48%] text-[10rem] fontheading text-accent-foreground leading-40">
        Our Services
      </h1>

      <h3 className="w-[45%] fontbody1 text-[1.2rem] text-background-primary tracking-wider leading-8 text-center">
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
