"use client";
import PageHeader from "@/components/page-header";
import { UseGetCurrentBlog } from "../hooks/useGetCurrentBlog";
import Image from "next/image";
import icon from "../../../../public/blog-section/19HomesIcon.svg";
import "../styles/styles.css";
export default function Page() {
  const blogPost = UseGetCurrentBlog();
  return (
    <main>
      <PageHeader title={blogPost.title} />
      <section className="md:px-14 w-100vw flex flex-col gap-12 px-6 mt-10 md:mt-16">
        <div className="flex w-full flex-col gap-4 md:gap-6">
          <Image
            src={blogPost.image}
            alt={blogPost.title}
            width={2000}
            height={2000}
            placeholder="blur"
            className="w-full rounded-4xl object-contain"
          />
          <p className="py-4 border-b border-t border-gold-75 font-montserrat font-semibold text-xs md:text-sm text-black-75 leading-[1.6] tracking-[2px] max-w-[40ch] md:max-w-[60ch]">{blogPost.description}</p>
          <div className="flex items-center gap-3">
            <Image src={icon} alt="19Homes logo" height={50} width={50} />
            <p className="font-poppins text-black-75 text-sm font-semibold md:text-lg">
              from 19Homes
            </p>
          </div>
        </div>
        <div className="blog" dangerouslySetInnerHTML={{ __html: blogPost.content }} />
      </section>
    </main>
  );
}
