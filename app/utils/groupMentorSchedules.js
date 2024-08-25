export const groupMentorSchedules = (schedules) => {
  const groupedSchedules = {};

  schedules.forEach((schedule) => {
    const {
      Mentor_ID,
      Mentor,
      MentorFoto,
      MentorAcerca,
      Curso,
      CursoFoto,
      TipoCurso,
      PDF,
      dia_semana,
      hora,
    } = schedule;

    if (!groupedSchedules[Mentor_ID]) {
      groupedSchedules[Mentor_ID] = {
        Mentor_ID,
        Mentor,
        MentorFoto,
        MentorAcerca,
        Curso,
        CursoFoto,
        TipoCurso,
        PDF,
        dias_horas: [],
      };
    }

    if (dia_semana && hora) {
      groupedSchedules[Mentor_ID].dias_horas.push({ dia_semana, hora });
    }
  });

  return Object.values(groupedSchedules);
};
