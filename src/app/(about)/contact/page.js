import ContactForm from "/src/components/Contact/ContactForm";
import Image from "next/image";
import siteMetadata from "/src/utils/siteMetaData";

export const metadata = {
  title: "Contact Me",
  description: `Contact me through the form available on this page or email me at ${siteMetadata.email}`,
};

export default function Contact() {
  return (
    <>
      <div className="w-full  md:w-3/5 flex flex-col items-start justify-center px-5 xs:px-10 md:px-16 pb-8">
        <ContactForm />
      </div>
    </>
  );
}
