"use client";

import Image from "next/image";
import { useState } from "react";
import { LINE_URL } from "./contact";
import { skus } from "./products";

// กลุ่มแบรนด์ — เรียงตามลำดับที่แสดงบนหน้าเว็บ
const groups = [
  { id: "microcyn", label: "Microcyn", text: "ดูแลแผล ผิว ตา หู และช่องปาก ด้วยสิทธิบัตร Microcyn Technology จากสหรัฐอเมริกา" },
  { id: "dermodacyn", label: "Dermodacyn", text: "ฆ่าเชื้อระดับสูง เกรดโรงพยาบาล ออกฤทธิ์ภายใน 30 วินาที และผลิตภัณฑ์ดูแลแผล" },
  { id: "zymox", label: "Zymox", text: "ดูแลผิวหนังและช่องหู ช่วยบรรเทาอาการคัน ผิวอักเสบ และการติดเชื้อ" },
  { id: "vfcore", label: "VF+Core", text: "ขนมอาหารเสริม อร่อย กินง่าย หลากหลายสูตรตามความต้องการของน้อง" },
  { id: "vfcore-bar", label: "VF+Core BAR", text: "อาหารเสริม VF+Core ในรูปแบบ BAR หลายสูตรให้เลือก" },
  { id: "dermacore", label: "DermaCore", text: "ผลิตภัณฑ์ดูแลผิวหนังและขน ทั้งสเปรย์ แชมพู ไฮโดรเจล และแผ่นเช็ด" },
  { id: "otosense", label: "Otosense", text: "ผลิตภัณฑ์ทำความสะอาดและดูแลช่องหู" },
  { id: "labyes", label: "Labyes", text: "ผลิตภัณฑ์ดูแลผิวหนัง ช่องหู และดวงตา" },
  { id: "deomist", label: "DEOMIST & CopperBody", text: "สเปรย์ DEOMIST และชุด CopperBody สำหรับสัตว์เลี้ยง" },
  { id: "others", label: "อื่น ๆ", text: "ผลิตภัณฑ์อื่น ๆ จาก VetSynova เช่น อาหารเสริม และที่ครอบหูสัตว์เลี้ยง" },
] as const;

type GroupId = (typeof groups)[number]["id"];

const priceFormat = new Intl.NumberFormat("th-TH");

export default function ProductCatalog() {
  const [active, setActive] = useState<GroupId>("microcyn");
  const group = groups.find((g) => g.id === active)!;
  const items = skus.filter((s) => s.group === active);

  return (
    <div>
      {/* แท็บแบรนด์ — มือถือเลื่อนซ้ายขวาได้ */}
      <div className="-mx-4 overflow-x-auto px-4 pb-2 md:mx-0 md:px-0" role="tablist" aria-label="เลือกแบรนด์">
        <div className="flex w-max gap-2 md:w-auto md:flex-wrap md:justify-center">
          {groups.map((g) => {
            const count = skus.filter((s) => s.group === g.id).length;
            const selected = g.id === active;
            return (
              <button
                key={g.id}
                type="button"
                role="tab"
                aria-selected={selected}
                onClick={() => setActive(g.id)}
                className={`shrink-0 rounded-full px-4 py-2 text-small font-medium transition ${
                  selected
                    ? "bg-brand-blue text-white shadow-md shadow-brand-blue/25"
                    : "bg-white text-ink ring-1 ring-ink/10 hover:ring-brand-blue/40"
                }`}
              >
                {g.label} <span className={selected ? "text-white/75" : "text-muted"}>({count})</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* คำอธิบายแบรนด์ */}
      <div className="mt-6 rounded-card bg-soft-sky px-5 py-4 md:px-7">
        <h3 className="text-subtitle font-semibold text-ink">{group.label}</h3>
        <p className="mt-1 text-small text-muted">{group.text}</p>
      </div>

      {/* สินค้าแต่ละ SKU */}
      <ul className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-3 md:gap-5 lg:grid-cols-4" role="tabpanel">
        {items.map((s) => (
          <li key={s.id} className="flex flex-col overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-ink/5">
            <div className="relative aspect-square bg-white">
              {s.image ? (
                <Image
                  src={s.image}
                  alt={s.name}
                  fill
                  sizes="(min-width: 1024px) 260px, (min-width: 640px) 30vw, 45vw"
                  className="object-contain p-3"
                />
              ) : (
                <div className="flex h-full items-center justify-center bg-cream text-small text-muted">ไม่มีรูปสินค้า</div>
              )}
              {!s.inStock && (
                <span className="absolute left-2 top-2 rounded-full bg-ink/80 px-2.5 py-1 text-[0.75rem] text-white">
                  สินค้าหมดชั่วคราว
                </span>
              )}
            </div>
            <div className="flex flex-1 flex-col border-t border-ink/5 p-3 md:p-4">
              <h4 className="flex-1 text-small font-medium text-ink">{s.name}</h4>
              <p className="mt-2 text-body font-semibold text-brand-blue">
                {s.price ? `฿${priceFormat.format(s.price)}` : <span className="text-small">สอบถามราคาทางไลน์</span>}
              </p>
              <a
                href={LINE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-3 inline-flex items-center justify-center rounded-full bg-line/10 px-3 py-2 text-small font-medium text-line-dark transition hover:bg-line/20"
              >
                สั่งซื้อทางไลน์
              </a>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
