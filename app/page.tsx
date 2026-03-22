import Container from "@/components/Container";
import Link from "next/link";
import Image from "next/image";
import { CheckCircle, AlertTriangle, ShieldCheck, Mail, Phone } from "lucide-react";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* 
        HERO SECTION
        1: # Reliable Termite Control Services in Kenya
      */}
      <section className="relative bg-navy text-white overflow-hidden py-32 lg:py-48">
        <div className="absolute inset-0 bg-gradient-to-r from-navy via-navy/90 to-transparent z-10" />
        <div 
          className="absolute inset-0 bg-cover bg-center z-0 opacity-40 mix-blend-overlay"
          style={{ backgroundImage: "url('https://storage.googleapis.com/48877118-7272-4a4d-b302-0465d8aa4548/7c0a2c4a-a634-4054-b24b-e945f97660ec/2290e11a-45e5-4a16-946c-3a9a0de19c51.jpg')" }}
        />
        <Container className="relative z-20 flex flex-col md:flex-row items-center">
          <div className="w-full md:w-3/4 pr-0">
            <h1 className="font-heading text-4xl md:text-5xl lg:text-7xl font-black uppercase tracking-tighter leading-tight mb-6 text-white">
              RELIABLE TERMITE<br/>CONTROL SERVICES<br/><span className="text-red">IN KENYA</span>
            </h1>
            <div className="text-gray-300 text-lg mb-8 max-w-2xl font-medium leading-relaxed space-y-4">
              <p>Wood-boring insects are a big threat to your property. They can damage your building without you even realizing it. Our team provides <em>comprehensive solutions</em> to stop these pests.</p>
              <p>Getting expert termite control in Kenya is key to protecting your building. We use top-notch equipment and proven methods to find and remove every colony. You can count on our expertise to keep your property safe for years.</p>
              <p>For top <Link href="https://pestraid.co.ke/" className="text-white underline font-bold" target="_blank">Pestraid</Link> help, call us today at 0710907628. Or email sales@pestraid.co.ke to learn more. We're ready to help you protect your home with quality care.</p>
            </div>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <Link href="/contact" className="bg-red text-white px-8 py-3.5 rounded-full font-bold uppercase text-sm hover:bg-red/90 transition-colors text-center shadow-lg">
                Contact Us
              </Link>
              <Link href="/services" className="border-2 border-white text-white px-8 py-3.5 rounded-full font-bold uppercase text-sm hover:bg-white hover:text-navy transition-colors text-center">
                Read More
              </Link>
            </div>
          </div>
        </Container>
      </section>

      {/* KEY TAKEAWAYS LIST */}
      <section className="py-12 bg-red text-white">
         <Container>
            <h3 className="font-heading text-2xl font-bold uppercase mb-6 text-center">Key Takeaways</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
               <div className="bg-white/10 p-6 rounded-lg text-sm font-medium flex items-start">
                  <CheckCircle className="h-5 w-5 mr-3 flex-shrink-0" />
                  Defend your building from silent structural damage immediately.
               </div>
               <div className="bg-white/10 p-6 rounded-lg text-sm font-medium flex items-start">
                  <ShieldCheck className="h-5 w-5 mr-3 flex-shrink-0" />
                  Access professional detection tools and effective removal methods.
               </div>
               <div className="bg-white/10 p-6 rounded-lg text-sm font-medium flex items-start">
                  <Phone className="h-5 w-5 mr-3 flex-shrink-0" />
                  Call 0710907628 to speak with an experienced specialist.
               </div>
               <div className="bg-white/10 p-6 rounded-lg text-sm font-medium flex items-start">
                  <AlertTriangle className="h-5 w-5 mr-3 flex-shrink-0" />
                  Shield your local property investment from expensive future repairs.
               </div>
               <div className="bg-white/10 p-6 rounded-lg text-sm font-medium flex items-start lg:col-span-2">
                  <Mail className="h-5 w-5 mr-3 flex-shrink-0" />
                  Email our team today to schedule a detailed home inspection.
               </div>
            </div>
         </Container>
      </section>

      {/* SECTION: Understanding the Threat of Termites */}
      <section className="py-24 bg-white relative">
        <Container>
          <div className="text-center mb-16">
            <h2 className="font-heading text-3xl md:text-5xl font-black uppercase tracking-tight text-navy mb-6">
              Understanding the Threat of Termites in Kenyan Homes
            </h2>
            <div className="max-w-3xl mx-auto text-gray-600 text-lg space-y-4">
               <p>Termites are a big problem in Kenya, damaging homes and buildings. At <strong><Link href="https://pestraid.co.ke/" className="text-red font-bold hover:underline" target="_blank">Pestraid Kenya</Link></strong>, we teach homeowners about termite risks. This knowledge helps prevent and manage termite damage.</p>
               <p>Termites can hide for a long time before damage is seen. Knowing the common termite species in Kenya is key. This knowledge helps us fight them early.</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-light rounded-xl overflow-hidden shadow-sm group hover:shadow-xl transition-shadow border border-gray-border p-8 border-t-4 border-t-navy">
                <h3 className="font-heading text-xl font-bold uppercase mb-4 text-navy">Identifying Common Termite Species in Kenya</h3>
                <div className="text-gray-600 space-y-4 text-sm">
                   <p>Kenya has many termite types, with <strong>subterranean termites</strong> being the most harmful. <strong>Subterranean termites</strong> damage wood and cellulose materials a lot.</p>
                   <p>Drywood and dampwood termites also exist in Kenya. Each type has its own habits. Knowing the species helps us choose the right treatment.</p>
                </div>
            </div>
            
            <div className="bg-gray-light rounded-xl overflow-hidden shadow-sm group hover:shadow-xl transition-shadow border border-gray-border p-8 border-t-4 border-t-red">
                <h3 className="font-heading text-xl font-bold uppercase mb-4 text-navy">The Structural Damage Caused by Subterranean Termites</h3>
                <div className="text-gray-600 space-y-4 text-sm">
                   <p><strong>Subterranean termites</strong> can seriously damage buildings. They eat wood and weaken structures.</p>
                   <p>The damage from <strong>subterranean termites</strong> can be huge. <em>Regular inspections</em> are key to catching them early. This saves money on repairs.</p>
                </div>
            </div>

            <div className="bg-gray-light rounded-xl overflow-hidden shadow-sm group hover:shadow-xl transition-shadow border border-gray-border p-8 border-t-4 border-t-navy">
                <h3 className="font-heading text-xl font-bold uppercase mb-4 text-navy">Why Kenyan Climate Conditions Favor Termite Infestations</h3>
                <div className="text-gray-600 space-y-4 text-sm">
                   <p>Kenya's climate is perfect for termites. The warm weather and humidity let them grow well.</p>
                   <p>Knowing how climate affects termites helps us prevent them. Keeping homes dry can keep termites away.</p>
                </div>
            </div>
          </div>
        </Container>
      </section>

      {/* SECTION: Professional Termite Control Service By Pestraid Kenya */}
      <section className="py-24 bg-gray-light relative border-t border-b border-gray-200">
         <div className="absolute top-0 right-0 -mt-24 -mr-24 w-96 h-96 bg-gray-200 rounded-full opacity-50 blur-3xl" />
         <Container className="relative z-10">
            <div className="bg-white p-10 md:p-16 rounded-2xl shadow-xl border-l-8 border-red flex flex-col mb-16">
               <h2 className="font-heading text-3xl md:text-5xl font-black uppercase tracking-tight text-navy mb-6">
                 Professional Termite Control Service By Pestraid Kenya
               </h2>
               <p className="text-gray-600 text-lg mb-8">
                  <strong><Link href="https://pestraid.co.ke/" className="text-red font-bold hover:underline" target="_blank">Pestraid Kenya</Link></strong> is a leader in termite control. We protect your property from termite damage. Our methods ensure termite problems are solved, reducing future risks.
               </p>

               <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                 <div>
                    <h3 className="font-heading text-2xl font-bold uppercase text-navy mb-4">Our Approach to Integrated Pest Management</h3>
                    <div className="text-gray-600 space-y-4 mb-6">
                       <p>At <strong><Link href="https://pestraid.co.ke/" className="text-red hover:underline" target="_blank">Pestraid Kenya</Link></strong>, we use an <strong>integrated pest management (IPM) approach</strong>. This method combines different strategies to manage termites. We identify the termite type, assess the infestation, and use targeted treatments to get rid of the colony.</p>
                       <p>Our IPM strategy includes:</p>
                       <ul className="space-y-2 list-disc pl-5 font-medium text-gray-700">
                          <li>Conducting thorough inspections to detect termite activity</li>
                          <li>Implementing exclusion techniques to prevent re-infestation</li>
                          <li>Using a combination of chemical and baiting systems for effective termite control</li>
                          <li>Monitoring treated areas to ensure the termite population is fully eliminated</li>
                       </ul>
                    </div>
                 </div>

                 <div>
                    <h3 className="font-heading text-2xl font-bold uppercase text-navy mb-4">Why DIY Methods Often Fail Against Termite Colonies</h3>
                    <div className="text-gray-600 space-y-4 mb-6">
                       <p>DIY termite control often doesn't work because it doesn't tackle the root of the problem. Termites live in complex colonies. DIY methods can't reach and eliminate the whole colony.</p>
                       <p><em>Common reasons for DIY failure include:</em></p>
                       <div className="overflow-x-auto">
                         <table className="w-full text-sm text-left border-collapse bg-gray-50 rounded-lg overflow-hidden">
                           <thead className="bg-navy text-white uppercase font-bold text-xs">
                             <tr>
                               <th className="px-4 py-3">Reason</th>
                               <th className="px-4 py-3">Description</th>
                             </tr>
                           </thead>
                           <tbody className="divide-y divide-gray-200">
                             <tr><td className="px-4 py-3 font-bold">Inadequate diagnosis</td><td className="px-4 py-3">Failing to correctly identify the termite species or extent of infestation</td></tr>
                             <tr><td className="px-4 py-3 font-bold">Insufficient treatment</td><td className="px-4 py-3">Not applying enough treatment to reach the entire colony</td></tr>
                             <tr><td className="px-4 py-3 font-bold">Lack of follow-up</td><td className="px-4 py-3">Not monitoring the treated area for signs of continued activity</td></tr>
                           </tbody>
                         </table>
                       </div>
                    </div>
                 </div>
               </div>
               
               <div className="mt-8 pt-8 border-t border-gray-100">
                 <h3 className="font-heading text-2xl font-bold uppercase text-navy mb-4">The Importance of Early Detection and Professional Inspection</h3>
                 <div className="text-gray-600 space-y-4">
                    <p>Early detection is key to preventing major termite damage. A <strong>professional termite inspection</strong> can spot termite activity early. This allows for quick action to prevent damage.</p>
                    <p><strong>Benefits of professional inspection include:</strong></p>
                    <ul className="space-y-2 list-disc pl-5 font-medium text-gray-700">
                        <li>Accurate identification of termite species and extent of infestation</li>
                        <li>Targeted treatment plans to eliminate the termite colony</li>
                        <li>Prevention of future infestations through exclusion techniques and monitoring</li>
                    </ul>
                 </div>
               </div>
            </div>
         </Container>
      </section>

      {/* CONTINUATION: Preparing Your Property, Step-by-Step, Soil Treatment, Baiting, Wooden Structures */}
      <section className="py-24 bg-white">
        <Container>
          <div className="space-y-20 max-w-5xl mx-auto">
             
             {/* Preparing Your Property */}
             <div>
                <h2 className="font-heading text-3xl font-black uppercase text-navy border-b-4 border-red pb-3 mb-6 inline-block">Preparing Your Property for a Professional Termite Inspection</h2>
                <div className="text-gray-600 space-y-4 mb-8">
                   <p>To get ready for a termite inspection, there are a few steps you can take. At <Link href="https://pestraid.co.ke/" className="text-red font-bold hover:underline" target="_blank">Pestraid Kenya</Link>, we know a well-prepared property is key for our team to do a thorough check. Clearing access points, documenting termite signs, and following safety rules can make the inspection smoother.</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                   <div className="bg-gray-50 p-6 rounded-lg text-sm text-gray-700">
                      <h3 className="font-heading text-lg font-bold uppercase text-navy mb-3">Clearing Access Points Around Your Foundation</h3>
                      <p>It's important to clear the areas around your foundation for a termite check. <strong>Remove any debris, vegetation, or obstructions</strong> that might block our access. This means clearing clutter, moving furniture away from walls, and trimming plants or trees touching your home.</p>
                      <p className="mt-2">This helps our experts check these areas well for termite signs like <strong>mud tubes</strong> or damaged wood. It's key to find where termites might be entering and how much risk they pose to your property.</p>
                   </div>
                   <div className="bg-gray-50 p-6 rounded-lg text-sm text-gray-700">
                      <h3 className="font-heading text-lg font-bold uppercase text-navy mb-3">Documenting Signs of Activity for Our Technicians</h3>
                      <p>Noting any termite signs you've seen can really help us. <em>Write down any mud tubes, discarded wings, or damaged wood</em> you've noticed, and tell our team about it. This helps us focus our check and find termite colonies more easily.</p>
                      <p className="mt-2">Together, we can better understand the termite problem on your property. Then, we can make a plan to tackle any issues we find.</p>
                   </div>
                   <div className="bg-gray-50 p-6 rounded-lg text-sm text-gray-700">
                      <h3 className="font-heading text-lg font-bold uppercase text-navy mb-3">Safety Precautions for Residents During the Assessment</h3>
                      <p>During the termite check, we make sure your family and pets are safe. To keep things safe and smooth, please <strong>keep children and pets away from the inspection areas</strong>. Also, let us know about any safety worries you have.</p>
                      <p className="mt-2">Our team follows strict safety rules during inspections. This includes wearing protective gear and using special equipment. These steps help us avoid risks and do a successful check.</p>
                   </div>
                </div>
             </div>

             {/* Step-by-Step Guide */}
             <div className="bg-navy text-white p-10 md:p-16 rounded-2xl relative overflow-hidden">
                <div className="absolute -top-24 -right-24 text-white/5">
                   <ShieldCheck className="w-96 h-96" />
                </div>
                <h2 className="font-heading text-3xl font-black uppercase border-b-4 border-red pb-3 mb-6 inline-block relative z-10">Step-by-Step Guide to Our Termite Treatment Process</h2>
                <div className="text-gray-300 space-y-4 mb-10 relative z-10">
                   <p>Effective <strong>termite management</strong> starts with a detailed treatment process. At <Link href="https://pestraid.co.ke/" className="text-white underline font-bold" target="_blank">Pestraid Kenya</Link>, we cover every part of termite infestation. This ensures a complete solution.</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative z-10">
                   <div>
                      <h3 className="font-heading text-lg font-bold uppercase text-red mb-3">1. Conducting a Thorough Site Survey</h3>
                      <p className="text-sm text-gray-400">Our termite treatment begins with a detailed <strong>site survey</strong>. We inspect your property to find out how bad the termite problem is. Our experts look for signs like <strong>mud tubes</strong>, discarded wings, and damaged wood. <strong>They use special tools to find termites in hidden spots.</strong></p>
                   </div>
                   <div>
                      <h3 className="font-heading text-lg font-bold uppercase text-red mb-3">2. Selecting the Appropriate Chemical or Baiting System</h3>
                      <p className="text-sm text-gray-400">After the <strong>site survey</strong>, we choose the best treatment. This could be <strong>chemical barriers</strong> or a <strong>termite baiting system</strong>. <em>We consider how bad the infestation is, the type of termites, and your property's design.</em></p>
                      <ul className="list-disc pl-5 mt-2 text-sm text-gray-400 space-y-1">
                        <li><strong>Chemical barriers</strong> stop termites from getting in by treating the area around your property.</li>
                        <li><strong>Termite baiting systems</strong> use <strong>bait stations</strong> to attract and kill termites.</li>
                      </ul>
                   </div>
                   <div>
                      <h3 className="font-heading text-lg font-bold uppercase text-red mb-3">3. Executing the Application with Precision and Care</h3>
                      <p className="text-sm text-gray-400">After picking the treatment, our team applies it carefully. They follow the manufacturer's instructions and best practices. <strong>We make sure the treatment works well without harming the environment. We also keep people and pets safe during the process.</strong></p>
                   </div>
                </div>
             </div>

             {/* Implementing Soil Treatment */}
             <div>
                <h2 className="font-heading text-3xl font-black uppercase text-navy border-b-4 border-red pb-3 mb-6 inline-block">Implementing Soil Treatment Barriers for Long-Term Protection</h2>
                <div className="text-gray-600 space-y-6">
                   <p><strong>Soil treatment barriers</strong> are key in stopping termites from damaging homes and businesses in Kenya. They act as a shield, keeping termites away from buildings. This stops them from causing harm.</p>
                   
                   <h3 className="font-heading text-xl font-bold uppercase text-navy">How Chemical Barriers Prevent Termite Entry</h3>
                   <p><strong>Chemical barriers</strong> are a big part of our termite fight. We apply termiticides around and under buildings. This creates a safe zone that termites can't cross. The termiticide we use is safe for people and the environment. It keeps termites away, protecting the building.</p>

                   <h3 className="font-heading text-xl font-bold uppercase text-navy">The Role of Trenching and Rodding in Soil Treatment</h3>
                   <p>Trenching and rodding help us apply termiticide well. Trenching digs a shallow trench around buildings. Rodding drills holes and injects termiticide into the soil. Both methods make sure the termiticide reaches the soil. Our team knows how to do both trenching and rodding. We pick the best method based on the property and termite problem.</p>

                   <h3 className="font-heading text-xl font-bold uppercase text-navy">Ensuring Environmental Safety During Chemical Application</h3>
                   <p>We care a lot about the environment when using chemicals. Our team follows strict rules to avoid harming the environment. We use the least amount of termiticide needed and apply it carefully. We also think about the soil and local plants when choosing termiticides. This makes sure our methods are safe for the environment.</p>

                   <div className="overflow-x-auto my-6">
                      <table className="w-full text-sm text-left border-collapse border border-gray-200">
                        <thead className="bg-gray-100 uppercase font-bold text-navy">
                          <tr>
                            <th className="px-4 py-3 border border-gray-200">Application Method</th>
                            <th className="px-4 py-3 border border-gray-200">Description</th>
                            <th className="px-4 py-3 border border-gray-200">Environmental Considerations</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                             <td className="px-4 py-3 border border-gray-200 font-bold">Trenching</td>
                             <td className="px-4 py-3 border border-gray-200">Involves digging a shallow trench around the perimeter and applying termiticide.</td>
                             <td className="px-4 py-3 border border-gray-200">Minimizes soil disturbance and risk of runoff.</td>
                          </tr>
                          <tr>
                             <td className="px-4 py-3 border border-gray-200 font-bold">Rodding</td>
                             <td className="px-4 py-3 border border-gray-200">Involves drilling holes around the structure and injecting termiticide into the soil.</td>
                             <td className="px-4 py-3 border border-gray-200">Reduces surface disruption and targets termite activity below ground.</td>
                          </tr>
                        </tbody>
                      </table>
                   </div>

                   <blockquote className="bg-gray-light border-l-4 border-red p-6 text-gray-700 italic font-medium my-6 shadow-sm">
                      "The key to effective termite control is creating a complete barrier that stops termites from entering. Our <strong>soil treatment barriers</strong> offer long-term protection for your property."
                   </blockquote>
                   
                   <p><strong>Soil treatment barriers</strong> give our clients lasting protection against termites. Our detailed plan makes sure termites are kept away for good.</p>
                </div>
             </div>

             {/* Baiting Systems & Wooden Structures */}
             <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                <div>
                  <h2 className="font-heading text-2xl font-black uppercase text-navy border-b-4 border-red pb-3 mb-6 inline-block">Utilizing Advanced Baiting Systems for Colony Elimination</h2>
                  <div className="text-gray-600 space-y-4 text-sm mt-4">
                     <p>At <Link href="https://pestraid.co.ke/" className="text-red font-bold hover:underline" target="_blank">Pestraid</Link>, we use advanced <strong>termite baiting systems</strong> to get rid of termite colonies. This protects homes in Kenya. Our method targets the heart of the problem, giving long-term relief from termite damage.</p>
                     <h3 className="font-heading text-lg font-bold uppercase text-navy">How Bait Stations Disrupt the Termite Life Cycle</h3>
                     <p><strong>Bait stations</strong> are set up around homes to catch termites looking for food. Inside these stations, there's bait that termites eat and share with their colony. <strong>The bait is slow-acting</strong>, letting termites go back to their colony and share it with others, including the queen. This method makes sure the whole colony is hit, leading to its demise. Our team picks the right bait for the termite type and how bad the infestation is.</p>
                     <h3 className="font-heading text-lg font-bold uppercase text-navy">Monitoring and Replacing Bait for Continuous Control</h3>
                     <p>Our technicians keep an eye on the <strong>bait stations</strong>. <em>They check for termites and refill the bait when needed</em>. This ongoing check is key to keeping termites under control and stopping them from coming back. Our team knows how to spot termite signs and change the bait plan if needed. This way, we stay one step ahead of termites.</p>
                     <h3 className="font-heading text-lg font-bold uppercase text-navy">Advantages of Baiting Systems for Sensitive Environments</h3>
                     <p>Baiting systems are great for places where we don't want to use a lot of chemicals. <strong>They focus on termites</strong>, lowering the chance of harming other living things. Using baiting systems helps us control termites well while being kind to the environment. This is good for homes near water or in areas with delicate ecosystems.</p>
                  </div>
                  <div className="mt-6 aspect-video relative rounded-lg overflow-hidden shadow-lg border border-gray-200">
                     <Image 
                       src="https://storage.googleapis.com/48877118-7272-4a4d-b302-0465d8aa4548/7c0a2c4a-a634-4054-b24b-e945f97660ec/ea4f45ae-b04c-4e83-953e-ec4d955511cc.jpg"
                       alt="termite baiting systems"
                       fill
                       className="object-cover"
                     />
                  </div>
                </div>

                <div>
                  <h2 className="font-heading text-2xl font-black uppercase text-navy border-b-4 border-red pb-3 mb-6 inline-block">Protecting Wooden Structures and Furniture from Infestation</h2>
                  <div className="text-gray-600 space-y-4 text-sm mt-4">
                     <p>Termites are a big threat to wood in homes. It's important to take steps to stop them. They can damage wood a lot before you even notice. To keep your wood safe, use a few strategies. Apply <strong>wood preservatives</strong> to timber, watch for termite signs, and maintain your wood well.</p>
                     
                     <h3 className="font-heading text-lg font-bold uppercase text-navy">Applying Wood Preservatives to Vulnerable Timber</h3>
                     <p><strong>Wood preservatives</strong> help protect wood from termites. <strong>Borate-based preservatives</strong> are good against termites. You can use them when building or treating existing wood. When using preservatives, make sure to cover all at-risk areas. This includes floors, frames, and any other wood that termites might find.</p>
                     
                     <h3 className="font-heading text-lg font-bold uppercase text-navy">Identifying Early Warning Signs in Wooden Flooring and Frames</h3>
                     <p>Spotting termites early is key to avoiding big damage. Look for <em>mud tubes</em> on walls, floors, or ceilings. Also, watch for discarded wings near windows or doors. Check your wood floors and frames often. Look for damage like discoloration, sagging, or weak spots.</p>
                     
                     <h3 className="font-heading text-lg font-bold uppercase text-navy">Preventative Maintenance Tips for Homeowners</h3>
                     <p>Keeping wood safe is a big job. Keep firewood and cellulose away from your home. Also, control moisture and ensure good air flow.</p>
                     
                     <div className="overflow-x-auto mt-4">
                        <table className="w-full text-xs text-left border-collapse border border-gray-200">
                          <thead className="bg-gray-100 uppercase font-bold text-navy">
                            <tr>
                              <th className="px-3 py-2 border border-gray-200">Preventative Measure</th>
                              <th className="px-3 py-2 border border-gray-200">Description</th>
                              <th className="px-3 py-2 border border-gray-200">Benefit</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr><td className="px-3 py-2 border font-bold">Regular Inspections</td><td className="px-3 py-2 border">Check for termites and damage often.</td><td className="px-3 py-2 border">Find problems early.</td></tr>
                            <tr><td className="px-3 py-2 border font-bold"><strong>Wood Preservatives</strong></td><td className="px-3 py-2 border">Use preservatives on at-risk wood.</td><td className="px-3 py-2 border">Keep termites away.</td></tr>
                            <tr><td className="px-3 py-2 border font-bold">Moisture Control</td><td className="px-3 py-2 border">Keep moisture levels low.</td><td className="px-3 py-2 border">Make it hard for termites to thrive.</td></tr>
                          </tbody>
                        </table>
                     </div>
                     <p className="mt-2 text-navy font-bold">By following these steps, you can lower the chance of termites. This helps keep your wood safe and looking good.</p>
                  </div>
                </div>
             </div>

             {/* Risks During New Construction & Post-Treatment Maintenance */}
             <div>
                <h2 className="font-heading text-3xl font-black uppercase text-navy border-b-4 border-red pb-3 mb-6 block text-center">Construction, Maintenance & Common Mistakes</h2>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
                   {/* Col 1 */}
                   <div className="space-y-4 text-sm text-gray-600 bg-gray-50 p-6 rounded-xl border border-gray-200">
                      <h3 className="font-heading text-xl font-bold uppercase text-navy mb-4">Managing Termite Risks During New Construction Projects</h3>
                      <p>Starting a new construction project in Kenya means you must manage termite risks. Termites can damage buildings, making them unsafe and expensive to fix. It's key to use good <strong>termite risk management</strong> strategies during construction.</p>
                      <blockquote className="border-l-4 border-red pl-4 italic bg-white p-3 shadow-sm my-4">
                         "Termite risk management is not just about treating the soil; it's about creating a complete strategy. This includes pre-construction treatments, physical barriers, and working with contractors."
                      </blockquote>
                      <p>This approach helps protect buildings from termites from the beginning.</p>
                      
                      <h4 className="font-bold text-black mt-4">Pre-Construction Soil Treatment Protocols</h4>
                      <p><strong>Pre-construction soil treatment</strong> is a top way to fight termite risks. It treats the soil before building starts to block termites. <strong>Pre-construction soil treatment</strong> is a smart move to lower termite risks. We use special chemicals to treat the soil. This method is done carefully to cover the whole area. It helps keep buildings safe from termites and makes them last longer.</p>

                      <h4 className="font-bold text-black mt-4">Installing Physical Barriers During the Foundation Phase</h4>
                      <p>Soil treatment isn't the only thing. Installing physical barriers during foundation work is also key. Termite shields and mesh keep termites out of the building. These barriers are put in place during building. They fit well with the structure. This adds extra protection against termites.</p>

                      <h4 className="font-bold text-black mt-4">Collaborating with Contractors for Termite-Proof Building</h4>
                      <p>Working with contractors is important for termite-proof buildings. Our team teaches contractors about <strong>termite risk management</strong>. We show them how to stop termites. Together, we make sure buildings are safe from termites. This teamwork is key for making strong, termite-resistant buildings.</p>
                   </div>
                   
                   {/* Col 2 */}
                   <div className="space-y-4 text-sm text-gray-600 bg-gray-50 p-6 rounded-xl border border-gray-200">
                      <h3 className="font-heading text-xl font-bold uppercase text-navy mb-4">Post-Treatment Monitoring and Maintenance Strategies</h3>
                      <p>Effective <strong>termite management</strong> doesn't stop after treatment. It needs ongoing monitoring and maintenance. At <Link href="https://pestraid.co.ke/" className="text-red font-bold hover:underline" target="_blank">Pestraid Kenya</Link>, we know keeping your property safe is key.</p>
                      <p>We suggest a few steps to keep your home safe. These include regular checks, keeping your home's perimeter clear, and knowing what to do if termites come back.</p>

                      <h4 className="font-bold text-black mt-4">Scheduling Regular Follow-up Inspections</h4>
                      <p>Regular checks are key to catching termites early. We suggest doing these checks at least twice a year. The exact schedule depends on how bad the infestation was and the treatment used.</p>
                      <p>Our team will look closely at your home for termite signs. They'll check for <strong>mud tubes</strong>, discarded wings, and damaged wood. Finding problems early helps us fix them before they get worse.</p>

                      <h4 className="font-bold text-black mt-4">Maintaining a Termite-Free Perimeter Around Your Home</h4>
                      <p>Keeping your home's perimeter clear is vital to stop termites from coming back. This means no debris, woodpiles, or other cellulose materials around your home.</p>
                      <ul className="list-disc pl-5 mt-2 space-y-1">
                         <li>Clear debris and woodpiles from around your home.</li>
                         <li>Make sure your home doesn't collect moisture.</li>
                         <li>Keep trees and shrubs away from your home.</li>
                      </ul>
                      
                      <div className="mt-4 mb-4 relative rounded-md overflow-hidden shadow-sm aspect-video border border-gray-300">
                         <Image 
                           src="https://storage.googleapis.com/48877118-7272-4a4d-b302-0465d8aa4548/7c0a2c4a-a634-4054-b24b-e945f97660ec/8b7bc445-ca06-4081-b07c-2b3275fa5bc9.jpg"
                           alt="termite-free perimeter maintenance"
                           fill
                           className="object-cover"
                         />
                      </div>

                      <h4 className="font-bold text-black mt-4">What to Do If You Spot New Signs of Activity</h4>
                      <p>If you see termites, act fast. Call us at 0710907628 right away. We'll check it out and take action. Look out for these signs of termites:</p>
                      <ul className="list-disc pl-5 mt-2 space-y-1 text-xs">
                         <li><strong>Mud Tubes:</strong> Termites use mud tubes to travel to food.</li>
                         <li><strong>Discarded Wings:</strong> Termite wings are often found near entry points.</li>
                         <li><strong>Damaged Wood:</strong> Termites eat wood from the inside, leaving a thin layer.</li>
                      </ul>
                      <p className="mt-2 font-bold font-navy">Stay alert and proactive to lower termite risks. This way, you can protect your home and investment.</p>
                   </div>

                   {/* Col 3 */}
                   <div className="space-y-4 text-sm text-gray-600 bg-gray-50 p-6 rounded-xl border border-gray-200">
                      <h3 className="font-heading text-xl font-bold uppercase text-navy mb-4">Common Mistakes to Avoid When Dealing with Termites</h3>
                      <p>When dealing with termites, knowing common mistakes is key. Termites can damage structures a lot if not handled right. It's important to avoid these mistakes for effective termite control.</p>
                      <p>At <Link href="https://pestraid.co.ke/" className="text-red font-bold hover:underline" target="_blank">Pestraid Kenya</Link>, we've seen many homeowners make the same errors. Knowing these mistakes helps you deal with termites better. It ensures you protect your property well.</p>

                      <h4 className="font-bold text-black mt-4">Ignoring Small Mud Tubes and Discarded Wings</h4>
                      <p>Ignoring early signs of termites is a big mistake. Signs like <strong>mud tubes</strong> and <strong>discarded wings</strong> mean termites are around. Mud tubes show subterranean termites moving between their colonies and food.</p>
                      <ul className="list-disc pl-5 mt-2 space-y-1 text-xs">
                         <li>Mud tubes are made of soil, saliva, and feces. Termites use them to keep a humid environment.</li>
                         <li>Discarded wings are found near windows and doors after swarming. They're attracted to light.</li>
                      </ul>
                      <p>Ignoring these signs can lead to more damage. It's important to act fast and get professional help if you see these signs.</p>

                      <h4 className="font-bold text-black mt-4">Relying on Ineffective Over-the-Counter Sprays</h4>
                      <p>Another mistake is using <em>over-the-counter sprays</em> alone. These products might give temporary relief but don't solve the problem. They don't get rid of the termite colony.</p>
                      <p>Professional termite control services do more. They inspect, identify, and treat termites effectively. At Pestraid Kenya, we use advanced methods and products not available to everyone. This ensures a better solution.</p>

                      <h4 className="font-bold text-black mt-4">Delaying Professional Intervention After Initial Discovery</h4>
                      <p>Waiting too long to get professional help is a big mistake. The longer you wait, the more damage termites can do. Early action is key to controlling termites effectively.</p>
                      <ol className="list-decimal pl-5 mt-2 space-y-1 text-xs">
                         <li>When you find termite signs, call a professional right away.</li>
                         <li>Let them assess and suggest the best treatment.</li>
                         <li>Follow their advice for treatment and any further steps.</li>
                      </ol>
                      <p className="mt-2 font-bold">Avoiding these mistakes and getting professional help can save your property from termite damage. At Pestraid Kenya, we offer effective termite control solutions for your needs.</p>
                   </div>
                </div>
             </div>

             {/* Why Choose Pestraid & Frequently Addressed Concerns */}
             <div className="bg-navy p-10 md:p-16 rounded-2xl text-white shadow-xl relative overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 bg-red rounded-full opacity-10 -mr-20 -mt-20 pointer-events-none" />
                <h2 className="font-heading text-3xl font-black uppercase text-white border-b-4 border-red pb-3 mb-8 inline-block relative z-10">Why Choose Pestraid for Your Termite Management Needs</h2>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 relative z-10">
                   <div className="space-y-6">
                      <p className="text-gray-300">Choosing <Link href="https://pestraid.co.ke/" className="text-white hover:underline font-bold" target="_blank">Pestraid Kenya</Link> for termite control is a smart move. Our <strong>termite management</strong> services are designed to protect your property. They also give you peace of mind.</p>
                      
                      <div>
                         <h3 className="font-heading text-xl font-bold uppercase text-red mb-2">Our Commitment to Quality and Customer Satisfaction</h3>
                         <p className="text-sm text-gray-400">At Pestraid Kenya, we're <strong>committed to delivering high-quality termite management services</strong>. We know every property is different. So, we tailor our services to fit your specific needs.</p>
                         <p className="text-sm text-gray-400 mt-2">We focus on <strong>customer satisfaction</strong>. Our services are effective, convenient, and hassle-free. Our team provides <em>exceptional customer service</em> from start to finish.</p>
                      </div>

                      <div>
                         <h3 className="font-heading text-xl font-bold uppercase text-red mb-2">Expertise and Training of Our Pest Control Technicians</h3>
                         <p className="text-sm text-gray-400">Our technicians are <strong>highly trained and experienced</strong> in termite control. They keep up with the latest methods and technologies. This means we can offer effective and efficient solutions.</p>
                         <p className="text-sm text-gray-400 mt-2">We also invest in our technicians' ongoing education. This ensures they can handle complex termite infestations and find innovative solutions.</p>
                      </div>

                      <div>
                         <h3 className="font-heading text-xl font-bold uppercase text-red mb-2">How to Reach Us at 0710907628 or sales@pestraid.co.ke</h3>
                         <p className="text-sm text-gray-400">Dealing with a termite infestation? Want to schedule a consultation? We're here to help. Call us at <strong>0710907628</strong> or email <strong>sales@pestraid.co.ke</strong>. Our team is ready to solve your termite management needs quickly and effectively.</p>
                         <p className="text-sm text-gray-400 mt-2 font-bold text-white">We're excited to work with you to protect your property from termite damage.</p>
                      </div>
                   </div>

                   <div className="space-y-6 bg-white/5 p-8 rounded-xl border border-white/10">
                      <h2 className="font-heading text-2xl font-black uppercase text-white mb-2">Frequently Addressed Concerns Regarding Termite Control</h2>
                      <p className="text-sm text-gray-300 mb-6">Many concerns come up when dealing with termites. At Pestraid Kenya, we aim to be clear and open about our termite control. We want to solve your problems and keep your home safe.</p>
                      
                      <div>
                         <h3 className="font-heading text-lg font-bold uppercase text-red mb-2">Understanding the Duration of Treatment Effectiveness</h3>
                         <p className="text-sm text-gray-400">Homeowners often wonder how long our treatments last. Our methods are made to protect against termites for a long time. The length of protection depends on the treatment, the infestation's severity, and the environment. <strong>Our treatments can last from 5 to 10 years</strong>. This gives you peace of mind and keeps your home safe. It's important to check and maintain the treatment regularly.</p>
                      </div>

                      <div>
                         <h3 className="font-heading text-lg font-bold uppercase text-red mb-2">Safety of Our Methods for Pets and Family Members</h3>
                         <p className="text-sm text-gray-400">We prioritize the safety of our treatments. We use <em>environmentally friendly and safe treatments</em> to protect pets and family. Our technicians are trained to apply treatments safely. We also make sure you avoid treated areas. Our team will tell you how to stay safe after the treatment. This way, your family and pets can go back to normal without worry.</p>
                      </div>

                      <div>
                         <h3 className="font-heading text-lg font-bold uppercase text-red mb-2">Cost-Benefit Analysis of Professional Termite Services</h3>
                         <p className="text-sm text-gray-400 mb-3">Cost is a big worry for homeowners. But, think about the long-term savings. Termite damage can cost a lot to fix, but our services can prevent that.</p>
                         <table className="w-full text-xs text-left text-gray-300 border-collapse">
                            <thead>
                               <tr className="border-b border-gray-600">
                                  <th className="py-2">Service</th>
                                  <th className="py-2">Cost</th>
                                  <th className="py-2">Benefits</th>
                               </tr>
                            </thead>
                            <tbody>
                               <tr className="border-b border-gray-700">
                                  <td className="py-2">Initial Treatment</td>
                                  <td className="py-2">Variable</td>
                                  <td className="py-2">Effective termite elimination</td>
                               </tr>
                               <tr className="border-b border-gray-700">
                                  <td className="py-2">Follow-up Inspections</td>
                                  <td className="py-2">Regularly scheduled</td>
                                  <td className="py-2">Prevents re-infestation</td>
                               </tr>
                               <tr>
                                  <td className="py-2">Preventative Measures</td>
                                  <td className="py-2">Part of the service</td>
                                  <td className="py-2">Long-term protection</td>
                               </tr>
                            </tbody>
                         </table>
                         <p className="text-sm font-bold text-white mt-4">Investing in our termite control services can save you money. It's a smart way to protect your property from costly damage.</p>
                      </div>
                   </div>
                </div>
             </div>

             {/* Conclusion & FAQ */}
             <div>
                <div className="bg-gray-light p-10 md:p-16 rounded-2xl border-l-8 border-navy mb-16 shadow-lg">
                   <h2 className="font-heading text-3xl font-black uppercase text-navy mb-4">Conclusion</h2>
                   <div className="text-gray-600 space-y-4 text-lg">
                     <p>Protecting your property in Kenya from termites is key. At <strong><Link href="https://pestraid.co.ke/" className="text-red font-bold hover:underline" target="_blank">Pestraid Kenya</Link></strong>, we offer top-notch termite control services. These services are designed to keep your property safe from these pests for a long time.</p>
                     <p>Our team works hard to provide reliable termite control. We start with an inspection, then move on to treatment and monitoring after. We use the latest methods and tools to keep your property termite-free.</p>
                     <p>If you need reliable termite control services, call us at <strong>0710907628</strong>. We'll tell you more about our services and how we can help protect your property.</p>
                     <p>Choosing Pestraid Kenya means you're in good hands for termite management. We aim to meet your expectations with our termite control services.</p>
                   </div>
                </div>

                <h2 className="font-heading text-3xl font-black uppercase text-navy border-b-4 border-red pb-3 mb-8 text-center block max-w-sm mx-auto">FAQ</h2>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-sm">
                   <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm">
                      <h3 className="font-heading font-bold text-red uppercase mb-2">Why are termites considered a major threat to homes in Kenya?</h3>
                      <p className="text-gray-600">Kenya's climate is perfect for termites. These pests can damage your home's foundation and wood. At Pestraid Kenya, we say knowing this threat is key to protecting your home.</p>
                   </div>
                   <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm">
                      <h3 className="font-heading font-bold text-red uppercase mb-2">How does Pestraid Kenya approach termite management differently than DIY methods?</h3>
                      <p className="text-gray-600">We use a detailed <strong>Integrated Pest Management</strong> (IPM) plan. DIY methods can't reach the colony's heart. Our team focuses on finding and eliminating the colony with advanced tools.</p>
                   </div>
                   <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm">
                      <h3 className="font-heading font-bold text-red uppercase mb-2">What should I do to prepare my property before your technicians arrive for an inspection?</h3>
                      <p className="text-gray-600">Clear the area around your foundation and move items away from walls. Document any termite signs, like mud tubes. We'll tell you how to stay safe during the inspection.</p>
                   </div>
                   <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm">
                      <h3 className="font-heading font-bold text-red uppercase mb-2">What is involved in the professional termite treatment process?</h3>
                      <p className="text-gray-600">We start with a detailed <strong>site survey</strong> to find the infestation's extent. Then, we choose the best treatment method. We apply it carefully to protect your home.</p>
                   </div>
                   <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm">
                      <h3 className="font-heading font-bold text-red uppercase mb-2">How do soil treatment barriers provide long-term protection?</h3>
                      <p className="text-gray-600">We use trenching and rodding to apply termiticides in the ground. This creates a barrier that stops termites from reaching your home. We make sure it's safe for the environment.</p>
                   </div>
                   <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm">
                      <h3 className="font-heading font-bold text-red uppercase mb-2">When is a baiting system preferable over traditional liquid treatments?</h3>
                      <p className="text-gray-600">Baiting systems are better for places where chemicals are a concern. They disrupt termite life cycles, leading to colony collapse. We monitor and maintain the system for ongoing control.</p>
                   </div>
                   <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm">
                      <h3 className="font-heading font-bold text-red uppercase mb-2">Can you protect my home from termites during the construction phase?</h3>
                      <p className="text-gray-600">Yes, we recommend managing termite risks early. We treat the soil before construction and install barriers during foundation work. We work with contractors to keep your new home termite-proof.</p>
                   </div>
                   <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm">
                      <h3 className="font-heading font-bold text-red uppercase mb-2">How can I protect my wooden furniture and flooring from being destroyed?</h3>
                      <p className="text-gray-600">Apply wood preservatives to vulnerable timber. Watch for early signs of damage in wood floors and door frames. Regular checks and maintenance are key to keeping your furniture safe.</p>
                   </div>
                   <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm">
                      <h3 className="font-heading font-bold text-red uppercase mb-2">Are the termite control methods used by Pestraid Kenya safe for my family and pets?</h3>
                      <p className="text-gray-600">Absolutely. We prioritize your family's health. Our technicians are trained to apply products safely, ensuring they work without harming your loved ones or pets.</p>
                   </div>
                   <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm">
                      <h3 className="font-heading font-bold text-red uppercase mb-2">What should I do if I notice new signs of termite activity after a treatment?</h3>
                      <p className="text-gray-600">Contact us at 0710907628 if you see mud tubes or wood damage. Our treatments are long-lasting, but sometimes soil changes can happen. We offer monitoring and inspections to keep your home termite-free.</p>
                   </div>
                   <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm">
                      <h3 className="font-heading font-bold text-red uppercase mb-2">Why is it a mistake to delay professional intervention?</h3>
                      <p className="text-gray-600">Termites work all the time and can damage your home quickly. Ignoring signs or using ineffective sprays lets the problem grow. Getting help from <Link href="https://pestraid.co.ke/" className="text-navy font-bold hover:underline" target="_blank">Pestraid Kenya</Link> early saves you from costly repairs later.</p>
                   </div>
                   <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm">
                      <h3 className="font-heading font-bold text-red uppercase mb-2">How can I book a service or get a quote from Pestraid Kenya?</h3>
                      <p className="text-gray-600">Call us at 0710907628 or email sales@pestraid.co.ke. We offer site surveys, pre-construction treatments, and emergency services. We're ready to provide top termite control in Kenya.</p>
                   </div>
                </div>
             </div>

          </div>
        </Container>
      </section>
    </div>
  );
}
