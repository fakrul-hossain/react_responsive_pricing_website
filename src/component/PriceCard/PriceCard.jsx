import React from 'react';
import Feature from '../Feature/Feature';

const PriceCard = ({price}) => {
    const {name,imageUrl,features,prices}=price
    return (
        <div>
            <div className="card lg:w-96 bg-base-100 shadow-xl">
  <figure><img className="rounded" src={imageUrl}/></figure>
  <div className="card-body">
    <h2 className="card-title  font-bold">{name}</h2>
    <p className="font-semibold">Price: {prices}/month</p>
    <p className="font-semibold">Features</p>{
        features.map((feature,idx) => <Feature feature={feature} key={idx}>

        </Feature>)
    }
    <div className="card-actions justify-end">
      <button className="btn mx-auto px-28 mt-3 btn-primary">Subscribe</button>
    </div>
  </div>
</div>
        </div>
    );
};

export default PriceCard;