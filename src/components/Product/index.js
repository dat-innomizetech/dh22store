const Product = ({ data }) => {
    return(
        <div className="rounded d-flex flex-column">
            <div className="border-2 border-light" style={{ height: 150, backgroundImage: `url("")`, backgroundColor: 'red' }}></div>
            <div className="">
                <p>detail product</p>
            </div>
        </div>
    )
};

export default Product;