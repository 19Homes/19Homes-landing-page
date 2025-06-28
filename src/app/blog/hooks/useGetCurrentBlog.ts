"use client";
import { notFound, useParams } from "next/navigation";
import { blogPosts } from "@/app/blogs/constants";

export function UseGetCurrentBlog() {
  const { id }: { id: string } = useParams();
  const changeIdToBlogTitle = id.split("_").join(" ");
  const blogPost = blogPosts.find((post) => post.title === changeIdToBlogTitle);
  if (!blogPost) return notFound();
  return blogPost;
}
