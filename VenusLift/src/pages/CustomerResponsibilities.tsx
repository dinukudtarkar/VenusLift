import React from "react";
import "../assets/styles/CustomerResponsibilities.css";

interface ResponsibilityGroup {
  number: string;
  title: string;
  description: string;
  items: string[];
}

const responsibilityGroups: ResponsibilityGroup[] = [
  {
    number: "01",
    title: "Drawings & Site Preparation",
    description: "Initial arrangements required before installation.",
    items: [
      "Provide the necessary building drawings, site dimensions, and technical details required by Venus Lifts before installation begins.",
      "Ensure that the elevator shaft, pit, and machine room are constructed according to the approved drawings and specifications supplied for the project.",
      "Provide suitable projections and structural supports at each elevator entrance to ensure proper installation and anchoring of the landing sills.",
      "Ensure that the elevator shaft structure can safely withstand the loads and forces specified for the elevator installation.",
    ],
  },
  {
    number: "02",
    title: "Elevator Shaft & Machine Room",
    description: "Civil construction and access requirements.",
    items: [
      "Provide a fully enclosed elevator shaft with finished walls, a properly constructed pit of the specified depth, and adequate clearance in accordance with the approved drawings.",
      "Provide a suitably sized machine room, where required by the elevator design, with proper lighting, ventilation, finished surfaces, and safe access.",
      "Provide a suitable staircase with handrails for access to the machine room wherever required by the approved design.",
      "Provide the required overhead lifting beam, machine support steel sections, and shaft divider supports in accordance with the approved structural drawings.",
      "Ensure that the elevator shaft, pit, and machine room remain free from water seepage and moisture that could affect elevator equipment.",
      "Provide the required templates, template supports, and other installation aids as specified by Venus Lifts.",
    ],
  },
  {
    number: "03",
    title: "Civil Works & Finishing",
    description: "Building modifications and finishing work.",
    items: [
      "Carry out the required wall and floor cutting, openings, and associated civil modifications necessary for the elevator installation.",
      "Complete the grouting and finishing of designated bolts, sill supports, indicator panels, push-button panels, and other embedded installation components as specified.",
      "Complete building painting and finishing work, excluding the factory-finished elevator components supplied by Venus Lifts.",
      "Arrange the required cement, sand, aggregates, and other construction materials for the agreed civil works.",
      "Provide suitable labour for the required civil modifications and structural support work.",
    ],
  },
  {
    number: "04",
    title: "Electrical Power & Earthing",
    description: "Electrical infrastructure required at the site.",
    items: [
      "Provide a suitably rated four-core power cable up to the designated machine location, terminated through an appropriately rated MCB as specified in the approved electrical drawings.",
      "Provide a suitable single-phase power supply with the required cable and a 15-amp double-pole switch, where specified for the installation.",
      "Provide a dedicated, appropriately protected circuit for elevator shaft lighting, including the required light points at each floor level.",
      "Provide the required earthing arrangement, including separate earth pits and double earthing connections to the machine room, in accordance with applicable electrical regulations and approved specifications.",
      "Provide the specified ELCB/RCCB or other required electrical protection devices in accordance with the approved electrical design.",
      "Arrange the temporary power supply and lighting required for elevator assembly, commissioning, operation, and testing.",
    ],
  },
  {
    number: "05",
    title: "Site Safety & Installation Support",
    description: "Arrangements to facilitate safe installation.",
    items: [
      "Provide suitable barricading or other approved protective measures at elevator shaft entrances during installation to prevent unauthorized access and accidental falls.",
      "Arrange scaffolding inside the elevator shaft according to the installation requirements and applicable safety procedures, and arrange its removal when the work is completed, as agreed.",
      "Provide a secure, lockable storage area at ground level for elevator materials, tools, and equipment.",
      "Provide suitable hoisting and handling arrangements required for the installation, in accordance with the approved site safety plan.",
      "Ensure that the installation area is accessible, adequately prepared, and free from obstructions before the assembly team begins work.",
    ],
  },
  {
    number: "06",
    title: "Permissions, Fees & Logistics",
    description: "Administrative and site-related arrangements.",
    items: [
      "Obtain the building-related permissions and approvals that are the customer's responsibility for the elevator installation.",
      "Pay the applicable building preparation, licensing, liaison, and inspection fees assigned to the customer under the agreed project scope.",
      "Arrange suitable accommodation for the installation crew when required for projects outside the service locations agreed upon in the contract.",
      "Coordinate site unloading arrangements and bear any legitimate, agreed local handling or labour-union charges associated with unloading, where applicable.",
    ],
  },
  {
    number: "07",
    title: "General Responsibilities",
    description: "Coordination and contractual obligations.",
    items: [
      "Ensure that all customer-provided civil, structural, and electrical works comply with the approved drawings, applicable regulations, and agreed project specifications.",
      "Coordinate with Venus Lifts to resolve site-readiness issues before the scheduled installation and commissioning activities.",
      "Maintain the elevator shaft, pit, and machine room in suitable condition throughout the installation period.",
      "Accept responsibility for losses, claims, or liabilities arising from the customer's failure to fulfil agreed obligations, to the extent established under the contract and applicable law.",
    ],
  },
];

