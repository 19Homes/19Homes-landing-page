export default function PageHeader({ title }: { title: string }) {
  return (
    <section className="w-full h-[84px] flex justify-center items-center bg-[linear-gradient(to_right,rgba(0,0,0,0.5),rgba(0,0,0,0.9),rgba(0,0,0,0.5)),url('/footer/footer-image.png')] bg-center bg-cover mt-[73px]">
      <h3 className="font-poppins capitalize font-bold text-2xl text-gold-100">
        {title}
      </h3>
    </section>
  );
}
