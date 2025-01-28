import { parse } from "date-fns";
import { es } from "date-fns/locale";

export function parseSpanishDate(date: string) {
  return parse(date, "d 'de' MMMM, yyyy", new Date(), {
    locale: es,
  });
}
