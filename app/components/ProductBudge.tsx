
const ProductBudge = ({discount}:{discount:number}) => {
    return (
        <div className="floating bg-accent text-white w-16 h-20 absolute top-0 right-0 rounded-bl-3xl flex justify-center items-center">
           {discount}% <br />
            OFF
        </div>
    )
}

export default ProductBudge