export const groupDaysAndTimes = (schedules) => {
  const grouped = {};

  schedules.forEach(({ dia_semana, hora }) => {
    if (!grouped[dia_semana]) {
      grouped[dia_semana] = [];
    }
    grouped[dia_semana].push(hora);
  });

  return Object.entries(grouped).map(([dia_semana, horas]) => ({
    dia_semana,
    horas,
  }));
};
