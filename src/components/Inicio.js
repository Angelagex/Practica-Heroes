import React from 'react'
function Inicio({history}) {

    return (
        <div>
            <form className="w-50 mx-auto">
                <div className="mb-3">
                    <label for="exampleInputEmail1" className="form-label">Correo</label>
                    <input type="email" className="form-control" id="exampleInputEmail1" placeholder="Introduce tu correo" aria-describedby="emailHelp" />
                    <div id="emailHelp" className="form-text">Nunca compartiremos tus datos</div>
                </div>
                <div className="mb-3">
                    <label for="exampleInputPassword1" className="form-label">Contraseña</label>
                    <input type="password" className="form-control" placeholder="Introduce tu contraseña" id="exampleInputPassword1" />
                </div>
                <div className="mb-3 form-check">
                    <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                    <label className="form-check-label" for="exampleCheck1">Mantener sesión inciada</label>
                </div>
                <button onClick={() => history.push('/Home')} type="submit" className="btn btn-primary">Ingresar</button>
            </form>
        </div>
    )
}

export default Inicio
