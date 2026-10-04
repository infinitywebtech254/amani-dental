import TreatmentPage from "../../components/TreatmentPage";

export default function TeethCleaning() {
  return (
    <TreatmentPage
      eyebrow="PREVENTIVE DENTISTRY"
      title="Teeth Cleaning"
      intro="Professional cleaning to help maintain healthy teeth, gums and a fresh smile."
      image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcReQqRGZQuW6kY1MUso8Jkc9ogmOGiLcjVn47N37Fd_GQ&s=10"
      overview="Professional dental cleaning helps remove plaque, tartar and surface deposits that may be difficult to remove through everyday brushing alone."
      benefits={[
        "Remove plaque and tartar",
        "Support gum health",
        "Freshen your smile",
        "Support preventive dental care"
      ]}
      steps={[
        "Oral assessment",
        "Professional scaling",
        "Cleaning & polishing",
        "Home-care advice"
      ]}
      price="From KES 4,000"
    />
  );
}