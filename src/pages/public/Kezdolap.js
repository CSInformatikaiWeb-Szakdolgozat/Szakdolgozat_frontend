import AsideKartyak from "../../components/AsideKartyak";
import KezdoOldal from "./KezdoOldal";
import Footer from "../../components/Footer";

function Kezdolap() {
  return (
    <main className="row">
      <article className="col-lg-9 row text-center">
        <KezdoOldal />
      </article>
      <aside className="col-lg-3 p-4 flex-column">
        <AsideKartyak />
      </aside>
      <Footer />
    </main>
  );
}
export default Kezdolap;
