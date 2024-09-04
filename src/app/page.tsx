import Image from "next/image";
import CardContainer from "../components/card/CardContainer";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center p-24">
      <h1>Flip a scale ! 🎶</h1>
      <h2>Just click on a card to flip a scale, and improvise with it !</h2>
      <CardContainer className="m-20 flex flex-col items-center justify-center" />
      </div>
  );
}
