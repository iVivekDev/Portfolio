import { educations } from '@/data/educations';
import { experiences } from '@/data/experiences';
import styles from '@/styles/modules/ExperienceSection.module.scss';
import classNames from 'classnames';
import { FiBriefcase } from 'react-icons/fi';
import AcademicCap from '@/components/icons/AcademicCap';
import SectionTitle from '@/components/shared/SectionTitle';

const ExperienceSection = () => {
  return (
    <>
      <SectionTitle>Experiences & Educations</SectionTitle>
      <div className="py-10 mt-10 grid gap-8 md:grid-cols-2"> {/* Fixed indentation here */}
        {/* Experience */}
        <div>
          <div className="rounded-2xl bg-white px-10 py-8 shadow-lg dark:bg-gray-700">
            <ol className={classNames(styles['experience'], 'border-l border-gray-200 dark:border-gray-500')}>
              <li  className={styles['experience-item']}>
                <span className="absolute -left-2.5 flex h-5 w-5 items-center justify-center rounded-full bg-white text-primary-500 ring-8 ring-white dark:bg-gray-700 dark:ring-gray-700">
                  <FiBriefcase className="h-5" />
                </span>
                <time className="mb-2 block text-sm font-normal leading-none text-gray-400 dark:text-gray-200">
                  SEPT 2022 - APRIL 2023
                </time>
                <h3 className="mb-1 flex items-center text-lg font-semibold dark:text-gray-200">
                  SEO | SMM and Marketing Outreach Expert
                </h3>
                <p className="mb-2 block text-sm font-normal leading-none text-gray-400 dark:text-gray-200">
                  Cedcoss technology pvt. Limited
                </p>
              </li>

              <li  className={styles['experience-item']}>
                <span className="absolute -left-2.5 flex h-5 w-5 items-center justify-center rounded-full bg-white text-primary-500 ring-8 ring-white dark:bg-gray-700 dark:ring-gray-700">
                  <FiBriefcase className="h-5" />
                </span>
                <time className="mb-2 block text-sm font-normal leading-none text-gray-400 dark:text-gray-200">
                  May 2023-December 2023
                </time>
                <h3 className="mb-1 flex items-center text-lg font-semibold dark:text-gray-200">
                  Senior SEO Manager
                </h3>
                <p className="mb-2 block text-sm font-normal leading-none text-gray-400 dark:text-gray-200">
                  Right Move Technology Pvt. Limited
                </p>
              </li>  
            </ol>
          </div>
        </div>
        {/* Education */}
        <div>
          <div className="rounded-2xl bg-white px-10 py-8 shadow-lg dark:bg-gray-700">
            <ol className={classNames(styles['education'], 'border-l border-gray-200 dark:border-gray-500')}>
              {educations.map((education, index) => (
                <li key={index} className={styles['education-item']}>
                  <span className="absolute -left-2.5 flex h-5 w-5 items-center justify-center rounded-full bg-white text-primary-500 ring-8 ring-white dark:bg-gray-700 dark:ring-gray-700">
                    <AcademicCap className="h-5" />
                  </span>
                  <time className="mb-2 block text-sm font-normal leading-none text-gray-400 dark:text-gray-200">
                    {education.startDate} - {education.endDate}
                  </time>
                  <h3 className="mb-1 flex items-center text-lg font-semibold dark:text-gray-200">
                    {education.degree}
                  </h3>
                  <p className="mb-2 block text-sm font-normal leading-none text-gray-400 dark:text-gray-200">
                    {education.school}
                  </p>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </>
  );
};

export default ExperienceSection;
