import { useState, useRef } from 'react';

function useImageUploader(defaultImageUrl: string) {
  const [imgSrc, setImgSrc] = useState<string>(defaultImageUrl);
  const fileInput = useRef<HTMLInputElement>(null);

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const reader = new FileReader();
      reader.onload = () => {
        if (reader.readyState === 2) {
          setImgSrc(reader.result as string);
        }
      };
      reader.readAsDataURL(e.target.files[0]);
    } else {
      setImgSrc(defaultImageUrl);
    }
  };

  return { imgSrc, fileInput, onChange };
}

export default useImageUploader;
