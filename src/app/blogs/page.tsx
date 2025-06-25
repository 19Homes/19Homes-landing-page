import PageHeader from "@/components/page-header";
import BlogPageCard from "./components/blogPageCard";
import { blogPosts } from "./constants";
export default function Page() {
  return (
    <main className="flex flex-col items-center">
      <PageHeader title="Blogs" />
      <section className="mt-20 w-full max-w-[1510px] flex flex-wrap gap-12 justify-center px-13 md:mt-25 md:px-16">
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

function cutOutText(text: string) {
  const extractedText = `${text.substring(0, 21)}...`;
  return extractedText;
}
