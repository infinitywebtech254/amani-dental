import TreatmentPage from "../../components/TreatmentPage";

export default function Veneers() {
  return (
    <TreatmentPage
      eyebrow="COSMETIC DENTISTRY"
      title="Dental Veneers"
      intro="A cosmetic treatment option for changing the visible shape, colour and appearance of selected teeth."
      image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBtBMgPP7kORLmxlNAhVgrsb-N3uJT5OHZ6h7-uxYVHg&s=10"
      overview="Veneers are thin restorations placed over the visible surface of teeth. Suitability depends on your existing teeth, oral health and the changes you would like to achieve."
      benefits={[
        "Improve visible tooth shape",
        "Address selected discolouration",
        "Create a more even-looking smile",
        "Treatment planned around your features"
      ]}
      steps={[
        "Cosmetic consultation",
        "Smile assessment",
        "Treatment preparation",
        "Veneer placement"
      ]}
      price="From KES 20,000 per tooth"
    />
  );
}