import { tw } from 'twind';
import Check from '@/constants/svg/check.svg';

const FeatureSection = () => (
  <section className={tw(`bg-white pb-6`)}>
    <div className={tw(`max-w-7xl mx-auto p-4 sm:p-6 lg:p-8`)}>
      <div className={tw(`container mx-auto px-6 p-6 bg-white`)}>
        <div className={tw(`mb-16 text-center`)}>
          <h4 className={tw(`text-base text-secondary-light font-semibold tracking-wide uppercase`)}>Services</h4>
          <p className={tw(`mt-2 text-5xl lg:text-7xl font-bold tracking-tight text-secondary`)}>
            How we change the game
          </p>
        </div>
        <div className={tw(`flex flex-wrap my-12`)}>
          <div className={tw(`w-full md:w-1/2  p-8`)}>
            <div className={tw(`flex items-center mb-6`)}>
              <Check width={20} height={20} fill="currentColor" className={tw(`h-6 w-6 text-primary-light`)} />
              <div className={tw(`ml-4 text-xl`)}>IT Support & Infrastructure</div>
            </div>
            <p className={tw(`leading-loose text-gray-500`)}>
              Support on Operating Systems, Databases, Application Servers, Help Desk, Operations and Incident Support.
              Certified technicians, virtualization, installation, configuration, implementation, high availability,
              security, support and maintenance.
            </p>
          </div>

          <div className={tw(`w-full md:w-1/2 md:border-b-0  p-8`)}>
            <div className={tw(`flex items-center mb-6`)}>
              <Check width={20} height={20} fill="currentColor" className={tw(`h-6 w-6 text-primary-light`)} />
              <div className={tw(`ml-4 text-xl`)}>Virtual Wallet</div>
            </div>
            <p className={tw(`leading-loose text-gray-500`)}>
              We develop custom applications of &quot;Virtual Wallet&quot; with the ability to manage digital credit
              cards, prepaid gift cards, different cryptocurrencies and direct access to accounts banking.
            </p>
          </div>
          <div className={tw(`w-full md:w-1/2 p-8`)}>
            <div className={tw(`flex items-center mb-6`)}>
              <Check width={20} height={20} fill="currentColor" className={tw(`h-6 w-6 text-primary-light`)} />
              <div className={tw(`ml-4 text-xl`)}>Payment Gateway</div>
            </div>
            <p className={tw(`leading-loose text-gray-500`)}>
              Design of the Business Model product of the incorporation of &quot;Means of payment&quot; as a tool to
              link with your customers, providing: Conceptual design of the process, Necessary functionalities,
              Implementation plan (MVP and future improvements).
            </p>
          </div>
          <div className={tw(`w-full  md:w-1/2  p-8`)}>
            <div className={tw(`flex items-center mb-6`)}>
              <Check width={20} height={20} fill="currentColor" className={tw(`h-6 w-6 text-primary-light`)} />
              <div className={tw(`ml-4 text-xl`)}>Mobile / Web Solutions & Integrations </div>
            </div>

            <p className={tw(`leading-loose text-gray-500 `)}>
              Custom developments, microservices, design, testing and support on systems, analysis, project managers. We
              define and design the main challenges to adopt an API ecosystem within your company. We survey the quality
              criteria that the business demands to put together the appropriate strategy.
            </p>
          </div>
          <div className={tw(`w-full md:w-1/2  p-8`)}>
            <div className={tw(`flex items-center mb-6`)}>
              <Check width={20} height={20} fill="currentColor" className={tw(`h-6 w-6 text-primary-light`)} />
              <div className={tw(`ml-4 text-xl`)}>ITSM Solutions / Service Desk and CMDB & Asset Management </div>
            </div>
            <p className={tw(`leading-loose text-gray-500`)}>
              Help Desk and CMDB & Asset Management solutions designed to optimize IT service delivery and support.
            </p>
          </div>
          <div className={tw(`w-full md:w-1/2 p-8`)}>
            <div className="flex items-center mb-6">
              <Check width={20} height={20} fill="currentColor" className={tw(`h-6 w-6 text-primary-light`)} />
              <div className={tw(`ml-4 text-xl`)}>Red Hat Suite Cloud and On Premise</div>
            </div>
            <p className={tw(`leading-loose text-gray-500`)}>
              Comprehensive solutions for your business, consulting, advice, installation, configuration and training on
              RedHat platform tools.
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default FeatureSection;
