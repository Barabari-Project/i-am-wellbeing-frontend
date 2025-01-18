import React from 'react';

const CurriculumTable = () => {
  return (
    <div className='bg-[#FFDE59] p-12'>
      <div>
        <h1 className='text-3xl font-semibold uppercase'>Curriculum</h1>
        <p className='text-xl lg:text-2xl mt-3 text-justify'>
          Level 1 of the Course includes 6 modules. Below is the structure of
          the requirements of the Certificate Course in Trauma-Informed Care
          Practices
        </p>
      </div>
      <h2 className='text-center text-3xl mt-5 mb-5 font-bold'>Course Structure</h2>
      <table className='w-full table-auto'>
        <thead>
          <tr className=''>
            <th className='px-4 py-2 text-left border-2 border-black'>Category</th>
            <th className='px-4 py-2 text-left border-2 border-black'>Hours</th>
          </tr>
        </thead>
        <tbody>
          <tr className='border-b border-black'>
            <td className='px-4 border-2 border-black py-2 text-left'>
              Theory
            </td>
            <td className='px-4 border-2 border-black py-2 text-left'>30</td>
          </tr>
          <tr className='border-b border-black'>
            <td className='px-4 border-2 border-black py-2 text-left'>
              Assignments
            </td>
            <td className='px-4 border-2 border-black py-2 text-left'>9</td>
          </tr>
          <tr className='border-b border-black'>
            <td className='px-4 border-2 border-black py-2 text-left'>
              Case submissions
            </td>
            <td className='px-4 border-2 border-black py-2 text-left'>10</td>
          </tr>
          <tr className='border-b border-black'>
            <td className='px-4 border-2 border-black py-2 text-left'>
              Supervision
            </td>
            <td className='px-4 border-2 border-black py-2 text-left'>12</td>
          </tr>
          <tr className='border-b border-black'>
            <td className='px-4 border-2 border-black py-2 text-left'>Viva</td>
            <td className='px-4 border-2 border-black py-2 text-left'>1</td>
          </tr>
          <tr>
            <td className='px-4 border-2 border-black py-2 text-left'>
              Total hours
            </td>
            <td className='px-4 border-2 border-black py-2 text-left'>62</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default CurriculumTable;
