"use client";
import { blogPosts } from "./constants";
import BlogCard from "./components/blog-card";
import SectionCaption from "../sectionCaption";
import { redirect } from "next/navigation";
import Link from "next/link";
import { useState, useEffect } from "react";
import { getAuthUser } from "@/lib/getAuthUser";

export default function Blog() {
  const [userIsAuthenticated, setAuthenticationStatus] =
    useState<boolean>(false);
  const [showErrorMessage, setErrorMessageState] = useState<boolean>(false);
  useEffect(() => {
    async function checkUserAuthentication() {
      const authenticationStatus = await getAuthUser();
      console.log("AUTHENTICATION STATUS HERE O", authenticationStatus);
      setAuthenticationStatus(!!authenticationStatus);
    }
    checkUserAuthentication();
  }, []);
  return (
    <section className="flex flex-col items-center gap-10 px-6 lg:px-14">
      <section className="w-full flex-col items-center">
        <SectionCaption headText="Our Blog" subText="See our latest articles" />
        <section className="flex w-full flex-wrap justify-center gap-6 gap-y-4 lg:gap-y-10">
          {blogPosts.map((post, index) => (
            <BlogCard
              key={index}
              title={post.title}
              source={post.image}
              text={post.description}
            />
          ))}
        </section>
      </section>
      <div>
        <button
          className="bg-gold-100 font-montserrat hover:bg-gold-75 hover:text-black-100 cursor-pointer rounded-sm px-6 py-4 text-sm font-bold text-white capitalize duration-200 hover:shadow-[3px_5px_10px_#0000007f]"
          onClick={() => {
            if (userIsAuthenticated) {
              setErrorMessageState(false);
              redirect("/blogs");
            } else {
              setErrorMessageState(true);
            }
          }}
        >
          view all
        </button>
        {showErrorMessage && (
          <p>
            Sorry. You need to be signed in to view this page. Please{" "}
            <Link href="/register">Sign In</Link>
          </p>
        )}
      </div>
    </section>
  );
}
