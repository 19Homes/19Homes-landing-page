import { blogPosts } from "./constants";
import BlogCard from "./components/blog-card";

export default function Blog() {
  return (
    <section className="flex flex-col px-14 gap-10 items-center">
      <section className="w-full flex-col items-center">
        <div className="w-full flex flex-col gap-2.5 mb-20 items-center">
          <h3 className="text-2xl text-gold-100 font-bold font-poppins capitalize">
            our blog
          </h3>
          <p className="font-bold text-black-100 font-montserrat text-3xl capitalize">
            see our latest articles
          </p>
        </div>
        <section className="w-full flex gap-6 gap-y-10 flex-wrap justify-center">
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
      <button className="capitalize py-4 px-6 bg-gold-100 text-white rounded-sm cursor-pointer hover:shadow-[0_0_30px_#D49100CC,0_0_30px_#D49100CC,0_0_30px_#D49100CC] font-medium font-montserrat text-sm duration-200">
        view all
      </button>
    </section>
  );
}
