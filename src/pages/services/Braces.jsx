import TreatmentPage from "../../components/TreatmentPage";

export default function Braces() {
  return (
    <TreatmentPage
      eyebrow="ORTHODONTICS"
      title="Braces"
      intro="A straighter smile starts with a treatment plan designed around your teeth, bite and goals."
      image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHyZQQtduUOJSh-Lm0liteU1HW54eNbImyu15SvPpY8g&s=10"
      overview="Braces gradually move teeth into improved positions using controlled orthodontic forces. Your consultation allows the dentist to assess your alignment, bite and suitability before recommending a treatment plan."
      benefits={[
        "Improve tooth alignment",
        "Correct selected bite concerns",
        "Support easier cleaning of aligned teeth",
        "Improve confidence in your smile"
      ]}
      steps={[
        "Orthodontic consultation",
        "Assessment & treatment planning",
        "Braces placement",
        "Regular adjustment appointments"
      ]}
      price="From KES 30,000"
    />
  );
}