import React from "react"



const NewProduct = () => {
    return(
        <div className="row justify-content-center">
            <div className="col-md-8">
                <div className="card border border-secondary border-3">
                    <div className="card-body">
                        <h2 className="text-center">Add New Product</h2>

                        <form>
                            <div className="form-group">
                            <label className="col-form-label">Product Name</label>
                            <input 
                            className="form-control"
                            type="text"
                            name="name"
                            />
                            </div>
                            <div className="form-group">
                            <label className="col-form-label">Price</label>
                            <div class="input-group">
                                <span class="input-group-text">$</span>
                                <input 
                                className="form-control"
                                type="number"
                                name="price"
                                />
                            </div>
                            
                            </div> 

                            <button className="btn btn-outline-secondary font-weight-bold w-100 d-block mt-4">Add Product</button>                           
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )



}

export default NewProduct;