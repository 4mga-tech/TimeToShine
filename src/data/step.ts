interface stepItem {
  id: string;
  number: string;
  title: string;
  desc: string;
  image: string;
}

export const stepItems: stepItem[] = [
  {
    id: "step1",
    number: "01",
    title: "ОРЧИН ҮЕИЙН",
    desc: "Уян хатан, найдвартай технологийн шийдэл",
    image: "modern.svg",
  },
  {
    id: "step2",
    number: "02",
    title: "ТАСРАЛТГҮЙ",
    desc: "Үйлчлүүлэгч бүрд зориулсан тогтмол сайжруулалт",
    image: "infinity.svg",
  },
  {
    id: "step3",
    number: "03",
    title: "ҮР АШИГТАЙ",
    desc: "Бүтээмжийг дэмжих шинэлэг системүүд",
    image: "profit.svg",
  },
];
