import { PlusCircleFilled } from '@ant-design/icons';
import Image from 'next/image';
import React from 'react';
import Money from '../Common/Money/Money';

import './TitlePricing.css';

type Props = {
  data: {
    freeChapters: number;
    costEachChap: number;
    discount: number;
    totalChapters: number;
  };
};

const TitlePricing = (props: Props) => {
  const { data } = props;
  const lockedChapter = data.totalChapters - data.freeChapters;

  const totalCost = lockedChapter * data.costEachChap;
  const costWithDiscount = Math.round(totalCost * (data.discount / 100));

  return (
    <div className="pricingWrapper">
      <div className="h4--medium">Pricing & Promotion</div>
      <div className="pricing__table" style={{ marginTop: '16px' }}>
        <div
          style={{
            display: 'flex',
            borderBottom: '1px solid #141414',
          }}
        >
          <div
            className="pricing__tableHeader"
            style={{ borderRight: '1px solid #141414' }}
          >
            <div
              className="text--regular"
              style={{ color: 'rgba(255, 255, 255, 0.45)' }}
            >
              FREE
            </div>
            <div className="h5--medium">{data.freeChapters} chapters</div>
          </div>
          <div className="pricing__tableHeader">
            <div
              className="text--regular"
              style={{ color: 'rgba(255, 255, 255, 0.45)' }}
            >
              LOCKED
            </div>
            <div
              className="h5--medium"
              style={{ display: 'flex', alignItems: 'center' }}
            >
              {lockedChapter} chapters
              <span
                className="text--regular"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  marginLeft: '4px',
                  color: 'rgba(255, 255, 255, 0.45)',
                }}
              >
                (<Money number={5} size={14} /> / chapter)
              </span>
            </div>
          </div>
        </div>

        <div
          style={{
            padding: '0 16px',
          }}
        >
          <div
            style={{
              borderBottom: '1px solid #141414',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              padding: '16px 0',
            }}
          >
            <div>
              <div className="h5--medium">Total</div>
              <div
                className="text--regular"
                style={{ color: 'rgba(255, 255, 255, 0.45)' }}
              >
                Instant access to all chapters • No Ad
              </div>
            </div>
            <div className="pricing__btn">
              <Money number={totalCost} size={16} isBold></Money>
            </div>
          </div>

          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              padding: '16px 0',
            }}
          >
            <div>
              <div
                className="h5--medium"
                style={{
                  color: '#A379FF',
                  display: 'flex',
                  alignItems: 'center',
                }}
              >
                <span style={{ marginRight: '4px' }}>
                  Save money with INKR Extra
                </span>
                <img
                  src="/assets/extra.png"
                  alt="coin"
                  style={{ width: '16px', height: '16px' }}
                ></img>
              </div>
              <div
                className="text--regular"
                style={{ color: 'rgba(255, 255, 255, 0.45)' }}
              >
                Instant access to all chapters • No Ad • Extra saving
              </div>
            </div>
            <div>
              <div className="pricing__btn-2">
                <div className="pricing__btn-2-1 h4--medium">
                  -{data.discount}%
                </div>
                <div className="pricing__btn-2-2">
                  <Image
                    src="/assets/coin.png"
                    alt="coin"
                    width={16}
                    height={16}
                    layout="intrinsic"
                  ></Image>
                  <span
                    className="text--small"
                    style={{
                      textDecoration: 'line-through',
                      margin: '0 4px',
                      fontSize: '12px',
                      color: 'rgba(255, 255, 255, 0.3)',
                    }}
                  >
                    {totalCost}
                  </span>
                  <span>{costWithDiscount}</span>
                </div>
              </div>
              <div className="pricing__note">Saving rates may vary</div>
            </div>
          </div>
        </div>
      </div>

      <div
        className="text--regular"
        style={{ textAlign: 'center', marginTop: '16px' }}
      >
        Want to read for free?{' '}
        <span style={{ fontWeight: 700 }}>Learn more</span>
      </div>
    </div>
  );
};

export default TitlePricing;
