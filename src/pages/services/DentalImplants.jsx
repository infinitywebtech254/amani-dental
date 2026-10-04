import TreatmentPage from "../../components/TreatmentPage";

export default function DentalImplants() {
  return (
    <TreatmentPage
      eyebrow="RESTORATIVE DENTISTRY"
      title="Dental Implants"
      intro="A fixed tooth-replacement option designed to restore missing teeth and support everyday function."
      image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhVJqzdg_vMNuWXk6Uh99Jr-0oY3E2TcmnsihPoUGEtA&s=10"
      overview="Dental implants replace missing tooth roots with implant fixtures that can support dental restorations. Assessment is required to determine suitability and develop an appropriate treatment plan."
      benefits={[
        "Replace missing teeth",
        "Fixed restoration option",
        "Support chewing function",
        "Natural-looking restoration"
      ]}
      steps={[
        "Implant consultation",
        "Clinical assessment",
        "Implant placement",
        "Final restoration"
      ]}
      price="From KES 80,000"
    />
  );
}