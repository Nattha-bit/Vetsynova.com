import Image from "next/image";

// ===== ข้อมูลติดต่อ — แก้ตรงนี้ที่เดียว =====
const LINE_ID = "@vetsynova"; // ตัวอย่าง: เปลี่ยนเป็น LINE ID จริงของร้าน
const LINE_URL = `https://line.me/R/ti/p/${LINE_ID}`;
const PHONE_DISPLAY = "02-859-5880";
const PHONE_URL = "tel:028595880";
const FACEBOOK_URL = "https://www.facebook.com/VetSynova";
const EMAIL = "contact@vetsynova.com";
const CTA_TEXT = "ทักไลน์เลย";

const features = [
  {
    title: "คิดค้นโดยทีมสัตวแพทย์",
    text: "VetSynova มาจาก Veterinary Synergistic Innovation ทุกผลิตภัณฑ์พัฒนาบนความรู้ทางสัตวแพทย์ เพื่อคุณภาพชีวิตที่ดีของสัตว์เลี้ยงและคนในบ้าน",
    icon: "stethoscope",
    tone: "bg-soft-sky text-brand-blue",
  },
  {
    title: "เทคโนโลยีสิทธิบัตรระดับโลก",
    text: "ผลิตภัณฑ์ดูแลแผลและฆ่าเชื้อใช้ Microcyn Technology สิทธิบัตรจากสหรัฐอเมริกา อ่อนโยนแต่ได้ผล",
    icon: "shield",
    tone: "bg-sand text-peach",
  },
  {
    title: "ดูแลครบ จบในที่เดียว",
    text: "ตั้งแต่แผล ผิวหนัง ช่องหู ไปจนถึงขนมอาหารเสริม ไม่ต้องหาหลายร้าน ปรึกษาเราได้ทุกเรื่อง",
    icon: "heart",
    tone: "bg-soft-sky text-brand-sky",
  },
] as const;

const products = [
  {
    brand: "Microcyn",
    image: { src: "/images/microcyn.png", width: 572, height: 295 },
    title: "ดูแลแผล ผิว ตา หู และช่องปาก",
    text: "ช่วยทำความสะอาดแผล ลดการอักเสบ และกระตุ้นการหายของแผล",
    price: "เริ่มต้น ฿495",
    accent: "from-brand-cyan to-brand-blue",
  },
  {
    brand: "Dermodacyn",
    image: { src: "/images/dermodacyn.png", width: 572, height: 242 },
    title: "ฆ่าเชื้อระดับสูง เกรดโรงพยาบาล",
    text: "ออกฤทธิ์ภายใน 30 วินาที ใช้ได้ทั้งในบ้านและในคลินิก",
    price: "เริ่มต้น ฿385",
    accent: "from-brand-sky to-brand-blue-dark",
  },
  {
    brand: "Zymox",
    image: { src: "/images/zymox.png", width: 572, height: 295 },
    title: "ดูแลผิวหนังและช่องหู",
    text: "ช่วยบรรเทาอาการคัน ผิวอักเสบ และการติดเชื้อจากแบคทีเรีย เชื้อรา และยีสต์",
    price: "เริ่มต้น ฿795",
    accent: "from-sun to-peach",
  },
  {
    brand: "VF+Core",
    image: { src: "/images/vfcore.png", width: 481, height: 200 },
    title: "ขนมอาหารเสริม อร่อย กินง่าย",
    text: "หลากหลายสูตร ตอบโจทย์สุขภาพสัตว์เลี้ยงแต่ละตัว น้องชอบ เจ้าของสบายใจ",
    price: "สอบถามราคาทางไลน์",
    accent: "from-peach to-brand-cyan",
  },
] as const;

