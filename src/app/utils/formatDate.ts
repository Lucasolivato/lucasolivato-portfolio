export function formatDate(date: string, includeRelative = false) {
  const currentDate = new Date();

  if (!date.includes("T")) {
    date = `${date}T00:00:00`;
  }

  const targetDate = new Date(date);
  const yearsAgo = currentDate.getFullYear() - targetDate.getFullYear();
  const monthsAgo = currentDate.getMonth() - targetDate.getMonth();
  const daysAgo = currentDate.getDate() - targetDate.getDate();

  let formattedDate = "";

  if (yearsAgo > 0) {
    formattedDate = `há ${yearsAgo} ${yearsAgo === 1 ? "ano" : "anos"}`;
  } else if (monthsAgo > 0) {
    formattedDate = `há ${monthsAgo} ${monthsAgo === 1 ? "mês" : "meses"}`;
  } else if (daysAgo > 0) {
    formattedDate = `há ${daysAgo} ${daysAgo === 1 ? "dia" : "dias"}`;
  } else {
    formattedDate = "hoje";
  }

  const fullDate = targetDate.toLocaleString("pt-BR", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });

  if (!includeRelative) {
    return fullDate;
  }

  return `${fullDate} (${formattedDate})`;
}
