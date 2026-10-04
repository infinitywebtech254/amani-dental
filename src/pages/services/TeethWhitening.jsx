import TreatmentPage from "../../components/TreatmentPage";

export default function TeethWhitening() {
  return (
    <TreatmentPage
      eyebrow="COSMETIC DENTISTRY"
      title="Teeth Whitening"
      intro="Refresh your smile with professional whitening options designed to reduce visible staining."
      image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZYB618qXYt-Ere2dN7-qvxTGytynsGqFXg1S7Vc1zOA&s=10"
      overview="Professional teeth whitening is designed to improve the appearance of discolouration and staining while allowing your dental team to assess your teeth before treatment."
      benefits={[
        "Brighter-looking smile",
        "Professional dental assessment",
        "Treatment tailored to your teeth",
        "Simple cosmetic smile enhancement"
      ]}
      steps={[
        "Smile consultation",
        "Dental assessment",
        "Whitening treatment",
        "Aftercare guidance"
      ]}
      price="From KES 12,000"
    />
  );
}