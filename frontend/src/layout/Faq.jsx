import React from "react";

function Faq() {
  return (
    <>
      <div className="w-full  m-auto h-auto mt-5">
        <section
          className="grid grid-cols-1 p-5 gap-y-3 divide-y bg-transparent rounded-[10px]"
          style={{
            boxShadow: "rgba(100, 100, 111, 0.2) 0px 8px 29px 8px",
          }}
        >
          <details open className="group py-1 text-lg">
            <summary className="flex cursor-pointer flex-row items-center justify-between py-3 font-semibold text-gray-800 marker:[font-size:0px]">
              <span className="text-[20px]">Enhance Patient Experience</span>
              <svg
                className="h-6 w-6 rotate-0 transform text-[#E53A3A] group-open:rotate-180"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </summary>
            <p className="text-gray-500 text-[16px] leading-5">
              Reduced Waiting Times Smart queues optimize patient flow, reducing
              waiting times and minimizing patient frustration.
              <br />
              <br />
              Transparency Patients can track their position in the queue and
              receive real-time updates, reducing anxiety and uncertainty
              <br />
              <br />
              Improved Patient Safety By efficiently managing patient flow,
              smart queues reduce overcrowding and ensure a more organized
              environment. This helps minimize the risk of errors, enhances
              patient safety, and improves infection control
            </p>
          </details>
          <details className="group py-1 text-lg">
            <summary className="flex cursor-pointer flex-row items-center justify-between py-3 font-semibold text-gray-800 marker:[font-size:0px]">
              <span className="text-[20px]">Reduce Manual Efforts</span>
              <svg
                className="h-6 w-6 rotate-0 transform text-[#E53A3A] group-open:rotate-180"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </summary>
            <p className="text-gray-500 text-[16px] leading-5">
              Enhanced Staff Productivity: QMe enable healthcare providers to
              optimize their time and resources. They can efficiently manage
              patient appointments, allocate resources, and prioritize urgent
              cases, leading to improved staff productivity and optimized
              workflow.
              <br />
              <br />
              Efficient Resource Allocation: With smart queue-based patient
              management, hospitals can better allocate resources such as
              doctors, nurses, and examination rooms based on real-time patient
              demand. This ensures resources are utilized effectively and
              reduces bottlenecks in the system.
              <br />
              <br />
              Accurate Data Collection: QMe capture valuable data regarding
              patient waiting times, service durations, and overall process
              efficiency. This data can be analyzed to identify areas for
              improvement, optimize resource allocation, and enhance overall
              operational efficiency.
              <br />
              <br />
              Streamlined Operations: QMe eliminates manual processes and
              paperwork, reducing administrative burden and increasing
              operational efficiency. The system automates inventory management
              and billing.
            </p>
          </details>
          <details className="group py-1 text-lg">
            <summary className="flex cursor-pointer flex-row items-center justify-between py-3 font-semibold text-gray-800 marker:[font-size:0px]">
              <span>Cost Effective</span>
              <svg
                className="h-6 w-6 rotate-0 transform text-[#E53A3A] group-open:rotate-180"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </summary>
            <p className="text-gray-500 text-[16px] leading-5">
              Optimal Resource Utilization The system allows for efficient
              allocation of resources, including staff, facilities, and
              equipment. This ensures optimal utilization of resources,
              preventing underutilization or overbooking, which can result in
              unnecessary costs.
              <br />
              <br />
              Accurate Billing and Revenue Management Automated billing ensures
              accurate and timely invoicing, reducing billing errors and the
              need for manual intervention. This improves revenue management and
              minimizes the risk of revenue leakage, leading to improved
              financial performance.
              <br />
              <br />
              Enhanced Patient Satisfaction and Retention The combination of
              smart queues, live tracking, reminders, and notifications
              significantly improves the patient experience. Satisfied patients
              are more likely to return for future treatments and recommend the
              hospital to others, leading to increased patient retention and
              positive word-of-mouth referrals.
              <br />
              <br />
              Streamlined Data Management and Reporting QMe centralizes data
              related to patient appointments, treatments, billing, and staff
              management. This allows for accurate reporting and data analysis,
              enabling hospitals to identify areas for cost optimization,
              operational improvements, and strategic decision-making.
              <br />
              <br />
              Improved Compliance and Risk Management QMe include features to
              ensure compliance with regulatory requirements and minimize the
              risk of errors or non-compliance. By avoiding penalties and legal
              issues, hospitals can save costs associated with non-compliance.
            </p>
          </details>
        </section>
      </div>
    </>
  );
}

export default Faq;
