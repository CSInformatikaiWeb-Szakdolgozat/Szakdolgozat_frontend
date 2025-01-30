import KezdoOldal from "./KezdoOldal";

function Kezdolap() {
  return (
    <main className="row">
      <article className="col-lg-9 row text-center">
        <KezdoOldal />
      </article>
      <aside className="col-lg-3 p-4 row gap-3">
        <p>Itt lesznek az aside kártyái</p>
      </aside>
      <footer className="col-lg-12 text-center">Tar Gergő & Szabó-Mester Alex</footer>
    </main>
  );
}
export default Kezdolap;
