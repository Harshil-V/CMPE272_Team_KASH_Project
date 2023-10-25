import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS

const AdminLayout = () => {
    return (
        <div className="admin-layout">
            {/* Sidebar Navigation */}
            <nav className="col-md-3 col-lg-2 d-md-block bg-light sidebar">
                <div className="position-sticky">
                    <ul className="nav flex-column">
                        <li className="nav-item">
                            <a className="nav-link active" href="#">
                                Dashboard
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">
                                Users
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">
                                Products
                            </a>
                        </li>
                        {/* Add more sidebar navigation items as needed */}
                    </ul>
                </div>
            </nav>

            {/* Main Content */}
            <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4">
                <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
                    <h1 className="h2">Dashboard</h1>
                </div>
                {/* Add your admin content here */}
            </main>
        </div>
    );
};

export default AdminLayout;
