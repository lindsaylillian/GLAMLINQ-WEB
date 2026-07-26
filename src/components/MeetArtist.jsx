import artistMain from "../assets/artist-main.jpg";

export default function MeetArtist() {
  return (
    <section className="bg-white py-28">
      <div className="container-width px-8">

        <div className="grid lg:grid-cols-2 gap-20 items-center">

          {/* LEFT - TEXT */}

          <div>

            <h2 className="script text-[56px] text-[#111]">
              Meet the Artist
            </h2>

            <h3 className="uppercase tracking-[5px] text-lg mt-4 mb-8">
              I'M LINDSAY
            </h3>

            <p className="text-lg leading-9 text-gray-700 max-w-xl mb-6">
              For the past three years, I've had the privilege
              of helping clients feel confident and beautiful through makeup.
              Every face I work on tells a different story, and I love creating
              looks that enhance natural beauty while allowing each person's
              individuality to shine through.
            </p>

            <p className="text-lg leading-9 text-gray-700 max-w-xl mb-6">
              Alongside being a professional makeup artist, I'm also a passionate
               tech girllyy. This website is a reflection of both
              worlds that I love beauty and tech aswell. Building this website
              allowed me to combine my creativity as a makeup artist with my
              skills in techn, creating a digital space that truly represents
              who I am.
            </p>

          </div>

          {/* RIGHT - IMAGE */}

          <div className="flex justify-center">

            <img
              src={artistMain}
              alt="Lindsay"
              className="
                w-full
                max-w-[500px]
                h-[650px]
                object-cover
                shadow-2xl
              "
            />

          </div>

        </div>

      </div>
    </section>
  );
}