const faqs = [
  {
    q: "ไม่แน่ใจว่าน้องควรใช้ตัวไหน ทำยังไงดี?",
    a: "ทักไลน์มาเล่าอาการหรือส่งรูปให้เราดูได้เลย ทีมงานจะช่วยแนะนำผลิตภัณฑ์ที่เหมาะกับน้อง หากอาการรุนแรง แนะนำให้พบสัตวแพทย์ร่วมด้วย",
  },
  {
    q: "ใช้ได้ทั้งสุนัขและแมวไหม?",
    a: "ผลิตภัณฑ์ส่วนใหญ่ใช้ได้ทั้งสุนัขและแมว แต่ละตัวมีวิธีใช้ต่างกันเล็กน้อย สอบถามทางไลน์เพื่อความมั่นใจก่อนใช้",
  },
  {
    q: "สั่งซื้อได้ช่องทางไหนบ้าง?",
    a: "สั่งผ่านไลน์ได้ทันที หรือซื้อผ่านร้านค้าออนไลน์และร้านค้าตัวแทนอย่างเป็นทางการของ VetSynova",
  },
  {
    q: "ติดต่อได้วันและเวลาไหน?",
    a: "ทีมงานพร้อมตอบ จันทร์ – ศุกร์ เวลา 09:00 – 17:00 น. ทักไว้นอกเวลาได้ เราจะรีบตอบกลับโดยเร็ว",
  },
] as const;

type IconName = "stethoscope" | "shield" | "heart" | "paw" | "phone" | "line" | "facebook" | "mail" | "pin" | "clock" | "chevron";

function Icon({ name, className = "h-6 w-6" }: { name: IconName; className?: string }) {
  const common = {
    className,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.8,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    "aria-hidden": true,
  };
  switch (name) {
    case "stethoscope":
      return (
        <svg {...common}>
          <path d="M5 3v5a4 4 0 0 0 8 0V3" />
          <path d="M9 12v3a5 5 0 0 0 10 0v-2" />
          <circle cx="19" cy="11" r="2" />
        </svg>
      );
    case "shield":
      return (
        <svg {...common}>
          <path d="M12 3l7 3v5c0 4.5-3 8.5-7 10-4-1.5-7-5.5-7-10V6l7-3z" />
          <path d="M9 12l2 2 4-4" />
        </svg>
      );
    case "heart":
      return (
        <svg {...common}>
          <path d="M12 20s-7-4.4-7-10a4 4 0 0 1 7-2.6A4 4 0 0 1 19 10c0 5.6-7 10-7 10z" />
        </svg>
      );
    case "paw":
      return (
        <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
          <ellipse cx="6" cy="10" rx="2" ry="2.6" />
          <ellipse cx="10" cy="6" rx="2" ry="2.6" />
          <ellipse cx="14" cy="6" rx="2" ry="2.6" />
          <ellipse cx="18" cy="10" rx="2" ry="2.6" />
          <path d="M12 11c-3 0-6 4-6 6.5S8 20 12 20s6 0 6-2.5S15 11 12 11z" />
        </svg>
      );
    case "phone":
      return (
        <svg {...common}>
          <path d="M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2z" />
        </svg>
      );
    case "line":
      return (
        <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
          <path d="M12 3C6.5 3 2 6.6 2 11c0 3.9 3.5 7.2 8.3 7.9.3.1.8.2.9.5.1.3.1.7 0 1l-.1.9c0 .3-.2 1 .9.5s5.9-3.5 8-6C21.4 14.3 22 12.7 22 11c0-4.4-4.5-8-10-8zM8.3 13.4H6.4a.5.5 0 0 1-.5-.5V9.2a.5.5 0 0 1 1 0v3.2h1.4a.5.5 0 0 1 0 1zm2-.5a.5.5 0 0 1-1 0V9.2a.5.5 0 0 1 1 0v3.7zm4.5 0a.5.5 0 0 1-.9.3L12 10.7v2.2a.5.5 0 0 1-1 0V9.2a.5.5 0 0 1 .9-.3l1.9 2.6V9.2a.5.5 0 0 1 1 0v3.7zm3-2.3a.5.5 0 0 1 0 1h-1.4v.8h1.4a.5.5 0 0 1 0 1h-1.9a.5.5 0 0 1-.5-.5V9.2c0-.3.2-.5.5-.5h1.9a.5.5 0 0 1 0 1h-1.4v.8h1.4z" />
        </svg>
      );
    case "facebook":
      return (
        <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
          <path d="M14 8h3V4h-3a4 4 0 0 0-4 4v2H8v4h2v7h4v-7h3l1-4h-4V8z" />
        </svg>
      );
    case "mail":
      return (
        <svg {...common}>
          <rect x="3" y="5" width="18" height="14" rx="2" />
          <path d="M3 7l9 6 9-6" />
        </svg>
      );
    case "pin":
      return (
        <svg {...common}>
          <path d="M12 21s-7-6-7-11a7 7 0 0 1 14 0c0 5-7 11-7 11z" />
          <circle cx="12" cy="10" r="2.5" />
        </svg>
      );
    case "clock":
      return (
        <svg {...common}>
          <circle cx="12" cy="12" r="9" />
          <path d="M12 7v5l3 2" />
        </svg>
      );
    case "chevron":
      return (
        <svg {...common}>
          <path d="M6 9l6 6 6-6" />
        </svg>
      );
  }
}

