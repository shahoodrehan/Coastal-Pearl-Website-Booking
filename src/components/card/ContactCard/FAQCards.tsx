function FAQCards() {
  
  const faqs = [
    {
      question: "How far is the resort from Karachi city?",
      answer:
        "The Coastal Pearl is approximately 45-60 minutes drive from central Karachi, depending on traffic.",
    },
    {
      question: "Can we bring our own food and catering?",
      answer:
        "Yes, outside catering is allowed with prior approval. We also offer in-house catering services.",
    },
    {
      question: "Are pets allowed?",
      answer:
        "We allow well-behaved pets with prior notice and an additional cleaning fee.",
    },
    {
      question: "What is included in the packages?",
      answer:
        "Each package includes property access, amenities, and specific features. Check our Packages page for detailed inclusions.",
    },
    {
      question: "Can we extend our booking?",
      answer:
        "Extensions are subject to availability and can be arranged by contacting us in advance.",
    },
  ];

  return (
    
      <div className="max-w-4xl mx-auto px-6 flex flex-col gap-6">

        {/* ✅ Mapping the FAQ Array */}
        {faqs.map((faq, idx) => (
          <div
            key={idx}
            className="bg-(--bg-beige) text-(--text-dark) p-8 rounded-2xl shadow-md"
          >
            <h4 className="text-left mb-2">{faq.question}</h4>
            <p className="text-2 text-left">{faq.answer}</p>
          </div>
        ))}

      </div>
    
  );
}

export default FAQCards;