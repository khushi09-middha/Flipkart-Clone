import React from "react";
import Navbar from "./navbar";
import Footer from "./footer";
import Filter from "./filter";
const FurnitureItems=()=>{
  const products = [
    {
      id: 1,
      imageSrc: "https://rukminim2.flixcart.com/image/612/612/xif0q/shopsy-blanket/n/t/z/mink-blanket-in-self-emboss-design-solid-colours-deeksha-original-imaggz7nkvkyvtja.jpeg?q=70",
      title: "Deeksha Solid Single Mink Blanket For Heavy Winter",
      discountedPrice: "₹279",
      originalPrice: "₹1,999",
      discountPercentage: "86% off",
      offer: "Buy 3 items, save extra 15%"
    },
    {
      id: 2,
      imageSrc: "https://rukminim2.flixcart.com/image/612/612/xif0q/blanket/a/n/p/reversible-100-cotton-jaipuri-hand-block-printed-dohar-mltnd231-original-imagwytbs7fxfxbc.jpeg?q=70", 
      title: "CHICERY Floral Double Dohar For AC Room",
      discountedPrice: "₹279",
      originalPrice: "₹1,999",
      discountPercentage: "86% off",
      offer: "Buy 3 items, save extra 15%"
    },
    {
      id: 3,
      imageSrc: "https://rukminim2.flixcart.com/image/612/612/xif0q/blanket/t/d/o/printed-blanket-1010-printed-blanket-1010-la-verne-original-imagka7e669wwr2a.jpeg?q=70" ,
      title: "LA Verne Floral Double Mink Blanket",
      discountedPrice: "₹279",
      originalPrice: "₹1,999",
      discountPercentage: "86% off",
      offer: "Buy 3 items, save extra 15%"
    },
    {
        id: 4,
        imageSrc: "https://rukminim2.flixcart.com/image/612/612/kk8mcnk0/blanket/d/y/i/ultra-soft-warm-single-bed-mink-blanket-for-winter-tiger-print-original-imafzmgkpztwzptz.jpeg?q=70" ,
        title: "RIAN Animal Single Mink Blanket",
        discountedPrice: "₹279",
        originalPrice: "₹1,999",
        discountPercentage: "86% off",
        offer: "Buy 3 items, save extra 15%"
      },
      {
        id: 5,
        imageSrc: "https://rukminim2.flixcart.com/image/612/612/xif0q/curtain-fabric/w/y/b/1-524-cotton-curtain-for-window-boho-curtain-with-stainless-original-imagwzz9sq29wgaf.jpeg?q=70" ,
        title: "Cortina Cotton Curtain",
        discountedPrice: "₹279",
        originalPrice: "₹1,999",
        discountPercentage: "86% off",
        offer: "Buy 3 items, save extra 15%"
      },
      {
        id: 6,
        imageSrc: "https://rukminim2.flixcart.com/image/612/612/k0tw13k0/sofa-fabric/t/j/b/178-ks-sp-tl-sun-blue-combo-casa-furnishing-original-imafkgzgkk4ue8yy.jpeg?q=70" ,
        title: "CASA Furnishing Sofa Cover",
        discountedPrice: "₹279",
        originalPrice: "₹1,999",
        discountPercentage: "86% off",
        offer: "Buy 3 items, save extra 15%"
      },
      {
        id: 7,
        imageSrc: "https://rukminim2.flixcart.com/image/612/612/xif0q/curtain-accessory/9/j/5/214-137-pvc-transparent-15-mm-thick-ac-door-window-curtain-7-original-imagrvgyrcd3kvzb.jpeg?q=70" ,
        title: "Torodineart PVC Transparent Window Curtain",
        discountedPrice: "₹279",
        originalPrice: "₹1,999",
        discountPercentage: "86% off",
        offer: "Buy 3 items, save extra 15%"
      },
      {
        id: 8,
        imageSrc: "https://rukminim2.flixcart.com/image/612/612/l51d30w0/sofa-fabric/u/n/x/0-3-cotton-embroidered-sofa-cover-redcrown-original-imagfsx8ceff23xm.jpeg?q=70" ,
        title: "Redcrown Cotton Embroidered Sofa Cover",
        discountedPrice: "₹279",
        originalPrice: "₹1,999",
        discountPercentage: "86% off",
        offer: "Buy 3 items, save extra 15%"
      },
      {
        id: 9,
        imageSrc: "https://rukminim2.flixcart.com/image/612/612/kxrvi4w0/carpet-rug/o/h/4/45-60-artificial-green-grass-floor-mat-habitat-original-imaga5kjwshy5adz.jpeg?q=70" ,
        title: "Habitat Green Plastic, Polypropylene Area Rug",
        discountedPrice: "₹279",
        originalPrice: "₹1,999",
        discountPercentage: "86% off",
        offer: "Buy 3 items, save extra 15%"
      },
      {
        id: 10,
        imageSrc: "https://rukminim2.flixcart.com/image/612/612/k48rwcw0/bedsheet/r/k/e/bedsheet-ptp-3-flat-rajasthani-collection-original-imaffww9wzwq2wzd.jpeg?q=70" ,
        title: "Deepa 220 TC Cotton Double Printed Flat Bedsheet",
        discountedPrice: "₹279",
        originalPrice: "₹1,999",
        discountPercentage: "86% off",
        offer: "Buy 3 items, save extra 15%"
      },
      {
        id: 11,
        imageSrc: "https://rukminim2.flixcart.com/image/612/612/xif0q/blanket/z/l/n/la-blanket-solid-grey-la-blanket-solid-grey-la-verne-original-imagkzb6h27ehvmt.jpeg?q=70" ,
        title: "LA VERNE Self Design Double Mink Blanket",
        discountedPrice: "₹279",
        originalPrice: "₹1,999",
        discountPercentage: "86% off",
        offer: "Buy 3 items, save extra 15%"
      },
      {
        id: 12,
        imageSrc: "https://rukminim2.flixcart.com/image/612/612/xif0q/mat/g/5/6/medium-nhome560-1-nhome560-rjvt-original-imagwfhxwub57jaz.jpeg?q=70" ,
        title: "Rjvt Microfiber Polycotton, Polyester Floor Mat",
        discountedPrice: "₹279",
        originalPrice: "₹1,999",
        discountPercentage: "86% off",
        offer: "Buy 3 items, save extra 15%"
      }
    
];
    return(
        <div>
          <Navbar />
          <div className="furniture-container">
            <Filter />
            <div className="furniture-text">
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
            href="/home-furnishing/pr?sid=jra&marketplace=FLIPKART"
          >
            Home Furnishing
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
            If you have decided to buy home furnishing online, you’ve landed on
            the right page. From bed linen, curtains,{" "}
            <a href="/home-furnishing/floor-coverings/carpet-rugs/pr?sid=jra,kwq,z3j">
              carpets{" "}
            </a>
            and floor covering, cushions to kitchen and{" "}
            <a href="/home-furnishing/bath-linen/bath-linen-sets/pr?sid=jra,jk3,yyq">
              bathroom linen
            </a>
            , find it all under a single roof and at prices that are too hard to
            resist! Filter within colour, pattern, bank offers and discounts for
            quick customised results.
          </p>
        </div>
      </div>
      <h1 className="_10Ermr">Home Furnishing</h1>
      <span className="_2tDckM">
        (Showing 1 – 40 products of 11,251 products)
      </span>
      <div className="_5THWM1">
        <span className="_2i7N3j">Sort By</span>
        <div className="_10UF8M _3LsR0e">Popularity</div>
        <div className="_10UF8M">Price -- Low to High</div>
        <div className="_10UF8M">Price -- High to Low</div>
        <div className="_10UF8M">Newest First</div>
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
<div className="before-footer">
  <div className="_3rc_xQ">
    <div className="row">
      <div className="col gu12 _8Qljeg">
        <div className="_1Vtd9D">
          <section className="_1Dc42_">
            <h2 className="VgV9vQ">Home Furnishing Price List</h2>
            <div className="_1pbqS9 ZtLs68">
              <div className="_2J4zcy">Home Furnishing</div>
              <div className="_1liiiu">Price</div>
            </div>
            <ol>
              <li className="_1pbqS9">
                <div className="_2J4zcy">
                  <a href="/wakefit-elastic-strap-double-size-waterproof-mattress-cover/p/itm227caa87cff2a?pid=MTPFZAMHS5Y8W8PG&lid=LSTMTPFZAMHS5Y8W8PGOCXZH2&marketplace=FLIPKART">
                    Wakefit Elastic Strap Double Size Waterproof Mattress Cover
                  </a>
                </div>
                <div className="_1liiiu">Rs. 812</div>
              </li>
              <li className="_1pbqS9">
                <div className="_2J4zcy">
                  <a href="/wakefit-elastic-strap-double-size-waterproof-mattress-cover/p/itm400a3c56be115?pid=MTPFZAMRHGGDPCVD&lid=LSTMTPFZAMRHGGDPCVDKF3UZR&marketplace=FLIPKART">
                    Wakefit Elastic Strap Double Size Waterproof Mattress Cover
                  </a>
                </div>
                <div className="_1liiiu">Rs. 812</div>
              </li>
              <li className="_1pbqS9">
                <div className="_2J4zcy">
                  <a href="/samjeeda-handloom-carpets-brown-polyester-runner/p/itmddab2b16dd7d8?pid=CPGGCHNSHS7YTTVN&lid=LSTCPGGCHNSHS7YTTVNP6YIYF&marketplace=FLIPKART">
                    Samjeeda Handloom carpets Brown Polyester Runner
                  </a>
                </div>
                <div className="_1liiiu">Rs. 344</div>
              </li>
              <li className="_1pbqS9">
                <div className="_2J4zcy">
                  <a href="/maruti-enterprise-polyester-adults-washable-double-bed-king-size-big-large-super-6x6-7x7-8x8-6x6-5-ft-foldable-portable-insect-screen-machhardani-mosquito-net/p/itme61a6da2dd033?pid=MNTG7CCKXWJ8QGUG&lid=LSTMNTG7CCKXWJ8QGUG3L5IB8&marketplace=FLIPKART">
                    Maruti Enterprise Polyester Adults Washable ® Double Bed ,
                    King Size , Big Large Super - 6x6, 7x7, 8x8, 6x6.5 ft -
                    Foldable Portable Insect Screen Machhardani Mosquito Net
                  </a>
                </div>
                <div className="_1liiiu">Rs. 637</div>
              </li>
              <li className="_1pbqS9">
                <div className="_2J4zcy">
                  <a href="/la-verne-self-design-double-mink-blanket-heavy-winter/p/itm149d668673aa1?pid=BLAGGH7UFGJNQJMX&lid=LSTBLAGGH7UFGJNQJMXT7RYYM&marketplace=FLIPKART">
                    LA VERNE Self Design Double Mink Blanket for Heavy Winter
                  </a>
                </div>
                <div className="_1liiiu">Rs. 489</div>
              </li>
              <li className="_1pbqS9">
                <div className="_2J4zcy">
                  <a href="/deepa-220-tc-cotton-double-printed-flat-bedsheet/p/itmfc2742e9c0508?pid=BDSGW7YKYPE2RDQG&lid=LSTBDSGW7YKYPE2RDQGH0NWKK&marketplace=FLIPKART">
                    Deepa 220 TC Cotton Double Printed Flat Bedsheet
                  </a>
                </div>
                <div className="_1liiiu">Rs. 427</div>
              </li>
              <li className="_1pbqS9">
                <div className="_2J4zcy">
                  <a href="/dyanifashion-air-conditioner-cover/p/itm2c53cb1af89aa?pid=ALCGZ74FKGJFWY2Q&lid=LSTALCGZ74FKGJFWY2QWQLVO7&marketplace=FLIPKART">
                    dyanifashion Air Conditioner Cover
                  </a>
                </div>
                <div className="_1liiiu">Rs. 153</div>
              </li>
              <li className="_1pbqS9">
                <div className="_2J4zcy">
                  <a href="/cosito-144-tc-cotton-double-animal-flat-bedsheet/p/itmab8b6f092ddc5?pid=BDSGKQTVXXPBY6FY&lid=LSTBDSGKQTVXXPBY6FY8VWBOH&marketplace=FLIPKART">
                    Cosito 144 TC Cotton Double Animal Flat Bedsheet
                  </a>
                </div>
                <div className="_1liiiu">Rs. 279</div>
              </li>
              <li className="_1pbqS9">
                <div className="_2J4zcy">
                  <a href="/furshine-polyester-abstract-sofa-cover/p/itmd29f385fbeafc?pid=SLIGUNMQGNRFZ7DE&lid=LSTSLIGUNMQGNRFZ7DEMJKMRA&marketplace=FLIPKART">
                    FurShine Polyester Abstract Sofa Cover
                  </a>
                </div>
                <div className="_1liiiu">Rs. 2699</div>
              </li>
              <li className="_1pbqS9">
                <div className="_2J4zcy">
                  <a href="/cosito-144-tc-cotton-double-jaipuri-prints-flat-bedsheet/p/itm84e98ff158d1a?pid=BDSGQMP9UC8UPTUB&lid=LSTBDSGQMP9UC8UPTUBDMDNAG&marketplace=FLIPKART">
                    Cosito 144 TC Cotton Double Jaipuri Prints Flat Bedsheet
                  </a>
                </div>
                <div className="_1liiiu">Rs. 279</div>
              </li>
            </ol>
            <div className="XNAA65">
              This data was last updated on 2024/01/28
            </div>
          </section>
          <div>
            <a href="https://www.flipkart.com/home-furnishing/urban-space~brand/pr?sid=jra">
              Urban Space Home Furnishing
            </a>{" "}
            ,
            <a href="https://www.flipkart.com/home-furnishing/sassoon~brand/pr?sid=jra">
              Sassoon Home Furnishing
            </a>{" "}
            ,
            <a href="https://www.flipkart.com/home-furnishing/livpure-smart~brand/pr?sid=jra">
              Livpure Smart Home Furnishing
            </a>{" "}
            ,
            <a href="https://www.flipkart.com/home-furnishing/ddecor-live-beautiful~brand/pr?sid=jra">
              DDECOR Live beautiful Home Furnishing
            </a>{" "}
            ,
            <a href="https://www.flipkart.com/home-furnishing/bella-casa~brand/pr?sid=jra">
              BELLA CASA Home Furnishing
            </a>{" "}
            ,
            <a href="https://www.flipkart.com/home-furnishing/pindia~brand/pr?sid=jra">
              Pindia Home Furnishing
            </a>{" "}
            ,
            <a href="https://www.flipkart.com/home-furnishing/kuber-industries~brand/pr?sid=jra">
              KUBER INDUSTRIES Home Furnishing
            </a>{" "}
            ,
            <a href="https://www.flipkart.com/home-furnishing/croox~brand/pr?sid=jra">
              croox Home Furnishing
            </a>{" "}
            ,
            <a href="https://www.flipkart.com/home-furnishing/house-of-quirk~brand/pr?sid=jra">
              HOUSE OF QUIRK Home Furnishing
            </a>{" "}
            ,
            <a href="https://www.flipkart.com/home-furnishing/jdx~brand/pr?sid=jra">
              JDX Home Furnishing
            </a>{" "}
            ,
            <a href="https://www.flipkart.com/curtains-accessories/pr?sid=jra,sl5">
              Curtains &amp; Accessories
            </a>{" "}
            ,
            <a href="https://www.flipkart.com/home-furnishing/metro-living~brand/pr?sid=jra">
              METRO LIVING Home Furnishing
            </a>{" "}
            ,
            <a href="https://www.flipkart.com/home-furnishing/bianca~brand/pr?sid=jra">
              Bianca Home Furnishing
            </a>{" "}
            ,
            <a href="https://www.flipkart.com/home-furnishing/trident~brand/pr?sid=jra">
              Trident Home Furnishing
            </a>{" "}
            ,
            <a href="https://www.flipkart.com/home-furnishing/storyhome~brand/pr?sid=jra">
              Story@home Home Furnishing
            </a>{" "}
            ,
            <a href="https://www.flipkart.com/home-furnishing/hotkei~brand/pr?sid=jra">
              Hotkei Home Furnishing
            </a>{" "}
            ,
            <a href="https://www.flipkart.com/home-furnishing/lushomes~brand/pr?sid=jra">
              Lushomes Home Furnishing
            </a>{" "}
            ,
            <a href="https://www.flipkart.com/home-furnishing/exotic~brand/pr?sid=jra">
              Exotic Home Furnishing
            </a>{" "}
            ,
            <a href="https://www.flipkart.com/home-furnishing/sleepycat~brand/pr?sid=jra">
              SleepyCat Home Furnishing
            </a>{" "}
            ,
            <a href="https://www.flipkart.com/home-furnishing/bombay-dyeing~brand/pr?sid=jra">
              Bombay Dyeing Home Furnishing
            </a>
            <br />
            <h2>Home Furnishings Online - Setting Up a New Home</h2>
            <div>
              Thanks to the fact that we can shop for home furnishings online
              today, getting our house done is much easier than in the past.
              Whether it’s a modern look, a traditional look or a vintage look
              that you want, you can easily buy home furnishing products online
              without having to spend a day comparing beds, show pieces, coffee
              tables and other products in stores. Easy, right? However, before
              you begin to shop for home furnishings online, let’s have a look
              at a few tips to help you choose items wisely and furnish your
              house in the best way.
            </div>
            <h2>Home Furnishings Online for Your Living Room</h2>
            <div>
              While sofa sets and coffee tables play an important role in
              deciding the look of your living room, you also have a range of
              other home furnishing items that have an equally important role to
              play. Sofa fabrics and{" "}
              <a href="/home-furnishing/living-room-furnishing/sofa-covers/pr?sid=vdm,30u,dw1">
                sofa covers
              </a>
              , for one, go a long way in adding to the look of your sofa sets.
              Brands like Shiv Kripa have covers in elegant designs that are
              sure to take the look of your sofas to the next level. Apart from
              this, you can also shop for comfortable and stylish cushions from
              brands like Recron and Arip.
            </div>
            <div />
            <div>
              If you have a large living room, nothing can help fill the space
              better than a stylish divan set from brands like Zain and Supreme.
              You have divan sets in a range of stylish printed designs that you
              can consider buying for your living room.&nbsp;
            </div>
            <h2>Home Furnishings for a More Inviting Bedroom</h2>
            <div>
              When it comes to furnishing your bedroom, there is no end to how
              creative you can be with the range of home furnishing items that
              you’ll find online from{" "}
              <a href="/home-furnishing/bed-linen/bedsheets/pr?sid=vdm,uj4,64i">
                bedsheets
              </a>{" "}
              to{" "}
              <a href="/home-furnishing/curtains-accessories/curtains/pr?sid=vdm,lb9,1s3">
                curtains
              </a>
              ,
              <a href="/home-furnishing/floor-coverings/mats/pr?sid=vdm,l9m,9u5">
                {" "}
                mats
              </a>{" "}
              and other bedroom furnishings. Brands like Zesture, IWS and
              Supreme have an interesting collection of beautiful mats that
              won’t just look good in your bedroom but in your living room
              too.&nbsp;
            </div>
            <h2>Buy Home Furnishings Online for Your Bathroom</h2>
            <div>
              Laundry baskets, shower curtains, bath mats and other such bath
              accessories go a long way in making a comfortable and cosier
              bathroom. No matter what the interiors in your bathroom are like,
              you can easily buy home furnishings online to find shower curtains
              in a range of designs from Kuber and Cortina and choose what goes
              with your bathroom in the best way.&nbsp;
            </div>
            <div />
            <div>
              And this is not all. You can also buy home furnishings online to
              find a range of items. If you are the kind that likes entertaining
              people in your house more often, brands like E-retailer,
              RoyaltyLane and Kuber have a range of table linen sets, napkin
              rings and coasters that are sure to add to the look of the spread
              you lay out on your dining table. So, whether it’s for your
              bedroom, your living room, your kitchen or your bathroom, shopping
              for home furnishings online is sure to help you buy all that you
              need for a beautiful and more attractive home without the need for
              even stepping out of the house.&nbsp;
            </div>
            <h2>Trending Home Furnishing Products Online</h2>
            <table>
              <tbody>
                <tr>
                  <td>
                    <span>
                      <a href="/home-furnishing/kitchen-table-linen/kitchen-linen-sets/pr?sid=jra,iwp,glu">
                        Kitchen Linen Sets
                      </a>
                    </span>
                  </td>
                  <td>
                    <span>
                      <a href="/home-furnishing/bed-linen-blankets/pr?sid=jra,knw">
                        Bed Linen
                      </a>
                    </span>
                  </td>
                  <td>
                    <span>
                      <a href="/home-furnishing/bath-linen/pr?sid=jra,jk3">
                        Bath Linen
                      </a>
                    </span>
                  </td>
                  <td>
                    <span>
                      <a href="/home-furnishing/covers-protectors/sofa-covers/pr?sid=jra,ixy,uis">
                        Sofa Covers
                      </a>
                    </span>
                  </td>
                </tr>
                <tr>
                  <td>
                    <a href="/home-furnishing/curtains-accessories/curtains/pr?sid=jra,sl5,2va">
                      Curtains
                    </a>
                  </td>
                  <td>
                    <a href="/home-furnishing/bed-linen-blankets/blankets/pr?sid=jra,knw,llw">
                      Blankets
                    </a>
                  </td>
                  <td>
                    <a href="/home-furnishing/bath-linen/shower-curtains/pr?sid=jra,jk3,kok">
                      Shower Curtains
                    </a>
                  </td>
                  <td>
                    <a href="/home-furnishing/kitchen-table-linen/coasters/pr?sid=jra,iwp,2pd">
                      Coasters
                    </a>
                  </td>
                </tr>
                <tr>
                  <td>
                    <a href="/home-furnishing/floor-coverings/pr?sid=jra,kwq">
                      Floor Coverings
                    </a>
                  </td>
                  <td>
                    <a href="/home-furnishing/bed-linen-blankets/bedsheets/pr?sid=jra,knw,qcw">
                      Bed Sheets
                    </a>
                  </td>
                  <td>
                    <a href="/home-furnishing/bath-linen/bath-towels/pr?sid=jra,jk3,wtg">
                      Bath Towels
                    </a>
                  </td>
                  <td>
                    <a href="/home-furnishing/kitchen-table-linen/napkins/pr?sid=jra,iwp,5x4">
                      Napkins
                    </a>
                  </td>
                </tr>
                <tr>
                  <td>
                    <a href="/home-furnishing/cushions-pillows/cushions/pr?sid=jra,kzv,u7w">
                      Cushions
                    </a>
                  </td>
                  <td>
                    <a href="/home-furnishing/bed-linen-blankets/bed-covers/pr?sid=jra,knw,dgd">
                      Bed Covers
                    </a>
                  </td>
                  <td>
                    <a href="/home-furnishing/floor-coverings/carpet-rugs/pr?sid=jra,kwq,z3j">
                      Carpet Rugs
                    </a>
                  </td>
                  <td>
                    <a href="/home-furnishing/kitchen-table-linen/aprons/pr?sid=jra,iwp,bmf">
                      Aprons
                    </a>
                  </td>
                </tr>
                <tr>
                  <td>
                    <a href="/home-furnishing/cushions-pillows/pillows/pr?sid=jra,kzv,3bw">
                      Pillows
                    </a>
                  </td>
                  <td>
                    <a href="/home-furnishing/kitchen-table-linen/table-linen-sets/pr?sid=jra,iwp,tg1">
                      Table Linen Set
                    </a>
                  </td>
                  <td>
                    <a href="/home-furnishing/floor-coverings/mats/pr?sid=jra,kwq,exp">
                      Mats
                    </a>
                  </td>
                  <td>
                    <a href="/home-furnishing/kitchen-table-linen/napkin-rings/pr?sid=jra,iwp,tqe">
                      Napkin Rings
                    </a>
                  </td>
                </tr>
              </tbody>
            </table>
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
                  <span>Q.How do I know a towel is of good quality?</span>
                </div>
                <div className="JSB0zB">
                  <span>
                    A.A good-quality towel is much heavier when compared to how
                    heavy it appears, and it is more absorbent.
                  </span>
                </div>
              </li>
              <li className="_1Ug_6E">
                <div className="_1Sykp2">
                  <span>Q.Are curtains better or blinds?</span>
                </div>
                <div className="JSB0zB">
                  <span>
                    A.Curtains give a light and breezy feel to the home
                    furnishing. On the other hand, blinds give intransigence to
                    the interior. Blinds are preferred in smaller rooms, and
                    they are generally a fit for windows.
                  </span>
                </div>
              </li>
              <li className="_1Ug_6E">
                <div className="_1Sykp2">
                  <span>Q.How to lighten up my old sofa?</span>
                </div>
                <div className="JSB0zB">
                  <span>
                    A.
                    <p>
                      Scatter a few cushions. The fabric and the texture of the
                      pillows are a great way to set the mood. They come in
                      numerous styles, colours, textures, and patterns.
                    </p>
                  </span>
                </div>
              </li>
              <li className="_1Ug_6E">
                <div className="_1Sykp2">
                  <span>
                    Q.What kind of fabric is recommended for a carpet or rug?
                  </span>
                </div>
                <div className="JSB0zB">
                  <span>
                    A.Wool is a commonly used fabric when it comes to carpets
                    and rugs. It can hold warmth, feel soft, and be a great
                    noise insulator.
                  </span>
                </div>
              </li>
              <li className="_1Ug_6E">
                <div className="_1Sykp2">
                  <span>Q.How to select the colour of a sofa throw?</span>
                </div>
                <div className="JSB0zB">
                  <span>
                    A.A sofa throw colour can contrast the furniture colour,
                    making the piece of furniture more appealing.
                  </span>
                </div>
              </li>
              <li className="_1Ug_6E">
                <div className="_1Sykp2">
                  <span>Q.Does a glass table need linen?</span>
                </div>
                <div className="JSB0zB">
                  <span>
                    A.Table linen can enhance the look of the table, be it glass
                    or wood, and it is a great item for enhancing home
                    furnishing.
                  </span>
                </div>
              </li>
              <li className="_1Ug_6E">
                <div className="_1Sykp2">
                  <span>Q.How are pouffes different from footstools?</span>
                </div>
                <div className="JSB0zB">
                  <span>
                    A.Pouffes are just like footstools. Footstools are
                    traditional, and pouffes are the newer version with an
                    interesting twist of design, colour, and fabric. Footstools
                    are hard, while pouffes are not just sturdy but soft too.
                  </span>
                </div>
              </li>
              <li className="_1Ug_6E">
                <div className="_1Sykp2">
                  <span>Q.How to choose the right upholstery fabric?</span>
                </div>
                <div className="JSB0zB">
                  <span>
                    A.Upholstery fabric can enhance the look and feel of the
                    furniture as it adds elegance. When choosing the upholstery
                    for a sofa, the elements to look for are the fabric, style,
                    and texture.
                  </span>
                </div>
              </li>
              <li className="_1Ug_6E">
                <div className="_1Sykp2">
                  <span>Q.How to quickly do a makeover for a bedroom?</span>
                </div>
                <div className="JSB0zB">
                  <span>
                    A.Bedspreads can work wonders by adding style and colour to
                    the space. They are light, and also, the fabric, pattern,
                    and type of the bedspread can change the look of your home
                    decor.
                  </span>
                </div>
              </li>
              <li className="_1Ug_6E">
                <div className="_1Sykp2">
                  <span>Q.How to add warmth to a bedroom?</span>
                </div>
                <div className="JSB0zB">
                  <span>
                    A.A comforter can add much-needed warmth and cosiness to the
                    bedroom, especially in a cold climate.
                  </span>
                </div>
              </li>
            </ol>
          </section>
        </div>
      </div>
    
    

    </div>
  </div>
</div>

          
          <Footer />
        </div>
    )
}
export default FurnitureItems;