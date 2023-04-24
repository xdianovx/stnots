import { useContext, useEffect } from "react";
import gsap from "gsap-trial/dist/gsap";
import { ScrollSmoother } from "gsap-trial/dist/ScrollSmoother";
import { useRouter } from "next/router";
import SmootherContext from "../context/SmootherContext";
import { Footer, Header } from ".";

const LayoutWrapper = ({ children, ...props }) => {
  const { toggleSmootherReady } = useContext(SmootherContext);

  useEffect(() => {
    const mm = gsap.matchMedia();

    let ctx = gsap.context(() => {
      ScrollSmoother.create({
        wrapper: "#smooth-wrapper",
        content: "#smooth-content",
        smooth: true,
        effects: true,
        smoothTouch: 0,
        normalizeScroll: true,
        effects: true,
      });

      mm.add("(max-width: 1000px)", () => {
        return () => smoother.kill();
      });
    });
    toggleSmootherReady(true);

    return () => ctx.revert();
  }, []);

  return (
    <div id="smooth-wrapper" className="dark:bg-black" {...props}>
      <div id="smooth-content">
        <Header />
        {children}
        <Footer />
      </div>
    </div>
  );
};

export default LayoutWrapper;
