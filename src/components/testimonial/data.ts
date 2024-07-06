import { testimonialOne, testimonialThree, testimonialTwo } from "../../assets";

export interface typeTestimonialData {
  image: string;
  name: string;
  country: string;
  position: string;
  application: string;
  published: string;
  starCount: string[];
  Feedback: string;
}

export const testimonialData: typeTestimonialData[] = [
  {
    image: testimonialOne,
    name: "Sarah L.",
    country: "Bound - Trolola",
    position: "E-commerce Manager",
    application: "GoZen Notify",
    published: "Feb, 2024",
    starCount: ["*", "*", "*", "*", "*"],
    Feedback: `"I've been using Gozen Notify for our e-commerce site, and
                    it has completely transformed our customer engagement. The
                    real-time notifications keep our customers informed about
                    their orders and promotions, resulting in a noticeable
                    increase in sales. It's easy to integrate and reliable.
                    Highly recommended!"`,
  },
  {
    image: testimonialThree,
    name: "Daniel M.",
    country: "Chicago - Illinois",
    position: "Content Marketing Manager",
    application: "Content.Ai",
    published: "Mar 4, 2023",
    starCount: ["*", "*", "*", "*", "*"],
    Feedback: `"Content.ai has revolutionized the way we create and manage
                    content for our website. The AI-powered tools are incredibly
                    intuitive, saving us hours of manual work each week. Our
                    engagement rates have soared since we started using their
                    services, and the content quality is consistently top-notch.
                    It's an indispensable resource for our marketing team."`,
  },
  {
    image: testimonialTwo,
    name: "Michael L.",
    country: "Houston - Texas",
    position: "Freelance Writer",
    application: "Content.Ai Extension",
    published: "Feb 4, 2023",
    starCount: ["*", "*", "*", "*", "*"],
    Feedback: `"The Content.Ai Chrome extension is a lifesaver! It
                    seamlessly integrates with my browser, making it incredibly
                    easy to generate high-quality content on the fly. Whether
                    I'm drafting emails, blog posts, or social media updates,
                    the AI suggestions are always spot-on and save me so much
                    time. It's a must-have tool for any content creator."`,
  },
];
