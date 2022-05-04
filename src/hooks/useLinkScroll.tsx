import Link from '@/types/link-type';
import ServiceType from '@/types/serviceType';
import { useRouter } from 'next/router';
import { scroller } from 'react-scroll';

const useLinkScroll = () => {
  const router = useRouter();

  const scrollTo = (element: string) => {
    scroller.scrollTo(element, {
      duration: 800,
      delay: 0,
      smooth: `easeInOutQuart`,
    });
  };

  const move = (link: Link | ServiceType) => {
    if (link.href === router.pathname) {
      scrollTo(link.element);
    } else {
      router.push(link.href);
    }
  };

  return { move };
};

export default useLinkScroll;
