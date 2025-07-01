"use client";
import styles from "./styles/styles.module.css";
import image1 from "../../../public/hero/image1.png";
import image2 from "../../../public/hero/image2.png";
import image3 from "../../../public/hero/image3.png";
import Image from "next/image";
import { redirect } from "next/navigation";
import { animate, createScope, createSpring, stagger } from "animejs";
import { useEffect, useRef } from "react";

export default function Hero() {
  const root = useRef(null);
  const scope = useRef<ReturnType<typeof createScope> | null>(null);

  useEffect(() => {
    scope.current = createScope({ root }).add(() => {
      animate(".hero-text", {
        scale: [
          { from: 0, ease: "outCirc", duration: 150 },
          { to: 1.15, ease: "in", duration: 150 },
          { to: 1, ease: createSpring({ stiffness: 300 }), duration: 200 },
        ],
        opacity: [{ to: 1, ease: "out", duration: 300 }],
        y: [
          { from: "1rem", ease: "inQuad", duration: 150 },
          { to: "-1.3rem", ease: "in", duration: 150 },
          { to: "0", ease: createSpring({ stiffness: 300 }), duration: 100 },
        ],
        delay: stagger(150),
      });
    });
    return () => scope.current?.revert();
  }, []);
  function redirectToRegister() {
    redirect("/register");
  }
  return (
    <section
      ref={root}
      className="mx-auto flex w-full max-w-[1512px] flex-col items-center gap-10 px-6 lg:grid lg:grid-cols-2 lg:gap-6 lg:px-14"
    >
      <div className="flex w-full flex-col items-center gap-8 lg:items-start">
        <div className="flex flex-col items-center gap-6 lg:items-start">
          <h1 className="font-poppins text-black-100 max-w-prose text-center text-5xl leading-[51px] font-bold tracking-[4%] uppercase md:text-[64px] md:leading-[80px] lg:text-left">
            <div className="hero-text mr-2 inline-block opacity-0">your</div>{" "}
            <span className="text-gold-100">
              <div className="hero-text mr-2 inline-block opacity-0">
                perfect
              </div>{" "}
              <div className="hero-text mr-2 inline-block opacity-0">home</div>
            </span>{" "}
            {["is", "our", "goal"].map((word, index) => (
              <div
                key={index}
                className="hero-text mr-2.5 inline-block opacity-0"
              >
                {word + " "}
              </div>
            ))}
          </h1>
          <p className="font-montserrat text-black-100 my-text max-w-[40ch] text-center text-xl font-medium lg:text-left">
            At 19Homes We Focus On Services Like House And Land Sales, Building
            And Architectural Designs. Work With Us To Bring Your Dream Home
            Into Reality.
          </p>
        </div>
        <button
          className="bg-gold-100 font-montserrat hover:bg-gold-75 hover:text-black-100 w-fit cursor-pointer rounded-sm px-6 py-4 text-sm font-bold text-white transition duration-300 hover:shadow-[3px_5px_10px_#0000007f]"
          onClick={redirectToRegister}
        >
          Get Started
        </button>
      </div>
      <div
        className={`relative h-[308px] w-full lg:h-[620px] ${styles.imageContainer}`}
      >
        <div className={`${styles.imageBox} ${styles.imageBoxOne}`}>
          <Image
            src={image1}
            alt="A sophisticated building"
            fill
            placeholder="blur"
          />
        </div>
        <div className={`${styles.imageBox} ${styles.imageBoxTwo}`}>
          <Image
            src={image2}
            alt="A sophisticated building"
            fill
            placeholder="blur"
          />
        </div>
        <div className={`${styles.imageBox} ${styles.imageBoxThree}`}>
          <Image
            src={image3}
            alt="A sophisticated building"
            fill
            placeholder="blur"
          />
        </div>
        <div className="border-gold-25 absolute top-[50%] left-[50%] h-[279px] w-[273px] translate-x-[-50%] translate-y-[-50%] rounded-[15px] border-[5px] border-dashed lg:h-[562px] lg:w-[551px] lg:rounded-4xl lg:border-10"></div>
      </div>
    </section>
  );
}
