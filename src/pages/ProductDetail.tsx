import MainHeadline from "../components/MainHeadline";

export default function ProductDetail(): JSX.Element {
  return (
    <>
      <div className="overflow-x-auto">
        <div className="flex flex-col items-left justify-start rounded-xl">
          <MainHeadline title="Detail" isSupportingContent={false} />
          <form action="#" method="POST">
            <div className="my-6">
              <h5 className="block text-[#666]">Material</h5>
              <p>
                MATOA Way Kambas - Sumatran Rhino comes with a material form of
                Makassar Ebony (Diospyros celebica). This wood is chosen to
                represent the Sumatran Rhino's skin which is designed with an
                overlap effect on its strap to represent Rhino's skin. Sumatran
                Rhino has unique skin fold, the skin is fairly thin about
                10-16mm, and is soft and pliable.
              </p>
            </div>
            <div className="my-6">
              <h5 className="block text-xl text-[#666]">Case</h5>
              <p>
                The case on this timepiece is made with Height 12.5mm, Width
                36mm, Length 33mm and Dial Opening 25mm. The glass is equipped
                with K1 flat glass to increase the enhanced durability on
                timepieces as scratch resistant and anti fingerprint. This
                timepiece is also equipped with Hand Polish Brass Spacer for a
                longer usage periods.
              </p>
            </div>
            <div className="my-6">
              <h5 className="block text-xl text-[#666]">Movement</h5>
              <p>
                For the first time, MATOA comes with Seiko Quartz VD78 movement
                with small second function. A small second hand is above 6
                o'clock position. This second hand dial is dedicated to Sumatran
                Rhino whom every second of its life is so precious because
                whenever Sumatran Rhino goes, it can be threatened by illegal
                poaching
              </p>
            </div>
            <div className="my-6">
              <h5 className="block text-xl text-[#666]">Dial</h5>
              <p>
                In the dial, there are double layer of Makassar Ebony Veneer
                with 3, 9 & 12 o'clock laser cut brass plate index.
              </p>
            </div>
            <div className="my-6">
              <h5 className="block text-xl text-[#666]">Hand</h5>
              <p>
                The hour, minute & small second hands on MATOA Way Kambas -
                Sumatran Rhino is outfitted with skeleton hand and brush
                finished with Gold Matte color. This new design aims at adding a
                value for this special edition.
              </p>
            </div>
            <div className="my-6">
              <h5 className="block text-xl text-[#666]">Important Note</h5>
              <p>
                Wood color on watches is produced from a combination of mature
                and fresh wood but should not be viewed as a defect. It is a
                very natural process of wood aging.
              </p>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
