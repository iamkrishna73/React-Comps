import { useState } from "react";
import Accordion from "../components/Accordion";
  
function AccordionPage() {
  const items = [
    {
      id: "ksk479jsk0",
      label: "Can I use React on Project?",
      content: "You can use on React on any project you want.",
    },
    {
      id: "pqr789lmn",
      label: "Best Practices for Web Security",
      content:
        "Implementing secure coding practices, regularly updating software, and employing encryption techniques are essential for ensuring robust web security and protecting against potential cyber threats.",
    },
    {
      id: "compSci101xyz",
      label: "Introduction to Machine Learning",
      content:
        "Machine learning is a branch of artificial intelligence that focuses on developing algorithms and models that enable computers to learn and make predictions or decisions based on data. It has applications in various fields, including image recognition, natural language processing, and predictive analytics.",
    },
  ];

  return <Accordion items={items} />;
}

export default AccordionPage;
