import React, { useEffect, useState } from 'react';

interface KakaoMapScriptLoaderProps {
  children: React.ReactNode;
}

const KakaoMapScriptLoader: React.FC<KakaoMapScriptLoaderProps> = ({
  children,
}) => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const checkServicesLoaded = () => {
      if (window.kakao && window.kakao.maps && window.kakao.maps.services) {
        console.log('Kakao Maps services loaded');
        setIsLoaded(true);
      } else {
        console.error('Kakao Maps services not loaded');
        setIsLoaded(false);
      }
    };

    const loadScript = () => {
      if (typeof window.kakao === 'undefined') {
        const script = document.createElement('script');
        script.src = `//dapi.kakao.com/v2/maps/sdk.js?appkey=${import.meta.env.VITE_APP_MAP_API_KEY}&libraries=services`;
        script.async = true;
        script.onload = () => {
          console.log('Kakao Maps API loaded');
          setIsLoaded(true);
        };
      }
    };

    loadScript();
  }, []);

  if (!isLoaded) return <div>Loading...</div>;

  return <>{children}</>;
};

export default KakaoMapScriptLoader;
