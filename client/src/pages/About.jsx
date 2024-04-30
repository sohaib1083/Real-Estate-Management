import React from 'react';

export default function About() {
  return (
    <div className='py-20 px-4 max-w-6xl mx-auto'>
      <h1 className='text-3xl font-bold mb-8 text-gray-800'>About Our Real Estate Company</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="bg-gray-200 rounded-lg shadow-lg p-6 flex flex-col items-center">
          <img src='/images/AD-2023.jpg' alt="Sohaib Sarosh Shamsi" className="rounded-full mb-4" style={{ width: '200px', height: '200px' }}/>
          <h2 className="text-xl font-semibold mb-2">Sohaib Sarosh Shamsi</h2>
          <p className="text-gray-700">Founder & CEO</p>
          <p className="text-sm text-gray-600 mt-2">As the founder and CEO of our real estate company, Sohaib Sarosh Shamsi brings visionary leadership and a passion for excellence. With extensive experience in the industry, he is dedicated to providing exceptional service and helping clients achieve their property goals.</p>
        </div>
        <div className="bg-gray-200 rounded-lg shadow-lg p-6 flex flex-col items-center">
          <img src='/images/abdullah.png' alt="Abdullah Gohar" className="rounded-full mb-4" style={{ width: '200px', height: '200px' }}/>
          <h2 className="text-xl font-semibold mb-2">Abdullah Gohar</h2>
          <p className="text-gray-700">Co-Founder & Operations Manager</p>
          <p className="text-sm text-gray-600 mt-2">Abdullah Gohar, co-founder and operations manager, ensures smooth operations and excellent customer service. With a focus on efficiency and client satisfaction, he oversees the day-to-day activities of our company, ensuring seamless transactions for our clients.</p>
        </div>
        <div className="bg-gray-200 rounded-lg shadow-lg p-6 flex flex-col items-center">
          <img src='/images/haris.png' alt="Haris Kabir" className="rounded-full mb-4" style={{ width: '200px', height: '200px' }}/>
          <h2 className="text-xl font-semibold mb-2">Haris Kabir</h2>
          <p className="text-gray-700">Co-Founder & Finance Director</p>
          <p className="text-sm text-gray-600 mt-2">Haris Kabir, co-founder and finance director, brings financial expertise and strategic planning to our company. With a focus on fiscal responsibility and growth, he ensures our company's financial stability and success, driving us towards sustainable growth.</p>
        </div>
      </div>
      <div className="mt-12">
        <p className='text-gray-700'>Our real estate company, founded by Sohaib Sarosh Shamsi, Abdullah Gohar, and Haris Kabir, is dedicated to helping individuals and families find their dream homes and investment properties.</p>
        <p className='text-gray-700 mt-4'>With a commitment to personalized service and attention to detail, we assist our clients throughout the entire buying or renting process, ensuring a smooth and stress-free experience.</p>
        <p className='text-gray-700 mt-4'>Whether you're searching for a new home, looking to invest in real estate, or need assistance in renting out your property, we are here to guide you every step of the way.</p>
      </div>
    </div>
  );
}
