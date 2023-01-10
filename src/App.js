
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Index from "./pages/index"


import LayoutAdmin from './layout/LayoutAdmin';
import Products from './pages/Products';
import AddNew from './pages/AddNew';
import User from './pages/User'
import Order from './pages/Order'
import DetailOrder from './pages/DetailOrder';
import Dashboard from './pages/Dashboard';

function App() {
    return (
        <Router>
            <div>
                <Routes>
                    <Route path="/">
                        <Route
                            index
                            element={

                                <Index />

                            }
                        />

                        <Route
                            path="/products"
                            element={
                                <LayoutAdmin>
                                    <Products />
                                </LayoutAdmin>
                            }
                        />

                        <Route
                            path="/home"
                            element={
                                <LayoutAdmin>
                                    <Dashboard />
                                </LayoutAdmin>
                            }
                        />
                        <Route
                            path="/add-new/:id"
                            element={
                                <LayoutAdmin>
                                    <AddNew />
                                </LayoutAdmin>
                            }
                        />
                        <Route
                            path="/user"
                            element={
                                <LayoutAdmin>
                                    <User />
                                </LayoutAdmin>
                            }
                        />

                        <Route
                            path="/order"
                            element={
                                <LayoutAdmin>
                                    <Order />
                                </LayoutAdmin>
                            }
                        />
                        <Route
                            path="/detailOrder/:id"
                            element={
                                <LayoutAdmin>
                                    <DetailOrder />
                                </LayoutAdmin>
                            }
                        />
                    </Route>
                </Routes>
            </div>
        </Router>
    );
}

export default App;
