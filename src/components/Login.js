import Container from "react-bootstrap/Container";
import '../assets/css/login.css'

function Login() {
    function login() {
        console.log('oke')
    }
    return (
        <Container>
            <h1 className="my-5 text-center">Login</h1>
            <div className='row g-0'>
                <div className="row g-0 justify-content-center">
                    <div className='col-2'>
                        <label className="w-100 text-right">Employee ID</label>
                    </div>
                </div>
                <div className="row g-0 justify-content-center">
                    <div className='col-2'>
                        <input className="w-100"></input>
                    </div>
                </div>
            </div>
            <div className='row g-0 mt-3'>
                <div className="row g-0 justify-content-center">
                    <div className='col-2'>
                        <label className="w-100 text-right">Password</label>
                    </div>
                </div>
                <div className="row g-0 justify-content-center">
                    <div className='col-2'>
                        <input className="w-100"></input>
                    </div>
                </div>
            </div>
            <div className='row g-0 mt-3 '>
                <div className="row g-0 justify-content-center">
                    <div className='col-2'>
                        <button className="w-100 btn btn-success" onClick={login}>Login</button>
                    </div>
                </div>
            </div>
        </Container>
    );
}

export default Login;
