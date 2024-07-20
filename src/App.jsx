import Header from "./components/Header";
import Footer from "./components/Footer";
import Slogan from "./components/Slogan";
import GPACalculator from "./components/GPACalculator";

export default function Admin() {
  return (
    <>
      <main>
        <Header />
        <div className="w-screen min-h-[540px] flex items-start py-8 md:px-20 justify-between  md:flex-row flex-col px-12">
          <GPACalculator />
          <Slogan />
        </div>
        <Footer />
        {/* <Footer /> */}
      </main>
    </>
  );
}
