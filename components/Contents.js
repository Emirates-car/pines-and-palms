import React from 'react';

export default function Contents() {
  return (
    <article className="font-sans bg-bglight px-10 xs:px-3 xxs:px-3 md:px-5 py-10">
      <section className="p-6 bg-bglight text-gray-800" aria-labelledby="car-parts-methods-heading">
        <h2 id="car-parts-methods-heading" className="text-2xl font-bold mb-4">
          5 Ways You Can Find Parts for Your Car
        </h2>

        <p className="mb-4">
          <strong className="text-black">Emirates-car.com</strong> specializes in spare parts for Japanese, Korean, German, French, and American cars. The main brands we deal with include Honda, Volkswagen, Audi, Porsche, Infiniti, Volvo, Toyota, Nissan, Lexus, Mini, BMW, Mercedes-Benz, Renault, Peugeot, Kia, Hyundai, Genesis, Jaguar, Ford, Hummer, Dodge, Cadillac, GMC, Jeep, and Lincoln.
        </p>

        <div className="mb-4 text-black">
          <strong>Tags: </strong>
          <span className="text-blue-600 underline">
            #auto_parts, #car_spare_parts, #autoparts, #spare_parts_online, #car_spare_parts_dubai, #car_parts_in_uae, #auto_parts_dubai, #auto_parts_sharjah, #dubai_auto_parts_online
          </span>
        </div>

        <p className="mb-4">
          At{' '}
          <a href="/" className="text-blue-500 underline">
            Emirates-car.com
          </a>, you can buy premium, high-quality used, genuine, OEM, and aftermarket parts in Dubai, Sharjah, Ajman, Ras Al Khaimah, Abu Dhabi, and worldwide. Click{' '}
          <a href="/" className="text-blue-500 underline">
            Get Free Quote
          </a>{' '}
          to get the best prices now!
        </p>

        {/* Method 1 */}
        <section aria-labelledby="method-1-heading" className="mb-6">
          <h3 id="method-1-heading" className="text-xl font-semibold mb-3">
            1. The Traditional Way: Pros and Cons
          </h3>
          <p className="mb-2">
            You can visit a nearby spare parts shop and purchase what you need. This approach is simple and effective if the shop stocks the brands and models you are looking for.
          </p>
          <div className="mb-2">
            <strong>Pros:</strong>
            <ul className="list-disc ml-6">
              <li>Easy and direct access to spare parts.</li>
              <li>Immediate availability if the store has your required part.</li>
            </ul>
          </div>
          <div>
            <strong>Cons:</strong>
            <ul className="list-disc ml-6">
              <li>Limited stock or brand availability.</li>
              <li>Some shops specialize in only a few brands.</li>
            </ul>
          </div>
        </section>

        {/* Method 2 */}
        <section aria-labelledby="method-2-heading" className="mb-6">
          <h3 id="method-2-heading" className="text-xl font-semibold mb-3">
            2. Giant E-Commerce Companies: Pros and Cons
          </h3>
          <p className="mb-2">Online marketplaces like Amazon, Flipkart, and eBay are alternatives when local shops lack inventory.</p>
          <div className="mb-2">
            <strong>Pros:</strong>
            <ul className="list-disc ml-6">
              <li>Wide variety of products.</li>
              <li>Convenient ordering from home.</li>
            </ul>
          </div>
          <div>
            <strong>Cons:</strong>
            <ul className="list-disc ml-6">
              <li>Risk of damaged parts due to logistics.</li>
              <li>Possibility of loss during transit.</li>
              <li>Unreliable for specific car models.</li>
            </ul>
          </div>
        </section>

        {/* Method 3 */}
        <section aria-labelledby="method-3-heading" className="mb-6">
          <h3 id="method-3-heading" className="text-xl font-semibold mb-3">
            3. Local Dealers: Pros and Cons
          </h3>
          <p className="mb-2">
            Local dealers often come recommended and provide tailored services.
          </p>
          <div className="mb-2">
            <strong>Pros:</strong>
            <ul className="list-disc ml-6">
              <li>Trustworthy and reliable.</li>
              <li>Specialized by brand.</li>
            </ul>
          </div>
          <div>
            <strong>Cons:</strong>
            <ul className="list-disc ml-6">
              <li>Fewer due to digital shift.</li>
              <li>Accessibility may be limited by location.</li>
            </ul>
          </div>
        </section>

        {/* Method 4 */}
        <section aria-labelledby="method-4-heading" className="mb-6">
          <h3 id="method-4-heading" className="text-xl font-semibold mb-3">
            4. Online Marketplaces: Mostly Cons
          </h3>
          <p className="mb-2">
            Marketplaces simplify browsing but present serious limitations:
          </p>
          <ul className="list-disc ml-6">
            <li>Limited availability for rare models.</li>
            <li>Old models often not stocked.</li>
            <li>High risk of spam or fraud.</li>
          </ul>
        </section>

        {/* Method 5 */}
        <section aria-labelledby="method-5-heading">
          <h3 id="method-5-heading" className="text-xl font-semibold mb-3">
            5. Online Dealer Websites: Only Pros!
          </h3>
          <p className="mb-2">
            Dealer websites like{' '}
            <a href="/" className="text-blue-500 underline">
              Emirates-car.com
            </a>{' '}
            offer the most reliable experience.
          </p>
          <div>
            <strong>Pros:</strong>
            <ul className="list-disc ml-6">
              <li>Multiple trusted options online.</li>
              <li>Quick inquiry process.</li>
              <li>Reliable communication.</li>
            </ul>
          </div>
          <p className="mt-4">
            Visit{' '}
            <a href="/" className="text-blue-500 underline">
              Emirates-car.com
            </a>{' '}
            to easily find spare parts for Honda Accord, Civic, Infiniti, BMW, Audi, and more.
          </p>
        </section>
      </section>
    </article>

  );
}
