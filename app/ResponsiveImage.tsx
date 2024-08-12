"use client";
import { useEffect, useState } from "react";
import Image, { ImageProps } from "next/image";
interface ResponsiveImageProps extends Omit<ImageProps, 'src'> {
  srcMobile: string;  
  srcSmallTablet: string;
  srcTabletPortrait: string;
  srcTabletLandscape: string;
  srcSmallDesktop: string;
  srcLargeDesktop: string;
}

const ResponsiveImage: React.FC<ResponsiveImageProps> = ({
  srcMobile,
  srcSmallTablet,
  srcTabletPortrait,
  srcTabletLandscape,
  srcSmallDesktop,
  srcLargeDesktop,
  alt,
  ...props
}) => {
  const [src, setSrc] = useState<string>('');

  useEffect(() => {
    const updateImageSrc = () => {
      if (window.innerWidth <= 480) {
        setSrc(srcMobile);
      } else if (window.innerWidth >= 481 && window.innerWidth <= 767) {
        setSrc(srcSmallTablet);
      } else if (window.innerWidth >= 768 && window.innerWidth <= 991) {
        setSrc(srcTabletPortrait);
      } else if (window.innerWidth >= 992 && window.innerWidth <= 1199) {
        setSrc(srcTabletLandscape);
      } else if (window.innerWidth >= 1200 && window.innerWidth <= 1399) {
        setSrc(srcSmallDesktop);
      } else if (window.innerWidth >= 1400) {
        setSrc(srcLargeDesktop);
      }
    };

    updateImageSrc(); // Set initial src based on the current viewport width

    const mediaQueries = [
      window.matchMedia('(max-width: 480px)'),
      window.matchMedia('(min-width: 481px) and (max-width: 767px)'),
      window.matchMedia('(min-width: 768px) and (max-width: 991px)'),
      window.matchMedia('(min-width: 992px) and (max-width: 1199px)'),
      window.matchMedia('(min-width: 1200px) and (max-width: 1399px)'),
      window.matchMedia('(min-width: 1400px)')
    ];

    mediaQueries.forEach(mq => mq.addEventListener('change', updateImageSrc));

    return () => {
      mediaQueries.forEach(mq => mq.removeEventListener('change', updateImageSrc));
    };
  }, [srcMobile, srcSmallTablet, srcTabletPortrait, srcTabletLandscape, srcSmallDesktop, srcLargeDesktop]);

  // Render nothing or a placeholder during server-side rendering
  if (!src) {
    return null;
  }

  // Add priority property to the Image component if it should be above the fold
  return <Image src={src} alt={alt} {...props} priority />;
};

export default ResponsiveImage;
