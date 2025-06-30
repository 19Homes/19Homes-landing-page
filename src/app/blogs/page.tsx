import PageHeader from "@/components/page-header";
import BlogPageCard from "./components/blogPageCard";
import { blogPosts } from "./constants";
import { cutOutText } from "./utils/cut-out-text";
export default function Page() {
  return (
    <main className="flex flex-col items-center">
      <PageHeader title="Blogs" />
      <section className="mt-20 flex w-full max-w-[1510px] flex-wrap justify-center gap-12 px-6 md:mt-25 md:px-14">
        {blogPosts.map((post, index) => (
          <BlogPageCard
            key={index}
            image={post.image}
            title={post.title}
            text={cutOutText(post.description)}
          />
        ))}
      </section>
    </main>
  );
}
