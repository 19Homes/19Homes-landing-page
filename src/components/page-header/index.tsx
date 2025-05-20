export default function PageHeader({ title }: { title: string }) {
  return (
    <section className="mt-[73px] flex h-[21px] w-full items-center justify-center bg-[linear-gradient(to_right,rgba(0,0,0,0.7),rgba(0,0,0,0.9),rgba(0,0,0,0.7)),url('/footer/footer-image.png')] bg-cover bg-center sm:h-[40px] lg:h-[84px]">
      <h3 className="font-poppins text-gold-100 text-sm font-bold capitalize sm:text-lg lg:text-2xl">
        {title}
      </h3>
    </section>
  );
}
