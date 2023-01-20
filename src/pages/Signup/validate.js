import { RULE } from '@/constants/rule';

const validateUserData = ({ nickname, income }) => {
  if (
    nickname.length < RULE.NICKNAME.MIN ||
    nickname.length > RULE.NICKNAME.MAX
  ) {
    return { valid: false, message: '닉네임은 1자 이상 20자 이하여야 합니다.' };
  }

  if (income < RULE.INCOME.MIN || income % RULE.INCOME.STEP !== 0) {
    return {
      valid: false,
      message: '희망 연봉은 소수나 음수로 입력할 수 없습니다.',
    };
  }

  return { valid: true };
};

export { validateUserData };
