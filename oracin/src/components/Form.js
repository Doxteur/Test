import React from 'react'

function Form({name ,setName}) {

    
    return (
        <div className="card bg-base-100 shadow-md">
            <div className="card-body">
                <h2 className="card-title">
                    Chercher par nom
                </h2>
                    <div className="form-control">
                        <label className="label">
                            <input className="input input-bordered" type="text" placeholder="Nom" onChange={(e) => setName(e.target.value)} />
                        </label>
                    </div>
            </div>
        </div>


    )
}

export default Form