import ContactForm from "/src/components/Contact/ContactForm";
import siteMetadata from "/src/utils/siteMetaData";
import Image from "next/image";
import profileImg from "/public/logo.jpg";

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

        <p className="mt-4 max-w-sm md:max-w-md text-center leading-relaxed text-neutral-500 dark:text-white  mr-auto">
          Located Behind Nyawira centre - Next to panesic hotel, Embu. |
          Phone•0727 444454| Wakagoto Nation Tel 3861555 | Fax 3861543
          www.wakagotonation.com | Copyright &copy; 2025 All rights reserved.
        </p>

        <iframe
          className="items-center mt-4 md:mt-0 ml-14 md:ml-auto"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3989.6422800275354!2d37.447463909795204!3d-0.5382310352622189!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x18262f00554ce53d%3A0xebe3ce67ed97091f!2sWakagoto%20Foundation!5e0!3m2!1sen!2ske!4v1753941090195!5m2!1sen!2ske"
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
