import imageOne from "../../../../../public/about/block-one-image.jpg";
import imageTwo from "../../../../../public/about/block-one-image1.jpg";
import Image from "next/image";
import styles from "../../styles/styles.module.css";

export default function BlockOne() {
  return (
    <section className="flex w-full flex-col gap-3 lg:grid lg:max-w-[1512px] lg:grid-cols-2 lg:gap-x-6">
      <div className={`${styles.blockOneBox}`}>
        <div className={`relative ${styles.blockOneBoxOne}`}>
          <Image src={imageOne} alt="a duplex building" fill />
        </div>
        <div className={`relative ${styles.blockOneBoxTwo}`}>
          <Image src={imageTwo} alt="a duplex building" fill />
        </div>
      </div>
      <article className="font-montserrat text-black-100 flex flex-col gap-2.5 text-[10px] font-normal sm:gap-3 sm:text-xs md:gap-3.5 md:text-sm lg:gap-5 lg:text-xl">
        <p>
          <span className="font-bold">19 Homes</span> is a dynamic real estate
          company dedicated to providing exceptional and customized services in
          the real estate industry. We have a strong focus on customer
          satisfaction and a commitment to excellence, we strive to help
          individuals and families find their dream homes or space and make wise
          investment decisions.
        </p>
        <p>
          At <span className="font-bold">19 Homes</span>, we understand that
          buying or selling a property can be seen as an achievement in
          one&apos;s life. Our team of real estate professionals is equipped
          with clear market knowledge and expertise to guide clients through
          every step of the process, ensuring a smooth, purposeful and
          successful transaction.
        </p>
        <p>
          We offer a wide range of residential properties, including houses,
          apartments, and office space in desirable states across the country.
        </p>
      </article>
    </section>
  );
}
