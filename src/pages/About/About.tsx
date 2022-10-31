import React from 'react';
import { view } from '@risingstack/react-easy-state';
import './about.css';
import Section from '../../components/Section/Section';
import { REVIEWS } from '../../components/Reviews/review.constants';
import Reviews from '../../components/Reviews/Reviews';
import ImageSection from '../../components/ImageSection/ImageSection';

const About: React.FC = () => {
  return (
    <>
      <div className={'about-container'}>
        <Section
          title={'What is Cashew?'}
          description={
            <p>
              Cashew is an easy way to pay for the things you love. Buy the item
              you want now, and pay for it at a later date or in installments.
              Pay at your own pace. Divided payments. Happy customers.
            </p>
          }
        />

        <ImageSection imageUris={['/images/banner.png']} />

        <Section
          title={'Our goals'}
          description={
            <>
              <p className={'vertical-margin-1'}>
                Cashew is a buy now, pay later platform that allows its
                customers to shop now and pay later in equal monthly
                installments. Its platform offers a point of sale financing with
                curated credit lines and also provides an option to split
                payments into installments or simply delay them to up to a
                fortnight, all without any hidden fees.
              </p>
              <p>
                The company was co-founded by Ammar Afif and Ibtissam Ouassif in
                2019 and is headquartered in Dubai, United Arab Emirates.
              </p>
            </>
          }
        />

        <div className={'tablet-spacer'} />
        <Section
          headerTitle={
            'We work with many popular merchants, you have a lot of choice for your purchases and we are working hard to add new merchants every day.'
          }
        />

        <ImageSection
          pagination
          imageUris={['/images/sandal.png', '/images/runner.png']}
        />

        <Section
          headerTitle={
            'We care about our product and always wanted to improve it. Take a look at reviews on it.'
          }
        />
      </div>
      {!!REVIEWS?.length && <Reviews reviews={REVIEWS} />}
    </>
  );
};

export default view(About);
