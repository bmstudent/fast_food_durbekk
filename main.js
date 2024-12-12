let cards = document.querySelector("#cards");

function foods(a, b, c) {
  cards.innerHTML += `
     <div
          id="card"
          class="w-80 h-auto p-2 bg-white border-2 mt-16 border-black rounded-md col-span-1"
        >
          <img
            class="w-full h-60 objeck-cover rounded-lg"
            id="img"
            src=" ${a}"
            alt=""
          />
          <h1 id="title" class="text-2xl py-1 font-bold text-gray-900">${b}</h1>
          <p id="text" class="text-2xl py-1 font-bold text-blue-600">${c}</p>
          <button class="bg-gray-900 p-2 w-full text-2xl text-white rounded-lg active:bg-gray-800 active:scale-95">
            BUY
          </button>
        </div>
    `;
}

foods(
  "https://avatars.mds.yandex.net/get-altay/1426646/2a000001891cdebef2ce80c6f7583f0ea542/XXL_height",
  "LOVASH ",
  "2$"
);

foods(
  "https://www.afisha.ru/uploads/215211741ffc49a8beb9cdbfd38d0061.jpg",
  "KFC",
  "4$"
);

foods(
  "https://images.squarespace-cdn.com/content/v1/5ec1febb58a4890157c8fbeb/19ebb9ed-4862-46e1-9f7c-4e5876730227/Beetroot-Burger.jpg?format=2500w",
  "BURGER",
  "3$"
);

foods(
  "https://i.pinimg.com/736x/ef/02/1e/ef021eb216830d7455176db78e9fb4e6.jpg",
  "DANAR",
  "4$"
);

foods(
  "https://avatars.mds.yandex.net/get-altay/5533948/2a0000017cc806cd2f694b77c04bc5acafa0/XXL_height",
  "PIZZA",
  "8$"
);
foods(
  "https://avatars.mds.yandex.net/get-altay/1426646/2a000001891cdebef2ce80c6f7583f0ea542/XXL_height",
  "LOVASH ",
  "2$"
);

foods(
  "https://www.afisha.ru/uploads/215211741ffc49a8beb9cdbfd38d0061.jpg",
  "KFC",
  "4$"
);

foods(
  "https://i.pinimg.com/736x/ef/02/1e/ef021eb216830d7455176db78e9fb4e6.jpg",
  "DANAR",
  "4$"
);

foods(
  "https://avatars.mds.yandex.net/i?id=7213ce78b9ba37e16fc05400e123825b_l-6932444-images-thumbs&n=13",
  "PEPSI",
  "3$"
);

foods(
  "https://avatars.mds.yandex.net/i?id=f0b6470b78514a08808c925159ff4eab_l-7043025-images-thumbs&n=13",
  "COCA-COLA",
  "3$"
);

foods(
  "https://avatars.mds.yandex.net/i?id=602975f913d3212938056c02484769b0_l-10878377-images-thumbs&n=13",
  "SPRITE",
  "3$"
);

foods(
  "https://c.wallhere.com/photos/cc/bc/drink_Fanta_can-174550.png!d",
  "FANTA",
  "3$"
);
