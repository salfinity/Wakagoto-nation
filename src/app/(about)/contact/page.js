import ContactForm from "/src/components/Contact/ContactForm";
import siteMetadata from "/src/utils/siteMetaData";
import Image from "next/image";
import profileImg from "/public/logo.jpeg";

export const metadata = {
  title: "Contact Us | Iqra FM",
  description: `Contact us through the form available on this page or email us at ${siteMetadata.email}`,
};

export default function Contact() {
  return (
    <>
      <div className="max-w-6xl mt-24 grid grid-cols-1 md:grid-cols-3 mb-10 border-neutral-600  mx-auto  justify-between text-teal-600">
        <Image
          layout="fixed"
          width={300}
          height={300}
          objectFit="cover"
          className="rounded-full border border-zinc-500 w-32 ml-28 md:ml-0"
          src={profileImg}
          alt=""
        />

        <p className="mt-4 max-w-sm md:max-w-md text-center leading-relaxed text-gray-500 dark:text-white  mr-auto">
          At Masjid Al-Huda - South B MRQQ+WVR, Aoko Rd, Nairobi. | Phone•0727
          444454|IqraFM Tel 3861555 | Fax 3861543 www.iqrafm.com | Copyright
          &copy; 2023 All rights reserved.
        </p>

        <iframe
          className="items-center mt-4 md:mt-0 ml-14 md:ml-auto"
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15955.10123905002!2d36.839656!3d-1.3101315!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f11a778e3c841%3A0xcb7b083704c07fc7!2sMasjid%20Al-Huda%20-%20South%20B!5e0!3m2!1sen!2ske!4v1699994265643!5m2!1sen!2ske"
          width="250"
          height="150"
          loading="lazy"
        ></iframe>
      </div>
      <div className="w-full md:w-3/5 flex flex-col items-start border-t border-neutral-600 justify-center px-5 xs:px-10 md:px-16 pb-8">
        <ContactForm />
      </div>
    </>
  );
}
