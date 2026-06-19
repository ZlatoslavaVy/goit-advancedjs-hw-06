/*
  Створіть функцію (isWeekend), яка приймає день тижня (з вашого enum)
  і повертає boolean значення, що вказує, чи це день робочий чи вихідний.
*/

enum DayOfWeek {
  Sun,
  Mon,
  Tue,
  Wed,
  Thu,
  Fri,
  Sat,
}

function isWeekend(day: DayOfWeek): boolean {
  switch (day) {
    case DayOfWeek.Sun:
    case DayOfWeek.Sat:
      return true;
    default:
      return false;
  }
}

export {};
