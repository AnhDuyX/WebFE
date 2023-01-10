import request from "./utils/request";



export const getAllProducts = async (data) => {
    try {
        let res = await request.get('product');
        return res.data;
    } catch (e) {
        console.log(e);
    }
};

export const handleCreate = async (data) => {
    try {
        let res = await request.post('product', data);
        return res.data;
    } catch (e) {
        console.log(e);
    }
};


export const handleDeleteProduct = async (id) => {
    try {
        let res = await request.delete('product/' + id);
        return res.data;
    } catch (e) {
        console.log(e);
    }
};

export const handleGetAllCategory = async () => {
    try {
        let res = await request.get('category');
        return res.data;
    } catch (e) {
        console.log(e);
    }
};

export const getAllUsers = async (data) => {
    try {
        let res = await request.get('login');
        return res.data;
    } catch (e) {
        console.log(e);
    }
};

export const handleDeleteUser = async (id) => {
    try {
        let res = await request.delete(`login?id=${id}`);
        return res.data;
    } catch (e) {
        console.log(e);
    }
};

export const getAllOrders = async (data) => {
    try {
        let res = await request.get('orderAll');
        return res.data;
    } catch (e) {
        console.log(e);
    }
};

export const handleDeleteOrder = async (id) => {
    try {
        let res = await request.delete(`orderAll?id=${id}`);
        return res.data;
    } catch (e) {
        console.log(e);
    }
};

export const handleUpdateStatusOrderXN = async (id) => {
    try {
        let res = await request.put(`order`, { orderId: id, status: "Đã Xác Nhận" });
        return res.data;
    } catch (e) {
        console.log(e);
    }
};
export const handleUpdateStatusOrderDG = async (id) => {
    try {
        let res = await request.put(`order`, { orderId: id, status: "Đã Giao" });
        return res.data;
    } catch (e) {
        console.log(e);
    }
};
export const handleUpdateStatusOrderDH = async (id) => {
    try {
        let res = await request.put(`order`, { orderId: id, status: "Đã Hủy" });
        return res.data;
    } catch (e) {
        console.log(e);
    }
};

export const handleViewDetailOrder = async (id) => {
    try {
        let res = await request.get(`order`, { orderId: id });
        return res.data;
    } catch (e) {
        console.log(e);
    }
};