import React from "react";
import Navbar from "./navbar";
import Footer from "./footer";

const TwoWheelerItems=()=>{
    const products = [
        {
          id: 1,
          imageSrc: "https://rukminim2.flixcart.com/image/312/312/xif0q/electric-bike-scooter/a/n/c/-original-imagn5bnymq8aucu.jpeg?q=70",
          title: "Hero Super Splendor (Disc) Booking for Ex-Showroom Price  (Heavy Grey)",
          discountedPrice: "₹279",
          originalPrice: "₹1,999",
          discountPercentage: "86% off",
          offer: "Buy 3 items, save extra 15%"
        },
        {
          id: 2,
          imageSrc: "https://rukminim2.flixcart.com/image/312/312/xif0q/electric-bike-scooter/y/r/2/-original-imagg9u3nghfh4un.jpeg?q=70", 
          title: "Hero Glamour XTEC (Drum) Booking for Ex-Showroom Price  (Glossy Black)",
          discountedPrice: "₹279",
          originalPrice: "₹1,999",
          discountPercentage: "86% off",
          offer: "Buy 3 items, save extra 15%"
        },
        {
          id: 3,
          imageSrc: "https://rukminim2.flixcart.com/image/312/312/xif0q/motorcycle/j/r/k/-original-imagnrh5fmzhwgn7.jpeg?q=70" ,
          title: "Hero Xtreme 160R Booking for Ex-Showroom Price  (Pearl Silver White)",
          discountedPrice: "₹279",
          originalPrice: "₹1,999",
          discountPercentage: "86% off",
          offer: "Buy 3 items, save extra 15%"
        },
        {
            id: 4,
            imageSrc: "https://rukminim2.flixcart.com/image/312/312/xif0q/scooter-moped/s/i/k/2023-drum-destini-prime-booking-for-ex-showroom-price-pan-india-original-imagtqap9tgrva3z.jpeg?q=70" ,
            title: "Hero DESTINI PRIME Booking for Ex-Showroom Price  (Pearl Silver White)",
            discountedPrice: "₹279",
            originalPrice: "₹1,999",
            discountPercentage: "86% off",
            offer: "Buy 3 items, save extra 15%"
          },
          {
            id: 5,
            imageSrc: "https://rukminim2.flixcart.com/image/312/312/xif0q/scooter-moped/p/n/a/-original-imagmgcgpechuh2y.jpeg?q=70" ,
            title: "Hero XOOM (VX) Booking for EX-showroom Price",
            discountedPrice: "₹279",
            originalPrice: "₹1,999",
            discountPercentage: "86% off",
            offer: "Buy 3 items, save extra 15%"
          },
          {
            id: 6,
            imageSrc: "https://rukminim2.flixcart.com/image/312/312/xif0q/electric-bike-scooter/i/y/a/-original-imaghc5c4rggwtjk.jpeg?q=70" ,
            title: "Hero Pleasure+ (VX) Booking for Ex-Showroom Price  (Matte Vernier Grey)",
            discountedPrice: "₹279",
            originalPrice: "₹1,999",
            discountPercentage: "86% off",
            offer: "Buy 3 items, save extra 15%"
          }
        ];
    return(
        <div>
            
            <Navbar/>
            <div className="petrol-vehicles">
            <div className="znxK_-">
  <h6 className="_3vKRL2">Petrol Vehicles</h6>
  <div className="col gu12 _1c0opE _1P3kV7">
    <div className="_1D76KH">
      <p>
        Feel the wind in your hair as you ride on a scooter or bike. You can
        quickly swipe and explore a range of two-wheeler vehicles online and
        find the most suitable option for yourself. Public transport can
        sometimes be unreliable when commuting. However, having a two-wheeler
        can help you squeeze through traffic and reach your destination in no
        time. Need a vehicle to travel long distances? If yes, there are plenty
        of two-wheelers online with comfortable seats. Furthermore, you can find
        options with seats that help you maintain a proper posture while riding.
        Apart from that, find two-wheelers with padded backrests to make any
        journey comfortable for the pillion. Bike shopping online enables you to
        check and compare each feature and specification and make a
        well-informed choice. Check out specifications like engine features,
        chassis features, suspension, wheel and tyre features, brake features,
        fuel tank capacity, display style, and more. You can choose from{" "}
        <a href="/vehicles/bikes-scooters/hero~brand/pr?sid=7dk,0aj">Hero</a>{" "}
        models like Destini, XTREME, Maestro Edge, Glamour XTEC, and more. Learn
        about the dimensions of any available bike online to determine if it’ll
        fit in your parking space. Explore Hero bikes online with a variety of
        features, designs, and colours. Find bikes with diamond frames to
        tubular double cradle frames. Choose bikes with disc or drum brakes
        online. You can also select scooters with a four-stroke air-cooled
        engine system. Cruise through traffic on a two-wheeler with a rear
        mono-shock suspension and front telescopic fork suspension. So, what are
        you waiting for? Get a two-wheeler vehicle online and embark on a long
        adventurous journey or smoothen everyday travel.&nbsp;
        <span>This information Updated on 29-Jan-24</span>
      </p>
      <p>
        Popular Search-{" "}
        <a href="/electric-scooters-store">Electric Vehicles Store</a>
      </p>
    </div>
  </div>
</div>
<div className="electronics-content">
          {products.map((product) => (
            <div className="electronics-essentials" key={product.id}>
              <div className="electronics-box">
                <img className="_2r_T1I" alt="" src={product.imageSrc} />
              </div>
              <div className="product-details">
                <h3>{product.title}</h3>
                <div className="price-container">
                  <span className="discounted-price">{product.discountedPrice}</span>
                  <span className="original-price">{product.originalPrice}</span>
                  <span className="discount-percentage">{product.discountPercentage}</span>
                </div>
                <p>{product.offer}</p>
              </div>
            </div>
          ))}
        </div>
</div>


<div className="before-footer">
<div className="_3rc_xQ">
  <div className="row">
    <div className="col gu12 _8Qljeg">
      <div className="_1Vtd9D">
        <section className="_1Dc42_">
          <h2 className="VgV9vQ">Bikes &amp; Scooters Price List</h2>
          <div className="_1pbqS9 ZtLs68">
            <div className="_2J4zcy">Bikes &amp; Scooters</div>
            <div className="_1liiiu">Price</div>
          </div>
          <ol>
            <li className="_1pbqS9">
              <div className="_2J4zcy">
                <a href="/vida-powered-hero-v1-pro-booking-ex-showroom-price-with-portable-charger-black/p/itmbc1dd206abf4a?pid=EBKGRMHRSTCZYGBG&lid=LSTEBKGRMHRSTCZYGBG0SI9S4&marketplace=FLIPKART">
                  VIDA Powered by Hero V1 Pro Booking for Ex-Showroom Price
                  (with Portable Charger, Black)
                </a>
              </div>
              <div className="_1liiiu">Rs. 145900</div>
            </li>
            <li className="_1pbqS9">
              <div className="_2J4zcy">
                <a href="/hero-hf-deluxe-i3s-self-start-booking-ex-showroom-price/p/itmd0cb622957692?pid=MCYGTNDY8TAMTQZJ&lid=LSTMCYGTNDY8TAMTQZJ038ASI&marketplace=FLIPKART">
                  Hero HF Deluxe (i3S with Self Start) Booking for Ex-Showroom
                  Price
                </a>
              </div>
              <div className="_1liiiu">Rs. 69718</div>
            </li>
            <li className="_1pbqS9">
              <div className="_2J4zcy">
                <a href="/g-byke-electric-scooter-board/p/itm21f3708b19ca8?pid=ESBGNBEFDAXZTFTR&lid=LSTESBGNBEFDAXZTFTRDRWKYM&marketplace=FLIPKART">
                  G BYKE Electric Scooter Board
                </a>
              </div>
              <div className="_1liiiu">Rs. 72000</div>
            </li>
            <li className="_1pbqS9">
              <div className="_2J4zcy">
                <a href="/hero-splendor-non-i3s-booking-ex-showroom-price/p/itm15e44070dcd85?pid=MCYGRWKHKFGN7JWY&lid=LSTMCYGRWKHKFGN7JWY05UQDE&marketplace=FLIPKART">
                  Hero Splendor+ (Non i3S) Booking for Ex-Showroom Price
                </a>
              </div>
              <div className="_1liiiu">Rs. 74991</div>
            </li>
            <li className="_1pbqS9">
              <div className="_2J4zcy">
                <a href="/vida-powered-hero-v1-pro-booking-ex-showroom-price-with-portable-charger-orange/p/itme2dd8209d7cbb?pid=EBKGNZFRAQUJEZKS&lid=LSTEBKGNZFRAQUJEZKS0RYG4E&marketplace=FLIPKART">
                  VIDA Powered by Hero V1 Pro Booking for Ex-Showroom Price
                  (with Portable Charger, Orange)
                </a>
              </div>
              <div className="_1liiiu">Rs. 145900</div>
            </li>
            <li className="_1pbqS9">
              <div className="_2J4zcy">
                <a href="/hero-passion-xtec-disc-booking-ex-showroom-price/p/itmb2dceeb2964b1?pid=EBKGG7ZFYUXDMG6R&lid=LSTEBKGG7ZFYUXDMG6R0IFTWY&marketplace=FLIPKART">
                  Hero Passion XTEC (Disc) Booking for Ex-Showroom Price
                </a>
              </div>
              <div className="_1liiiu">Rs. 85088</div>
            </li>
            <li className="_1pbqS9">
              <div className="_2J4zcy">
                <a href="/hero-pleasure-vx-booking-ex-showroom-price/p/itm67627232afca7?pid=EBKGHBQJNFWCUXFB&lid=LSTEBKGHBQJNFWCUXFB07CXQT&marketplace=FLIPKART">
                  Hero Pleasure+ (VX) Booking for Ex-Showroom Price
                </a>
              </div>
              <div className="_1liiiu">Rs. 75758</div>
            </li>
            <li className="_1pbqS9">
              <div className="_2J4zcy">
                <a href="/hero-super-splendor-drum-booking-ex-showroom-price/p/itm8fb7dfa678fe9?pid=MCYGN5JWYDXPYBQ3&lid=LSTMCYGN5JWYDXPYBQ30EGISV&marketplace=FLIPKART">
                  Hero Super Splendor (Drum) Booking for Ex-Showroom Price
                </a>
              </div>
              <div className="_1liiiu">Rs. 82148</div>
            </li>
            <li className="_1pbqS9">
              <div className="_2J4zcy">
                <a href="/hero-pleasure-xtec-booking-ex-showroom-price/p/itm94f4b6315ff56?pid=EBKGG7N5XS3JUBVK&lid=LSTEBKGG7N5XS3JUBVK01YIJH&marketplace=FLIPKART">
                  Hero Pleasure+ (XTEC) Booking for Ex-Showroom Price
                </a>
              </div>
              <div className="_1liiiu">Rs. 77898</div>
            </li>
            <li className="_1pbqS9">
              <div className="_2J4zcy">
                <a href="/hero-hf-deluxe-non-i3s-self-start-booking-ex-showroom-price/p/itme39d441b4e0fa?pid=EBKGKRVGMTGJETDN&lid=LSTEBKGKRVGMTGJETDN0BQGD3&marketplace=FLIPKART">
                  Hero HF Deluxe (Non i3S with Self Start) Booking for
                  Ex-Showroom Price
                </a>
              </div>
              <div className="_1liiiu">Rs. 67747</div>
            </li>
          </ol>
          <div className="XNAA65">This data was last updated on 2024/01/29</div>
        </section>
        <div>
          <br />
          <meta charSet="utf-8" />
          <h2 dir="ltr">
            <b id="docs-internal-guid-fdb72eb9-7fff-5883-75f2-1fdf67dd8135">
              Shop Two-wheeler Vehicles Online to Travel Comfortably to Places
            </b>
          </h2>
          &nbsp;
          <p dir="ltr">
            <b id="docs-internal-guid-fdb72eb9-7fff-5883-75f2-1fdf67dd8135">
              Two-wheelers, otherwise known as motorcycles, scooters, and
              mopeds, are some of the most popular modes of transportation
              around the world. Over time, these vehicles have evolved to become
              more efficient and comfortable for riders. You can buy a wide
              variety of two-wheeler vehicles online from a range of
              manufacturers. From high-performance motorcycles to light{" "}
              <a href="/electric-scooters-store">electric scooters</a>, each
              type offers different features to meet the needs of different
              riders. Motorcycles are popular for their speed and
              manoeuvrability. These come in a variety of styles, including
              cruiser, sport, and touring. In addition, mopeds are smaller than
              motorcycles and typically have much lower power output. These
              online bikes can be a good option for those who want an economical
              mode of transportation. Also, scooters are similar to mopeds but
              usually have a larger engine size. They offer good fuel economy
              and are often very easy to operate. Most women and elderly people
              when looking for bikes (online shopping), opt for scooters because
              of their easy operation and lightweight design as compared to
              bikes. Lastly,{" "}
              <a href="/electric-scooters-store">electric bikes</a> are becoming
              increasingly popular as they offer a clean and efficient form of
              transportation. Many models now come with powerful motors that can
              reach high speeds. You can buy bikes online, such as Hero Glamour
              XTEC, Hero HF Deluxe, Hero Destiny 125 Drum, Hero Super Splendor,
              Hero passion XTEC, and more.&nbsp;
            </b>
          </p>
          &nbsp;
          <h3 dir="ltr">
            <b id="docs-internal-guid-fdb72eb9-7fff-5883-75f2-1fdf67dd8135">
              Features of{" "}
              <a href="/vehicles/bikes-scooters/petrol-bikes-scooters/petrol-bikes/hero~brand/pr?sid=7dk,0aj,kcq,whu">
                Hero Online Bikes
              </a>
            </b>
            <br />
            &nbsp;
          </h3>
          <p dir="ltr">
            <b id="docs-internal-guid-fdb72eb9-7fff-5883-75f2-1fdf67dd8135">
              The Hero Glamour XTEC bike is one of the most popular bikes
              online. Its powerful 125 cc engine ensures you have all the power
              you need for city driving, from overtaking at signals on the way
              to work to leisurely cruising back home. Plus, this two-wheeler’s
              muscular design and cutting-edge split alloy wheels help make
              every trip stylish. If you shop this two-wheeler vehicle online,
              you can charge your phone while travelling, get navigation
              instructions and stay connected with your nearest and dearest all
              at the same time. You can also check out Hero HF Deluxe online.
              This motorbike comes equipped with an integrated braking system
              that enables confident, timely stopping. Its up to 130 mm rear
              brake ensures you can safely bring it to a halt no matter the
              terrain or road conditions.
            </b>
          </p>
          &nbsp;
          <h3 dir="ltr">
            <b id="docs-internal-guid-fdb72eb9-7fff-5883-75f2-1fdf67dd8135">
              Here’s Why You Should Buy Bikes Online
            </b>
            <br />
            &nbsp;
          </h3>
          <p dir="ltr">
            <b id="docs-internal-guid-fdb72eb9-7fff-5883-75f2-1fdf67dd8135">
              When you purchase a bike online, you are certain to receive an
              excellent bargain. The seller puts savings from transportation
              costs towards the buyer and if you wait for a sale season, you
              will be able to get even better discounts. Also, shopping online
              for a bike gives you access to insight from verified customers
              regarding its quality and performance. Reviews will bring up
              topics such as shipping, pricing, installation, and on-roading to
              help you choose the one that's best suited for you. In addition,
              you can say goodbye to visiting one offline store to another to
              find the right bike. So, shop two-wheeler vehicles online, explore
              plenty of options available, compare prices, and read reviews
              before you purchase a model of your choice.
            </b>
          </p>
        </div>
      </div>
    </div>
  </div>
  <div className="row faqRow">
    <div className="col gu12 _36eqtO">
      <div className="_3JGYOh">
        <section className="_2pT5nx">
          <h2 className="_19FKi0">
            <span>Question and Answers</span>
          </h2>
          <ol>
            <li className="_1Ug_6E">
              <div className="_1Sykp2">
                <span>
                  Q.I have a limited parking space. Can I know the dimensions of
                  the two-wheeler online?
                </span>
              </div>
              <div className="JSB0zB">
                <span>
                  A.Yes. You can easily check out the dimensions of two-wheelers
                  from the product description before purchasing. There are
                  plenty of two-wheeler vehicles online with different
                  dimensions. Thus, it won’t be a problem for you to find a
                  suitable option.
                </span>
              </div>
            </li>
            <li className="_1Ug_6E">
              <div className="_1Sykp2">
                <span>Q.Are there any scooters available online?</span>
              </div>
              <div className="JSB0zB">
                <span>
                  A.Yes. You can easily swipe and explore a variety of scooter
                  models online.
                </span>
              </div>
            </li>
            <li className="_1Ug_6E">
              <div className="_1Sykp2">
                <span>
                  Q.I have to go on long tours on my bike. Can I find a bike
                  with a large fuel tank capacity?
                </span>
              </div>
              <div className="JSB0zB">
                <span>
                  A.Yes. There are plenty of bikes available with various fuel
                  tank capacities. You can check out{" "}
                  <a href="/vehicles/bikes-scooters/petrol-bikes-scooters/petrol-scooters/hero~brand/pr?sid=7dk,0aj,kcq,nf7">
                    Hero bikes online
                  </a>{" "}
                  with larger fuel capacities.
                </span>
              </div>
            </li>
            <li className="_1Ug_6E">
              <div className="_1Sykp2">
                <span>
                  Q.Is it safe to purchase two-wheeler vehicles online?
                </span>
              </div>
              <div className="JSB0zB">
                <span>
                  A.Yes. Shopping for scooters and bikes online will help you to
                  understand specifications easily and quickly without having to
                  hop from one showroom to another. You can make a well-informed
                  decision and have the vehicle delivered to your doorstep,
                  hassle-free.
                </span>
              </div>
            </li>
            <li className="_1Ug_6E">
              <div className="_1Sykp2">
                <span>Q.Do Hero scooters have tubeless tires?</span>
              </div>
              <div className="JSB0zB">
                <span>
                  A.There are some Hero scooters available with tubeless tires.
                  You can explore the options to learn more.
                </span>
              </div>
            </li>
            <li className="_1Ug_6E">
              <div className="_1Sykp2">
                <span>
                  Q.What type of brakes does the Hero Maestro Edge have?
                </span>
              </div>
              <div className="JSB0zB">
                <span>
                  A.The front wheel of the Hero Maestro Edge has disc brakes,
                  while the rear wheel has drum brakes.
                </span>
              </div>
            </li>
            <li className="_1Ug_6E">
              <div className="_1Sykp2">
                <span>Q.Do Hero two-wheelers have good suspension?</span>
              </div>
              <div className="JSB0zB">
                <span>
                  A.There are{" "}
                  <a href="/vehicles/bikes-scooters/petrol-bikes-scooters/petrol-scooters/hero~brand/pr?sid=7dk,0aj,kcq,nf7">
                    Hero two-wheelers online
                  </a>{" "}
                  with dual shock and telescopic suspensions. You can also
                  explore bikes with different suspension systems online.
                </span>
              </div>
            </li>
            <li className="_1Ug_6E">
              <div className="_1Sykp2">
                <span>Q.What is the power output of Hero Super Splendor?</span>
              </div>
              <div className="JSB0zB">
                <span>
                  A.The Hero Super Splendor has a 125 cc engine that can give
                  you a smooth ride.
                </span>
              </div>
            </li>
            <li className="_1Ug_6E">
              <div className="_1Sykp2">
                <span>Q.Will I find plenty of colour choices online?</span>
              </div>
              <div className="JSB0zB">
                <span>
                  A.Yes. You can easily browse all colours available online and
                  choose as per your requirements.
                </span>
              </div>
            </li>
            <li className="_1Ug_6E">
              <div className="_1Sykp2">
                <span>Q.Can I find a bike with a digital console?</span>
              </div>
              <div className="JSB0zB">
                <span>
                  A.Yes. You can also find bikes with both analogue and digital
                  consoles.
                </span>
              </div>
            </li>
          </ol>
        </section>
      </div>
    </div>
  </div>
  <div>

    <div>

    </div>
  </div>
</div>

</div>

<Footer />
            </div>
    )
}
export default TwoWheelerItems;