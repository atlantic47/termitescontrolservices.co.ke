import Container from "@/components/Container";
import Link from "next/link";
import { getAllPostSlugs, getPostData } from "@/lib/markdown";
import { notFound } from "next/navigation";

export async function generateStaticParams() {
  const paths = getAllPostSlugs();
  return paths;
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const postData = await getPostData(slug);
  
  if (!postData) return { title: "Post Not Found" };

  return {
    title: `${postData.title} | Termite Control Blog Kenya`,
    description: postData.excerpt,
  };
}

export default async function Post({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const postData = await getPostData(slug);
  
  if (!postData) return notFound();

  return (
    <div className="py-20 bg-white">
      <Container className="max-w-4xl">
        <article className="bg-white rounded-2xl md:p-12">
           <header className="mb-10 border-b border-gray-100 pb-8 text-center">
              <span className="text-red font-bold uppercase tracking-widest text-sm mb-4 block">Termite Insights</span>
              <h1 className="font-heading text-3xl md:text-5xl font-black uppercase tracking-tight text-navy mb-6 leading-tight">
                 {postData.title}
              </h1>
              <div className="text-gray-500 font-medium">
                 Published on {new Date(postData.date).toLocaleDateString('en-KE', { year: 'numeric', month: 'long', day: 'numeric' })}
              </div>
           </header>

           {/* Markdown Content Block */}
           <div 
             className="prose prose-lg prose-blue max-w-none prose-headings:font-heading prose-headings:uppercase prose-headings:text-navy prose-h2:text-3xl prose-h3:text-2xl prose-a:text-red prose-a:font-bold prose-a:no-underline hover:prose-a:underline"
             dangerouslySetInnerHTML={{ __html: postData.contentHtml }} 
           />

           <div className="mt-16 pt-8 border-t border-gray-200">
              <div className="bg-gray-50 rounded-xl p-8 border border-gray-100">
                 <h3 className="font-heading text-xl font-bold uppercase text-navy mb-4">Need Professional Help?</h3>
                 <p className="text-gray-600 mb-6">
                    If you are dealing with termites or suspect an infestation in Kenya, our experts are ready to assist. Contact us for specialized termite solutions, or for general pest control like rodents and roaches, consider our partners at <a href="https://pestraid.co.ke/" target="_blank" rel="noopener noreferrer" className="text-red font-bold hover:underline">Pestraid Kenya</a>.
                 </p>
                 <div className="flex gap-4">
                    <Link href="/contact" className="bg-red text-white py-3 px-6 rounded-full font-bold uppercase text-sm hover:bg-navy transition-colors">
                       Contact Us Now
                    </Link>
                    <Link href="/services" className="border-2 border-navy text-navy py-3 px-6 rounded-full font-bold uppercase text-sm hover:bg-navy hover:text-white transition-colors">
                       View Services
                    </Link>
                 </div>
              </div>
           </div>
        </article>

        <div className="mt-12 text-center">
           <Link href="/blog" className="text-navy font-bold hover:text-red uppercase tracking-wider text-sm flex justify-center items-center">
             &larr; Back to all articles
           </Link>
        </div>
      </Container>
    </div>
  );
}
