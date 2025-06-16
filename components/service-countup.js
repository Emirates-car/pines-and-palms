import React from 'react';

export default function Counter() {
  return (
    <div>
      <div className="grid grid-cols-4 text-center gap-2 xs:grid xs:grid-cols-2 xs:gap-1 xxs:text-sm xxs:grid xxs:grid-cols-2 sm:grid sm:grid-cols-1 md:grid md:grid-cols-4 s:grid s:grid-cols-2 md:px-2 pt-10 xs:pt-5 mx-8 xxs:mx-5 s:mx-4 xs:mx-5">
        <div className="font-bold  bg-gradient-to-r from-blue-500 via-blue-200 to-blue-500 rounded-sm lg:mx-6 py-2 shadow-2xl xs:shadow-none sm:shadow-none xs:text-xs text-center">
          <p className="text-2xl text-blue-800 lg:text-base  font-semibold font-mono">
            <i className="fab fa-wpforms fa-2x"></i>
          </p>
          <p className="text-xl lg:text-base sm:text-xs xs:text-xs s:text-xs md:text-sm font-semibold font-mono py-3">
            STEP-1
          </p>
          <p className="text-xl lg:text-xl sm:text-base  xs:text-base s:text-base xxs:text-base md:text-sm font-bold p-1">
            Send Inquiries
          </p>
        </div>
        <div className="font-bold   bg-gradient-to-r from-blue-500 via-blue-200 to-blue-500 rounded-sm lg:mx-6 py-2 shadow-2xl xs:shadow-none sm:shadow-none xs:text-xs text-center">
          <p className="text-2xl text-blue-800 lg:text-base sm:text-xs md:text-sm font-bold">
            <i className="fas fa-handshake fa-2x"></i>{' '}
          </p>

          <p className="text-xl lg:text-base sm:text-xs xs:text-xs s:text-xs md:text-sm font-semibold font-mono py-3">
            STEP-2
          </p>
          <p className="text-xl lg:text-xl sm:text-base xs:text-base s:text-base xxs:text-base md:text-sm font-bold">
            Get Quoted and Dealt
          </p>
        </div>
        <div className="font-bold  bg-gradient-to-r from-blue-500 via-blue-200 to-blue-500 rounded-sm lg:mx-6 py-2 shadow-2xl xs:shadow-none sm:shadow-none xs:text-xs text-center">
          <p className="text-2xl text-blue-800 lg:text-base  font-semibold font-mono">
            <i className="fas fa-truck fa-2x"></i>
          </p>
          <p className="text-xl lg:text-base sm:text-xs md:text-sm xs:text-xs s:text-xs font-semibold font-mono py-3">
            STEP-3
          </p>
          <p className="text-xl lg:text-xl sm:text-base xs:text-base s:text-base xxs:text-base md:text-sm font-bold">
            Get parts Delivered
          </p>
        </div>
        <div className="font-bold  bg-gradient-to-r from-blue-500 via-blue-200 to-blue-500 rounded-sm lg:mx-6 py-2 shadow-2xl xs:shadow-none sm:shadow-none xs:text-xs text-center">
          <p className="text-2xl text-blue-800 lg:text-base font-semibold">
            <i className="fas fa-smile fa-2x"></i>{' '}
          </p>
          <p className="text-xl lg:text-base sm:text-xs md:text-sm xs:text-xs s:text-xs font-semibold font-mono py-3">
            STEP-4
          </p>
          <p className="text-xl lg:text-xl sm:text-base xs:text-base s:text-base xxs:text-base md:text-sm font-bold">
            Happy Customers !
          </p>
        </div>
      </div>
    </div>
  );
}
