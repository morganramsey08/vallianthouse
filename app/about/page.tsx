import './style.scss';

export default function AboutPage() {
  return (
    <>
      <main className="mx-auto max-w-7xl px-6 py-16">
        {/* Top Section */}
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Video */}
          <div className="video-wrapper">
            <iframe
              src="https://player.vimeo.com/video/1112031379?h=314861fea8"
              allow="autoplay; fullscreen;"
              allowFullScreen
              height="100%"
              title="Valliant House Overview"
            />
          </div>

          {/* Copy */}
          <div>
            <h2 className="text-2xl font-semibold mb-4">
              About Valliant House
            </h2>

            <p className="text-gray-600 mb-4">
              For over two decades, Valliant House has been dedicated to helping
              individuals overcome addiction and establish a foundation for
              long-term recovery. With more than 14,000 patients served, our
              experienced team understands the complexities of addiction and
              provides compassionate, evidence-based care.
            </p>

            <p className="text-gray-600 mb-6">
              Our 60-day program is designed to support each individual through
              every stage of recovery — from stabilization to reintegration —
              ensuring they leave with practical tools, structure, and ongoing
              support.
            </p>

            <div className="grid grid-cols-2 gap-6 text-sm">
              <div>
                <p className="font-semibold">Group Therapy</p>
                <p className="text-gray-500">Available at all locations</p>
              </div>
              <div>
                <p className="font-semibold">Transportation</p>
                <p className="text-gray-500">To detox and meetings</p>
              </div>
              <div>
                <p className="font-semibold">Sober Living</p>
                <p className="text-gray-500">Placement assistance</p>
              </div>
              <div>
                <p className="font-semibold">Job Assistance</p>
                <p className="text-gray-500">Employment readiness support</p>
              </div>
            </div>
          </div>
        </section>

        {/* Bottom Auto Content */}
        <section className="mt-24 grid grid-cols-1 md:grid-cols-3 gap-12 bg-gray-100 p-12 rounded-lg">
          <div>
            <h3 className="font-semibold mb-3">Our Philosophy</h3>
            <p className="text-gray-600 text-sm">
              Recovery is not a one-size-fits-all journey. We believe in
              individualized treatment plans that respect personal experiences
              while promoting accountability, community, and growth.
            </p>
          </div>

          <div>
            <h3 className="font-semibold mb-3">Continuum of Care</h3>
            <p className="text-gray-600 text-sm">
              Our services extend beyond treatment. Aftercare planning, sober
              housing placement, and continued support help reduce relapse and
              create sustainable success.
            </p>
          </div>

          <div>
            <h3 className="font-semibold mb-3">A Safe Environment</h3>
            <p className="text-gray-600 text-sm">
              Each Valliant House location provides a structured, respectful
              environment designed to foster healing, responsibility, and
              long-term stability.
            </p>
          </div>
        </section>
      </main>
    </>
  );
}
