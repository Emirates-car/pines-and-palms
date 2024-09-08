import Link from 'next/link';
import React from 'react';

export default function Contents() {
  return (
    <div>
      <div className="font-sans bg-bglight px-10 xs:px-3 xxs:px-3 md:px-5 py-10">
        <h6 className="text-3xl font-extrabold mx-auto my-5">
          5 ways you can find parts for your car
        </h6>
        <p className="mt-3 text-lg font-normal">
          Emirates-car.com deals with Japanese, Korean, German, French and
          American cars. The main brands that we deal are Honda, Volkswagen,
          Audi, Porsche, Infiniti, Volvo, Toyota, Nissan, Lexus, Mini, BMW,
          Mercedes Benz, Renault, Peugot, Kia, Hyundai, Genesis, Jaguar, Ford,
          Hummer, Dodge, Cadillac, GMC, Jeep and Lincoln.
          <span className="block text-black">
            Tags:{' '}
            <span className="block text-blue-600 xl:inline underline">
              #auto_parts, #car_spare_parts, #autoparts, #spare_parts_online ,
              #car_spare_parts_dubai , #car_parts_in_uae , #auto_parts_dubai ,
              #auto_parts_sharjah , #dubai_auto_parts_online.
            </span>
          </span>
        </p>
        Buy Premium High Quality Used, Genuine, OEM and Aftermarket parts in
        Dubai, Sharjah, Ajman, Ras al khaimah, Abu dhabi and all over the world.
        We are dealers in Auto Spare parts in UAE. If you are in need of any
        Spare parts click on Get Free Quote and get best prices now. There are 5
        ways you can try finding spare parts for your car.
        <p className="text-xl  text-black mx-auto my-5 font-bold">
          Traditional way its pros and cons
        </p>
        You find a spare parts shop nearby and go and purchase and the work is
        done. In this case, the pros is that you find nearby automotive store to
        have similar brands you have and thats it you purchase it with ease. But
        the cons is when you don't find the nearby shop to have the car brand
        which you are using. There are shop who only deal with certain parts
        like the shop A sells only in honda, Mazda, BMW and shop B sells only
        Audi, Lincoln and Ferrari. So to see for next option, you can opt for
        shopping from Giant E-commerce company like Amazon, EBay, Flipkart etc.
        <p className="text-xl  text-black mx-auto my-5 font-bold">
          Giant E-commerce Company its pros and cons:
        </p>
        If you don&apos;t find spare parts nearby your house location, generally
        we move on to search on internet. You search for top companies selling
        spare parts online and you end up in giant e-commerce company like
        Amazon, Flipkart,Ebay etc. Now you see the review of person who has
        already ordered spare parts. Most of the reviews says the parts were
        broken. These giant company has a very big logistics that they are
        vulnerable to be broken during or even get lost during the check-in
        process. So it is not always safe to buy spare parts from giant
        e-commerce company. Hence we see for other option which is the Local
        dealers.
        <p className="text-xl  text-black mx-auto my-5 font-bold">
          Local Dealers
        </p>
        Local dealers are known through other person like through friends and
        family. Or he gives you his business card and he explains you directly
        the car brands he deals with. However with the current digital
        advancement, the local dealers are decreasing gradually. So we move to
        the next option to search on online marketplace.
        <p className="text-xl  text-black mx-auto my-5 font-bold">
          Online Marketplace (Only CONS!)
        </p>
        Through Online marketplace we find spare parts for our car easily. But
        it also has lots of cons. If you search for very latest model used spare
        parts, it will not be available on marketplace. In this case you have to
        contact the car brand company directly. If you search for very old
        model, it will not be available with most of the car brands company
        itself because old models are mostly out of stock and they concentrate
        on new latest models for the best sale. And also there are more spam
        issues reported from those who purchase from small vendor marketplace
        and also the larger companies. In this case you should go for Online
        dealer website.
        <p className="text-xl  text-black mx-auto my-5 font-bold">
          Online Dealer Website ONLY PROS!
        </p>
        Online dealers website is the easiest way to order spare parts. You
        visit a bunch of site online and submit your inquiries therein and
        dealers will contact you back through the contact information you
        submitted. If one website didnt reply you, then other website will do.
        So there is plenty of website and options. Emirates-car.com is one such
        website which accept online inquiries. It deals with parts and
        accessories for honda accord, Honda civic and{' '}
        <Link
          href="https://emirates-car.com/search-by-make/Honda"
          className="text-blue-500 underline hover:text-blue-900"
        >
          other honda models, Infiniti models, BMW models, Audi models and many
          other brands. Visit to search parts you need.
        </Link>
      </div>
    </div>
  );
}
