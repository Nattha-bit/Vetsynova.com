// รายการสินค้าแต่ละ SKU (ข้อมูลจากหน้า SHOP ของ vetsynova.com)
// แก้ราคา/ชื่อได้ที่ไฟล์นี้ — price: null = แสดง "สอบถามราคาทางไลน์"

export type Sku = {
  id: number;
  name: string;
  group: string;
  price: number | null;
  inStock: boolean;
  image: string;
};

export const skus: Sku[] = [
  {
    "id": 20512,
    "name": "Microcyn: Ear Rinse 4oz. (120ml.)",
    "group": "microcyn",
    "price": 600,
    "inStock": true,
    "image": "/images/products/20512.jpg"
  },
  {
    "id": 20516,
    "name": "Microcyn: Eye Care Gel 4oz. (120ml.)",
    "group": "microcyn",
    "price": 850,
    "inStock": true,
    "image": "/images/products/20516.jpg"
  },
  {
    "id": 20514,
    "name": "Microcyn: Eye Wash 4oz. (120ml.)",
    "group": "microcyn",
    "price": 750,
    "inStock": false,
    "image": "/images/products/20514.jpg"
  },
  {
    "id": 20518,
    "name": "Microcyn: Oral Care Spray 4oz. (120ml.)",
    "group": "microcyn",
    "price": 950,
    "inStock": true,
    "image": "/images/products/20518.jpg"
  },
  {
    "id": 20508,
    "name": "Microcyn: Wound & Skin Care Hydrogel 2oz. (60ml.)",
    "group": "microcyn",
    "price": 625,
    "inStock": true,
    "image": "/images/products/20508.jpg"
  },
  {
    "id": 22458,
    "name": "Microcyn: Wound & Skin Care Spray 17oz. (500ml.)",
    "group": "microcyn",
    "price": 2390,
    "inStock": true,
    "image": "/images/products/22458.png"
  },
  {
    "id": 20367,
    "name": "Microcyn: Wound & Skin Care Spray 2oz. (59ml.)",
    "group": "microcyn",
    "price": 495,
    "inStock": true,
    "image": "/images/products/20367.jpg"
  },
  {
    "id": 20506,
    "name": "Microcyn: Wound & Skin Care Spray 8oz. (236ml.)",
    "group": "microcyn",
    "price": 1250,
    "inStock": true,
    "image": "/images/products/20506.jpg"
  },
  {
    "id": 20520,
    "name": "Dermodacyn: Disinfecting Solution 100ml.",
    "group": "dermodacyn",
    "price": 385,
    "inStock": false,
    "image": "/images/products/20520.jpg"
  },
  {
    "id": 22440,
    "name": "Dermodacyn: Disinfecting Solution 169 oz. (5 L)",
    "group": "dermodacyn",
    "price": 3850,
    "inStock": true,
    "image": "/images/products/22440.jpg"
  },
  {
    "id": 22437,
    "name": "Dermodacyn: Disinfecting Solution 33.8 oz. (1 L)",
    "group": "dermodacyn",
    "price": 1050,
    "inStock": true,
    "image": "/images/products/22437.jpg"
  },
  {
    "id": 22359,
    "name": "Dermodacyn: Eczema Care Gel 15g.",
    "group": "dermodacyn",
    "price": 490,
    "inStock": true,
    "image": "/images/products/22359.png"
  },
  {
    "id": 22356,
    "name": "Dermodacyn: Oral Care Spray 60ml.",
    "group": "dermodacyn",
    "price": 490,
    "inStock": true,
    "image": "/images/products/22356.png"
  },
  {
    "id": 22473,
    "name": "Dermodacyn: Post Procedure Hydrogel 15g.",
    "group": "dermodacyn",
    "price": 550,
    "inStock": true,
    "image": "/images/products/22473.png"
  },
  {
    "id": 22476,
    "name": "Dermodacyn: Post Procedure Hydrogel 45g.",
    "group": "dermodacyn",
    "price": 950,
    "inStock": true,
    "image": "/images/products/22476.png"
  },
  {
    "id": 22350,
    "name": "Dermodacyn: Wound Care Spray 500ml.",
    "group": "dermodacyn",
    "price": 2390,
    "inStock": true,
    "image": "/images/products/22350.png"
  },
  {
    "id": 22354,
    "name": "Dermodacyn: Wound Care Spray 60ml.",
    "group": "dermodacyn",
    "price": 495,
    "inStock": true,
    "image": "/images/products/22354.png"
  },
  {
    "id": 22344,
    "name": "Dermodacyn: Wound Hydrogel 500g",
    "group": "dermodacyn",
    "price": 2590,
    "inStock": true,
    "image": "/images/products/22344.png"
  },
  {
    "id": 22348,
    "name": "Dermodacyn: Wound Hydrogel 60g",
    "group": "dermodacyn",
    "price": 625,
    "inStock": true,
    "image": "/images/products/22348.png"
  },
  {
    "id": 20528,
    "name": "Zymox: Leave-On Conditioner 355ml.",
    "group": "zymox",
    "price": 795,
    "inStock": true,
    "image": "/images/products/20528.jpg"
  },
  {
    "id": 20532,
    "name": "Zymox: Otic Advanced Plus 37ml.",
    "group": "zymox",
    "price": 1695,
    "inStock": true,
    "image": "/images/products/20532.jpg"
  },
  {
    "id": 20530,
    "name": "Zymox: Otic Enzymatic Solution 37ml.",
    "group": "zymox",
    "price": 1050,
    "inStock": true,
    "image": "/images/products/20530.jpg"
  },
  {
    "id": 20526,
    "name": "Zymox: Shampoo 355ml.",
    "group": "zymox",
    "price": 795,
    "inStock": true,
    "image": "/images/products/20526.jpg"
  },
  {
    "id": 23537,
    "name": "VF+Core BAR Variety Pack Includes 6 Formulas.",
    "group": "vfcore-bar",
    "price": null,
    "inStock": true,
    "image": "/images/products/23537.jpg"
  },
  {
    "id": 22883,
    "name": "VFcore BAR: BIO (S)",
    "group": "vfcore-bar",
    "price": 500,
    "inStock": true,
    "image": "/images/products/22883.png"
  },
  {
    "id": 22879,
    "name": "VFcore BAR: Blood Care Formula (S)",
    "group": "vfcore-bar",
    "price": 500,
    "inStock": true,
    "image": "/images/products/22879.png"
  },
  {
    "id": 22861,
    "name": "VFcore BAR: Canine Vitality (S)",
    "group": "vfcore-bar",
    "price": 500,
    "inStock": true,
    "image": "/images/products/22861.png"
  },
  {
    "id": 22886,
    "name": "VFcore BAR: CR (S)",
    "group": "vfcore-bar",
    "price": null,
    "inStock": true,
    "image": "/images/products/22886.png"
  },
  {
    "id": 22880,
    "name": "VFcore BAR: Fiber (S)",
    "group": "vfcore-bar",
    "price": 500,
    "inStock": true,
    "image": "/images/products/22880.png"
  },
  {
    "id": 22884,
    "name": "VFcore BAR: SK (S)",
    "group": "vfcore-bar",
    "price": 500,
    "inStock": true,
    "image": "/images/products/22884.png"
  },
  {
    "id": 23637,
    "name": "VF+Core TriBio (Cat)",
    "group": "vfcore",
    "price": null,
    "inStock": true,
    "image": "/images/products/23637.webp"
  },
  {
    "id": 23633,
    "name": "VF+Core TriBio (Dog)",
    "group": "vfcore",
    "price": null,
    "inStock": true,
    "image": "/images/products/23633.webp"
  },
  {
    "id": 23544,
    "name": "VF+Core Variety Pack includes 13 formulas",
    "group": "vfcore",
    "price": null,
    "inStock": true,
    "image": "/images/products/23544.jpg"
  },
  {
    "id": 22318,
    "name": "VF+Core: AA",
    "group": "vfcore",
    "price": 600,
    "inStock": true,
    "image": "/images/products/22318.png"
  },
  {
    "id": 22317,
    "name": "VF+Core: BIO+",
    "group": "vfcore",
    "price": 600,
    "inStock": true,
    "image": "/images/products/22317.png"
  },
  {
    "id": 23478,
    "name": "VF+Core: Canine Vitality",
    "group": "vfcore",
    "price": 600,
    "inStock": true,
    "image": "/images/products/23478.png"
  },
  {
    "id": 22687,
    "name": "VF+Core: Feline Vitality",
    "group": "vfcore",
    "price": 600,
    "inStock": true,
    "image": "/images/products/22687.png"
  },
  {
    "id": 22316,
    "name": "VF+Core: FIBER+",
    "group": "vfcore",
    "price": 600,
    "inStock": true,
    "image": "/images/products/22316.png"
  },
  {
    "id": 23474,
    "name": "VF+Core: HC",
    "group": "vfcore",
    "price": 600,
    "inStock": true,
    "image": "/images/products/23474.png"
  },
  {
    "id": 23476,
    "name": "VF+Core: HP",
    "group": "vfcore",
    "price": 600,
    "inStock": true,
    "image": "/images/products/23476.png"
  },
  {
    "id": 20550,
    "name": "VF+Core: JC",
    "group": "vfcore",
    "price": 600,
    "inStock": true,
    "image": "/images/products/20550.png"
  },
  {
    "id": 23037,
    "name": "VF+Core: JC Fish (Tuna with Salmon)",
    "group": "vfcore",
    "price": 600,
    "inStock": true,
    "image": "/images/products/23037.webp"
  },
  {
    "id": 21710,
    "name": "VF+Core: KC",
    "group": "vfcore",
    "price": 600,
    "inStock": true,
    "image": "/images/products/21710.png"
  },
  {
    "id": 23574,
    "name": "VF+Core: KING AGARICUS",
    "group": "vfcore",
    "price": null,
    "inStock": true,
    "image": "/images/products/23574.jpg"
  },
  {
    "id": 23040,
    "name": "VF+Core: LC (Tuna with Salmon)",
    "group": "vfcore",
    "price": 600,
    "inStock": true,
    "image": "/images/products/23040.png"
  },
  {
    "id": 20546,
    "name": "VF+Core: LS",
    "group": "vfcore",
    "price": 600,
    "inStock": true,
    "image": "/images/products/20546.png"
  },
  {
    "id": 23055,
    "name": "VF+Core: LS Tablet",
    "group": "vfcore",
    "price": null,
    "inStock": true,
    "image": "/images/products/23055.webp"
  },
  {
    "id": 23577,
    "name": "VF+Core: NEUBREX™",
    "group": "vfcore",
    "price": null,
    "inStock": true,
    "image": "/images/products/23577.jpg"
  },
  {
    "id": 23608,
    "name": "VF+Core: Omega",
    "group": "vfcore",
    "price": null,
    "inStock": true,
    "image": "/images/products/23608.png"
  },
  {
    "id": 20548,
    "name": "VF+Core: RB",
    "group": "vfcore",
    "price": 600,
    "inStock": true,
    "image": "/images/products/20548.png"
  },
  {
    "id": 23600,
    "name": "VF+Core: RB Complete Blood Care",
    "group": "vfcore",
    "price": null,
    "inStock": true,
    "image": "/images/products/23600.png"
  },
  {
    "id": 22315,
    "name": "VF+Core: SK+",
    "group": "vfcore",
    "price": 600,
    "inStock": true,
    "image": "/images/products/22315.png"
  },
  {
    "id": 22313,
    "name": "VF+Core: UC",
    "group": "vfcore",
    "price": 600,
    "inStock": true,
    "image": "/images/products/22313.png"
  },
  {
    "id": 23764,
    "name": "DermaCore COS Hydrogel",
    "group": "dermacore",
    "price": 250,
    "inStock": true,
    "image": "/images/products/23764.png"
  },
  {
    "id": 23560,
    "name": "DermaCore COS PLUS Spray",
    "group": "dermacore",
    "price": null,
    "inStock": true,
    "image": ""
  },
  {
    "id": 22998,
    "name": "Dermacore COS PYO Wipe (30 Sheet)",
    "group": "dermacore",
    "price": 70,
    "inStock": true,
    "image": "/images/products/22998.png"
  },
  {
    "id": 23000,
    "name": "Dermacore COS PYO Wipe (90 Sheet)",
    "group": "dermacore",
    "price": 175,
    "inStock": true,
    "image": "/images/products/23000.png"
  },
  {
    "id": 22302,
    "name": "DermaCore COS Shampoo (250 ml.)",
    "group": "dermacore",
    "price": 350,
    "inStock": true,
    "image": "/images/products/22302.png"
  },
  {
    "id": 22300,
    "name": "DermaCore COS Spray (100 ml.)",
    "group": "dermacore",
    "price": 345,
    "inStock": true,
    "image": "/images/products/22300.png"
  },
  {
    "id": 22294,
    "name": "DermaCore COS Spray (20 ml.)",
    "group": "dermacore",
    "price": 195,
    "inStock": true,
    "image": "/images/products/22294.png"
  },
  {
    "id": 22290,
    "name": "Otosense 100ml.",
    "group": "otosense",
    "price": 315,
    "inStock": true,
    "image": "/images/products/22290.png"
  },
  {
    "id": 22289,
    "name": "Otosense 50ml.",
    "group": "otosense",
    "price": 165,
    "inStock": true,
    "image": "/images/products/22289.png"
  },
  {
    "id": 22994,
    "name": "Otosense Gel 7g",
    "group": "otosense",
    "price": 165,
    "inStock": true,
    "image": "/images/products/22994.png"
  },
  {
    "id": 23514,
    "name": "OTOSENSE Gentle Formula",
    "group": "otosense",
    "price": null,
    "inStock": true,
    "image": "/images/products/23514.png"
  },
  {
    "id": 20540,
    "name": "Labyderm Bioforce Spray 100ml.",
    "group": "labyes",
    "price": 595,
    "inStock": true,
    "image": "/images/products/20540.jpg"
  },
  {
    "id": 20534,
    "name": "Labyderm Premium Cover 2ml.",
    "group": "labyes",
    "price": 1160,
    "inStock": true,
    "image": "/images/products/20534.jpg"
  },
  {
    "id": 20536,
    "name": "Labyderm Premium Cover 4ml.",
    "group": "labyes",
    "price": 1360,
    "inStock": true,
    "image": "/images/products/20536.jpg"
  },
  {
    "id": 20538,
    "name": "Labyderm Skin Solider Shampoo 220ml.",
    "group": "labyes",
    "price": 495,
    "inStock": true,
    "image": "/images/products/20538.jpg"
  },
  {
    "id": 20542,
    "name": "Otiflex Cleanser 100ml.",
    "group": "labyes",
    "price": 350,
    "inStock": true,
    "image": "/images/products/20542.jpg"
  },
  {
    "id": 20544,
    "name": "Tears 8ml.",
    "group": "labyes",
    "price": 550,
    "inStock": true,
    "image": "/images/products/20544.jpg"
  },
  {
    "id": 22406,
    "name": "CopperBody 4Legs",
    "group": "deomist",
    "price": 1595,
    "inStock": true,
    "image": "/images/products/22406.jpg"
  },
  {
    "id": 22401,
    "name": "CopperBody Classic",
    "group": "deomist",
    "price": 1245,
    "inStock": true,
    "image": "/images/products/22401.jpg"
  },
  {
    "id": 22405,
    "name": "CopperBody Male Dog Castration",
    "group": "deomist",
    "price": 1245,
    "inStock": true,
    "image": "/images/products/22405.jpg"
  },
  {
    "id": 22533,
    "name": "DEO MIST For Dogs & Cats 300 ml",
    "group": "deomist",
    "price": 350,
    "inStock": true,
    "image": "/images/products/22533.png"
  },
  {
    "id": 22399,
    "name": "DEOMIST",
    "group": "deomist",
    "price": 350,
    "inStock": true,
    "image": "/images/products/22399.jpg"
  },
  {
    "id": 23025,
    "name": "BiteGuard",
    "group": "others",
    "price": 89,
    "inStock": true,
    "image": "/images/products/23025.png"
  },
  {
    "id": 23063,
    "name": "Hepaphos",
    "group": "others",
    "price": null,
    "inStock": true,
    "image": "/images/products/23063.webp"
  },
  {
    "id": 23059,
    "name": "Hepaphos S",
    "group": "others",
    "price": null,
    "inStock": true,
    "image": "/images/products/23059.webp"
  },
  {
    "id": 20557,
    "name": "NoBite 50ml.",
    "group": "others",
    "price": 375,
    "inStock": true,
    "image": "/images/products/20557.jpg"
  },
  {
    "id": 20559,
    "name": "PetCalm 50ml.",
    "group": "others",
    "price": 465,
    "inStock": true,
    "image": "/images/products/20559.jpg"
  },
  {
    "id": 23003,
    "name": "Pets Earmuffs (Black)",
    "group": "others",
    "price": 950,
    "inStock": true,
    "image": "/images/products/23003.jpg"
  },
  {
    "id": 23007,
    "name": "Pets Earmuffs (Rosegold)",
    "group": "others",
    "price": 950,
    "inStock": true,
    "image": "/images/products/23007.jpg"
  },
  {
    "id": 23755,
    "name": "Qancera",
    "group": "others",
    "price": 990,
    "inStock": true,
    "image": "/images/products/23755.png"
  }
];
