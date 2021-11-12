// items

const menu = [
  {
    id: 1,
    title: "Truck silver M Hollow blk 139MM",
    category: "truck",
    price: 149.99,
    img: "	https://img.skatewarehouse.com/watermark/rs.php?path=SIMHTR-BR-BK-1.jpg&nw=435",
    desc: `See the art through the streets when skating the Chocolate Perez Vanner Deck 8.375 x 32. This is a pro quality skateboard deck constructed of traditional 7-ply maple wood with background stains that could be different than what is pictured. FREE griptape is available with the purchase of the deck.`,
  },
  {
    id: 2,
    title: "Chocolate Perez Vanner Deck",
    category: "shape",
    price: 48.98,
    img: "https://img.skatewarehouse.com/cache/205/CHPV83DK-1.jpg",
    desc: `vaporware iPhone mumblecore selvage raw denim slow-carb leggings gochujang helvetica man braid jianbing. Marfa thundercats `,
  },
  {
    id: 3,
    title: "Bones STF Ryan Crash & Burn 99a V4 Wide Wheels",
    category: "wheels",
    price: 34.99,
    img: "https://img.skatewarehouse.com/watermark/rs.php?path=BSRCBWH-WH1-3.jpg&nw=435",
    desc: `The Bones STF Ryan Crash & Burn 99a V4 Wide Wheels are specifically formulated for what you skate. The V-Series Wheels are made with Bones Street Tech Formula, giving you more slide-ability and way less flat spots creating a wheel with a substantially higher rebound for more speed and amazing slide capabilities. Manufactured in the U.S. at the Bones factory in Santa Barbara, California, the V-Series are skater engineered and designed for the ultimate performance. Wheels are sold in sets of four.`,
  },
  {
    id: 4,
    title: "Independent S-11 Hollow Stndrd Truck",
    category: "truck",
    price: 24.98,
    img: "https://img.skatewarehouse.com/watermark/rs.php?path=INWBTR-SI-BK-1.jpg&nw=435",
    desc: `The Independent S-11 Hollow Standard Truck Winkowski Ballr feature new updated geometry. This is the new Standard. You get superior turn and stability, better grind clearance, improved "no hang-up yoke", and a lightweight hanger. Only the best materials used and assembled locally, here in the U.S. Independent detailing throughout. `,
  },
  {
    id: 5,
    title: "Girl Bannerot Contemplation Deck",
    category: "shape",
    price: 55.0,
    img: "https://img.skatewarehouse.com/watermark/rs.php?path=GICB82DK-1.jpg&nw=435",
    desc: `Don't spend too much time thinking when skating the Girl Bannerot Contemplation Deck 8.0 x 31.875. This is a pro-quality skateboard deck constructed from traditional 7-ply maple wood with background stains that could be different than what is pictured. FREE griptape is available with the purchase of the deck. `,
  },
  {
    id: 6,
    title: "Venture Manderson Ventura Low Trucks",
    category: "truck",
    price: 24.99,
    img: "https://img.skatewarehouse.com/watermark/rs.php?path=VTMAVLT-SI-SI-1.jpg&nw=435",
    desc: `Get out and enjoy the sunshine when skating with the Venture Manderson Ventura Low Trucks. These are a top quality trucks that are manufactured with a forged baseplate with reinforced hollow steel kingpins with top quality bushings to give you the best turn radius you can get. Designed with Venture detailing on the baseplate and Manderson detailing on the front of the hangar. `,
  },
  {
    id: 7,
    title: "Spitfire 80HD Charger Conical Wheels",
    category: "wheels",
    price: 36.99,
    img: "https://img.skatewarehouse.com/watermark/rs.php?path=SF8OCWH-WH1-1.jpg&nw=435",
    desc: `The Spitfire 80HD Charger Conical Wheels Clear take you where you need to go. A reformulated 80a DU wheel for burning the roughest terrain. Features cored construction for speed and support and Spitfire graphic at one side.`,
  },
  {
    id: 8,
    title: "Flip Team Strobe Black Deck",
    category: "shape",
    price: 54.99,
    img: "https://img.skatewarehouse.com/watermark/rs.php?path=FLTSTBKDK-1.jpg&nw=435",
    desc: `Kick it and watch it flip, especially when skating the Flip Team Strobe Black Deck 8.5 x 32. This is a pro quality skateboard deck constructed from traditional 7-ply maple wood with background stains that could be different than what is pictured. FREE griptape is available with the purchase of the deck.`,
  },
  {
    id: 9,
    title: "Ricta Brevard Reflective Naturals Wide 99a Wheels",
    category: "wheels",
    price: 36.99,
    img: "https://img.skatewarehouse.com/watermark/rs.php?path=RIBMSWH-WH-1.jpg&nw=435",
    desc: `The Ricta Brevard Reflective Naturals Wide 99a Wheels feature Ricta's classic street style pill shape and 99a Ricta Naturals urethane. Proven by the pros for unmatched street and park performance. Sold in sets of FOUR. `,
  },

  {
    id: 10,
    title: "Bones Reds Bearings",
    category: "bearings",
    price: 17.95,
    img: "https://img.skatewarehouse.com/watermark/rs.php?path=BSREDBR-1.jpg&nw=870",
    desc: `Bones Reds are dedicated to producing the highest quality skate bearings manufactured in China, inspecting them twice before shipping them to skaters. They offer the greatest combination of performance, durability and low cost in the industry. Giving a near Bones Swiss performance at a fraction of the cost. Sold in set of eight for all four wheels. Removable high speed ball retainer and non contact rubber shield`,
  },
];

const sectionCenter = document.querySelector(".section-center");
const containerBtn = document.querySelector(".btn-container");

// loaded items
window.addEventListener("DOMContentLoaded", function () {
  displayMenuItems(menu);
  displayMenuButtons(menu)
});

function displayMenuItems(items) {
  let displayItems = items.map((item) => {
    return `<article class="menu-item">
        <img
          src=${item.img}
          class="photo"
          alt=${item.title}
        />
        <div class="item-info">
          <header>
            <h4>${item.title}</h4>
            <h4 class="price">$${item.price}</h4>
          </header>
          <p class="item-text">
            ${item.desc}
          </p>
        </div>
      </article>`;
  });
  displayItems = displayItems.join("");
  sectionCenter.innerHTML = displayItems;
}

function displayMenuButtons() {
  const categories = menu.reduce(
    function (values, item) {
      if (!values.includes(item.category)) {
        values.push(item.category);
      }
      return values;
    },
    ["all"]
  );
  const catBtn = categories
    .map(function (category) {
      return `<button class="filter-btn" type="button" data-id="${category}">${category}</button>`;
    })
    .join("");
  containerBtn.innerHTML = catBtn;
  const filterBtns = document.querySelectorAll(".filter-btn");
  // filter items
  filterBtns.forEach(function (btn) {
    btn.addEventListener("click", function (e) {
      const category = e.currentTarget.dataset.id;
      const menuCategory = menu.filter((item) => {
        if (item.category === category) {
          return item;
        }
      });
      if (category === "all") {
        displayMenuItems(menu);
      } else {
        displayMenuItems(menuCategory);
      }
    });
  });
}
