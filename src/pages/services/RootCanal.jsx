import TreatmentPage from "../../components/TreatmentPage";

export default function RootCanal() {
  return (
    <TreatmentPage
      eyebrow="RESTORATIVE DENTISTRY"
      title="Root Canal Treatment"
      intro="Treatment aimed at saving a tooth when the internal dental tissue becomes infected or severely damaged."
      image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMdgesgNuFJZezU_CaD-WBvxqgr-Z2FP9lhdXG0TjJbw&s=10"
      overview="Root canal treatment removes infected or damaged tissue from inside a tooth before the internal space is cleaned, filled and restored."
      benefits={[
        "Treat infection inside the tooth",
        "Help preserve the natural tooth",
        "Address tooth-related discomfort",
        "Restore tooth function"
      ]}
      steps={[
        "Dental examination",
        "Diagnosis & treatment planning",
        "Root canal procedure",
        "Tooth restoration"
      ]}
      price="From KES 15,000"
    />
  );
}