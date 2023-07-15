import { MOOD } from '@/constants/diary';

const simplifyDiaryForCalendar = (diaries, year, month) => {
  const convertedDiaries = {};
  diaries.forEach(diary => {
    const [y, m, d] = diary.date.split('-').map(n => Number(n));
    if (year !== y || month !== m) return;
    convertedDiaries[d] = {
      id: diary.id,
      mood: MOOD[diary.mood.toUpperCase()].emoji,
      desc: diary.desc,
    };
  });
  return convertedDiaries;
};

export { simplifyDiaryForCalendar };
