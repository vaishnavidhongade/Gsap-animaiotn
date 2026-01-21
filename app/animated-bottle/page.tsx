import Image from "next/image";

export default function AnimatedBottle() {
  return (
    <div className="w-full bg-amber-100 text-amber-800">
      <nav className="h-16 w-full mx-auto max-w-7xl flex items-center justify-between">
        <Image
          src="/next.svg"
          alt="image"
          width={24}
          height={24}
          className="w-6 h-6"
        />

        <div className="flex gap-4 text-sm font-semibold text-amber-800">
          <a href="#">Home</a>
          <a href="#">Features</a>
          <a href="#">Product</a>
          <a href="#">Contact</a>
        </div>
      </nav>
      <main>
        {/* Hero Bottle Overlay Wrapper */}
        <div className="">
          <Image
            src="/assets/image.png"
            alt="Crimson Fermentation Bottle"
            className=""
            width={100}
            height={100}
          />
        </div>
        {/* Hero Section*/}
        <section className="hero vintage-hero">
          <div className="hero-content">
            {/* Decorative Stamp */}
            <Image
              src="/assets/stamp.png"
              alt="Crimson Fermentation Stamp"
              className=""
              width={100}
              height={100}
            />

            {/* Main Heading */}
            <div className="text-9xl font-bold text-center">
              <h1 className="">Crimson</h1>
              <h1 className="">Fermentation</h1>
            </div>
          </div>
        </section>
        {/* Introduction Section */}
        <section className="section-intro">
          <div className="intro-grid">
            {/* Left Side: Headings and Description */}
            <div className="intro-left">
              <p className="small-title">Our Selection</p>
              <h2 className="main-heading">The Heritage Line</h2>
              <p className="description">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic
                suscipit soluta tenetur voluptatibus libero dolorum.
              </p>
              <a href="#" className="cta-box">
                Explore All
              </a>
            </div>

            {/* Right Side: Ingredients List */}
            <div className="intro-right">
              <div className="ingredients-log">
                <h3 className="ingredients-title">Brewed With</h3>

                {/* Each Ingredient */}
                <div className="ingredient-item">
                  <div className="ingredient-qty">500ml</div>
                  <div className="ingredient-text">
                    <strong>Spring Water</strong>
                    <p>Pure glacier-sourced for clarity and smoothness.</p>
                  </div>
                </div>

                <div className="ingredient-item">
                  <div className="ingredient-qty">250g</div>
                  <div className="ingredient-text">
                    <strong>Organic Barley</strong>
                    <p>Locally malted for a rich, golden body.</p>
                  </div>
                </div>

                <div className="ingredient-item">
                  <div className="ingredient-qty">100g</div>
                  <div className="ingredient-text">
                    <strong>Wild Hops</strong>
                    <p>Foraged from mountain slopes, slow-dried.</p>
                  </div>
                </div>

                <div className="ingredient-item">
                  <div className="ingredient-qty">50g</div>
                  <div className="ingredient-text">
                    <strong>Roasted Oak</strong>
                    <p>Infused for warmth and oaky aroma.</p>
                  </div>
                </div>

                <div className="ingredient-item">
                  <div className="ingredient-qty">1%</div>
                  <div className="ingredient-text">
                    <strong>Natural Yeast</strong>
                    <p>Wild fermented, slow-aged for balance.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Timeline Section */}
        <section className="timeline-section">
          <h2 className="timeline-main-title">Our Timeline</h2>

          {/* First Timeline Entry */}
          <div className="timeline-entry">
            {/* Left Column: Date + Image */}
            <div className="timeline-left">
              <div className="timeline-date">1984</div>
              <img
                src="./first batch.png"
                alt="Vintage Brewery Photo"
                className="timeline-img"
              />
            </div>

            {/* Right Column: Story */}
            <div className="timeline-right">
              <h3 className="timeline-title">The First Batch</h3>
              <p className="timeline-description">
                Our journey began in a wooden barn nestled among oak trees. The
                first batch was brewed with hand-milled barley and patience.
              </p>
            </div>
          </div>

          {/* Second Timeline Entry */}
          <div className="timeline-entry">
            <div className="timeline-left">
              <div className="timeline-date">1989</div>
              <img
                src="./first batch.png"
                alt="Vintage Brewery Photo"
                className="timeline-img"
              />
            </div>

            <div className="timeline-right">
              <h3 className="timeline-title">The Fire Oak Revival</h3>
              <p className="timeline-description">
                A lightning storm sparked a fire that nearly ended our legacy.
                But from the ashes, we rebuilt — charred oak barrels, reclaimed
                tools, and a vow to never compromise the craft.
              </p>
            </div>
          </div>
        </section>
        {/* Social Sidebar (Fixed vertical navigation) */}
        <div style={{ "--border-height": "100px" } as React.CSSProperties}>
          <nav>
            {/* Instagram */}
            <a href="#" aria-label="Instagram">
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M7.75 2A5.75 5.75 0 0 0 2 7.75v8.5A5.75 5.75 0 0 0 7.75 22h8.5A5.75 5.75 0 0 0 22 16.25v-8.5A5.75 5.75 0 0 0 16.25 2h-8.5Zm.5 1.5h7.5a4.25 4.25 0 0 1 4.25 4.25v7.5a4.25 4.25 0 0 1-4.25 4.25h-7.5a4.25 4.25 0 0 1-4.25-4.25v-7.5a4.25 4.25 0 0 1 4.25-4.25Zm8.5 2.75a1.25 1.25 0 1 0 0 2.5 1.25 1.25 0 0 0 0-2.5Zm-5.25 1.5a4.5 4.5 0 1 0 0 9 4.5 4.5 0 0 0 0-9Z" />
              </svg>
            </a>

            {/* LinkedIn */}
            <a href="#" aria-label="LinkedIn">
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M19 3A2 2 0 0 1 21 5v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14Zm-3.75 7.25h-.08a2.11 2.11 0 0 0-1.92 1.18V10.5h-2.5v6.75h2.5v-3.43c0-.87.65-1.57 1.45-1.57s1.3.7 1.3 1.57v3.43H18.5v-3.87c0-1.88-1.16-2.81-2.25-2.81ZM7.5 10.5H10V17.25H7.5V10.5Zm1.25-3a1.25 1.25 0 1 0 0 2.5 1.25 1.25 0 0 0 0-2.5Z" />
              </svg>
            </a>

            {/* Twitter */}
            <a href="#" aria-label="Twitter">
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M21 5.92a8.18 8.18 0 0 1-2.36.65 4.12 4.12 0 0 0 1.8-2.27 8.21 8.21 0 0 1-2.6.99 4.1 4.1 0 0 0-7 3.73 11.65 11.65 0 0 1-8.46-4.3 4.1 4.1 0 0 0 1.27 5.48 4.07 4.07 0 0 1-1.86-.52v.05a4.1 4.1 0 0 0 3.29 4.02 4.07 4.07 0 0 1-1.85.07 4.1 4.1 0 0 0 3.83 2.85A8.24 8.24 0 0 1 2 19.53a11.62 11.62 0 0 0 6.29 1.84c7.55 0 11.68-6.26 11.68-11.68v-.53a8.36 8.36 0 0 0 2.06-2.13Z" />
              </svg>
            </a>
          </nav>
        </div>
      </main>
      <footer className="h-44 w-full mx-auto max-w-7xl flex items-center justify-between"></footer>
    </div>
  );
}
