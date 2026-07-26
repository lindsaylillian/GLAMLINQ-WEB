import heroMain from "../assets/images/hero-main.jpg";
import heroSmall from "../assets/images/hero-small.jpg";


export default function Hero() {
  return (
    <section className="bg-[#faf9f7] py-24">
      <div className="container-width px-8">

        <div className="grid lg:grid-cols-2 gap-20 items-center">

          {/* LEFT */}

          <div className="relative">

            <img
              src={heroMain}
              alt="Hero"
              className="w-full max-w-[490px] h-[600px] object-cover"
            />

            <img
              src={heroSmall}
              alt="Small"
              className="
                absolute
                w-[220px]
                h-[260px]
                object-cover
                border-8
                border-[#faf9f7]
                -bottom-16
                right-[-40px]
                shadow-xl
              "
            />

          </div>

          {/* RIGHT */}

          <div>

            <p className="uppercase tracking-[5px] text-sm mb-6">
              PRO MAKEUP ARTIST
            </p>

            <h1 className="font-serif text-[76px] leading-[0.95] font-light">
              BEAUTY
              <br />
              REDEFINED
            </h1>

            <h2 className="script text-[56px] mt-6">
              based in Kampala
            </h2>

            <p className="mt-10 text-lg leading-9 text-gray-700 max-w-xl">
              Enhancing your natural beauty through timeless artistry.
              Whether it's your wedding, graduation, photoshoot or
              special event, GlamLinq creates elegant looks that
              leave lasting memories.
            </p>

            <button className="
              mt-10
              border
              border-black
              px-10
              py-4
              rounded-full
              hover:bg-black
              hover:text-white
              transition
            ">
              BOOK YOUR SESSION
            </button>

          </div>

        </div>

      </div>
    </section>
  );
}