// components/pages/blog/BlogNewsletter.tsx
"use client";

import { useState } from "react";
import { LuArrowRight, LuCheck } from "react-icons/lu";
import { SiteContainer } from "@/components/layout/SiteContainer";

interface BlogNewsletterProps {
  title: string;
  subtitle: string;
  placeholder: string;
  buttonLabel: string;
  note: string;
}

export function BlogNewsletter({
  title,
  subtitle,
  placeholder,
  buttonLabel,
  note,
}: BlogNewsletterProps) {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setLoading(true);
    // Simulate async
    await new Promise((r) => setTimeout(r, 800));
    setSubmitted(true);
    setLoading(false);
  };

  return (
    <section className="bg-[#F4F8F5] py-20 md:py-24">
      <SiteContainer className="px-4 sm:px-6">
        <div className="mx-auto max-w-2xl overflow-hidden rounded-3xl border border-brand-accent/20 bg-white shadow-[0_8px_48px_rgb(58_107_82/0.10)] p-8 md:p-12">
          {/* Decorative blobs */}
          <div
            aria-hidden
            className="pointer-events-none absolute -right-10 -top-10 size-40 rounded-full bg-brand-accent/5 blur-3xl"
          />

          <div className="relative text-center">
            <span className="inline-block rounded-full border border-brand-accent/30 bg-brand-accent/8 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-brand-accent">
              Newsletter
            </span>
            <h2 className="mt-5 font-(family-name:--font-heading) text-2xl font-bold tracking-tight text-[#0A0A0F] md:text-3xl">
              {title}
            </h2>
            <p className="mt-3 text-base leading-relaxed text-muted-foreground">
              {subtitle}
            </p>

            {submitted ? (
              <div className="mt-8 flex flex-col items-center gap-3">
                <div className="flex size-14 items-center justify-center rounded-full bg-brand-accent/15">
                  <LuCheck
                    className="size-7 text-brand-accent"
                    strokeWidth={2.5}
                  />
                </div>
                <p className="text-sm font-semibold text-brand-accent">
                  Abone oldunuz!
                </p>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="mt-8 flex flex-col gap-3 sm:flex-row"
              >
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder={placeholder}
                  required
                  className="h-12 flex-1 rounded-full border border-border bg-[#F8F9FA] px-5 text-sm text-foreground placeholder:text-muted-foreground focus:border-brand-accent/50 focus:outline-none focus:ring-2 focus:ring-brand-accent/20 transition-all"
                />
                <button
                  type="submit"
                  disabled={loading}
                  className="inline-flex h-12 items-center justify-center gap-2 rounded-full bg-brand-accent px-7 text-sm font-semibold text-white transition-all hover:bg-brand-accent/85 disabled:opacity-60"
                >
                  {loading ? (
                    <span className="size-4 animate-spin rounded-full border-2 border-white/30 border-t-white" />
                  ) : (
                    <>
                      {buttonLabel}
                      <LuArrowRight className="size-4" />
                    </>
                  )}
                </button>
              </form>
            )}

            <p className="mt-4 text-xs text-muted-foreground">{note}</p>
          </div>
        </div>
      </SiteContainer>
    </section>
  );
}
