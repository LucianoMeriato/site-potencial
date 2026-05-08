"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Building2, Phone, Clock, Send, MapPin } from "lucide-react";
import { Compass } from "./DecorativeElements";
import { site } from "@/data/site";

export default function Contact() {
  const [submitting, setSubmitting] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitting(true);

    const formData = new FormData(e.currentTarget);
    const name = String(formData.get("name") || "").trim();
    const phone = String(formData.get("phone") || "").trim();
    const email = String(formData.get("email") || "").trim();
    const message = String(formData.get("message") || "").trim();

    const lines = [
      "Olá, +Potencial! Vim pelo site.",
      "",
      name ? `*Nome:* ${name}` : null,
      phone ? `*WhatsApp:* ${phone}` : null,
      email ? `*E-mail:* ${email}` : null,
      message ? `\n*Mensagem:*\n${message}` : null,
    ].filter(Boolean);

    const text = encodeURIComponent(lines.join("\n"));
    const url = `${site.whatsapp.href}?text=${text}`;

    window.open(url, "_blank", "noopener,noreferrer");

    setTimeout(() => setSubmitting(false), 1200);
  }

  return (
    <section id="contato" className="relative py-16 lg:py-24">
      <div className="paper-bg absolute inset-0 -z-10" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-6 lg:gap-8 items-start">
          <div className="lg:col-span-3 flex items-start gap-3">
            <Compass className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 shrink-0" />
            <h2 className="headline text-xl sm:text-2xl lg:text-[1.75rem] font-semibold text-navy leading-tight">
              Vamos juntos
              <br /> direcionar o seu{" "}
              <span className="font-hand italic font-bold text-amber-brand">
                futuro
              </span>
              ?
            </h2>
          </div>

          <div className="lg:col-span-3 grid sm:grid-cols-3 lg:grid-cols-1 gap-3 sm:gap-4">
            <InfoBlock
              icon={<Building2 size={18} />}
              title="Onde estamos"
              lines={[site.address.line1, site.address.line2, site.address.line3]}
            />
            <InfoBlock
              icon={<Phone size={18} />}
              title="Fale com a gente"
              lines={[site.whatsapp.label, "WhatsApp"]}
            />
            <InfoBlock
              icon={<Clock size={18} />}
              title="Horários"
              lines={[site.hours.weekdays, site.hours.saturday]}
            />
          </div>

          <motion.form
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            onSubmit={handleSubmit}
            className="lg:col-span-6 relative bg-[#FBF5E5] ring-1 ring-navy/10 shadow-paper-lg rounded-2xl p-6 lg:p-8"
          >
            <p className="text-navy font-semibold text-base">
              Envie sua mensagem
            </p>
            <p className="text-navy/65 text-xs mt-1">
              Ao enviar, você é direcionado para o WhatsApp com a mensagem já montada.
            </p>
            <div className="mt-4 grid sm:grid-cols-3 gap-3">
              <Field label="Nome" name="name" placeholder="Seu nome" required />
              <Field label="WhatsApp" name="phone" placeholder="(35) 9..." required />
              <Field
                label="E-mail"
                name="email"
                type="email"
                placeholder="seu@email.com"
              />
            </div>
            <div className="mt-3">
              <Field
                label="Mensagem"
                name="message"
                placeholder="Para qual etapa de estudo? Conta um pouco do seu objetivo."
                textarea
                required
              />
            </div>
            <button
              type="submit"
              disabled={submitting}
              className="mt-5 inline-flex items-center gap-2 rounded-full bg-amber-brand px-5 py-3 text-navy text-sm font-semibold hover:bg-amber-warm transition-colors shadow-paper disabled:opacity-60"
            >
              {submitting ? "Abrindo WhatsApp..." : "Enviar pelo WhatsApp"}
              <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-navy text-cream">
                <Send size={12} />
              </span>
            </button>
          </motion.form>
        </div>

        {/* Mapa do Google */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6 }}
          className="mt-10 sm:mt-14 grid lg:grid-cols-12 gap-4 lg:gap-6 items-stretch"
        >
          <div className="lg:col-span-4 bg-[#FBF5E5] ring-1 ring-navy/10 shadow-paper rounded-2xl p-5 sm:p-6 flex flex-col justify-between">
            <div>
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-navy text-cream">
                <MapPin size={18} />
              </span>
              <h3 className="mt-3 headline text-xl sm:text-2xl font-semibold text-navy leading-tight">
                Bem no centro de Varginha.
              </h3>
              <p className="mt-2 text-navy/75 text-sm sm:text-[15px] leading-relaxed">
                Avenida Rui Barbosa, 230 — Centro. Fácil de chegar, com estrutura
                pensada para estudo e equipe presente todos os dias.
              </p>
            </div>
            <a
              href="https://www.google.com/maps/search/?api=1&query=Avenida+Rui+Barbosa+230+Centro+Varginha+MG"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-5 inline-flex items-center gap-2 rounded-full bg-navy text-cream px-4 py-2 text-sm font-semibold hover:bg-navy-400 transition-colors w-fit"
            >
              Abrir no Google Maps
              <Send size={12} />
            </a>
          </div>

          <div className="lg:col-span-8 relative overflow-hidden rounded-2xl ring-1 ring-navy/10 shadow-paper-lg bg-navy/5 min-h-[280px] sm:min-h-[320px] lg:min-h-[360px]">
            <iframe
              title="Mapa - +Potencial Varginha"
              src="https://www.google.com/maps?q=Avenida+Rui+Barbosa,+230+Centro,+Varginha+-+MG&output=embed"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="absolute inset-0 h-full w-full border-0"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function InfoBlock({
  icon,
  title,
  lines,
}: {
  icon: React.ReactNode;
  title: string;
  lines: string[];
}) {
  return (
    <div className="rounded-2xl bg-[#FBF5E5] ring-1 ring-navy/10 shadow-paper p-4">
      <div className="flex items-center gap-2">
        <span className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-navy text-cream">
          {icon}
        </span>
        <p className="text-navy font-semibold text-sm">{title}</p>
      </div>
      <div className="mt-2 text-navy/75 text-sm leading-snug">
        {lines.map((l, i) => (
          <p key={i}>{l}</p>
        ))}
      </div>
    </div>
  );
}

function Field({
  label,
  name,
  placeholder,
  type = "text",
  textarea,
  required,
}: {
  label: string;
  name: string;
  placeholder: string;
  type?: string;
  textarea?: boolean;
  required?: boolean;
}) {
  const cls =
    "w-full rounded-full bg-cream-50 ring-1 ring-navy/10 px-4 py-3 text-navy text-sm placeholder:text-navy/45 focus:outline-none focus:ring-2 focus:ring-amber-brand transition";
  return (
    <label className="block">
      <span className="sr-only">{label}</span>
      {textarea ? (
        <textarea
          name={name}
          rows={4}
          placeholder={placeholder}
          required={required}
          className={`${cls.replace("rounded-full", "rounded-2xl")} resize-none`}
        />
      ) : (
        <input
          type={type}
          name={name}
          placeholder={placeholder}
          required={required}
          className={cls}
        />
      )}
    </label>
  );
}
