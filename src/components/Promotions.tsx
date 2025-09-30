import CardProduct from "./CardProduct";

function Promotions() {
    return (
        <section className="container section-promos">
            <h2 className="section-title">Promotions</h2>
            <div className="slider-promos">
              <CardProduct />
              <CardProduct />
              <CardProduct />
              <CardProduct />
              <CardProduct />
              <CardProduct />
            </div>
        </section>
    )
}

export default Promotions;