import { NextIntlClientProvider } from "next-intl";
import { getMessages, setRequestLocale } from "next-intl/server";
import { notFound } from "next/navigation";
import { hasLocale } from "next-intl";
import { routing } from "@/i18n/routing";
import { SetHtmlLang } from "@/components/SetHtmlLang";
import { RestoreScrollAfterLocaleSwitch } from "@/components/RestoreScrollAfterLocaleSwitch";

type Props = {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
};

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export async function generateMetadata({ params }: Props) {
  const { locale } = await params;
  const messages = (await import(`@/messages/${locale}.json`)).default as {
    metadata: { title: string; description: string };
  };
  return {
    title: messages.metadata.title,
    description: messages.metadata.description,
  };
}

export default async function LocaleLayout({ children, params }: Props) {
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }
  setRequestLocale(locale);
  const messages = await getMessages();

  return (
    <NextIntlClientProvider messages={messages}>
      <SetHtmlLang locale={locale} />
      <RestoreScrollAfterLocaleSwitch />
      {children}
    </NextIntlClientProvider>
  );
}
