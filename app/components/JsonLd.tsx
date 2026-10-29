export default function JsonLd() {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Rank Rise Recognize",
    "url": "https://rankriserecognize.com",
    "logo": "https://rankriserecognize.com/logo.png",
    "description":
      "SEO, AEO and GEO agency for Indian SMBs and D2C brands. We get you ranked on Google, growing in leads, and recognized by ChatGPT, Gemini, and Google AI Overviews.",
    "slogan": "Rank on Google. Rise in revenue. Get recognised by AI.",
    "sameAs": [
      "https://www.linkedin.com/company/rank-rise-recognize",
      "https://www.instagram.com/rankriserecognize"
    ],
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Bengaluru",
      "addressRegion": "Karnataka",
      "addressCountry": "IN"
    }
  };

  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "name": "Rank Rise Recognize",
    "image": "https://rankriserecognize.com/og-image.jpg",
    "url": "https://rankriserecognize.com",
    "priceRange": "₹7,999 - ₹1,12,499 per month",
    "telephone": "+91-9876543210",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Bengaluru",
      "addressRegion": "Karnataka",
      "addressCountry": "IN"
    },
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
        "opens": "10:00",
        "closes": "19:00"
      }
    ]
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What is the difference between SEO, AEO and GEO?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "SEO helps your website rank in Google's organic search results. AEO (Answer Engine Optimization) helps your content become the direct answer in Google AI Overviews, featured snippets and voice search. GEO (Generative Engine Optimization) helps AI assistants like ChatGPT, Gemini and Perplexity mention and recommend your brand. You need all three because customers now search across all three environments."
        }
      },
      {
        "@type": "Question",
        "name": "How long does SEO take to show results?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Most businesses see early movement within 3 months and stronger growth in 6–12 months. Local SEO and AEO fixes can work faster, while competitive national keywords take compounding authority over time."
        }
      },
      {
        "@type": "Question",
        "name": "Do you guarantee #1 rankings?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "No. Nobody controls Google's algorithm or ChatGPT's training models, and any agency guaranteeing #1 is taking reckless risks with your website. We commit to transparent work every month and honest reporting on what moved."
        }
      },
      {
        "@type": "Question",
        "name": "Can you get my brand mentioned in ChatGPT?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We cannot force AI output, but we measurably increase the probability. AI tools recommend brands that are structured cleanly on their own website and cited across authoritative third-party platforms. We optimize both and track your mentions monthly."
        }
      },
      {
        "@type": "Question",
        "name": "Do I need to sign a long contract?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "No. Our plans have a 3-month initial commitment to allow search engines to crawl and index optimizations, and then continue strictly month-to-month with no 12-month lock-in."
        }
      }
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
    </>
  );
}
