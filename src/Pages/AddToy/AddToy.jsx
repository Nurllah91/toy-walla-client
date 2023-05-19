import { useContext } from "react";
import { useForm } from "react-hook-form";
import { AuthContext } from "../../Providers/AuthProvider";
import Swal from "sweetalert2";


const AddToy = () => {
    const { user } = useContext(AuthContext)
    const { register, handleSubmit } = useForm();
    const onSubmit = data => {
        console.log(data)
        // fetch(`http://localhost:5000/addtoy`, {
        //     method: "POST",
        //     headers: {
        //         'content-type': 'application/json'
        //     },
        //     body: JSON.stringify(data)

        // })
        //     .then(res => res.json())
        //     .then(result => {
        //         if(result.acknowledged === true){
        //             Swal.fire(
        //                 'Good job!',
        //                 'You clicked the button!',
        //                 'success'
        //               )
        //         }
        //         console.log(result);
        //     })
    };



    return (
        <div className="w-11/12 bg-blue-50 p-5 rounded-lg lg:w-9/12 mx-auto my-10">
            <form onSubmit={handleSubmit(onSubmit)}>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">

                    <div>

                        <label>Toy Name</label>
                        <input className="border block shadow-md rounded-md w-full my-3 p-3" defaultValue="Toy Name" {...register("toyName")} />
                    </div>

                    <div>
                        <label>Seller Name</label>
                        <input className="border block shadow-md rounded-md w-full my-3 p-3" value={user?.displayName} {...register("sellerName", { required: true })} />
                    </div>

                    <div>
                        <label>Email</label>
                        <input className="border block shadow-md rounded-md w-full my-3 p-3" value={user?.email} {...register("email")} />
                    </div>

                    <div>
                        <label>Sub Category</label>

                        <input className="border block shadow-md rounded-md w-full my-3 p-3" defaultValue="racing" {...register("subCategory", { required: true })} />
                    </div>

                    <div>
                        <label>Price</label>
                        <input className="border block shadow-md rounded-md w-full my-3 p-3"  {...register("price", { required: true })} />
                    </div>

                    <div>
                        <label>Toy Photo URL</label>
                        <input className="border block shadow-md rounded-md w-full my-3 p-3" {...register("photoUrl", { required: true })} />
                    </div>

                    <div>
                        <label>Ratings</label>
                        <input className="border block shadow-md rounded-md w-full my-3 p-3" {...register("ratings")} />
                    </div>

                    <div>
                        <label>Available quantity</label>
                        <input className="border block shadow-md rounded-md w-full my-3 p-3" {...register("quantity", { required: true })} />
                    </div>

                    <div className="col-span-2">
                        <label>Description</label>
                        <input className="border block shadow-md rounded-md w-full my-3 p-3" {...register("details", { required: true })} />
                    </div>


                    <div className="col-span-2 text-center">
                        <input className="btn btn-secondary w-3/4 " type="submit" />
                    </div>
                </div>
            </form>
        </div>
    );
};

export default AddToy;