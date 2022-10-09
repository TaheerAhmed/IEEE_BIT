import React,{useEffect} from 'react'
import '../CSS/footer.css'
// import '~mdb-ui-kit/css/mdb.min.css';
const Footer=()=>{
    useEffect(() => {
        const xScript = document.createElement("script");
        xScript.setAttribute("id", "xScript");
        xScript.setAttribute(
            "src",
            "https://cdnjs.cloudflare.com/ajax/libs/mdb-ui-kit/5.0.0/mdb.min.css"
        );
        document.getElementsByTagName("head")[0].appendChild(xScript);
        return () => {
            if (xScript) {
                xScript.remove();
            }
        };
    }, []);
    return(
        <div>
            <link
                href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css"
                rel="stylesheet"
            />
        <footer className="text-center text-lg-start bg-dark text-muted footy">
            {/* <!-- Section: Social media --> */}
            <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
                {/* <!-- Left --> */}
                <div className="me-5 d-none d-lg-block">
                    <span>Get connected with us on social networks:</span>
                </div>
                {/* <!-- Left --> */}

                {/* <!-- Right --> */}
                <div>
                    <a href="" className="me-4 link-secondary">
                        <i className="fab fa-facebook-f textyy"></i>
                    </a>
                    {/* <a href="" className="me-4 link-secondary textyy">
                        <i className="fab fa-twitter"></i>
                    </a> */}
                    <a href="" className="me-4 link-secondary">
                            <i className="fab fa-google textyy"></i>
                    </a>
                    <a href="" className="me-4 link-secondary">
                            <i className="fab fa-instagram textyy"></i>
                    </a>
                    <a href="" className="me-4 link-secondary">
                            <i className="fab fa-linkedin textyy"></i>
                    </a>
                </div>
                {/* <!-- Right --> */}
            </section>
            {/* <!-- Section: Social media --> */}

            {/* <!-- Section: Links  --> */}
            <section className="">
                    <div className="container text-center text-md-start mt-5 textyy">
                    {/* <!-- Grid row --> */}
                    <div className="row mt-3">
                        {/* <!-- Grid column --> */}
                        {/* <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                            <h6 className="text-uppercase fw-bold mb-4">
                                <i className="fas fa-gem me-3 text-secondary"></i>Company name
                            </h6>
                            <p>
                                Here you can use rows and columns to organize your footer content. Lorem ipsum
                                dolor sit amet, consectetur adipisicing elit.
                            </p>
                        </div> */}
                        {/* <!-- Grid column --> */}

                        {/* <!-- Grid column --> */}
                        <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
                            {/* <!-- Links --> */}
                            <h6 className="text-uppercase fw-bold mb-4">
                                    Data Needed
                            </h6>
                            <p>
                                <a href="#!" className="text-reset">Data Needed</a>
                            </p>
                            <p>
                                    <a href="#!" className="text-reset">Data Needed</a>
                            </p>
                            <p>
                                    <a href="#!" className="text-reset">Data Needed</a>
                            </p>
                            <p>
                                    <a href="#!" className="text-reset">Data Needed</a>
                            </p>
                        </div>
                        {/* <!-- Grid column --> */}

                        {/* <!-- Grid column --> */}
                        <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
                            {/* <!-- Links --> */}
                            <h6 className="text-uppercase fw-bold mb-4">
                                    Data Needed
                            </h6>
                            <p>
                                    <a href="#!" className="text-reset">Data Needed</a>
                            </p>
                            <p>
                                    <a href="#!" className="text-reset">Data Needed</a>
                            </p>
                            <p>
                                    <a href="#!" className="text-reset">Data Needed</a>
                            </p>
                            <p>
                                    <a href="#!" className="text-reset">Data Needed</a>
                            </p>
                        </div>
                        {/* <!-- Grid column --> */}

                        {/* <!-- Grid column --> */}
                        <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                            {/* <!-- Links --> */}
                            <h6 className="text-uppercase fw-bold mb-4">Contact</h6>
                            <p><i className="fas fa-home me-3 text-secondary"></i>Adresss of IEEE DATA NEEDED</p>
                            <p>
                                <i className="fas fa-envelope me-3 text-secondary"></i>
Data Needed                            </p>
                            <p><i className="fas fa-phone me-3 text-secondary"></i> PHONE NUMBER DATA Needed</p>
                        </div>
                        {/* <!-- Grid column --> */}
                    </div>
                    {/* <!-- Grid row --> */}
                </div>
            </section>
            {/* <!-- Section: Links  --> */}

            {/* <!-- Copyright --> */}
            <div className="text-center p-4 textyy" style={{background: "rgba(0, 0, 0, 0.025)"}}>
                    Built <i class="fa-solid fa-screwdriver-wrench texty"></i> by <a className='textyy' href="https://www.linkedin.com/in/mohammed-taheer-ahmed-530a7b1b7">
                        Mohammed Taheer Ahmed</a> & <a className='textyy' href="https://www.linkedin.com/in/mdfahad12/">
                        Mohammad Fahad</a>& Shubam Kumar
                <a className="text-reset fw-bold" href="https://mdbootstrap.com/"></a>
            </div>
            {/* <!-- Copyright --> */}
        </footer>
        </div>
    )
}
export default Footer
