import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

const SHAMSI_LOCALE = "fa-IR-u-ca-persian";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatDate(date: Date) {
  return Intl.DateTimeFormat(SHAMSI_LOCALE, {
    month: "short",
    day: "2-digit",
    year: "numeric"
  }).format(date);
}

export function formatNumber(value: number | string) {
  const latinDigits = "0123456789";
  const persianDigits = "۰۱۲۳۴۵۶۷۸۹";
  return String(value).replace(/[0-9]/g, (digit) => {
    const index = latinDigits.indexOf(digit);
    return index >= 0 ? persianDigits[index] : digit;
  });
}

export function readingTime(html: string) {
  const textOnly = html.replace(/<[^>]+>/g, "");
  const wordCount = textOnly.split(/\s+/).length;
  const readingTimeMinutes = ((wordCount / 200) + 1).toFixed();
  return `${formatNumber(readingTimeMinutes)} دقیقه مطالعه`;
}

export function getShamsiYearMonth(date: Date) {
  const year = Intl.DateTimeFormat(SHAMSI_LOCALE, { year: "numeric" }).format(date);
  const month = Intl.DateTimeFormat(SHAMSI_LOCALE, { month: "long" }).format(date);
  return { year, month };
}

export function dateRange(startDate: Date, endDate?: Date | string): string {
  const startMonth = startDate.toLocaleString(SHAMSI_LOCALE, { month: "short" });
  const startYear = Intl.DateTimeFormat(SHAMSI_LOCALE, { year: "numeric" }).format(startDate);
  let endMonth;
  let endYear;

  if (endDate) {
    if (typeof endDate === "string") {
      endMonth = "";
      endYear = formatNumber(endDate);
    } else {
      endMonth = endDate.toLocaleString(SHAMSI_LOCALE, { month: "short" });
      endYear = Intl.DateTimeFormat(SHAMSI_LOCALE, { year: "numeric" }).format(endDate);
    }
  }

  return `${startMonth} ${startYear} - ${endMonth ?? ""} ${endYear ?? ""}`.trim();
}
