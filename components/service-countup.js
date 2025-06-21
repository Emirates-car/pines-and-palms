import React from 'react';

export default function Counter() {
  return (
    <section
      aria-labelledby="order-process-title"
      className="pt-10 px-8 xxs:px-5 s:mx-4 xs:mx-5 max-w-7xl mx-auto"
    >
      <h2 id="order-process-title" className="sr-only">
        How to Order Auto Spare Parts - 4 Step Process
      </h2>

      <div className="grid grid-cols-4 text-center gap-2 xs:grid-cols-2 xs:gap-1 xxs:text-sm sm:grid-cols-1 md:grid-cols-4 s:grid-cols-2 md:px-2">
        {/* STEP 1 */}
        <article className="bg-gradient-to-r from-blue-500 via-blue-200 to-blue-500 rounded-sm lg:mx-6 py-4 shadow-2xl xs:shadow-none sm:shadow-none text-center">
          <div aria-hidden="true" className="text-2xl text-blue-800 lg:text-base font-semibold font-mono">
            <i className="fab fa-wpforms fa-2x"></i>
          </div>
          <h3 className="text-xl lg:text-base sm:text-xs md:text-sm font-semibold font-mono py-3">STEP 1</h3>
          <p className="text-xl lg:text-xl sm:text-base md:text-sm font-bold">Send Inquiries</p>
        </article>

        {/* STEP 2 */}
        <article className="bg-gradient-to-r from-blue-500 via-blue-200 to-blue-500 rounded-sm lg:mx-6 py-4 shadow-2xl xs:shadow-none sm:shadow-none text-center">
          <div aria-hidden="true" className="text-2xl text-blue-800 lg:text-base sm:text-xs md:text-sm font-bold">
            <i className="fas fa-handshake fa-2x"></i>
          </div>
          <h3 className="text-xl lg:text-base sm:text-xs md:text-sm font-semibold font-mono py-3">STEP 2</h3>
          <p className="text-xl lg:text-xl sm:text-base md:text-sm font-bold">Get Quoted and Dealt</p>
        </article>

        {/* STEP 3 */}
        <article className="bg-gradient-to-r from-blue-500 via-blue-200 to-blue-500 rounded-sm lg:mx-6 py-4 shadow-2xl xs:shadow-none sm:shadow-none text-center">
          <div aria-hidden="true" className="text-2xl text-blue-800 lg:text-base font-semibold font-mono">
            <i className="fas fa-truck fa-2x"></i>
          </div>
          <h3 className="text-xl lg:text-base sm:text-xs md:text-sm font-semibold font-mono py-3">STEP 3</h3>
          <p className="text-xl lg:text-xl sm:text-base md:text-sm font-bold">Get Parts Delivered</p>
        </article>

        {/* STEP 4 */}
        <article className="bg-gradient-to-r from-blue-500 via-blue-200 to-blue-500 rounded-sm lg:mx-6 py-4 shadow-2xl xs:shadow-none sm:shadow-none text-center">
          <div aria-hidden="true" className="text-2xl text-blue-800 lg:text-base font-semibold">
            <i className="fas fa-smile fa-2x"></i>
          </div>
          <h3 className="text-xl lg:text-base sm:text-xs md:text-sm font-semibold font-mono py-3">STEP 4</h3>
          <p className="text-xl lg:text-xl sm:text-base md:text-sm font-bold">Happy Customers!</p>
        </article>
      </div>
    </section>

  );
}
