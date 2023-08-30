const getDay = day => ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].at(day);

const getDayKorean = day => ['일', '월', '화', '수', '목', '금', '토'].at(day);

const convertDate = dateLinkByStick => {
  const [year, month, date] = dateLinkByStick.split('-');

  return `${year}년 ${month}월 ${date}일 ${getDayKorean(
    new Date(year, month - 1, date).getDay(),
  )}요일`;
};

const isToday = date => {
  const diaryDate = new Date(date);
  const now = new Date();
  return (
    diaryDate.getFullYear() === now.getFullYear() &&
    diaryDate.getMonth() === now.getMonth() &&
    diaryDate.getDate() === now.getDate()
  );
};

const checkTodayDiary = diaries => {
  const today = new Date().getDate();
  const date = diaries.map(diary => {
    const [year, month, day] = diary.date.split('-');
    return Number(day);
  });
  return date.includes(today);
};

export { getDay, convertDate, getDayKorean, isToday, checkTodayDiary };
