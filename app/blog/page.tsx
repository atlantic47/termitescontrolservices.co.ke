import Container from "@/components/Container";
import Link from "next/link";
import { getSortedPostsData } from "@/lib/markdown";

export const metadata = {
  title: "Blog | Termite Control Education & News Kenya",
  description: "Read expert articles on termite control, prevention methods, costs, and extermination tips in Kenya.",
};

export default function BlogIndex() {
  const allPostsData = getSortedPostsData();

  return (
    <div className="py-24 bg-gray-50">
      <Container>
         <div className="text-center mb-16 max-w-3xl mx-auto">
            <h1 className="font-heading text-4xl md:text-5xl font-black uppercase text-navy tracking-tight mb-6">Termite Control Blog</h1>
            <p className="text-gray-600 text-lg">
              Expert advice, treatment tips, and the latest strategies to keep your property safe from devastating termite damage.
            </p>
         </div>

         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {allPostsData.map(({ slug, date, title, excerpt }) => (
              <div key={slug} className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-shadow border border-gray-100 flex flex-col">
                 <div className="p-8 flex flex-col flex-grow">
                    <span className="text-red text-xs font-bold uppercase tracking-wider mb-3">{new Date(date).toLocaleDateString('en-KE', { year: 'numeric', month: 'long', day: 'numeric' })}</span>
                    <h2 className="font-heading text-xl font-bold uppercase text-navy mb-4 leading-tight hover:text-red transition-colors">
                       <Link href={`/blog/${slug}`}>{title}</Link>
                    </h2>
                    <p className="text-gray-600 mb-6 flex-grow text-sm">
                       {excerpt}
                    </p>
                    <Link href={`/blog/${slug}`} className="inline-block border-t border-gray-100 pt-4 mt-auto text-red font-bold uppercase text-sm hover:text-navy transition-colors">
                       Read Article &rarr;
                    </Link>
                 </div>
              </div>
            ))}
         </div>
      </Container>
    </div>
  );
}
