import styles from "../../styles/styles.module.css";
import imageOne from "../../../../../public/about/block-two-image.jpg";
import imageTwo from "../../../../../public/about/block-two-image1.jpg";
import imageThree from "../../../../../public/about/block-two-image2.jpg";
import Image from "next/image";

export default function BlockTwo() {
  return (
    <section className="grid grid-cols-2 gap-x-6 w-full max-w-[1512px]">
      <article className="flex flex-col gap-5 font-normal font-montserrat text-black-100 text-xl">
        <p>
          Our commitment to exceptional service goes beyond the buying and
          selling process. We strive to build and keep long-lasting
          relationships with our clients by providing ongoing support and
          personalized advice. From property valuation and market analysis to
          negotiating the best deals, our team is dedicated to achieving optimal
          results for our clients.
        </p>
        <p>
          At <span className="font-bold">19 Homes</span>, we embrace innovation
          and leverage cutting-edge technology to enhance the real estate
          experience.
        </p>
        <p>
          Our website provides comprehensive property listings, virtual tours,
          and detailed information to help clients make informed decisions from
          the comfort of their homes.
        </p>
        <p>
          Choose <span className="font-bold">19 Homes</span> as your trusted
          real estate partner and let us help you find your perfect home or
          maximize the value of your property investment. Experience the
          difference of working with a dedicated and knowledgeable team that
          puts your needs first. Contact 19 Homes today and embark on your real
          estate journey with confidence. Own a piece of the earth.
        </p>
      </article>
      <div className={styles.blockTwoBox}>
        <div className={`relative ${styles.blockTwoBoxOne}`}>
          <Image src={imageOne} alt="a duplex" fill />
        </div>
        <div className={`relative ${styles.blockTwoBoxTwo}`}>
          <Image src={imageTwo} alt="a duplex" fill />
        </div>
        <div className={`relative ${styles.blockTwoBoxThree}`}>
          <Image src={imageThree} alt="a duplex" fill />
        </div>
      </div>
    </section>
  );
}
