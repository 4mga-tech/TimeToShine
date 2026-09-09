export interface ProductSpecification {
  label: string;
  value: string;
}

export interface Product {
  id: number;
  name: string;
  category: string;
  image: string;
  price: string;
  description: string;
  details: string;
  features: string[];
  specifications: ProductSpecification[];
}

export const products: Product[] = [
  // --- Хямд үнийн ангилал (5) ---
  {
    id: 1,
    name: "Hikvision Turbo HD 720P Аналог Пуужин Камер (DS-2CE16C0T-IT3)",
    category: "Аналог камерууд",
    image: "/assets/images/blog/hik1.png",
    price: "89,000₮",
    description:
      "Хамгийн хямд өртөгтэй, дотор болон гадна орчинд ерөнхий хяналт тавихад тохиромжтой суурь түвшний аналог камер.",
    details:
      "Аналог DVR системтэй хослуулан ажилладаг, төсөв хязгаарлагдмал жижиг дэлгүүр, орц, гаражийн хяналтад тохиромжтой энгийн шийдэл.",
    features: [
      "720P дүрс",
      "Хэт улаан туяаны шөнийн харагдац",
      "Хямд, энгийн суурилуулалт",
    ],
    specifications: [
      { label: "Нарийвчлал", value: "1MP / 720p" },
      { label: "Төрөл", value: "Аналог (Turbo HD)" },
      { label: "Шөнийн дүрс", value: "IR (хэт улаан туяа)" },
      { label: "Холболт", value: "Коаксиал кабель / DVR" },
    ],
  },
  {
    id: 2,
    name: "Hikvision Turbo HD 1080P Vandal-Proof Аналог Дом Камер (DS-2CE56D1T-VPIR)",
    category: "Аналог камерууд",
    image: "/assets/images/blog/hik2.png",
    price: "99,900₮",
    description:
      "Механик гэмтэлд тэсвэртэй (vandal-proof) бүрхүүлтэй, дотор орчны энгийн хяналтад зориулсан хямд дом камер.",
    details:
      "Коридор, шат, нийтийн эзэмшлийн танхим зэрэг эвдрэл гарах магадлалтай газарт тохиромжтой бат бөх бүрхүүлтэй.",
    features: [
      "1080P дүрс",
      "Vandal-proof бат бөх бүрхүүл",
      "Хэт улаан туяаны шөнийн харагдац",
    ],
    specifications: [
      { label: "Нарийвчлал", value: "2MP / 1080p" },
      { label: "Линз", value: "2.8мм / 4мм" },
      { label: "Төрөл", value: "Аналог (Turbo HD)" },
      { label: "Тэсвэр", value: "Vandal-proof" },
    ],
  },
  {
    id: 3,
    name: "Hikvision Full HD 1080P Веб Камер",
    category: "Веб камерууд",
    image: "/assets/images/blog/hik3.png",
    price: "159,000₮",
    description:
      "Онлайн уулзалт, зайнаас сургалт, стрим хийхэд зориулсан компьютерт холбогддог энгийн веб камер.",
    details:
      "USB-ээр компьютер, ноутбукт шууд холбогдож ажилладаг, оффисын онлайн харилцаанд тохиромжтой хямд шийдэл.",
    features: [
      "1080P Full HD дүрс",
      "USB Plug-and-Play холболт",
      "Суурилуулсан микрофон",
    ],
    specifications: [
      { label: "Нарийвчлал", value: "2MP / 1080p" },
      { label: "Холболт", value: "USB" },
      { label: "Ашиглалт", value: "Компьютер / Ноутбук" },
    ],
  },
  {
    id: 4,
    name: "Hikvision Дашкам (AE-DC2018-D1)",
    category: "Тээврийн хэрэгслийн хяналтын камерууд",
    image: "/assets/images/blog/hik4.png",
    price: "178,000₮",
    description:
      "Хямд өртөгтэй, тээврийн хэрэгсэлд суурилуулж замын аяллыг бичлэгжүүлдэг энгийн дашкам.",
    details:
      "Хувийн машин, такси, жижиг тээврийн компаниудад зориулсан анхан шатны замын хяналтын шийдэл.",
    features: [
      "Тасралтгүй замын бичлэг",
      "Мөргөлдөөн илрүүлэх мэдрэгч",
      "Богино зайд суурилуулахад хялбар",
    ],
    specifications: [
      { label: "Нарийвчлал", value: "1080p" },
      { label: "Ашиглалт", value: "Тээврийн хэрэгсэл" },
      { label: "Санах ой", value: "MicroSD дэмжинэ" },
    ],
  },
  {
    id: 5,
    name: "Hikvision 2MP Smart Hybrid Light Пуужин Камер (DS-2CD1023G2-LIU)",
    category: "Пуужин хэлбэрийн камерууд",
    image: "/assets/images/blog/hik5.png",
    price: "179,000₮",
    description:
      "Хямд өртөгтэй IP камеруудын дунд ухаалаг хосолсон гэрэлтүүлэгтэй, гэр, жижиг оффист тохиромжтой анхан шатны IP камер.",
    details:
      "Аналогоос IP руу шилжих эхний алхамд тохиромжтой, PoE-ээр хялбар суурилуулах боломжтой гадна камер.",
    features: [
      "2MP дүрс",
      "Smart Hybrid Light (цагаан + IR)",
      "PoE-ээр хялбар суурилуулалт",
    ],
    specifications: [
      { label: "Нарийвчлал", value: "2MP" },
      { label: "Шөнийн дүрс", value: "Hybrid Light" },
      { label: "Холболт", value: "IP / PoE" },
      { label: "Тэсвэр", value: "Гадна орчин" },
    ],
  },
  // --- Дундаж үнийн ангилал (5) ---
  {
    id: 6,
    name: "Hikvision 8MP ColorVu Дом Камер (DS-2CD2787G2T-LZS)",
    category: "Дом камерууд",
    image: "/assets/images/blog/hik6.png",
    price: "1,039,000₮",
    description:
      "4K нарийвчлалтай, моторжуулсан варифокал линзтэй, шөнийн цагт ч бүрэн өнгөт дүрс өгдөг дотор орчны дом камер.",
    details:
      "Оффис, дэлгүүр, зочид буудал зэрэг өндөр нарийвчлал шаардсан дотор орчинд зориулагдсан бөгөөд ColorVu технологиор бага гэрэлтэй үед ч тод, өнгөт дүрс авдаг.",
    features: [
      "4K (8MP) Ultra HD дүрс",
      "Моторжуулсан варифокал линз (2.8–12мм)",
      "ColorVu — шөнийн бүрэн өнгөт дүрс",
    ],
    specifications: [
      { label: "Нарийвчлал", value: "8MP / 4K" },
      { label: "Линз", value: "2.8–12мм (моторжуулсан варифокал)" },
      { label: "Шөнийн дүрс", value: "ColorVu (өнгөт)" },
      { label: "Холболт", value: "IP / PoE" },
      { label: "Тэсвэр", value: "Дотор орчин" },
    ],
  },
  {
    id: 7,
    name: "Hikvision 8MP ColorVu Пуужин Камер (DS-2CD2T87G2H-LISU/SL)",
    category: "Пуужин хэлбэрийн камерууд",
    image: "/assets/images/blog/hik7.png",
    price: "969,000₮",
    description:
      "Гадна орчны хяналтад зориулсан, 8MP нарийвчлалтай, шөнийн цагт өнгөт дүрс өгдөг найдвартай пуужин камер.",
    details:
      "Орох гарц, зогсоол, хашааны периметрт тохиромжтой бөгөөд ColorVu технологиор бага гэрэлтэй орчинд ч дүрсний чанараа алддаггүй.",
    features: [
      "8MP өндөр нарийвчлалтай дүрс",
      "ColorVu — шөнийн өнгөт дүрс",
      "Цаг агаарт тэсвэртэй гадна бүрхүүл",
    ],
    specifications: [
      { label: "Нарийвчлал", value: "8MP" },
      { label: "Линз", value: "Тогтмол линз" },
      { label: "Шөнийн дүрс", value: "ColorVu (өнгөт)" },
      { label: "Холболт", value: "IP / PoE" },
      { label: "Тэсвэр", value: "IP67" },
    ],
  },
  {
    id: 8,
    name: "Hikvision 6MP Smart Hybrid Light ColorVu Пуужин Камер (DS-2CD2667G2HT-LIZS)",
    category: "Пуужин хэлбэрийн камерууд",
    image: "/assets/images/blog/hik8.png",
    price: "1,399,000₮",
    description:
      "Ухаалаг хосолсон гэрэлтүүлэгтэй (цагаан гэрэл + хэт улаан туяа), моторжуулсан варифокал линзтэй гадна хяналтын камер.",
    details:
      "Периметр хамгаалалт, зогсоолын талбай зэрэг өндөр нарийвчлал, урт зайн шөнийн дүрс шаардсан газарт тохиромжтой.",
    features: [
      "6MP нарийвчлал",
      "Smart Hybrid Light (цагаан + IR)",
      "Моторжуулсан варифокал линз",
    ],
    specifications: [
      { label: "Нарийвчлал", value: "6MP" },
      { label: "Линз", value: "Моторжуулсан варифокал" },
      { label: "Шөнийн дүрс", value: "ColorVu + Hybrid Light" },
      { label: "Холболт", value: "IP / PoE" },
      { label: "Тэсвэр", value: "IP67" },
    ],
  },
  {
    id: 9,
    name: "Hikvision 4MP 15x PTZ Speed Dome (DS-2DE4415IW-DE(T5))",
    category: "PTZ камерууд",
    image: "/assets/images/blog/hik9.png",
    price: "1,419,900₮",
    description:
      "15x оптик томруулгатай, DarkFighter технологиор бага гэрэлд ажилладаг, ухаалаг илрүүлэлттэй эргэдэг камер.",
    details:
      "Том, идэвхтэй талбай (жишээ нь зогсоол, спорт талбай) хянахад зориулагдсан бөгөөд AcuSense технологиор хүн/тээврийн хэрэгслийг ялган таньдаг.",
    features: [
      "4MP нарийвчлал, 15x оптик томруулга",
      "DarkFighter бага гэрлийн технологи",
      "AcuSense ухаалаг илрүүлэлт",
    ],
    specifications: [
      { label: "Нарийвчлал", value: "4MP" },
      { label: "Томруулга", value: "15x оптик" },
      { label: "Шөнийн дүрс", value: "DarkFighter IR" },
      { label: "Холболт", value: "IP / PoE+" },
      { label: "Тэсвэр", value: "IP66" },
    ],
  },
  {
    id: 10,
    name: "Hikvision 6MP Panoramic ColorVu Дом Камер (DS-2CD2367G2P-LSU/SL)",
    category: "Дом камерууд",
    image: "/assets/images/blog/hik10.png",
    price: "819,900₮",
    description:
      "Өргөн өнцгийн, шөнийн цагт өнгөт дүрс өгдөг дом камер — нэг цэгээс том талбайг харах шаардлагатай орчинд тохиромжтой.",
    details:
      "Автомашины зогсоол, коридор зэрэг өргөн талбайг цөөн тооны камероор бүрэн хамрахад зориулагдсан.",
    features: [
      "6MP Panoramic дүрс",
      "ColorVu шөнийн өнгөт дүрс",
      "Өргөн харах өнцөг",
    ],
    specifications: [
      { label: "Нарийвчлал", value: "6MP" },
      { label: "Харах өнцөг", value: "Panoramic (өргөн)" },
      { label: "Шөнийн дүрс", value: "ColorVu (өнгөт)" },
      { label: "Холболт", value: "IP / PoE" },
      { label: "Тэсвэр", value: "IP67" },
    ],
  },
];
