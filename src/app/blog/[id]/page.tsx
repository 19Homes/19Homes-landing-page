"use client";
import PageHeader from "@/components/page-header";
import { UseGetCurrentBlog } from "../hooks/useGetCurrentBlog";
import Image from "next/image";
import icon from "../../../../public/blog-section/19HomesIcon.svg";
export default function Page() {
  const blogPost = UseGetCurrentBlog();
  return (
    <main>
      <PageHeader title={blogPost.title} />
      <section className="mg:pd-16 w-100vw flex flex-col gap-10 p-13">
        <div className="flex w-full flex-col gap-4 md:gap-8">
          <Image
            src={blogPost.image}
            alt={blogPost.title}
            width={800}
            height={800}
            placeholder="blur"
            className="bg-gold-25 w-full object-contain shadow-xl rounded-3xl"
          />
          <div className="flex items-center gap-3">
            <Image src={icon} alt="19Homes logo" height={50} width={50} />
            <p className="font-poppins text-black-75 text-sm font-semibold md:text-lg">
              from 19Homes
            </p>
          </div>
        </div>
        <p className="font-montserrat text-black-75 max-w-[45ch] text-sm leading-[130%] font-medium tracking-wider md:max-w-prose md:text-lg lg:text-xl">
          {blogPost.description}
        </p>
      </section>
    </main>
  );
}
