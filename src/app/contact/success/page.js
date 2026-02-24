import Link from "next/link";

export default function ContactSuccessPage() {
  return (
    <section className="h-dvh flex flex-col justify-center items-center bg-white">
      <h1 className="text-4xl text-center font-bold text-[#090909] mb-4">
        Message Sent Successfully!
      </h1>
      <p className="text-[#888888] text-center mb-8">
        Thank you for contacting me. I will get back to you soon.
      </p>
      <Link href="/" className="text-[#dfb44b] font-bold underline">
        Go back to Home
      </Link>
    </section>
  );
}
