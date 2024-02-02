import React from "react";
import Navbar from "./navbar";
import Filter from "./filter";
import Footer from "./footer";

const ElectronicsItem = () => {
 
  const products = [
    {
      id: 1,
      imageSrc: "https://rukminim2.flixcart.com/image/612/612/xif0q/headphone/y/e/x/-original-imagqktbtkjycwya.jpeg?q=70",
      title: "Mivi DuoPods",
      discountedPrice: "₹279",
      originalPrice: "₹1,999",
      discountPercentage: "86% off",
      offer: "Buy 3 items, save extra 15%"
    },
    {
      id: 2,
      imageSrc: "https://rukminim2.flixcart.com/image/612/612/l0sgyvk0/headphone/z/r/d/buds-z2-oneplus-original-imagcg5gexhhhgzs.jpeg?q=70", 
      title: "OnePlus Bullets Wireless",
      discountedPrice: "₹279",
      originalPrice: "₹1,999",
      discountPercentage: "86% off",
      offer: "Buy 3 items, save extra 15%"
    },
    {
      id: 3,
      imageSrc: "https://rukminim2.flixcart.com/image/612/612/l1dwknk0/headphone/b/f/2/wh-1000xm4-sony-original-imagcywfhzq8hx2z.jpeg?q=70" ,
      title: "SONY WH-1000XM$ Bluetooth Headset",
      discountedPrice: "₹279",
      originalPrice: "₹1,999",
      discountPercentage: "86% off",
      offer: "Buy 3 items, save extra 15%"
    },
    {
        id: 4,
        imageSrc: "https://rukminim2.flixcart.com/image/612/612/xif0q/computer/v/v/b/xl30-thin-and-light-laptop-infinix-original-imagzmncgyrcsxa9.jpeg?q=70" ,
        title: "Infinix Y1 Plus Neo(2023) Inteel Celeron Quad core 11th Gen",
        discountedPrice: "₹279",
        originalPrice: "₹1,999",
        discountPercentage: "86% off",
        offer: "Buy 3 items, save extra 15%"
      },
      {
        id: 5,
        imageSrc: "https://rukminim2.flixcart.com/image/612/612/xif0q/computer/r/r/k/-original-imagmdw3cwjjedjf.jpeg?q=70" ,
        title: "Infinix Zero Book Ultra Series Laptop Intel Core",
        discountedPrice: "₹279",
        originalPrice: "₹1,999",
        discountPercentage: "86% off",
        offer: "Buy 3 items, save extra 15%"
      },
      {
        id: 6,
        imageSrc: "https://rukminim2.flixcart.com/image/612/612/l3rmzrk0/joystick/p/z/o/x3-wireless-bluetooth-gamepad-for-android-windows-smart-tv-pubg-original-imagetkgqpzfwvn7.jpeg?q=70" ,
        title: "Decasa X3 Wireless Bluetooth Gamepad for Android/Window",
        discountedPrice: "₹279",
        originalPrice: "₹1,999",
        discountPercentage: "86% off",
        offer: "Buy 3 items, save extra 15%"
      },
      {
        id: 7,
        imageSrc: "https://rukminim2.flixcart.com/image/612/612/xif0q/computer/v/y/z/-original-imagtucnqsqpbvk6.jpeg?q=70" ,
        title: "Asus TUF Gaming F15",
        discountedPrice: "₹279",
        originalPrice: "₹1,999",
        discountPercentage: "86% off",
        offer: "Buy 3 items, save extra 15%"
      },
      {
        id: 8,
        imageSrc: "https://rukminim2.flixcart.com/image/612/612/xif0q/computer/j/k/x/-original-imagtfzmyxguhhjh.jpeg?q=70" ,
        title: "MSI Katana 17 Intel Core i7 12th Gen",
        discountedPrice: "₹279",
        originalPrice: "₹1,999",
        discountPercentage: "86% off",
        offer: "Buy 3 items, save extra 15%"
      },
      {
        id: 9,
        imageSrc: "https://rukminim2.flixcart.com/image/612/612/kgfg2vk0/selector-box/v/n/j/hybite-hdmi-usb-video-capture-card-original-imafwnsfrgzgsgvy.jpeg?q=70" ,
        title: "hybite HDMI USB Video Capture Card Media",
        discountedPrice: "₹279",
        originalPrice: "₹1,999",
        discountPercentage: "86% off",
        offer: "Buy 3 items, save extra 15%"
      },
      {
        id: 10,
        imageSrc: "https://rukminim2.flixcart.com/image/612/612/xif0q/selector-box/o/n/j/lr777-hd-mpeg-4-free-to-air-set-top-box-with-pen-drive-support-original-imagts3xhuf3rfs6.jpeg?q=70" ,
        title: "LRIPL LR777 HD MPEG_4",
        discountedPrice: "₹279",
        originalPrice: "₹1,999",
        discountPercentage: "86% off",
        offer: "Buy 3 items, save extra 15%"
      },
      {
        id: 11,
        imageSrc: "https://rukminim2.flixcart.com/image/612/612/ke7ff680/selector-box/b/b/v/mi-tv-stick-mdz-24-aa-original-imafuxv2v84yafwq.jpeg?q=70" ,
        title: "realme 4k Smart Google TV Stick(Black)",
        discountedPrice: "₹279",
        originalPrice: "₹1,999",
        discountPercentage: "86% off",
        offer: "Buy 3 items, save extra 15%"
      },
      {
        id: 12,
        imageSrc: "https://rukminim2.flixcart.com/image/612/612/xif0q/video-player/a/d/h/ibl3288-dvd-player-with-built-in-amplifier-usb-led-display-original-imagjfj8hgtzfeqk.jpeg?q=70" ,
        title: "iBELL IBL3288 DVD Player ",
        discountedPrice: "₹279",
        originalPrice: "₹1,999",
        discountPercentage: "86% off",
        offer: "Buy 3 items, save extra 15%"
      }
    
];

  return (
    <div>
      <Navbar />
      <div className="electronics-items">
        <Filter />
        <div className="electronics-content">
        <div
  className="_1YokD2 _2GoDe3 col-12-12"
  style={{ backgroundColor: "rgb(255, 255, 255)", alignItems: "flex-end" }}
>
  <div className="_1AtVbE" style={{ flexGrow: 1, overflow: "auto" }}>
    <div className="W_R1IA">
      <div className="_1MR4o5">
        <div className="_3GIHBu">
          <a href="/" className="_2whKao">
            Home
          </a>
          <svg
            width={16}
            height={27}
            viewBox="0 0 16 27"
            xmlns="http://www.w3.org/2000/svg"
            className="_39X-Og"
          >
            <path
              d="M16 23.207L6.11 13.161 16 3.093 12.955 0 0 13.161l12.955 13.161z"
              fill="#fff"
              className="DpXnhQ"
            />
          </svg>
        </div>
        <div className="_3GIHBu">
          <a
            className="_2whKao"
            href="/audio-video/pr?sid=0pm&marketplace=FLIPKART"
          >
            Audio &amp; Video
          </a>
          <svg
            width={16}
            height={27}
            viewBox="0 0 16 27"
            xmlns="http://www.w3.org/2000/svg"
            className="_39X-Og"
          >
            <path
              d="M16 23.207L6.11 13.161 16 3.093 12.955 0 0 13.161l12.955 13.161z"
              fill="#fff"
              className="DpXnhQ"
            />
          </svg>
        </div>
      </div>
      <div className="col gu12 _1c0opE uJ3Xih">
        <div className="_1D76KH">
          <p>
            The all new
            <a href="/samsung-galaxy-buds-pro-active-noise-cancellation-enabled-bluetooth-headset/p/itm54af884247d24">
              {" "}
              Samsung Galaxy Buds Pro
            </a>{" "}
            earphones will be launching on Jan 28th. Grab the best deal with
            Flipkart offers.
          </p>
          <p>
            <br />
          </p>
          <p>
            Also Check:{" "}
            <a href="/audio-video/headphones/sony~brand/pr?sid=0pm,fcn">
              sony headphones with mic
            </a>
            , <a href="/q/jbl-xtreme-2">JBL xtreme 2</a>,{" "}
            <a href="/audio-video/speakers/sony~brand/pr?sid=0pm%2C0o7">
              Sony Woofer
            </a>
            , <a href="/q/lg-xboom">Lg Xboom</a>
          </p>
        </div>
      </div>
      <h1 className="_10Ermr">Audio &amp; Video</h1>
      <span className="_2tDckM">
        (Showing 1 – 40 products of 31,193 products)
      </span>
      <div className="_5THWM1">
        <span className="_2i7N3j">Sort By</span>
        <div className="_10UF8M _3LsR0e">Popularity</div>
        <div className="_10UF8M">Price -- Low to High</div>
        <div className="_10UF8M">Price -- High to Low</div>
        <div className="_10UF8M">Newest First</div>
        <div className="_10UF8M">Discount</div>
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
  
</div>


        </div>
        
        
      </div>
      <div className="row">
  <div className="col gu12 _8Qljeg">
    <div className="_1Vtd9D">
      <section className="_1Dc42_">
        <h2 className="VgV9vQ">Audio &amp; Video Price List</h2>
        <div className="_1pbqS9 ZtLs68">
          <div className="_2J4zcy">Audio &amp; Video</div>
          <div className="_1liiiu">Price</div>
        </div>
        <ol>
          <li className="_1pbqS9">
            <div className="_2J4zcy">
              <a href="/boat-airdopes-161-40-hours-playback-asap-charge-10mm-drivers-bluetooth-headset/p/itm8a7493150ae4a?pid=ACCG6DS7WDJHGWSH&lid=LSTACCG6DS7WDJHGWSH8IRY50&marketplace=FLIPKART">
                boAt Airdopes 161 with 40 Hours Playback, ASAP Charge &amp; 10mm
                Drivers Bluetooth Headset
              </a>
            </div>
            <div className="_1liiiu">Rs. 1099</div>
          </li>
          <li className="_1pbqS9">
            <div className="_2J4zcy">
              <a href="/triggr-kraken-x1-battery-display-40ms-latency-quad-mic-enc-40-hr-battery-v5-3-bluetooth-headset/p/itm9c05f498c3463?pid=ACCGQ2SND4UPDYAF&lid=LSTACCGQ2SND4UPDYAFXKHHBY&marketplace=FLIPKART">
                TRIGGR Kraken X1 with Battery Display, 40ms Latency, Quad Mic
                ENC, 40 Hr Battery, v5.3 Bluetooth Headset
              </a>
            </div>
            <div className="_1liiiu">Rs. 999</div>
          </li>
          <li className="_1pbqS9">
            <div className="_2J4zcy">
              <a href="/mivi-duopods-k4-tws-rich-bass-50h-playtime-ai-enc-low-latency-type-c-5-3-bt-earbuds-bluetooth-headset/p/itm377fc213a2bc4?pid=ACCGPYGHRCW7TFJG&lid=LSTACCGPYGHRCW7TFJGU7S436&marketplace=FLIPKART">
                Mivi DuoPods K4 TWS,Rich Bass,50H Playtime,AI ENC,Low
                Latency,Type C,5.3 BT Earbuds Bluetooth Headset
              </a>
            </div>
            <div className="_1liiiu">Rs. 599</div>
          </li>
          <li className="_1pbqS9">
            <div className="_2J4zcy">
              <a href="/boult-x10-tws-45hrs-playtime-enc-mic-40ms-lowest-latency-fast-charging-5-3v-bluetooth-headset/p/itm7e6536936ce3b?pid=ACCGHTP8AJ9A6FBE&lid=LSTACCGHTP8AJ9A6FBEGH0J3V&marketplace=FLIPKART">
                Boult X10 TWS with 45Hrs Playtime, ENC Mic, 40ms Lowest Latency,
                Fast Charging, 5.3v Bluetooth Headset
              </a>
            </div>
            <div className="_1liiiu">Rs. 799</div>
          </li>
          <li className="_1pbqS9">
            <div className="_2J4zcy">
              <a href="/ucool-nexa-100-hours-playtime-bluetooth-wireless-neckband-headphones-earphone-headset/p/itmfe1d7e2a3daec?pid=ACCGDH28UF4GP3HB&lid=LSTACCGDH28UF4GP3HB2D7CHA&marketplace=FLIPKART">
                Ucool Nexa 100 Hours Playtime Bluetooth Wireless Neckband
                headphones Earphone Bluetooth Headset
              </a>
            </div>
            <div className="_1liiiu">Rs. 499</div>
          </li>
          <li className="_1pbqS9">
            <div className="_2J4zcy">
              <a href="/apple-airpods-2nd-gen-charging-case-bluetooth-headset-mic/p/itm8f1b2b0173ce4?pid=ACCFF2R85H8YG4WH&lid=LSTACCFF2R85H8YG4WHVYNGWK&marketplace=FLIPKART">
                Apple AirPods(2nd gen) with Charging Case Bluetooth Headset with
                Mic
              </a>
            </div>
            <div className="_1liiiu">Rs. 9999</div>
          </li>
          <li className="_1pbqS9">
            <div className="_2J4zcy">
              <a href="/boat-rockerz-110-40-hrs-playback-enx-technology-beast-mode-asap-charge-bluetooth-headset/p/itmdd861465ee8b1?pid=ACCGS9ZMGQZH4FZF&lid=LSTACCGS9ZMGQZH4FZFK9O3V4&marketplace=FLIPKART">
                boAt Rockerz 110 with 40 HRS Playback, ENx Technology, Beast
                Mode &amp; ASAP Charge Bluetooth Headset
              </a>
            </div>
            <div className="_1liiiu">Rs. 999</div>
          </li>
          <li className="_1pbqS9">
            <div className="_2J4zcy">
              <a href="/boult-astra-quad-mic-enc-48hrs-battery-low-latency-gaming-made-india-5-3v-bluetooth-headset/p/itm6b31cec7596a8?pid=ACCGS2VSYQFQ4HTZ&lid=LSTACCGS2VSYQFQ4HTZF0TSMT&marketplace=FLIPKART">
                Boult Astra with Quad Mic ENC, 48Hrs Battery, Low Latency
                Gaming, Made in India, 5.3v Bluetooth Headset
              </a>
            </div>
            <div className="_1liiiu">Rs. 1299</div>
          </li>
          <li className="_1pbqS9">
            <div className="_2J4zcy">
              <a href="/noise-buds-vs102-50-hrs-playtime-11mm-driver-ipx5-unique-flybird-design-bluetooth-headset/p/itm5b1444b835ede?pid=ACCGFFZJYBEF6HMY&lid=LSTACCGFFZJYBEF6HMYE93Y1Z&marketplace=FLIPKART">
                Noise Buds VS102 with 50 Hrs Playtime, 11mm Driver, IPX5 and
                Unique Flybird Design Bluetooth Headset
              </a>
            </div>
            <div className="_1liiiu">Rs. 1199</div>
          </li>
          <li className="_1pbqS9">
            <div className="_2J4zcy">
              <a href="/boult-w20-zen-enc-mic-32h-battery-life-low-latency-gaming-made-india-5-3v-bluetooth-headset/p/itm42ba3da4c8d78?pid=ACCGRNFM5GBPUKPF&lid=LSTACCGRNFM5GBPUKPFYSZIXK&marketplace=FLIPKART">
                Boult W20 with Zen ENC Mic, 32H Battery Life, Low Latency
                Gaming, Made in India, 5.3v Bluetooth Headset
              </a>
            </div>
            <div className="_1liiiu">Rs. 1099</div>
          </li>
        </ol>
        <div className="XNAA65">This data was last updated on 2024/01/27</div>
      </section>
      <div>
        <a href="https://www.flipkart.com/audio-video/zoook~brand/pr?sid=0pm">
          Zoook Audio &amp; Video
        </a>{" "}
        ,
        <a href="https://www.flipkart.com/audio-video/royalrich~brand/pr?sid=0pm">
          RoyalRich Audio &amp; Video
        </a>{" "}
        ,
        <a href="https://www.flipkart.com/audio-video/pickadda~brand/pr?sid=0pm">
          Pickadda Audio &amp; Video
        </a>{" "}
        ,
        <a href="https://www.flipkart.com/audio-video/roq~brand/pr?sid=0pm">
          ROQ Audio &amp; Video
        </a>{" "}
        ,
        <a href="https://www.flipkart.com/audio-video/dizo~brand/pr?sid=0pm">
          DIZO Audio &amp; Video
        </a>{" "}
        ,
        <a href="https://www.flipkart.com/audio-video/samsung~brand/pr?sid=0pm">
          Samsung Audio &amp; Video
        </a>{" "}
        ,
        <a href="https://www.flipkart.com/audio-video/fd1~brand/pr?sid=0pm">
          FD1 Audio &amp; Video
        </a>{" "}
        ,
        <a href="https://www.flipkart.com/audio-video/bose~brand/pr?sid=0pm">
          Bose Audio &amp; Video
        </a>{" "}
        ,
        <a href="https://www.flipkart.com/audio-video/infinity~brand/pr?sid=0pm">
          Infinity Audio &amp; Video
        </a>{" "}
        ,
        <a href="https://www.flipkart.com/audio-video/hoppup~brand/pr?sid=0pm">
          HOPPUP Audio &amp; Video
        </a>{" "}
        ,
        <a href="https://www.flipkart.com/audio-video/sennheiser~brand/pr?sid=0pm">
          Sennheiser Audio &amp; Video
        </a>{" "}
        ,
        <a href="https://www.flipkart.com/audio-video/mi~brand/pr?sid=0pm">
          Mi Audio &amp; Video
        </a>{" "}
        ,
        <a href="https://www.flipkart.com/audio-video/syska~brand/pr?sid=0pm">
          Syska Audio &amp; Video
        </a>{" "}
        ,
        <a href="https://www.flipkart.com/audio-video/marshall~brand/pr?sid=0pm">
          Marshall Audio &amp; Video
        </a>{" "}
        ,
        <a href="https://www.flipkart.com/video-accessories/pr?sid=0pm,q9n">
          Video Accessories
        </a>{" "}
        ,
        <a href="https://www.flipkart.com/audio-video/harman-kardon~brand/pr?sid=0pm">
          Harman Kardon Audio &amp; Video
        </a>{" "}
        ,
        <a href="https://www.flipkart.com/audio-video/bentag~brand/pr?sid=0pm">
          Bentag Audio &amp; Video
        </a>{" "}
        ,
        <a href="https://www.flipkart.com/audio-video/jbl-professional~brand/pr?sid=0pm">
          JBL Professional Audio &amp; Video
        </a>{" "}
        ,
        <a href="https://www.flipkart.com/audio-video/soundcore~brand/pr?sid=0pm">
          Soundcore Audio &amp; Video
        </a>{" "}
        ,
        <a href="https://www.flipkart.com/audio-video/hitage~brand/pr?sid=0pm">
          HITAGE Audio &amp; Video
        </a>
        <br />
        <p>
          Check out the new Launches:{" "}
          <a href="/truke-b120-extra-bass-bluetooth-headset/p/itm772ad4ea93e5e">
            truke bluetooth headset
          </a>
          ,{" "}
          <a href="/truke-yb-05s-deep-bass-bluetooth-headset/p/itmc8d6282812e2b">
            truke headset price
          </a>
          ,{" "}
          <a href="/truke-yb-11s-dual-battery-bluetooth-headset/p/itme6f8bf0036b98">
            truke yb-11s dual battery
          </a>
          ,{" "}
          <a href="/truke-b121-quick-charging-bluetooth-headset/p/itm6fde411c018df">
            truke B121 bluetooth headset
          </a>
        </p>
        <p>
          <br />
        </p>
        <p>
          Also check:{" "}
          <a href="/truke-b121-quick-charging-bluetooth-headset/p/itm6bac245f3e7e4">
            truke B121
          </a>
          ,{" "}
          <a href="/truke-b088-truly-wireless-bluetooth-headset/p/itme0f6fa6141c33">
            truke b088 truly bluetooth headset
          </a>
          ,{" "}
          <a href="/truke-b088-truly-wireless-bluetooth-headset/p/itm09e9426496893">
            truke b088 headset price
          </a>
          ,{" "}
          <a href="/audio-video/headphones/sony~brand/pr?sid=0pm%2Cfcn">
            Sony Extra Bass Earphones
          </a>
          ,{" "}
          <a href="/audio-video/headphones/philips~brand/pr?sid=0pm%2Cfcn">
            Philips Bluetooth Headphones
          </a>
        </p>
        <p>
          Boat Brand:{" "}
          <a href="/boat-rockerz-265v2-bluetooth-headset/p/itm8fecea276d09d">
            boat rockerz 265v2 bluetooth
          </a>
          ,{" "}
          <a href="/boat-rockerz-265v2-bluetooth-headset/p/itmafec472793a20">
            boat rockerz bluetooth headset
          </a>
          ,{" "}
          <a href="/boat-rockerz-265v2-bluetooth-headset/p/itmd5947b4cf7fc3">
            boat rockerz 265v2 price
          </a>
        </p>
      </div>
    </div>
  </div>
</div>

      <Footer />
    </div>
  );
};

export default ElectronicsItem;