function LineButton({ className = "" }: { className?: string }) {
  return (
    <a
      href={LINE_URL}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex items-center justify-center gap-2 rounded-full bg-line px-7 py-3.5 text-body font-semibold text-white shadow-lg shadow-line/25 transition hover:-translate-y-0.5 hover:brightness-105 focus-visible:outline-3 focus-visible:outline-offset-2 focus-visible:outline-line ${className}`}
    >
      <Icon name="line" className="h-6 w-6" />
      {CTA_TEXT}
    </a>
  );
}

function Logo() {
  return <Image src="/images/logo.png" alt="VetSynova" width={2459} height={497} priority className="h-8 w-auto md:h-9" />;
}

function SectionHeading({ eyebrow, title, text }: { eyebrow: string; title: string; text?: string }) {
  return (
    <div className="mx-auto mb-10 max-w-2xl text-center">
      <p className="mb-2 text-small font-medium text-brand-blue">{eyebrow}</p>
      <h2 className="text-title font-semibold text-ink">{title}</h2>
      {text && <p className="mt-3 text-body text-muted">{text}</p>}
    </div>
  );
}

export default function Home() {
  return (
    <>
      {/* แถบบน */}
      <header className="sticky top-0 z-30 border-b border-ink/5 bg-cream/90 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 md:px-6">
          <a href="#top" aria-label="VetSynova หน้าแรก">
            <Logo />
          </a>
          <nav className="hidden items-center gap-7 text-small text-muted md:flex">
            <a href="#features" className="hover:text-brand-blue">จุดเด่น</a>
            <a href="#products" className="hover:text-brand-blue">ผลิตภัณฑ์</a>
            <a href="#faq" className="hover:text-brand-blue">คำถามที่พบบ่อย</a>
            <a href="#contact" className="hover:text-brand-blue">ติดต่อเรา</a>
          </nav>
          <a
            href={LINE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 rounded-full bg-line px-4 py-2 text-small font-semibold text-white"
          >
            <Icon name="line" className="h-5 w-5" />
            {CTA_TEXT}
          </a>
        </div>
      </header>

      <main id="top" className="flex-1 overflow-x-clip">
        {/* ส่วนหัว */}
        <section className="relative">
          <div className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-brand-cyan/25 blur-3xl md:h-[28rem] md:w-[28rem]" />
          <div className="pointer-events-none absolute -left-20 top-64 h-56 w-56 rounded-full bg-sun/40 blur-3xl" />
          <div className="relative mx-auto grid max-w-6xl items-center gap-12 px-4 pb-16 pt-12 md:grid-cols-[1.2fr_1fr] md:px-6 md:pb-24 md:pt-20">
            <div className="text-center md:text-left">
              <p className="mb-4 inline-flex items-center gap-2 rounded-full bg-white px-4 py-1.5 text-small text-brand-blue shadow-sm">
                <Icon name="paw" className="h-4 w-4" />
                นวัตกรรมสัตวแพทย์ เพื่อสัตว์เลี้ยงที่คุณรัก
              </p>
              <h1 className="text-display font-semibold text-ink">
                ดูแลน้องให้สุขภาพดี
                <br />
                <span className="text-brand-blue">ด้วยนวัตกรรมสัตวแพทย์</span>
              </h1>
              <p className="mx-auto mt-5 max-w-lg text-subtitle font-light text-muted md:mx-0">
                ผลิตภัณฑ์ดูแลแผล ผิวหนัง ช่องหู และขนมอาหารเสริม จากทีมสัตวแพทย์ ปรึกษาเราได้ง่าย ๆ เหมือนคุยกับเพื่อน
              </p>
              <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:justify-center md:justify-start">
                <LineButton className="w-full sm:w-auto" />
                <a
                  href="#products"
                  className="inline-flex w-full items-center justify-center rounded-full border border-brand-blue/30 bg-white px-7 py-3.5 text-body font-medium text-brand-blue transition hover:bg-soft-sky sm:w-auto"
                >
                  ดูผลิตภัณฑ์
                </a>
              </div>
            </div>

            {/* ภาพประกอบด้วยรูปทรง */}
            <div className="relative mx-auto aspect-square w-full max-w-sm md:max-w-md">
              <div className="absolute inset-6 rounded-[3rem] bg-gradient-to-br from-brand-cyan to-brand-blue rotate-6" />
              <div className="absolute inset-6 overflow-hidden rounded-[3rem] bg-white shadow-xl -rotate-3">
                <Image
                  src="/images/vet-hero.jpg"
                  alt="สัตวแพทย์ดูแลสุนัขและแมว"
                  fill
                  priority
                  sizes="(min-width: 768px) 450px, 90vw"
                  className="object-cover object-[40%_center]"
                />
              </div>
              <div aria-hidden className="absolute left-0 top-10 flex items-center gap-2 rounded-2xl bg-white px-4 py-3 text-small font-medium shadow-lg">
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-sand text-peach">
                  <Icon name="heart" className="h-5 w-5" />
                </span>
                ปลอดภัย อ่อนโยน
              </div>
              <div aria-hidden className="absolute bottom-8 right-0 flex items-center gap-2 rounded-2xl bg-white px-4 py-3 text-small font-medium shadow-lg">
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-soft-sky text-brand-blue">
                  <Icon name="stethoscope" className="h-5 w-5" />
                </span>
                พัฒนาโดยสัตวแพทย์
              </div>
            </div>
          </div>
        </section>

        {/* จุดเด่น */}
        <section id="features" className="scroll-mt-20 bg-white py-16 md:py-24">
          <div className="mx-auto max-w-6xl px-4 md:px-6">
            <SectionHeading eyebrow="ทำไมต้อง VetSynova" title="เพราะน้องคือสมาชิกในครอบครัว" />
            <div className="grid gap-5 md:grid-cols-3">
              {features.map((f) => (
                <div key={f.title} className="rounded-card border border-ink/5 bg-cream p-7">
                  <span className={`mb-5 flex h-12 w-12 items-center justify-center rounded-2xl ${f.tone}`}>
                    <Icon name={f.icon} />
                  </span>
                  <h3 className="text-subtitle font-semibold text-ink">{f.title}</h3>
                  <p className="mt-2 text-body text-muted">{f.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ผลิตภัณฑ์ */}
        <section id="products" className="scroll-mt-20 py-16 md:py-24">
          <div className="mx-auto max-w-6xl px-4 md:px-6">
            <SectionHeading
              eyebrow="ผลิตภัณฑ์และราคา"
              title="ครบทุกการดูแล ในแบรนด์เดียว"
              text="ราคาอาจเปลี่ยนแปลงตามขนาดและโปรโมชั่น ทักไลน์เพื่อสอบถามราคาล่าสุดได้เลย"
            />
            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {products.map((p) => (
                <div key={p.brand} className="flex flex-col overflow-hidden rounded-card bg-white shadow-sm ring-1 ring-ink/5">
                  <div className="relative flex h-44 items-center justify-center bg-white px-4 pb-2 pt-4">
                    <Image
                      src={p.image.src}
                      width={p.image.width}
                      height={p.image.height}
                      alt={`ผลิตภัณฑ์ ${p.brand}`}
                      sizes="(min-width: 1024px) 280px, (min-width: 640px) 45vw, 90vw"
                      className="max-h-full w-auto object-contain"
                    />
                  </div>
                  <div className={`h-1.5 bg-gradient-to-r ${p.accent}`} />
                  <div className="flex flex-1 flex-col p-5">
                    <p className="text-small font-semibold text-brand-blue">{p.brand}</p>
                    <h3 className="mt-1 text-body font-semibold text-ink">{p.title}</h3>
                    <p className="mt-2 flex-1 text-small text-muted">{p.text}</p>
                    <p className="mt-4 text-body font-semibold text-brand-blue">{p.price}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-10 text-center">
              <LineButton />
            </div>
          </div>
        </section>

        {/* คำถามที่พบบ่อย */}
        <section id="faq" className="scroll-mt-20 bg-white py-16 md:py-24">
          <div className="mx-auto max-w-3xl px-4 md:px-6">
            <SectionHeading eyebrow="คำถามที่พบบ่อย" title="มีคำถาม? เรามีคำตอบ" />
            <div className="space-y-3">
              {faqs.map((f) => (
                <details key={f.q} className="group rounded-2xl border border-ink/10 bg-cream px-5 py-4 open:bg-soft-sky">
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-body font-medium text-ink [&::-webkit-details-marker]:hidden">
                    {f.q}
                    <Icon name="chevron" className="h-5 w-5 shrink-0 text-brand-blue transition group-open:rotate-180" />
                  </summary>
                  <p className="mt-3 text-body text-muted">{f.a}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* ติดต่อเรา */}
        <section id="contact" className="scroll-mt-20 py-16 md:py-24">
          <div className="mx-auto max-w-6xl px-4 md:px-6">
            <div className="grid gap-10 overflow-hidden rounded-[2rem] bg-gradient-to-br from-brand-blue to-brand-blue-dark p-7 text-white md:grid-cols-2 md:p-12">
              <div>
                <p className="mb-2 text-small font-medium text-brand-cyan">ติดต่อเรา</p>
                <h2 className="text-title font-semibold">อยากปรึกษาเรื่องน้อง ทักมาได้เลย</h2>
                <p className="mt-3 text-body text-white/80">
                  ทีมงานยินดีช่วยแนะนำผลิตภัณฑ์ที่เหมาะกับน้อง ไม่ว่าจะเป็นแผล ผิวหนัง ช่องหู หรืออาหารเสริม
                </p>
                <LineButton className="mt-7 w-full sm:w-auto" />
              </div>
              <ul className="space-y-4 text-body">
                <li>
                  <a href={PHONE_URL} className="flex items-center gap-4 rounded-2xl bg-white/10 p-4 transition hover:bg-white/15">
                    <Icon name="phone" />
                    <span>
                      <span className="block text-small text-white/70">โทร</span>
                      {PHONE_DISPLAY}
                    </span>
                  </a>
                </li>
                <li>
                  <a href={FACEBOOK_URL} target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 rounded-2xl bg-white/10 p-4 transition hover:bg-white/15">
                    <Icon name="facebook" />
                    <span>
                      <span className="block text-small text-white/70">Facebook</span>
                      VetSynova
                    </span>
                  </a>
                </li>
                <li>
                  <a href={`mailto:${EMAIL}`} className="flex items-center gap-4 rounded-2xl bg-white/10 p-4 transition hover:bg-white/15">
                    <Icon name="mail" />
                    <span className="min-w-0">
                      <span className="block text-small text-white/70">อีเมล</span>
                      <span className="break-all">{EMAIL}</span>
                    </span>
                  </a>
                </li>
                <li className="flex items-start gap-4 rounded-2xl bg-white/10 p-4">
                  <Icon name="pin" className="h-6 w-6 shrink-0" />
                  <span>
                    <span className="block text-small text-white/70">ที่ตั้ง</span>
                    18/4 ถนนสวนผัก แขวงฉิมพลี เขตตลิ่งชัน กรุงเทพมหานคร 10170
                  </span>
                </li>
                <li className="flex items-start gap-4 rounded-2xl bg-white/10 p-4">
                  <Icon name="clock" className="h-6 w-6 shrink-0" />
                  <span>
                    <span className="block text-small text-white/70">เวลาทำการ</span>
                    จันทร์ – ศุกร์ <span className="whitespace-nowrap">09:00 – 17:00 น.</span>
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </section>
      </main>

      {/* ส่วนท้าย */}
      <footer className="bg-ink pb-24 pt-10 text-white/70 md:pb-10">
        <div className="mx-auto flex max-w-6xl flex-col items-center gap-3 px-4 text-center text-small md:flex-row md:justify-between md:px-6 md:text-left">
          <div>
            <Image src="/images/logo-white.png" alt="VetSynova" width={514} height={152} className="mx-auto h-9 w-auto md:mx-0" />
            <p className="mt-1">บริษัท เว็ทซินโนว่า จำกัด · นวัตกรรมสัตวแพทย์ เพื่อสัตว์เลี้ยงและคน</p>
          </div>
          <p>© 2026 VetSynova สงวนลิขสิทธิ์</p>
        </div>
      </footer>

      {/* ปุ่มไลน์ลอยบนมือถือ */}
      <div className="fixed inset-x-0 bottom-0 z-40 border-t border-ink/5 bg-cream/95 p-3 backdrop-blur md:hidden">
        <LineButton className="w-full" />
      </div>
    </>
  );
}
