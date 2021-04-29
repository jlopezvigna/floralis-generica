import { tw } from 'twind';
import Image from '@/constants/svg/women-lamp.svg';

const GetInTouch = () => (
  <section className={tw(`bg-gradient-to-b from-gray-100 to-white shadow-inner pt-12`)}>
    <div className={tw(`relative max-w-7xl mx-auto mb-24`)}>
      <div className={tw(`overflow-hidden lg:max-w-none lg:flex`)}>
        <div className={tw(`py-8 px-6 md:px-0 lg:flex-shrink-1`)}>
          <h2 className={tw(`text-4xl lg:text-7xl font-bold text-secondary lg:mb-6`)}>Get in Touch</h2>
          <p className={tw(`text-base leading-6 text-gray-500 mb-2`)}>Let us know how we can help.</p>
          <a className={tw(`text-xl hover:underline text-primary-light`)} href="mailto:info@expertice.com.ar">
            hello@floralisgenerica.com
          </a>
        </div>
        <div className={tw(`lg:flex-grow-1 lg:-mt-10`)}>
          <Image className={tw(`h-96 w-96`)} />
        </div>
      </div>
    </div>
  </section>
);

export default GetInTouch;
