import { format } from 'date-fns';
import { ptBR } from 'date-fns/locale';

export default function formatDate(projectDate: string) {
  try {
    if (projectDate && projectDate!== '' && typeof projectDate === 'string') {
      const date = new Date(projectDate);
      let thisFormattedDate = format(date, "dd 'de' MMMM 'de' yyyy", { locale: ptBR });
      thisFormattedDate = thisFormattedDate.replace(
        /(\d{2}) de ([a-z]+)/,
        (_, day, month) =>
          `${day} de ${month.charAt(0).toUpperCase() + month.slice(1)}`
      ); 
      return thisFormattedDate;
    }
  } catch (error) {
    console.log(projectDate);
    return "";
  }
}