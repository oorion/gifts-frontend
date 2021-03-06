import React from 'react';
import PropTypes from 'prop-types';
import { injectIntl } from 'react-intl';
import Navbar from '@bitcoin-portal/navbar';
import Footer from '@bitcoin-portal/footer';
import { Wrapper, HeadSection } from './styled';
import SEO from './SEO';
import GiftsPortal from './GiftsPortal';
import './helpers/print.css';

const Home = ({ locale, intl: { formatMessage } }) => {
  return (
    <>
      <SEO />
      <Wrapper className="print">
        <HeadSection className="noPrint">
          <Navbar locale={locale} contrast />
        </HeadSection>
        <GiftsPortal locale={locale} />
        <Footer locale={locale} />
      </Wrapper>
    </>
  );
};

Home.propTypes = {
  locale: PropTypes.string.isRequired,
  intl: PropTypes.shape({
    formatMessage: PropTypes.func,
  }).isRequired,
};

export default injectIntl(Home);
