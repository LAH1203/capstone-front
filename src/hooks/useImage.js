import { useState } from 'react';

import useError from './useError';

import { requestUploadImg } from '@/apis/request/diary';
import { CLIENT_MESSAGE } from '@/constants/message';

const useImage = () => {
  const [imgLink, setImgLink] = useState('');

  const handleError = useError();

  const resetImg = () => {
    setImgLink('');
  };

  const uploadImg = e => {
    if (!e.target.files || e.target.files.length <= 0) return;

    const file = e.target.files[0];

    if (
      file.type !== 'image/png' &&
      file.type !== 'image/jpg' &&
      file.type !== 'image/jpeg'
    ) {
      alert(CLIENT_MESSAGE.ERROR.INVALID_IMAGE_TYPE);
      return;
    }

    const formData = new FormData();
    formData.append('file', file);

    requestUploadImg(formData)
      .then(res => {
        setImgLink(res.headers.location);
      })
      .catch(err => {
        alert(handleError(err.code));
      });
  };

  return { imgLink, resetImg, uploadImg };
};

export default useImage;
