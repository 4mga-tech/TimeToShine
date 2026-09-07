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

// Local demo assets keep the catalog self-contained. Replace `image` values with
// product CDN/API URLs when inventory data is connected.
export const products: Product[] = [
  {
    id: 1,
    name: "Hikvision 2MP Дом Камер",
    category: "Дом камерууд",
    image: "/assets/images/blog/hikvision.jpg",
    price: "$59.00",
    description:
      "Найдвартай Full HD дүрс бүхий, дотор орчинд зориулсан компакт дом камер.",
    details:
      "Гэр, оффис, дэлгүүрийн касс зэрэг өдөр тутмын хяналт чухал газруудад тохиромжтой, анзаарагдахгүй суурилуулах боломжтой тогтмол линзтэй камер.",
    features: [
      "Full HD шууд дүрс",
      "Суурилуулсан хэт улаан туяаны гэрэлтүүлэг",
      "Гэмтэлд тэсвэртэй компакт бүрхүүл",
    ],
    specifications: [
      { label: "Нарийвчлал", value: "2MP / 1080p" },
      { label: "Линз", value: "2.8мм" },
      { label: "Шөнийн дүрс", value: "30м хүртэл" },
      { label: "Холболт", value: "IP / PoE" },
      { label: "Цаг агаарын тэсвэр", value: "Дотор орчин" },
    ],
  },
  {
    id: 2,
    name: "Hikvision 4MP Пуужин хэлбэрийн камер",
    category: "Пуужин хэлбэрийн камерууд",
    image: "/assets/images/blog/hikvision2.jpg",
    price: "$89.00",
    description:
      "Гадна орчинд зориулсан, 4MP тодорхой дүрс бүхий цаг агаарт тэсвэртэй камер.",
    details:
      "Орох хаалга, машины зам, хамгаалалтын хилийн шугамд зориулагдсан бөгөөд төвлөрсөн линз, бат бөх гадаад бүрхүүлтэй.",
    features: [
      "4MP өндөр нарийвчлалтай дүрс",
      "Ухаалаг хөдөлгөөн илрүүлэлт",
      "Металл гадна бүрхүүл",
    ],
    specifications: [
      { label: "Нарийвчлал", value: "4MP" },
      { label: "Линз", value: "3.6мм" },
      { label: "Шөнийн дүрс", value: "40м хүртэл" },
      { label: "Холболт", value: "IP / PoE" },
      { label: "Цаг агаарын тэсвэр", value: "IP67" },
    ],
  },
  {
    id: 3,
    name: "Hikvision 5MP ColorVu Камер",
    category: "Өнгөт шөнийн дүрс",
    image: "/assets/images/blog/hikvision3.jpg",
    price: "$119.00",
    description:
      "Бага гэрэлтэй орчинд тод, өнгөт дүрс өгдөг, хилийн хамгаалалтад зориулсан камер.",
    details:
      "ColorVu технологи нь шөнийн цагт ч ашигтай өнгөт дүрс авдаг тул дэлгүүр, зогсоолын талбайд тохиромжтой шийдэл юм.",
    features: [
      "Бага гэрэлд бүрэн өнгөт дүрс",
      "Суурилуулсан цагаан гэрэл",
      "Хүн болон тээврийн хэрэгсэл илрүүлэх",
    ],
    specifications: [
      { label: "Нарийвчлал", value: "5MP" },
      { label: "Линз", value: "2.8мм" },
      { label: "Шөнийн дүрс", value: "30м хүртэл" },
      { label: "Холболт", value: "IP / PoE" },
      { label: "Цаг агаарын тэсвэр", value: "IP67" },
    ],
  },
  {
    id: 4,
    name: "Dahua 2MP Дом Камер",
    category: "Дом камерууд",
    image: "/assets/images/blog/hikvision4.jpg",
    price: "$55.00",
    description:
      "Дотор орчинд тодорхой хяналт хийхэд зориулсан, найдвартай 1080p дом камер.",
    details:
      "Хүлээн авах танхим, коридор, жижиг оффисын дотор орчинд байрлуулахад хялбар, хямд өртөгтэй шийдэл.",
    features: [
      "1080p дүрс хяналт",
      "Өргөн харах өнцөг",
      "PoE-ээр хялбар суурилуулалт",
    ],
    specifications: [
      { label: "Нарийвчлал", value: "2MP / 1080p" },
      { label: "Линз", value: "2.8мм" },
      { label: "Шөнийн дүрс", value: "20м хүртэл" },
      { label: "Холболт", value: "IP / PoE" },
      { label: "Цаг агаарын тэсвэр", value: "Дотор орчин" },
    ],
  },
  {
    id: 5,
    name: "Dahua 4MP Пуужин хэлбэрийн камер",
    category: "Пуужин хэлбэрийн камерууд",
    image: "/assets/images/blog/hikvision5.jpg",
    price: "$92.00",
    description:
      "Ухаалаг мэдэгдэл бүхий, өндөр нарийвчлалтай гадна орчны камер.",
    details:
      "Гадна орчны хяналтад зориулсан, тод дүрс, тоос болон бороонд тэсвэртэй олон талт камер.",
    features: [
      "4MP дүрс мэдрэгч",
      "IR шүүлтүүр",
      "Гар утсаар мэдэгдэл авах боломж",
    ],
    specifications: [
      { label: "Нарийвчлал", value: "4MP" },
      { label: "Линз", value: "3.6мм" },
      { label: "Шөнийн дүрс", value: "50м хүртэл" },
      { label: "Холболт", value: "IP / PoE" },
      { label: "Цаг агаарын тэсвэр", value: "IP67" },
    ],
  },
  {
    id: 6,
    name: "Dahua PTZ Камер",
    category: "PTZ камерууд",
    image: "/assets/images/blog/hikvision5.jpg",
    price: "$299.00",
    description:
      "Том, идэвхтэй талбайд зориулсан эргэх, налах, томруулах моторт хяналт.",
    details:
      "Уг зайнаас чиглэл удирдах, оптик томруулах, автомат хяналтын дэмжлэгтэйгээр өргөн уудам талбайг хянах боломжтой.",
    features: [
      "360° тасралтгүй эргэлт",
      "Оптик томруулга",
      "Урьдчилан тохируулсан эргэлтийн маршрут",
    ],
    specifications: [
      { label: "Нарийвчлал", value: "4MP" },
      { label: "Линз", value: "4.8–120мм" },
      { label: "Шөнийн дүрс", value: "100м хүртэл" },
      { label: "Холболт", value: "IP / PoE+" },
      { label: "Цаг агаарын тэсвэр", value: "IP66" },
    ],
  },
  {
    id: 7,
    name: "Hikvision 8MP IP Камер",
    category: "IP камерууд",
    image: "/assets/images/blog/hikvision4.jpg",
    price: "$159.00",
    description: "Нарийн хяналт, нотолгоо бичихэд зориулсан Ultra HD IP камер.",
    details:
      "Хаалга, агуулах, ачилтын талбай зэрэг нарийвчлал шаардсан газруудад 4K нарийвчлалтай дүрс авдаг.",
    features: ["8MP Ultra HD дүрс", "H.265+ шахалт", "MicroSD дотоод санах ой"],
    specifications: [
      { label: "Нарийвчлал", value: "8MP / 4K" },
      { label: "Линз", value: "2.8мм" },
      { label: "Шөнийн дүрс", value: "30м хүртэл" },
      { label: "Холболт", value: "IP / PoE" },
      { label: "Цаг агаарын тэсвэр", value: "IP67" },
    ],
  },
  {
    id: 8,
    name: "Dahua 5MP Шөнийн дүрсний камер",
    category: "Шөнийн дүрс",
    image: "/assets/images/blog/hikvision3.jpg",
    price: "$109.00",
    description: "Шөнийн цагт хол зайнаас хянах чадвартай 5MP камер.",
    details:
      "Аж үйлдвэр болон орон сууцны бага гэрэлтэй орчинд дүрсний нарийвчлалыг хадгалахад зориулагдсан найдвартай шийдэл.",
    features: [
      "5MP мэдрэгч",
      "Сайжруулсан хэт улаан туяа LED",
      "Бага гэрэлд шуугиан багасгах технологи",
    ],
    specifications: [
      { label: "Нарийвчлал", value: "5MP" },
      { label: "Линз", value: "3.6мм" },
      { label: "Шөнийн дүрс", value: "60м хүртэл" },
      { label: "Холболт", value: "IP / PoE" },
      { label: "Цаг агаарын тэсвэр", value: "IP67" },
    ],
  },
  {
    id: 9,
    name: "Hikvision WiFi Камер",
    category: "Утасгүй камерууд",
    image: "/assets/images/blog/hikvision2.jpg",
    price: "$69.00",
    description:
      "Гэр болон жижиг оффист хялбар суурилуулах уян хатан утасгүй хяналтын камер.",
    details:
      "Wi-Fi-ээр түргэн холбогдож, гар утаснаас хянах боломжтой, дотоод санах ойн дэмжлэгтэй өдөр тутмын аюулгүй байдлын шийдэл.",
    features: [
      "Хос давтамжийн Wi-Fi",
      "Хоёр талын дуу холбоо",
      "Апп-аар хянах боломж",
    ],
    specifications: [
      { label: "Нарийвчлал", value: "2MP / 1080p" },
      { label: "Линз", value: "4мм" },
      { label: "Шөнийн дүрс", value: "10м хүртэл" },
      { label: "Холболт", value: "Wi-Fi" },
      { label: "Цаг агаарын тэсвэр", value: "Дотор орчин" },
    ],
  },
  {
    id: 10,
    name: "Гадна орчны хамгаалалтын камер",
    category: "Гадна орчны камерууд",
    image: "/assets/images/blog/hikvision.jpg",
    price: "$79.00",
    description:
      "Аливаа цаг агаарт тохиромжтой, өдөр шөнөгүй хамгаалалт хийдэг камер.",
    details:
      "Цаг агаарын нөхцөл өөрчлөгддөг орчинд гэр, жижиг бизнесийн байранд тодорхой хяналт хийдэг бат бөх гадна камер.",
    features: [
      "Цаг агаарт тэсвэртэй бүрхүүл",
      "Хөдөлгөөнөөр идэвхжих мэдэгдэл",
      "Өргөн өнцгийн хяналт",
    ],
    specifications: [
      { label: "Нарийвчлал", value: "3MP" },
      { label: "Линз", value: "2.8мм" },
      { label: "Шөнийн дүрс", value: "30м хүртэл" },
      { label: "Холболт", value: "IP / PoE" },
      { label: "Цаг агаарын тэсвэр", value: "IP66" },
    ],
  },
];