const CustomerResponsibilities: React.FC = () => {
  return (
    <section
      className="customer-responsibilities"
      id="customer-responsibilities"
    >
      <div className="responsibilities-container">
        {/* Section Heading */}
        <header className="responsibilities-header">
          <span className="responsibilities-eyebrow">
            <span className="responsibilities-eyebrow-line" />
            VENUS LIFTS
          </span>

          <h2 className="responsibilities-title">
            Customer Responsibilities
            <span>& Site Requirements</span>
          </h2>

          <p className="responsibilities-intro">
            A successful elevator installation begins with proper site
            preparation. The following requirements outline the building
            works, electrical arrangements, safety measures, and other
            provisions to be coordinated by the customer in accordance
            with the approved project specifications and agreement with
            Venus Lifts.
          </p>

          <div className="responsibilities-summary">
            <span className="responsibilities-summary-icon">
              i
            </span>
            <p>
              Please review these requirements before installation.
              Project-specific responsibilities will be confirmed in
              the approved drawings and contract.
            </p>
          </div>
        </header>

        {/* Expandable Responsibility Groups */}
        <div className="responsibilities-list">
          {responsibilityGroups.map((group, index) => (
            <details
              className="responsibility-group"
              key={group.number}
              open={index === 0}
            >
              <summary className="responsibility-summary">
                <span className="responsibility-number">
                  {group.number}
                </span>

                <span className="responsibility-heading">
                  <span className="responsibility-group-title">
                    {group.title}
                  </span>

                  <span className="responsibility-group-description">
                    {group.description}
                  </span>
                </span>

                <span
                  className="responsibility-toggle"
                  aria-hidden="true"
                />
              </summary>

              <div className="responsibility-details">
                <ul>
                  {group.items.map((item, itemIndex) => (
                    <li key={itemIndex}>
                      <span
                        className="responsibility-check"
                        aria-hidden="true"
                      >
                        ✓
                      </span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </details>
          ))}
        </div>

        {/* Footer Note */}
        {/* <div className="responsibilities-footer">
          <div className="responsibilities-footer-mark">
            VL
          </div>

          <div className="responsibilities-footer-content">
            <h3>Preparing for a Smooth Installation</h3>
            <p>
              Our team can coordinate with your architect, contractor,
              and electrical consultant to clarify the site requirements
              before installation begins.
            </p>
          </div>

          <a href="#contact" className="responsibilities-contact">
            Contact Our Team
            <span aria-hidden="true">↗</span>
          </a>
        </div> */}
      </div>
    </section>
  );
};

export default CustomerResponsibilities;