import SocialLink from '@/components/social-link';
import navigationLinks from '@/constants/navigationLinks';
import serviceLinks from '@/constants/serviceLinks';
import Facebook from '@/constants/svg/facebook.svg';
import Linkedin from '@/constants/svg/linkedin.svg';
import useLinkScroll from '@/hooks/useLinkScroll';
import { tw } from 'twind';

const Footer = () => {
  const { move } = useLinkScroll();

  return (
    <footer className={tw(`bg-white border-t border-gray-400 pt-14 pb-16`)}>
      <div className={tw(`max-w-7xl mx-auto text-gray-400 px-8 lg:px-0 flex flex-wrap`)}>
        <div className={tw(`mb-14 flex items-center w-full`)}>
          <img className={tw(`h-12 w-12 mr-4`)} src="/images/logo.png" alt="logo" width={52} height={52} />
          <p className={tw(`lg:text-4xl text-2xl text-secondary font-bold`)}>Floralis Generica</p>
        </div>
        <div className={tw(`w-full`)}>
          <ul className={tw(`text-lg font-light flex flex-wrap w-full`)}>
            <li className={tw(`w-full md:w-1/4 lg:w-1/4 mb-3`)}>
              <div>
                <h4 className={tw(`text-secondary-dark text-base font-bold mb-1`)}>Services</h4>
                <ul>
                  {serviceLinks.map((link) => (
                    <li className={tw(`text-gray-800 text-sm font-medium leading-6`)} key={link.label}>
                      <span role="button" aria-hidden="true" tabIndex={0} onClick={() => move(link)}>
                        {link.label}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </li>
            <li className={tw(`w-full md:w-1/4 lg:w-1/4 mb-5`)}>
              <div>
                <h4 className={tw(`text-secondary-dark text-base font-bold mb-1`)}>Company</h4>
                <ul>
                  {navigationLinks.map((link) => (
                    <li className={tw(`text-gray-800 text-sm font-medium leading-6`)} key={link.label}>
                      <span role="button" aria-hidden="true" tabIndex={0} onClick={() => move(link)}>
                        {link.label}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </li>
            <li className={tw(`w-full w-1/2 md:w-1/2 lg:w-1/2 mb-3`)}>
              <h4 className={tw(`text-secondary-dark text-base font-bold mb-1`)}>Social Media</h4>
              <div className={tw(`flex`)}>
                <SocialLink
                  href="https://www.linkedin.com/company/floralis-generica-corp"
                  target="_blank"
                  icon={<Facebook />}
                />
                <SocialLink
                  href="https://www.linkedin.com/company/floralis-generica-corp"
                  target="_blank"
                  className={tw(`mx-3`)}
                  icon={<Linkedin />}
                />
              </div>
            </li>
          </ul>
        </div>
        <div className={tw(`w-full text-right text-xs`)}>© 2021 Floralis Generica Corp.</div>
      </div>
    </footer>
  );
};

export default Footer;
