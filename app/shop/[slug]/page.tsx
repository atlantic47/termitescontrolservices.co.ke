import Container from "@/components/Container";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import type { Metadata } from "next";

function WhatsAppIcon({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
    </svg>
  );
}
import { products, getProductBySlug, getRelatedProducts } from "@/lib/products";

export async function generateStaticParams() {
  return products.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const product = getProductBySlug(slug);
  if (!product) return { title: "Product Not Found" };
  return {
    title: product.metaTitle,
    description: product.metaDescription,
    keywords: `${product.name}, buy ${product.name} Kenya, ${product.activeIngredient} termiticide, termite pesticide Kenya`,
    openGraph: {
      title: product.metaTitle,
      description: product.metaDescription,
      type: "website",
      images: [{ url: `https://termitescontrolservices.co.ke${product.image}` }],
    },
  };
}

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex gap-0.5" aria-label={`${rating} out of 5 stars`}>
      {[1, 2, 3, 4, 5].map((star) => (
        <svg
          key={star}
          className={`w-5 h-5 ${star <= rating ? "text-yellow-400" : "text-gray-200"}`}
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

export default async function ProductPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const product = getProductBySlug(slug);
  if (!product) return notFound();

  const related = getRelatedProducts(product.relatedSlugs);
  const avgRating = (product.reviews.reduce((a, r) => a + r.rating, 0) / product.reviews.length).toFixed(1);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: product.name,
    description: product.description,
    image: `https://termitescontrolservices.co.ke${product.image}`,
    category: "Termiticide / Pesticide",
    offers: {
      "@type": "Offer",
      priceCurrency: "KES",
      price: product.price,
      availability: "https://schema.org/InStock",
      url: `https://termitescontrolservices.co.ke/shop/${product.slug}`,
      seller: { "@type": "Organization", name: "Pestraid Kenya" },
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: avgRating,
      reviewCount: product.reviews.length,
      bestRating: 5,
      worstRating: 1,
    },
    review: product.reviews.map((r) => ({
      "@type": "Review",
      author: { "@type": "Person", name: r.name },
      datePublished: r.date,
      reviewRating: { "@type": "Rating", ratingValue: r.rating, bestRating: 5 },
      reviewBody: r.text,
    })),
    brand: { "@type": "Brand", name: "Pestraid Kenya" },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Breadcrumb */}
      <div className="bg-gray-50 border-b border-gray-100 py-3">
        <Container>
          <nav className="text-xs text-gray-400 font-medium flex items-center gap-2">
            <Link href="/" className="hover:text-red transition-colors">Home</Link>
            <span>/</span>
            <Link href="/shop" className="hover:text-red transition-colors">Shop</Link>
            <span>/</span>
            <span className="text-navy">{product.name}</span>
          </nav>
        </Container>
      </div>

      {/* Hero product section */}
      <section className="py-12 bg-white">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Image */}
            <div className="relative bg-gray-50 rounded-2xl p-8 flex items-center justify-center min-h-80">
              <span className={`absolute top-4 left-4 ${product.badgeColor} text-white text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full z-10`}>
                {product.badge}
              </span>
              <span className="absolute top-4 right-4 bg-white border border-gray-200 text-gray-600 text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full">
                {product.category}
              </span>
              <div className="relative w-full h-72">
                <Image
                  src={product.image}
                  alt={`${product.name} – buy termiticide Kenya`}
                  fill
                  className="object-contain"
                  priority
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
            </div>

            {/* Product info */}
            <div>
              <span className="text-red font-bold uppercase tracking-widest text-xs mb-2 block">
                {product.activeIngredient} &nbsp;·&nbsp; {product.formulation}
              </span>
              <h1 className="font-heading text-3xl md:text-5xl font-black uppercase text-navy leading-tight mb-3">
                {product.name}
              </h1>

              {/* Rating summary */}
              <div className="flex items-center gap-3 mb-6">
                <StarRating rating={Math.round(parseFloat(avgRating))} />
                <span className="text-sm text-gray-600 font-medium">
                  {avgRating} / 5 &nbsp;({product.reviews.length} reviews)
                </span>
              </div>

              <p className="text-gray-600 leading-relaxed mb-6">{product.shortDescription}</p>

              {/* Price */}
              <div className="flex items-baseline gap-3 mb-8 pb-8 border-b border-gray-100">
                <span className="text-5xl font-black text-red font-heading">
                  KES {product.price.toLocaleString()}
                </span>
                <span className="text-gray-400 text-sm">per unit · incl. VAT</span>
              </div>

              {/* Quick specs */}
              <div className="grid grid-cols-2 gap-3 mb-8">
                {[
                  { label: "Active Ingredient", value: product.activeIngredient },
                  { label: "Protection Period", value: product.protectionYears },
                  { label: "Dilution Rate", value: product.dilutionRate },
                  { label: "PCPB Registered", value: "✓ " + product.pcpb, green: true },
                ].map((spec) => (
                  <div key={spec.label} className="bg-gray-50 rounded-xl p-4">
                    <div className="text-gray-400 text-xs uppercase font-bold mb-1">{spec.label}</div>
                    <div className={`font-semibold text-sm ${spec.green ? "text-green-700" : "text-navy"}`}>
                      {spec.value}
                    </div>
                  </div>
                ))}
              </div>

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row gap-3 mb-6">
                <a
                  href={`https://wa.me/254710907628?text=Hi%20Pestraid%20Kenya%2C%20I%20would%20like%20to%20order%20${encodeURIComponent(product.name)}%20(KES%20${product.price.toLocaleString()}).%20Please%20advise%20on%20availability%20and%20delivery.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  id={`order-${product.slug}`}
                  className="flex-1 bg-whatsapp text-white py-4 px-6 rounded-full font-bold uppercase text-sm text-center hover:bg-whatsapp-dark transition-colors shadow-lg flex items-center justify-center gap-2"
                >
                  <WhatsAppIcon className="w-5 h-5 flex-shrink-0" />
                  Order via WhatsApp
                </a>
                <a
                  href="tel:+254710907628"
                  className="flex-1 border-2 border-navy text-navy py-4 px-6 rounded-full font-bold uppercase text-sm text-center hover:bg-navy hover:text-white transition-colors"
                >
                  📞 Call to Order
                </a>
              </div>
              <p className="text-xs text-gray-400 text-center">
                Kenya-wide delivery · Expert advice included · PCPB-registered genuine product
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* Full description */}
      <section className="py-12 bg-gray-50 border-t border-gray-100">
        <Container className="max-w-4xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <div>
              <h2 className="font-heading text-2xl font-black uppercase text-navy mb-4">
                About {product.name}
              </h2>
              <p className="text-gray-600 leading-relaxed">{product.description}</p>
            </div>
            <div>
              <h2 className="font-heading text-2xl font-black uppercase text-navy mb-4">
                How It Works
              </h2>
              <p className="text-gray-600 leading-relaxed">{product.howItWorks}</p>
            </div>
          </div>
        </Container>
      </section>

      {/* Use cases + Why choose */}
      <section className="py-12 bg-white border-t border-gray-100">
        <Container className="max-w-4xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <div>
              <h2 className="font-heading text-2xl font-black uppercase text-navy mb-6">
                Ideal For
              </h2>
              <ul className="space-y-3">
                {product.useCases.map((use) => (
                  <li key={use} className="flex items-start gap-3 text-gray-700">
                    <span className="text-red mt-0.5 flex-shrink-0 font-bold">✓</span>
                    {use}
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-navy text-white rounded-2xl p-8">
              <h2 className="font-heading text-xl font-black uppercase mb-4">
                Why Choose {product.name}?
              </h2>
              <p className="text-gray-300 leading-relaxed">{product.whyChoose}</p>
              {product.blogLink && (
                <Link
                  href={product.blogLink.href}
                  className="inline-block mt-6 text-red font-bold text-sm hover:text-white transition-colors underline underline-offset-4"
                >
                  {product.blogLink.label} →
                </Link>
              )}
            </div>
          </div>
        </Container>
      </section>

      {/* Application guide */}
      <section className="py-12 bg-gray-50 border-t border-gray-100">
        <Container className="max-w-3xl">
          <h2 className="font-heading text-2xl font-black uppercase text-navy mb-8 text-center">
            Application Guide
          </h2>
          <ol className="space-y-4">
            {product.applicationGuide.map((step, i) => (
              <li key={i} className="flex items-start gap-4 bg-white rounded-xl p-4 border border-gray-100">
                <span className="bg-red text-white font-black text-sm w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0">
                  {i + 1}
                </span>
                <span className="text-gray-700 leading-relaxed pt-1">{step}</span>
              </li>
            ))}
          </ol>
          <div className="mt-6 bg-amber-50 border border-amber-200 rounded-xl p-5 text-sm text-amber-800">
            <strong>Safety Note:</strong> {product.safetyNotes}
          </div>
        </Container>
      </section>

      {/* Reviews */}
      <section className="py-12 bg-white border-t border-gray-100">
        <Container className="max-w-4xl">
          <div className="flex items-center justify-between mb-8">
            <h2 className="font-heading text-2xl font-black uppercase text-navy">
              Customer Reviews
            </h2>
            <div className="flex items-center gap-2">
              <StarRating rating={Math.round(parseFloat(avgRating))} />
              <span className="text-lg font-black text-navy">{avgRating}</span>
              <span className="text-gray-400 text-sm">/ 5</span>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {product.reviews.map((review) => (
              <div key={review.name} className="bg-gray-50 rounded-2xl p-6 border border-gray-100">
                <StarRating rating={review.rating} />
                <p className="text-gray-700 leading-relaxed mt-4 mb-5 text-sm">
                  &ldquo;{review.text}&rdquo;
                </p>
                <div className="border-t border-gray-200 pt-4">
                  <div className="font-bold text-navy text-sm">{review.name}</div>
                  <div className="text-gray-400 text-xs mt-0.5">{review.location} · {review.date}</div>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* FAQ */}
      <section className="py-12 bg-gray-50 border-t border-gray-100">
        <Container className="max-w-3xl">
          <h2 className="font-heading text-2xl font-black uppercase text-navy mb-8 text-center">
            Frequently Asked Questions
          </h2>
          <div className="space-y-4">
            {product.faqs.map((faq) => (
              <div key={faq.q} className="bg-white rounded-xl border border-gray-100 p-6">
                <h3 className="font-bold text-navy mb-3">{faq.q}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Related products */}
      {related.length > 0 && (
        <section className="py-12 bg-white border-t border-gray-100">
          <Container>
            <h2 className="font-heading text-2xl font-black uppercase text-navy mb-8 text-center">
              You Might Also Consider
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {related.map((rel) => (
                <Link
                  key={rel.slug}
                  href={`/shop/${rel.slug}`}
                  className="bg-gray-50 rounded-2xl border border-gray-100 hover:border-red hover:shadow-md transition-all group overflow-hidden"
                >
                  <div className="relative h-40 bg-white flex items-center justify-center p-4">
                    <Image
                      src={rel.image}
                      alt={rel.name}
                      fill
                      className="object-contain p-4"
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />
                  </div>
                  <div className="p-5">
                    <span className={`${rel.badgeColor} text-white text-xs font-bold uppercase tracking-wider px-2 py-0.5 rounded-full`}>
                      {rel.category}
                    </span>
                    <h3 className="font-heading font-black uppercase text-navy group-hover:text-red transition-colors mt-2 mb-1">
                      {rel.name}
                    </h3>
                    <p className="text-sm text-gray-500 mb-3">{rel.activeIngredient}</p>
                    <span className="text-red font-black text-xl font-heading">
                      KES {rel.price.toLocaleString()}
                    </span>
                  </div>
                </Link>
              ))}
            </div>
            <div className="text-center mt-8">
              <Link
                href="/shop"
                className="border-2 border-navy text-navy font-bold uppercase px-8 py-3 rounded-full text-sm hover:bg-navy hover:text-white transition-colors"
              >
                View All Products
              </Link>
            </div>
          </Container>
        </section>
      )}

      {/* Final CTA */}
      <section className="py-14 bg-red text-white text-center">
        <Container className="max-w-2xl">
          <h2 className="font-heading text-3xl font-black uppercase mb-4">
            Ready to Order {product.name}?
          </h2>
          <p className="text-white/80 mb-8">
            WhatsApp us on <strong>0710 907 628</strong> to place your order. We will confirm
            availability, advise on quantity, and arrange delivery to your location.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={`https://wa.me/254710907628?text=Hi%20Pestraid%20Kenya%2C%20I%20would%20like%20to%20order%20${encodeURIComponent(product.name)}%20(KES%20${product.price.toLocaleString()}).%20Please%20confirm%20availability%20and%20delivery%20options.`}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-whatsapp text-white font-bold uppercase px-8 py-3.5 rounded-full text-sm hover:bg-whatsapp-dark transition-colors shadow-lg flex items-center gap-2"
            >
              <WhatsAppIcon className="w-5 h-5 flex-shrink-0" />
              WhatsApp Order Now
            </a>
            <Link
              href="/shop"
              className="border-2 border-white text-white font-bold uppercase px-8 py-3.5 rounded-full text-sm hover:bg-white hover:text-red transition-colors"
            >
              Back to Shop
            </Link>
          </div>
        </Container>
      </section>
    </>
  );
}
