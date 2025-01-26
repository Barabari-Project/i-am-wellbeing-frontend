import React from "react";

const ScheduleTable = () => {
  return (
    <div className="overflow-x-auto pt-4 max-md:overflow-x-scroll max-xl:p-2 ">
      <table className="min-w-full lg:p-2  border-collapse border bg-[#FFDE59] border-black text-sm text-left sm:text-xs md:text-sm lg:text-base ">
        <thead>
          <tr className="bg-[#029390] text-white font-bold">
            <th className="border border-black px-2 py-2 lg:px-4">Week</th>
            <th className="border border-black px-2 py-2 lg:px-4">Topics</th>
            <th className="border border-black px-2 py-2 lg:px-4">
              No. of sessions
            </th>
            <th className="border border-black px-2 py-2 lg:px-4">
              Total hours
            </th>
            <th className="border border-black px-2 py-2 lg:px-4">
              Tentative Date
            </th>
            <th className="border border-black px-2 py-2 lg:px-4">
              Timing and Day
            </th>
            <th className="border border-black px-2 py-2 lg:px-4">
              Assignment
            </th>
          </tr>
        </thead>
        <tbody className="overflow-x-auto max-md:overflow-x-scroll">
          {/* Week 1 */}
          <tr>
            <td
              className="border border-black font-bold px-4 py-2 sm:min-w-[200px] sm:min-h-[150px] md:min-w-[250px] md:min-h-[200px] max-md:text-center"
              rowSpan="2"
            >
              Week 1
            </td>
            <td
              className="border border-black px-4 py-2"
              rowSpan="2"
            >
              <ul className="list-disc list-inside">
                <h1 className="font-bold text-lg md:text-xl">
                  Basics of trauma
                </h1>
                <li className="text-sm md:text-base">
                  Understanding trauma through the decades
                </li>
                <li className="text-sm md:text-base">
                  Trauma perspectives across the globe
                </li>
                <li className="text-sm md:text-base">
                  Adverse Childhood Experiences and its impact
                </li>
              </ul>
            </td>

            <td
              className="border border-black px-2 py-2 text-center text-sm md:text-base"
              rowSpan="2"
            >
              2
            </td>
            <td
              className="border border-black px-2 py-2 text-center text-sm md:text-base"
              rowSpan="2"
            >
              4
            </td>
            <td className="border border-black px-4 py-2 text-center text-sm md:text-base">
              14th June
            </td>
            <td className="border border-black px-4 py-2 text-sm md:text-base">
              10 am to 12 pm: Saturday
            </td>
            <td
              className="border border-black px-2 py-2 text-center text-sm md:text-base"
              rowSpan="2"
            >
              1
            </td>
          </tr>
          <tr>
            <td className="border border-black px-4 py-2  text-center text-sm md:text-base">
              15th June
            </td>
            <td className="border border-black px-4 py-2 text-sm md:text-base">
              10 am to 12 pm: Sunday
            </td>
          </tr>

          {/* Week 2 */}
          <tr>
            <td
              className="border border-black font-bold px-4 py-2 sm:min-w-[200px] sm:min-h-[150px] md:min-w-[250px] md:min-h-[200px] max-md:text-center"
              rowSpan="2"
            >
              Week 2
            </td>
            <td className="border border-black px-4 py-2" rowSpan="2">
              <ul className="list-disc list-inside">
                <h1 className="font-bold">
                  Neuroscience of trauma and levels of safety
                </h1>
                <li className="text-sm md:text-base">Anatomy of survival</li>
                <li className="text-sm md:text-base">Brain-body connection</li>
                <li className="text-sm md:text-base">Levels of safety</li>
                <li className="text-sm md:text-base">Imprint of trauma memories</li>
              </ul>
            </td>
            <td
              className="border border-black px-4 py-2 text-center text-sm md:text-base"
              rowSpan="2"
            >
              2
            </td>
            <td
              className="border border-black px-4 py-2 text-center text-sm md:text-base"
              rowSpan="2"
            >
              4
            </td>
            <td className="border border-black px-4 py-2 text-sm md:text-base">21st June</td>
            <td className="border border-black px-4 py-2 text-sm md:text-base">
              10 am to 12 pm: Saturday
            </td>
            <td
              className="border border-black px-4 py-2 text-center text-sm md:text-base"
              rowSpan="2"
            >
              1
            </td>
          </tr>
          <tr>
            <td className="border border-black px-4 py-2 text-sm md:text-base">22nd June</td>
            <td className="border border-black px-4 py-2 text-sm md:text-base">
              10 am to 12 pm: Sunday
            </td>
          </tr>

          {/* Week 3 */}
          <tr>
            <td className="border border-black font-bold px-4 py-2 sm:min-w-[200px] sm:min-h-[150px] md:min-w-[250px] md:min-h-[200px] max-md:text-center">
              Week 3
            </td>
            <td className="border border-black px-4 py-2">
              <ul className="list-disc list-inside">
                <h1 className="font-bold">Trauma-informed care</h1>
                <li>Goals and Principles</li>
              </ul>
            </td>
            <td className="border border-black px-4 py-2 text-center text-sm md:text-base">1</td>
            <td className="border border-black px-4 py-2 text-center text-sm md:text-base">2</td>
            <td className="border border-black px-4 py-2 text-sm md:text-base">28th June</td>
            <td className="border border-black px-4 py-2 text-sm md:text-base">
              10 am to 12 pm: Saturday
            </td>
            <td className="border border-black px-4 py-2 text-center text-sm md:text-base">1</td>
          </tr>

          {/* Week 4 */}
          <tr>
            <td
              className="border border-black px-4 py-2 font-bold max-md:text-center"
              rowSpan="2"
            >
              Week 4
            </td>
            <td className="border border-black px-4 py-2" rowSpan="2">
              <ul className="list-disc list-inside">
                <h1 className="font-bold">
                  Trauma-informed counselling skills
                </h1>
                <li className="text-sm md:text-base">Adapting the trauma lens in practice</li>
                <li className="text-sm md:text-base">Understanding client-therapist relationship</li>
                <li className="text-sm md:text-base">Practical applications</li>
              </ul>
            </td>
            <td
              className="border border-black px-4 py-2 text-center text-sm md:text-base"
              rowSpan="2"
            >
              2
            </td>
            <td
              className="border border-black px-4 py-2 text-center text-sm md:text-base"
              rowSpan="2"
            >
              4
            </td>
            <td className="border border-black px-4 py-2 text-sm md:text-base">29th June</td>
            <td className="border border-black px-4 py-2 text-sm md:text-base">
              10 am to 12 pm: Sunday
            </td>
            <td
              className="border border-black px-4 py-2 text-center text-sm md:text-base"
              rowSpan="2"
            >
              1
            </td>
          </tr>
          <tr>
            <td className="border border-black px-4 py-2 text-sm md:text-base">5th July</td>
            <td className="border border-black px-4 py-2 text-sm md:text-base">
              10 am to 12 pm: Saturday
            </td>
          </tr>

          {/* Break */}
          <tr className="bg-yellow-200">
            <td
              className="border border-black px-4 py-2 text-center text-sm md:text-base"
              colSpan="7"
            >
              Break (6th July)
            </td>
          </tr>
          {/* {five} */}
          {/* Week 5 */}
          <tr>
            <td
              className="border border-black font-bold px-4 py-2 sm:min-w-[200px] sm:min-h-[150px] md:min-w-[250px] md:min-h-[200px] max-md:text-center"
              rowSpan="2"
            >
              Week 5
            </td>
            <td className="border border-black px-4 py-2" rowSpan="5">
              <ul className="list-disc list-inside">
                <h1 className="font-bold">
                  Evidence based tools for processing trauma
                </h1>
                <li className="text-sm md:text-base">Orientation to Arts-Based Therapy (ABT)</li>
                <li className="text-sm md:text-base">Introduction to somatic practices</li>
                <li className="text-sm md:text-base">Basics of Emotional Freedom Tapping (EFT)</li>
                <li className="text-sm md:text-base">Mindfulness-based practices</li>
                <li className="text-sm md:text-base">Non-violent communication</li>
              </ul>
            </td>
            <td
              className="border border-black px-4 py-2 text-center text-sm md:text-base"
              rowSpan="5"
            >
              5
            </td>
            <td
              className="border border-black px-4 py-2 text-center text-sm md:text-base"
              rowSpan="5"
            >
              10
            </td>
            <td className="border border-black px-4 py-2 text-sm md:text-base">12th July</td>
            <td className="border border-black px-4 py-2 text-sm md:text-base">
              10 am to 12 pm: Saturday
            </td>
            <td
              className="border border-black px-4 py-2 text-center text-sm md:text-base"
              rowSpan="2"
            >
              1
            </td>
          </tr>
          <tr>
            <td className="border border-black px-4 py-2 text-sm md:text-base">13th July</td>
            <td className="border border-black px-4 py-2 text-sm md:text-base">
              10 am to 12 pm: Sunday
            </td>
          </tr>

          {/* Week 6 */}
          <tr>
            <td
              className="border border-black font-bold px-4 py-2 sm:min-w-[200px] sm:min-h-[150px] md:min-w-[250px] md:min-h-[200px] max-md:text-center"
              rowSpan="3"
            >
              Week 6
            </td>

            <td className="border border-black px-4 py-2 text-sm md:text-base">19th July</td>
            <td className="border border-black px-4 py-2 text-sm md:text-base">
              10 am to 12 pm: Saturday
            </td>
            <td
              className="border border-black px-4 py-2 text-center text-sm md:text-base"
              rowSpan="3"
            >
              1
            </td>
          </tr>
          <tr>
            <td className="border border-black px-4 py-2 text-sm md:text-base">20th July</td>
            <td className="border border-black px-4 py-2 text-sm md:text-base">
              10 am to 12 pm: Sunday
            </td>
          </tr>
          <tr>
            <td className="border border-black px-4 py-2 text-sm md:text-base">26th July</td>
            <td className="border border-black px-4 py-2 text-sm md:text-base">
              10 am to 12 pm: Saturday
            </td>
          </tr>

          {/* Week 7 */}
          <tr>
            <td
              className="border border-black font-bold px-4 py-2 sm:min-w-[200px] sm:min-h-[150px] md:min-w-[250px] md:min-h-[200px] max-md:text-center"
              rowSpan="2"
            >
              Week 7
            </td>
            <td
              className="border border-black px-4 py-2"
              rowSpan="4"
            >
              <ul className="list-disc list-inside">
                <h1 className="font-bold">
                  Practical application and self-care
                </h1>
                <li className="text-sm md:text-base">Roleplays</li>
                <li className="text-sm md:text-base">Vicarious trauma and self-care</li>
                <li className="text-sm md:text-base">Orientation to supervision and case submissions + Q/A</li>
              </ul>
            </td>
            <td
              className="border border-black px-4 py-2 text-center text-sm md:text-base"
              rowSpan="4"
            >
              3
            </td>
            <td
              className="border border-black px-4 py-2 text-center text-sm md:text-base"
              rowSpan="4"
            >
              6
            </td>
            <td className="border border-black px-4 py-2 text-sm md:text-base">27th July</td>
            <td className="border border-black px-4 py-2 text-sm md:text-base">
              10 am to 12 pm: Sunday
            </td>
            <td
              className="border border-black px-4 py-2 text-center text-sm md:text-base"
              rowSpan="2"
            >
              1
            </td>
          </tr>
          <tr>
            <td className="border border-black px-4 py-2 text-sm md:text-base">2nd August</td>
            <td className="border border-black px-4 py-2 text-sm md:text-base">
              10 am to 12 pm: Saturday
            </td>
          </tr>

          {/* Week 8 */}
          <tr>
            <td
              className="border border-black font-bold px-4 py-2 sm:min-w-[200px] sm:min-h-[150px] md:min-w-[250px] md:min-h-[200px] max-md:text-center"
              rowSpan="2"
            >
              Week 8
            </td>

            <td className="border border-black px-4 py-2 text-sm md:text-base">3rd August</td>
            <td className="border border-black px-4 py-2 text-sm md:text-base">
              10 am to 12 pm: Sunday
            </td>
            <td
              className="border border-black px-4 py-2 text-center text-sm md:text-base"
              rowSpan="2"
            >
              1
            </td>
          </tr>
        </tbody>

        {/* Footer Row */}
        <tfoot>
          <tr>
            <td
              colSpan="6"
              className="border border-black px-4 py-2 bg-teal-600 text-center text-white font-bold"
            >
              Closing Ceremony
            </td>
            <td className="border border-black px-4 py-2 bg-teal-600 text-center text-white">
              December
            </td>
          </tr>
        </tfoot>
      </table>
    </div>
  );
};

export default ScheduleTable;
