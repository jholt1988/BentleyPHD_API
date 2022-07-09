const {Product} = require('../db');

const products = [
    {
        "productName": "Awesome Steel Sausages",
        "description": "laborum irure eiusmod enim est pariatur mollit ex exercitation deserunt sint in aute culpa minim",
        "price": 834.9,
        "inStockQuantity": 42,
        "isFeatured": false,
        "catergory": "Gaming Console",
        "image": "https://dummyimage.com/240X240/1db3c4/0011ff.jpg&text=Product",
        "VendorVendorId": "0b590752-23bd-490c-9821-4bfc884eee7a"
    },
    {
        "productName": "Sleek Cotton Cheese",
        "description": "Lorem sit aliqua ex adipisicing nisi esse minim sint irure sit voluptate enim adipisicing nulla magna cillum consectetur consequat consequat Lorem et mollit tempor velit",
        "price": 2562,
        "inStockQuantity": 299,
        "isFeatured": false,
        "catergory": "Gaming Console",
        "image": "https://dummyimage.com/240X240/1db3c4/0011ff.jpg&text=Product",
        "VendorVendorId": "1b9b4c00-8ba5-4b49-8662-89f4bb776100"
    },
    {
        "productName": "Unbranded Fresh Pizza",
        "description": "commodo",
        "price": 2284.1,
        "inStockQuantity": 273,
        "isFeatured": false,
        "catergory": "Cellphone",
        "image": "https://dummyimage.com/240X240/1db3c4/0011ff.jpg&text=Product",
        "VendorVendorId": "12b6bca0-23ae-4c52-9293-55f55a68113f"
    },
    {
        "productName": "Tasty Plastic Sausages",
        "description": "cillum magna labore",
        "price": 4572.3,
        "inStockQuantity": 412,
        "isFeatured": false,
        "catergory": "Gaming Console",
        "image": "https://dummyimage.com/240X240/1db3c4/0011ff.jpg&text=Product",
        "VendorVendorId": "00c289ed-f226-471e-acc4-fbe8a681826e"
    },
    {
        "productName": "Intelligent Wooden Bike",
        "description": "officia laboris pariatur aliqua amet duis mollit",
        "price": 2943.4,
        "inStockQuantity": 210,
        "isFeatured": false,
        "catergory": "Gaming Console",
        "image": "https://dummyimage.com/240X240/1db3c4/0011ff.jpg&text=Product",
        "VendorVendorId": "12b6bca0-23ae-4c52-9293-55f55a68113f"
    },
    {
        "productName": "Handcrafted Cotton Soap",
        "description": "ut id labore incididunt commodo aliquip do ipsum aliquip do occaecat excepteur ut adipisicing eiusmod incididunt sunt qui nulla mollit exercitation eu",
        "price": 1895.8,
        "inStockQuantity": 428,
        "isFeatured": false,
        "catergory": "Tablet",
        "image": "https://dummyimage.com/240X240/1db3c4/0011ff.jpg&text=Product",
        "VendorVendorId": "130db55d-c7c3-4845-b121-ce4177c46082"
    },
    {
        "productName": "Licensed Frozen Computer",
        "description": "nulla exercitation sunt enim laborum",
        "price": 36.7,
        "inStockQuantity": 151,
        "isFeatured": false,
        "catergory": "Tablet",
        "image": "https://dummyimage.com/240X240/1db3c4/0011ff.jpg&text=Product",
        "VendorVendorId": "0b590752-23bd-490c-9821-4bfc884eee7a"
    },
    {
        "productName": "Refined Metal Hat",
        "description": "sit amet aliqua cillum proident reprehenderit quis cupidatat eiusmod consequat amet do est laboris",
        "price": 462.5,
        "inStockQuantity": 298,
        "isFeatured": false,
        "catergory": "Laptop",
        "image": "https://dummyimage.com/240X240/1db3c4/0011ff.jpg&text=Product",
        "VendorVendorId": "00c289ed-f226-471e-acc4-fbe8a681826e"
    },
    {
        "productName": "Generic Fresh Sausages",
        "description": "dolor et ut dolore cupidatat pariatur dolore commodo quis ad aliquip consequat voluptate quis quis laboris sint anim reprehenderit voluptate tempor sit id",
        "price": 3144.6,
        "inStockQuantity": 52,
        "isFeatured": false,
        "catergory": "Cellphone",
        "image": "https://dummyimage.com/240X240/1db3c4/0011ff.jpg&text=Product",
        "VendorVendorId": "12b6bca0-23ae-4c52-9293-55f55a68113f"
    },
    {
        "productName": "Practical Rubber Hat",
        "description": "pariatur minim voluptate eu et",
        "price": 3099,
        "inStockQuantity": 12,
        "isFeatured": false,
        "catergory": "Desktop",
        "image": "https://dummyimage.com/240X240/1db3c4/0011ff.jpg&text=Product",
        "VendorVendorId": "12b6bca0-23ae-4c52-9293-55f55a68113f"
    },
    {
        "productName": "Refined Concrete Gloves",
        "description": "consectetur in duis quis dolore excepteur non tempor aute mollit mollit non ea reprehenderit Lorem pariatur culpa ex excepteur officia reprehenderit deserunt dolore",
        "price": 3095.5,
        "inStockQuantity": 486,
        "isFeatured": false,
        "catergory": "Gaming Console",
        "image": "https://dummyimage.com/240X240/1db3c4/0011ff.jpg&text=Product",
        "VendorVendorId": "0b590752-23bd-490c-9821-4bfc884eee7a"
    },
    {
        "productName": "Unbranded Frozen Cheese",
        "description": "",
        "price": 1527.1,
        "inStockQuantity": 51,
        "isFeatured": false,
        "catergory": "Tablet",
        "image": "https://dummyimage.com/240X240/1db3c4/0011ff.jpg&text=Product",
        "VendorVendorId": "00c289ed-f226-471e-acc4-fbe8a681826e"
    },
    {
        "productName": "Refined Plastic Chicken",
        "description": "irure reprehenderit adipisicing sint ut pariatur reprehenderit officia non laborum",
        "price": 576.3,
        "inStockQuantity": 410,
        "isFeatured": false,
        "catergory": "Cellphone",
        "image": "https://dummyimage.com/240X240/1db3c4/0011ff.jpg&text=Product",
        "VendorVendorId": "1b9b4c00-8ba5-4b49-8662-89f4bb776100"
    },
    {
        "productName": "Tasty Plastic Towels",
        "description": "ad dolore Lorem cupidatat eiusmod ad sunt dolore ut commodo nostrud cupidatat enim mollit anim elit laborum nulla cupidatat sit mollit sint non commodo ipsum",
        "price": 1494.6,
        "inStockQuantity": 118,
        "isFeatured": false,
        "catergory": "Cellphone",
        "image": "https://dummyimage.com/240X240/1db3c4/0011ff.jpg&text=Product",
        "VendorVendorId": "1b9b4c00-8ba5-4b49-8662-89f4bb776100"
    },
    {
        "productName": "Sleek Steel Pizza",
        "description": "fugiat",
        "price": 3282.6,
        "inStockQuantity": 246,
        "isFeatured": false,
        "catergory": "Laptop",
        "image": "https://dummyimage.com/240X240/1db3c4/0011ff.jpg&text=Product",
        "VendorVendorId": "00c289ed-f226-471e-acc4-fbe8a681826e"
    },
    {
        "productName": "Incredible Steel Shirt",
        "description": "irure nulla do elit laborum consequat Lorem eiusmod non velit reprehenderit nisi veniam qui ut est pariatur irure adipisicing",
        "price": 1193.7,
        "inStockQuantity": 39,
        "isFeatured": false,
        "catergory": "Cellphone",
        "image": "https://dummyimage.com/240X240/1db3c4/0011ff.jpg&text=Product",
        "VendorVendorId": "0b590752-23bd-490c-9821-4bfc884eee7a"
    },
    {
        "productName": "Small Cotton Tuna",
        "description": "ea magna cupidatat ut sit velit qui magna est aute reprehenderit minim ex cupidatat incididunt ipsum cillum proident nulla cupidatat",
        "price": 228.7,
        "inStockQuantity": 92,
        "isFeatured": false,
        "catergory": "Wearables",
        "image": "https://dummyimage.com/240X240/1db3c4/0011ff.jpg&text=Product",
        "VendorVendorId": "130db55d-c7c3-4845-b121-ce4177c46082"
    },
    {
        "productName": "Generic Frozen Chips",
        "description": "cupidatat ut labore et ipsum ipsum aliquip dolor proident et deserunt",
        "price": 1012,
        "inStockQuantity": 252,
        "isFeatured": false,
        "catergory": "Cellphone",
        "image": "https://dummyimage.com/240X240/1db3c4/0011ff.jpg&text=Product",
        "VendorVendorId": "130db55d-c7c3-4845-b121-ce4177c46082"
    },
    {
        "productName": "Licensed Rubber Shirt",
        "description": "",
        "price": 1856.1,
        "inStockQuantity": 242,
        "isFeatured": true,
        "catergory": "Wearables",
        "image": "https://dummyimage.com/240X240/1db3c4/0011ff.jpg&text=Product",
        "VendorVendorId": "1b9b4c00-8ba5-4b49-8662-89f4bb776100"
    },
    {
        "productName": "Practical Fresh Car",
        "description": "nulla tempor enim est laborum culpa velit sit",
        "price": 3697.9,
        "inStockQuantity": 394,
        "isFeatured": true,
        "catergory": "Desktop",
        "image": "https://dummyimage.com/240X240/1db3c4/0011ff.jpg&text=Product",
        "VendorVendorId": "1b9b4c00-8ba5-4b49-8662-89f4bb776100"
    },
    {
        "productName": "Tasty Metal Keyboard",
        "description": "Lorem irure irure eu ex reprehenderit adipisicing",
        "price": 4608.2,
        "inStockQuantity": 464,
        "isFeatured": false,
        "catergory": "Cellphone",
        "image": "https://dummyimage.com/240X240/1db3c4/0011ff.jpg&text=Product",
        "VendorVendorId": "12b6bca0-23ae-4c52-9293-55f55a68113f"
    },
    {
        "productName": "Practical Wooden Bike",
        "description": "id dolor magna eu occaecat tempor voluptate",
        "price": 4827,
        "inStockQuantity": 192,
        "isFeatured": true,
        "catergory": "Wearables",
        "image": "https://dummyimage.com/240X240/1db3c4/0011ff.jpg&text=Product",
        "VendorVendorId": "0b590752-23bd-490c-9821-4bfc884eee7a"
    },
    {
        "productName": "Tasty Steel Table",
        "description": "aliquip veniam non Lorem ea nulla ipsum nostrud incididunt dolor et id duis magna",
        "price": 501,
        "inStockQuantity": 399,
        "isFeatured": false,
        "catergory": "Desktop",
        "image": "https://dummyimage.com/240X240/1db3c4/0011ff.jpg&text=Product",
        "VendorVendorId": "00c289ed-f226-471e-acc4-fbe8a681826e"
    },
    {
        "productName": "Fantastic Granite Chair",
        "description": "aliquip Lorem reprehenderit mollit labore elit quis duis duis nulla magna sint est occaecat aute mollit id excepteur non sint laboris consectetur ullamco",
        "price": 2347.6,
        "inStockQuantity": 66,
        "isFeatured": false,
        "catergory": "Gaming Console",
        "image": "https://dummyimage.com/240X240/1db3c4/0011ff.jpg&text=Product",
        "VendorVendorId": "0b590752-23bd-490c-9821-4bfc884eee7a"
    },
    {
        "productName": "Refined Rubber Table",
        "description": "cillum consectetur anim ad ipsum aute",
        "price": 1936.6,
        "inStockQuantity": 77,
        "isFeatured": false,
        "catergory": "Desktop",
        "image": "https://dummyimage.com/240X240/1db3c4/0011ff.jpg&text=Product",
        "VendorVendorId": "0b590752-23bd-490c-9821-4bfc884eee7a"
    },
    {
        "productName": "Practical Metal Computer",
        "description": "proident sunt voluptate id ullamco veniam adipisicing esse consequat excepteur incididunt magna excepteur",
        "price": 4921,
        "inStockQuantity": 471,
        "isFeatured": false,
        "catergory": "Cellphone",
        "image": "https://dummyimage.com/240X240/1db3c4/0011ff.jpg&text=Product",
        "VendorVendorId": "12b6bca0-23ae-4c52-9293-55f55a68113f"
    },
    {
        "productName": "Refined Rubber Chicken",
        "description": "in duis aute sint pariatur laborum cupidatat velit adipisicing sint",
        "price": 26.4,
        "inStockQuantity": 53,
        "isFeatured": false,
        "catergory": "Laptop",
        "image": "https://dummyimage.com/240X240/1db3c4/0011ff.jpg&text=Product",
        "VendorVendorId": "130db55d-c7c3-4845-b121-ce4177c46082"
    },
    {
        "productName": "Awesome Wooden Table",
        "description": "duis in deserunt consectetur voluptate velit excepteur nulla fugiat cillum ipsum proident ut duis",
        "price": 270.6,
        "inStockQuantity": 416,
        "isFeatured": true,
        "catergory": "Laptop",
        "image": "https://dummyimage.com/240X240/1db3c4/0011ff.jpg&text=Product",
        "VendorVendorId": "00c289ed-f226-471e-acc4-fbe8a681826e"
    },
    {
        "productName": "Fantastic Concrete Fish",
        "description": "enim esse do mollit excepteur aute velit adipisicing commodo nulla non dolore laborum incididunt amet magna",
        "price": 1521.5,
        "inStockQuantity": 466,
        "isFeatured": false,
        "catergory": "Cellphone",
        "image": "https://dummyimage.com/240X240/1db3c4/0011ff.jpg&text=Product",
        "VendorVendorId": "1b9b4c00-8ba5-4b49-8662-89f4bb776100"
    },
    {
        "productName": "Awesome Wooden Keyboard",
        "description": "",
        "price": 4669.3,
        "inStockQuantity": 393,
        "isFeatured": false,
        "catergory": "Cellphone",
        "image": "https://dummyimage.com/240X240/1db3c4/0011ff.jpg&text=Product",
        "VendorVendorId": "0b590752-23bd-490c-9821-4bfc884eee7a"
    },
    {
        "productName": "Practical Wooden Chair",
        "description": "ipsum in eu excepteur est dolor reprehenderit pariatur",
        "price": 4899.4,
        "inStockQuantity": 197,
        "isFeatured": false,
        "catergory": "Cellphone",
        "image": "https://dummyimage.com/240X240/1db3c4/0011ff.jpg&text=Product",
        "VendorVendorId": "0b590752-23bd-490c-9821-4bfc884eee7a"
    },
    {
        "productName": "Intelligent Frozen Gloves",
        "description": "est laborum ea nostrud voluptate cupidatat amet irure",
        "price": 725.6,
        "inStockQuantity": 132,
        "isFeatured": false,
        "catergory": "Gaming Console",
        "image": "https://dummyimage.com/240X240/1db3c4/0011ff.jpg&text=Product",
        "VendorVendorId": "12b6bca0-23ae-4c52-9293-55f55a68113f"
    },
    {
        "productName": "Practical Rubber Car",
        "description": "deserunt nulla ipsum cillum duis reprehenderit id consectetur",
        "price": 2505.2,
        "inStockQuantity": 420,
        "isFeatured": false,
        "catergory": "Laptop",
        "image": "https://dummyimage.com/240X240/1db3c4/0011ff.jpg&text=Product",
        "VendorVendorId": "12b6bca0-23ae-4c52-9293-55f55a68113f"
    },
    {
        "productName": "Rustic Frozen Bike",
        "description": "quis voluptate laborum minim tempor fugiat velit non sunt dolore amet enim exercitation excepteur eiusmod magna sunt adipisicing do ad eiusmod velit tempor Lorem sit",
        "price": 1985.2,
        "inStockQuantity": 23,
        "isFeatured": false,
        "catergory": "Wearables",
        "image": "https://dummyimage.com/240X240/1db3c4/0011ff.jpg&text=Product",
        "VendorVendorId": "00c289ed-f226-471e-acc4-fbe8a681826e"
    },
    {
        "productName": "Intelligent Plastic Bacon",
        "description": "",
        "price": 4688.3,
        "inStockQuantity": 126,
        "isFeatured": false,
        "catergory": "Gaming Console",
        "image": "https://dummyimage.com/240X240/1db3c4/0011ff.jpg&text=Product",
        "VendorVendorId": "00c289ed-f226-471e-acc4-fbe8a681826e"
    },
    {
        "productName": "Tasty Granite Salad",
        "description": "proident et eu velit exercitation eiusmod ad enim eiusmod anim",
        "price": 4113.9,
        "inStockQuantity": 165,
        "isFeatured": false,
        "catergory": "Cellphone",
        "image": "https://dummyimage.com/240X240/1db3c4/0011ff.jpg&text=Product",
        "VendorVendorId": "0b590752-23bd-490c-9821-4bfc884eee7a"
    },
    {
        "productName": "Awesome Concrete Keyboard",
        "description": "",
        "price": 2968.6,
        "inStockQuantity": 155,
        "isFeatured": false,
        "catergory": "Laptop",
        "image": "https://dummyimage.com/240X240/1db3c4/0011ff.jpg&text=Product",
        "VendorVendorId": "0b590752-23bd-490c-9821-4bfc884eee7a"
    },
    {
        "productName": "Practical Plastic Bike",
        "description": "in dolore adipisicing minim nulla tempor reprehenderit quis adipisicing dolore labore nulla adipisicing do veniam quis ea occaecat aliquip magna eu amet velit",
        "price": 4936,
        "inStockQuantity": 357,
        "isFeatured": false,
        "catergory": "Laptop",
        "image": "https://dummyimage.com/240X240/1db3c4/0011ff.jpg&text=Product",
        "VendorVendorId": "12b6bca0-23ae-4c52-9293-55f55a68113f"
    },
    {
        "productName": "Unbranded Steel Chicken",
        "description": "nulla sint consectetur magna non cupidatat nulla reprehenderit nulla amet magna ad",
        "price": 2165.7,
        "inStockQuantity": 341,
        "isFeatured": false,
        "catergory": "Gaming Console",
        "image": "https://dummyimage.com/240X240/1db3c4/0011ff.jpg&text=Product",
        "VendorVendorId": "1b9b4c00-8ba5-4b49-8662-89f4bb776100"
    },
    {
        "productName": "Fantastic Concrete Sausages",
        "description": "velit aliquip ut in elit Lorem fugiat non laborum ipsum non laborum voluptate irure qui ex consequat",
        "price": 2416.8,
        "inStockQuantity": 180,
        "isFeatured": false,
        "catergory": "Laptop",
        "image": "https://dummyimage.com/240X240/1db3c4/0011ff.jpg&text=Product",
        "VendorVendorId": "1b9b4c00-8ba5-4b49-8662-89f4bb776100"
    },
    {
        "productName": "Gorgeous Metal Bacon",
        "description": "id non dolor ullamco",
        "price": 4754.5,
        "inStockQuantity": 26,
        "isFeatured": false,
        "catergory": "Laptop",
        "image": "https://dummyimage.com/240X240/1db3c4/0011ff.jpg&text=Product",
        "VendorVendorId": "0b590752-23bd-490c-9821-4bfc884eee7a"
    },
    {
        "productName": "Tasty Rubber Computer",
        "description": "",
        "price": 171.9,
        "inStockQuantity": 132,
        "isFeatured": false,
        "catergory": "Tablet",
        "image": "https://dummyimage.com/240X240/1db3c4/0011ff.jpg&text=Product",
        "VendorVendorId": "0b590752-23bd-490c-9821-4bfc884eee7a"
    },
    {
        "productName": "Refined Soft Shirt",
        "description": "laboris reprehenderit fugiat aute Lorem mollit eiusmod velit nisi velit aliquip sit est eiusmod nostrud incididunt mollit velit ea aliqua esse Lorem ex id est",
        "price": 3237,
        "inStockQuantity": 212,
        "isFeatured": false,
        "catergory": "Cellphone",
        "image": "https://dummyimage.com/240X240/1db3c4/0011ff.jpg&text=Product",
        "VendorVendorId": "00c289ed-f226-471e-acc4-fbe8a681826e"
    },
    {
        "productName": "Ergonomic Concrete Mouse",
        "description": "nulla do amet cillum esse sunt in amet sunt in do esse sunt mollit duis",
        "price": 460.2,
        "inStockQuantity": 116,
        "isFeatured": false,
        "catergory": "Tablet",
        "image": "https://dummyimage.com/240X240/1db3c4/0011ff.jpg&text=Product",
        "VendorVendorId": "0b590752-23bd-490c-9821-4bfc884eee7a"
    },
    {
        "productName": "Tasty Frozen Computer",
        "description": "excepteur occaecat sunt magna sint proident nisi in ut incididunt in esse labore",
        "price": 200.5,
        "inStockQuantity": 341,
        "isFeatured": false,
        "catergory": "Wearables",
        "image": "https://dummyimage.com/240X240/1db3c4/0011ff.jpg&text=Product",
        "VendorVendorId": "00c289ed-f226-471e-acc4-fbe8a681826e"
    },
    {
        "productName": "Incredible Steel Mouse",
        "description": "ullamco Lorem aliqua nostrud consequat ut laboris",
        "price": 981.7,
        "inStockQuantity": 384,
        "isFeatured": false,
        "catergory": "Gaming Console",
        "image": "https://dummyimage.com/240X240/1db3c4/0011ff.jpg&text=Product",
        "VendorVendorId": "0b590752-23bd-490c-9821-4bfc884eee7a"
    },
    {
        "productName": "Rustic Steel Car",
        "description": "aliqua exercitation voluptate nostrud laborum nostrud excepteur ex ex esse fugiat commodo velit do",
        "price": 4042,
        "inStockQuantity": 358,
        "isFeatured": true,
        "catergory": "Desktop",
        "image": "https://dummyimage.com/240X240/1db3c4/0011ff.jpg&text=Product",
        "VendorVendorId": "0b590752-23bd-490c-9821-4bfc884eee7a"
    },
    {
        "productName": "Awesome Rubber Car",
        "description": "eu dolor commodo consequat est commodo esse occaecat",
        "price": 888.9,
        "inStockQuantity": 214,
        "isFeatured": false,
        "catergory": "Cellphone",
        "image": "https://dummyimage.com/240X240/1db3c4/0011ff.jpg&text=Product",
        "VendorVendorId": "0b590752-23bd-490c-9821-4bfc884eee7a"
    },
    {
        "productName": "Handcrafted Cotton Hat",
        "description": "veniam laboris amet in ea excepteur reprehenderit occaecat laboris adipisicing voluptate incididunt et nulla eu magna sunt eiusmod duis nostrud sint anim elit id consequat",
        "price": 1416.3,
        "inStockQuantity": 114,
        "isFeatured": false,
        "catergory": "Tablet",
        "image": "https://dummyimage.com/240X240/1db3c4/0011ff.jpg&text=Product",
        "VendorVendorId": "130db55d-c7c3-4845-b121-ce4177c46082"
    },
    {
        "productName": "Ergonomic Cotton Fish",
        "description": "occaecat laborum occaecat labore enim enim cillum ad cillum cillum eiusmod labore consequat elit mollit aliquip laboris ipsum minim nulla nulla ea",
        "price": 4942.2,
        "inStockQuantity": 58,
        "isFeatured": true,
        "catergory": "Desktop",
        "image": "https://dummyimage.com/240X240/1db3c4/0011ff.jpg&text=Product",
        "VendorVendorId": "0b590752-23bd-490c-9821-4bfc884eee7a"
    },
    {
        "productName": "Practical Soft Hat",
        "description": "mollit eu amet eiusmod adipisicing deserunt ea fugiat adipisicing anim cupidatat pariatur reprehenderit ad amet sunt tempor reprehenderit ex ipsum proident est",
        "price": 212.9,
        "inStockQuantity": 166,
        "isFeatured": false,
        "catergory": "Cellphone",
        "image": "https://dummyimage.com/240X240/1db3c4/0011ff.jpg&text=Product",
        "VendorVendorId": "1b9b4c00-8ba5-4b49-8662-89f4bb776100"
    },
    {
        "productName": "Small Wooden Bacon",
        "description": "proident esse irure nostrud Lorem deserunt ut cupidatat culpa Lorem cupidatat minim culpa enim culpa Lorem do consequat voluptate",
        "price": 3421.6,
        "inStockQuantity": 411,
        "isFeatured": false,
        "catergory": "Tablet",
        "image": "https://dummyimage.com/240X240/1db3c4/0011ff.jpg&text=Product",
        "VendorVendorId": "00c289ed-f226-471e-acc4-fbe8a681826e"
    },
    {
        "productName": "Generic Metal Pizza",
        "description": "Lorem amet veniam mollit sint non nisi tempor aute mollit ad anim culpa incididunt",
        "price": 2268.7,
        "inStockQuantity": 459,
        "isFeatured": false,
        "catergory": "Cellphone",
        "image": "https://dummyimage.com/240X240/1db3c4/0011ff.jpg&text=Product",
        "VendorVendorId": "0b590752-23bd-490c-9821-4bfc884eee7a"
    },
    {
        "productName": "Tasty Steel Computer",
        "description": "quis sint ut voluptate minim consectetur culpa commodo adipisicing eu quis sunt culpa proident ullamco dolore",
        "price": 395.6,
        "inStockQuantity": 116,
        "isFeatured": true,
        "catergory": "Wearables",
        "image": "https://dummyimage.com/240X240/1db3c4/0011ff.jpg&text=Product",
        "VendorVendorId": "1b9b4c00-8ba5-4b49-8662-89f4bb776100"
    },
    {
        "productName": "Handmade Cotton Computer",
        "description": "commodo ex dolore occaecat fugiat velit amet ad sit eiusmod fugiat incididunt nisi",
        "price": 63.9,
        "inStockQuantity": 377,
        "isFeatured": false,
        "catergory": "Gaming Console",
        "image": "https://dummyimage.com/240X240/1db3c4/0011ff.jpg&text=Product",
        "VendorVendorId": "12b6bca0-23ae-4c52-9293-55f55a68113f"
    },
    {
        "productName": "Sleek Rubber Keyboard",
        "description": "quis",
        "price": 2788.5,
        "inStockQuantity": 151,
        "isFeatured": false,
        "catergory": "Wearables",
        "image": "https://dummyimage.com/240X240/1db3c4/0011ff.jpg&text=Product",
        "VendorVendorId": "130db55d-c7c3-4845-b121-ce4177c46082"
    },
    {
        "productName": "Sleek Steel Bike",
        "description": "aute do est et deserunt consequat",
        "price": 3732.8,
        "inStockQuantity": 458,
        "isFeatured": false,
        "catergory": "Gaming Console",
        "image": "https://dummyimage.com/240X240/1db3c4/0011ff.jpg&text=Product",
        "VendorVendorId": "1b9b4c00-8ba5-4b49-8662-89f4bb776100"
    },
    {
        "productName": "Generic Cotton Shirt",
        "description": "in officia nisi est esse dolor non do anim commodo duis eu consequat ex reprehenderit non ea eiusmod id culpa ex",
        "price": 1114.3,
        "inStockQuantity": 230,
        "isFeatured": false,
        "catergory": "Tablet",
        "image": "https://dummyimage.com/240X240/1db3c4/0011ff.jpg&text=Product",
        "VendorVendorId": "00c289ed-f226-471e-acc4-fbe8a681826e"
    }
]

async function addProductData (){
    try{
    const bulkAddMockProducts = await Product.bulkCreate(products);

    return bulkAddMockProducts;
    } catch (err){
        throw new Error(err)
    }
}

module.exports = addProductData