import visitecart_face1 from '../../../utils/imgs/visitecart_face1.png'
import visitecart_face2 from '../../../utils/imgs/visitecart_face2.png'

export function Contact() {
    return (
<section id="contact" className="relative py-20">
  <div className="max-w-7xl mx-auto px-6 md:px-12 text-center">
    {/* Title */}
    <h2 className="text-4xl md:text-5xl font-bold font-display text-neutral-dark mb-6">
      Carte de visite EDU Dash
    </h2>
    <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-16">
      Découvrez notre carte de visite digitale — une manière simple et moderne d’entrer en contact avec nous.
    </p>

    {/* Cards Container */}
    <div className="flex flex-col md:flex-row justify-center items-center justify-around gap-10">
      {/* Face 1 */}
      <div className="group relative">
        <div className="absolute -inset-1 bg-gradient-to-r from-[#FFAA27] to-primary-dark rounded-2xl blur opacity-25 group-hover:opacity-60 transition duration-700"></div>
        <div className="relative hover:-translate-y-2 transition-transform duration-500 shadow-xl rounded-2xl overflow-hidden">
          <img
            src={visitecart_face1}
            alt="Carte de visite face 1"
            className="w-[80vw] md:w-[35vw] rounded-2xl"
          />
        </div>
      </div>

      {/* Face 2 (downloadable) */}
      <div className="group relative">
        <div className="absolute -inset-1 bg-gradient-to-r from-primary-dark to-[#FFAA27] rounded-2xl blur opacity-25 group-hover:opacity-60 transition duration-700"></div>
        <div className="relative hover:-translate-y-2 transition-transform duration-500 shadow-xl rounded-2xl overflow-hidden">
          <a
            href={visitecart_face2}
            download="EDU-Dash-VisiteCard.png"
            title="Télécharger la carte"
          >
            <img
              src={visitecart_face2}
              alt="Carte de visite face 2"
              className="w-[80vw] md:w-[35vw] rounded-2xl cursor-pointer transition duration-500 hover:brightness-95"
            />
          </a>
        </div>
      </div>
    </div>

    {/* Download Text in CTA position */}
    <div className="mt-14">
      <p className="mt-4 text-sm text-gray-500 font-medium">
        <a
          href={visitecart_face2}
          download="EDU-Dash-VisiteCard.png"
          className=" no-underline"
        >
                    Cliquez pour <span className="text-[#FFAA27]">télécharger</span> la carte
        </a>
      </p>
    </div>
  </div>
</section>



    );
}