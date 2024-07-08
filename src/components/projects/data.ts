import { contentAiExtensionImg, contentAiImg, notifyImg } from "../../assets";

export interface typeProjectData {
  webLink: string;
  title: string;
  des: string;
  src: string;
}

export const projectData: typeProjectData[] = [
  {
    webLink: "https://gozen.io/notify",
    title: "GoZen Notify",
    des: "GoZen Notify is a cutting-edge notification service designed to keep you informed and connected with real-time updates. Whether you are a business professional, a developer, or a casual user, Gozen Notify ensures that you never miss an important message.",
    src: notifyImg,
  },
  {
    webLink: "https://gozen.io/contentai",
    title: "Content.Ai",
    des: "GoZen Content.AI is a cutting-edge platform designed to revolutionize the way you create, manage, and optimize your digital content. Leveraging the power of artificial intelligence, Gozen Content.AI offers a comprehensive suite of tools that cater to content creators, marketers, and businesses looking to enhance their online presence.",
    src: contentAiImg,
  },
  {
    webLink:
      "https://chromewebstore.google.com/detail/gozen-contentai/glhodlndnfnmighfapfghjgbmajinooi?hl=en",
    title: "Content.Ai Chrome Extension",
    des: "Content.ai is a powerful Chrome extension designed to revolutionize your content creation process. Whether you're a blogger, marketer, student, or professional writer, Content.ai provides you with intelligent tools to create high-quality content effortlessly.",
    src: contentAiExtensionImg,
  },
];
