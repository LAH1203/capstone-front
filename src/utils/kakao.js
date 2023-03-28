const getKakaoAuthUri = redirectUri => {
  return `https://kauth.kakao.com/oauth/authorize?client_id=${process.env.KAKAO_LOGIN_KEY}&redirect_uri=${redirectUri}&response_type=code`;
};

export { getKakaoAuthUri };
