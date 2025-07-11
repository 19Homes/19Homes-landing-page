"use client";
import { blogPosts } from "./constants";
import BlogCard from "./components/blog-card";
import SectionCaption from "../sectionCaption";
import { redirect } from "next/navigation";
import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import { getAuthUser } from "@/lib/getAuthUser";
import { animate, createScope, onScroll, utils } from "animejs";

export default function Blog() {
  const [showErrorMessage, setErrorMessageState] = useState<boolean>(false);
  useEffect(() => {
    let timeoutID: NodeJS.Timeout;
    if (showErrorMessage) {
      timeoutID = setTimeout(() => {
        setErrorMessageState(false);
      }, 3000);
    }
    return () => clearTimeout(timeoutID);
  }, [showErrorMessage]);
  async function handleClick() {
    const checkUserAuthentication = await getAuthUser();
    if (checkUserAuthentication) {
      setErrorMessageState(false);
      redirect("/blogs");
    } else {
      setErrorMessageState(true);
    }
  }
  const root = useRef(null);
  const scope = useRef<ReturnType<typeof createScope> | null>(null);
  useEffect(() => {
    scope.current = createScope({ root }).add(() => {
      const $blogCards = utils.$(".blog-card");
      $blogCards.forEach((_, index) => {
        animate(`.blog-card svg:nth-child(${index + 1}) circle`, {
          r: [{ to: 450, ease: "linear", duration: 1500 }],
          autoplay: onScroll({
            container: ".blog-parent",
            target: `.blog-card:nth-child(${index + 1})`,
            enter: "bottom-=250 top",
            leave: "top+=400 bottom",
            sync: "play play reverse reverse",
          }),
        });
      });
    });
    return () => scope.current?.revert();
  }, []);
  return (
    <section
      ref={root}
      className="blog-parent flex flex-col items-center gap-10 px-6 lg:px-14"
    >
      <section className="blog-card-holder w-full flex-col items-center">
        <SectionCaption headText="Our Blog" subText="See our latest articles" />
        <section className="parent flex w-full flex-wrap justify-center gap-6 gap-y-4 lg:gap-y-10">
          {blogPosts.map((post, index) => (
            <BlogCard
              key={index}
              title={post.title}
              source={post.image}
              text={post.description}
              mask={`circle-mask${index + 1}`}
            />
          ))}
        </section>
      </section>
      <div className="flex flex-col items-center gap-3">
        <button
          className="bg-gold-100 font-montserrat hover:bg-gold-75 hover:text-black-100 cursor-pointer rounded-sm px-6 py-4 text-sm font-bold text-white capitalize duration-200 hover:shadow-[3px_5px_10px_#0000007f]"
          onClick={handleClick}
        >
          view all
        </button>
        {showErrorMessage && (
          <p
            className="font-montserrat text-sm font-semibold text-red-500 sm:text-lg"
            aria-live="assertive"
            role="alert"
          >
            Sorry. You need to be signed in to view this page. Please{" "}
            <Link
              href="/login"
              className="font-bold text-blue-800 underline underline-offset-2"
            >
              Sign In
            </Link>
          </p>
        )}
      </div>
    </section>
  );
}
