const getDay = day => ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].at(day);

const getDayKorean = day => ['일', '월', '화', '수', '목', '금', '토'].at(day);

const convertDate = dateLinkByStick => {
  const [year, month, date] = dateLinkByStick.split('-');

  return `${year}년 ${month}월 ${date}일 ${getDayKorean(
    new Date(year, month - 1, date).getDay(),
  )}요일`;
};

export { getDay, convertDate };
