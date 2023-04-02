import React,{useState,useEffect} from 'react';
import PriceCard from '../PriceCard/PriceCard';

const PriceList = () => {
    const [prices, setPrices]= useState([]);

    useEffect(() => {
      fetch('prices.json')
      .then(res => res.json())
      .then(data => setPrices(data))
    }, []);


    return (
        <div>
            <h2 className="text-3xl bg-neutral-300 p-3 text-center font-semibold">Awesome Affordable Prices</h2>
            <div className="gap-6 grid lg:grid-cols-3 md:grid-cols-2  mt-5 mx-3 md:mx-auto lg:mx-6">
            {
                prices.map(price => <PriceCard key={price.id} price={price}>

                </PriceCard>)
            }
            </div>
        </div>
    );
};

export default PriceList;