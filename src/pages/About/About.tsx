import React from 'react';
import { view } from '@risingstack/react-easy-state';
import './about.css';
import Section from '../../components/Section/Section';

const About: React.FC = () => {
  return (
    <div className={'about-container'}>
      <Section
        title={'What is Cashew?'}
        imageUris={['/images/banner.png']}
        description={
          <>
            <p>Cashew is an easy way to pay for the things you love.</p>
            <p>
              Buy the item you want now, and pay for it at a later date or in
              installments.
            </p>
            <p>Pay at your own pace. Divided payments. Happy customers.</p>
          </>
        }
      />

      <Section
        title={'Our goals'}
        description={
          <>
            <p className={'vertical-padding-10'}>
              Cashew is a buy now, pay later platform that allows its customers
              to shop now and pay later in equal monthly installments.
            </p>
            <p className={'vertical-padding-10'}>
              Its platform offers a point of sale financing with curated credit
              lines and also provides an option to split payments into
              installments or simply delay them to up to a fortnight, all
              without any hidden fees.
            </p>
            <p className={'vertical-padding-10'}>
              The company was co-founded by Ammar Afif and Ibtissam Ouassif in
              2019 and is headquartered in Dubai, United Arab Emirates.
            </p>
          </>
        }
      />

      <Section
        pagination
        headerTitle={
          'We work with many popular merchants, you have a lot of choice for your purchases and we are working hard to add new merchants every day.'
        }
        imageUris={['/images/sandal.png', '/images/runner.png']}
      />

      <Section
        headerTitle={
          'We care about our product and always want to improve it. Take a look at reviews on it.'
        }
      />
    </div>
  );
};

export default view(About);
