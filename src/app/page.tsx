import CardContainer from "../components/card/CardContainer";
import CheckboxContainer from "@/components/checkboxes/CheckboxContainer";
import Image from 'next/image';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <h1>Flip a scale ! 🎶</h1>
      <h2>Just click on a card to flip a scale, and improvise with it !</h2>

      <CardContainer className="m-20 flex flex-col items-center justify-center" />
      <CheckboxContainer className="m-10 flex row items-center justify-center" />

      <footer className="absolute bottom-20 h-20 flex flex-col items-center justify-between">
        <p >
          Made with ❤️ by B3SS ; 
          <a
            href="www.seawebstudio.com"/>
        </p>
        <p className="hover:scale-110"><a href="www.github.com/beseb" ><Image src="/assets/github.png" height={50} width={30} alt=''/></a></p>
            </footer>
      </main>
  );
}
