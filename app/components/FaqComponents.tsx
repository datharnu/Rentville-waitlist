import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

import Image from "next/image";

export default function FaqComponent() {
  return (
    <section className="bg-white lg:w-[80%] py-10 lg:py-0 lg:mt-20 mx-auto mb-20">
      <h1 className="zilla text-[20px]  md:text-[25px] lg:text-[30px] text-primary text-center py-10">
        Frequent Asked Questions
      </h1>

      <Accordion
        type="single"
        collapsible
        className="lg:w-[70%] pb-20 mx-auto px-6 space-y-2 text-text "
      >
        {/* Faq 1 */}
        <AccordionItem
          value="item-1"
          className="border-2 hover:text-primary rounded-xl px-2 hover:bg-white"
        >
          <AccordionTrigger className="mulish lg:text-[20px]">
            What is RentVille ?
            {/* <Image src={Animation2} alt="animation" width={20} /> */}
          </AccordionTrigger>
          <AccordionContent className="text-[13px] lg:text-[16px]">
            RentVille is a mobile app designed to help LASU students find and
            rent houses and apartments easily and securely through verified
            agents.
          </AccordionContent>
        </AccordionItem>
        {/* Faq 2 */}
        <AccordionItem
          value="item-2"
          className="border-2 hover:text-primary rounded-xl px-2 hover:bg-white"
        >
          <AccordionTrigger className="mulish lg:text-[20px]">
            How do I join the waitlist ?
          </AccordionTrigger>
          <AccordionContent className="text-[13px] lg:text-[16px]">
            Simply enter your email adddress in the sign-up form on this page.
          </AccordionContent>
        </AccordionItem>
        {/* Faq 3 */}
        <AccordionItem
          value="item-3"
          className="border-2 hover:text-primary rounded-xl  px-2 hover:bg-white"
        >
          <AccordionTrigger className="mulish lg:text-[20px]">
            When will RentVille be available ?
          </AccordionTrigger>
          <AccordionContent className="text-[13px] lg:text-[16px]">
            We are working hard to bring RentVille to you soon. Join our
            waitlist to recieve updates on our official launch date.
          </AccordionContent>
        </AccordionItem>
        {/* Faq 4 */}
        <AccordionItem
          value="item-4"
          className="border-2 hover:text-primary rounded-xl px-2 hover:bg-white"
        >
          <AccordionTrigger className="mulish lg:text-[20px]">
            Is my information safe ?
          </AccordionTrigger>
          <AccordionContent className="text-[13px] lg:text-[16px]">
            Absolutely. We use advanced encryption to protect your personal and
            financial information.
          </AccordionContent>
        </AccordionItem>
        {/* Faq 5 */}
        <AccordionItem
          value="item-5"
          className="border-2 hover:text-primary rounded-xl px-2 hover:bg-white"
        >
          <AccordionTrigger className="mulish lg:text-[20px]">
            Can I invite friends to join the waitlist ?
          </AccordionTrigger>
          <AccordionContent className="text-[13px] lg:text-[16px]">
            Yes ! Share the link to this page with your friends and help them
            experience stress-free house hunting too.
          </AccordionContent>
        </AccordionItem>
        {/* Faq 6 */}
        <AccordionItem
          value="item-6"
          className="border-2 hover:text-primary rounded-xl px-3 hover:bg-white"
        >
          <AccordionTrigger className="mulish lg:text-[20px] text-left">
            What should I do if I have a problem with the property or agent?
          </AccordionTrigger>
          <AccordionContent className="text-[13px] lg:text-[16px]">
            If you encounter any issues, you can report the problem through the
            website support section. Our team will investigate and assist you
            accordingly.
          </AccordionContent>
        </AccordionItem>
        {/* Faq 7 */}
        <AccordionItem
          value="item-7"
          className="border-2 hover:text-primary rounded-xl px-2 hover:bg-white"
        >
          <AccordionTrigger className="mulish lg:text-[20px] text-left">
            Is my personal information safe on RentVille?
          </AccordionTrigger>
          <AccordionContent className="text-[13px] lg:text-[16px]">
            We take your privacy and security very seriously. All personal
            information is encrypted and securely stored. We do not share your
            data with third parties without your consent.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </section>
  );
}
