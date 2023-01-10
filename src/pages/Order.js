import Box from '@mui/material/Box';
import { DataGrid } from '@mui/x-data-grid';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { getAllOrders } from '~/requestServer';

const Orders = () => {

    const navigate = useNavigate()

    let [rows, setRows] = useState([])

    const fetchApi = async () => {
        const res = await getAllOrders()
        if (res.message === "Success" && res.data && res.data.length > 0) {
            let arr = []
            res.data.forEach((item, index) => {
                let order = {
                    id: index,
                    orderId: item.orderId,
                    grandTotal: item.grandTotal,
                    orderStatus: item.orderStatus,
                    address: item.address,
                    phone: item.phone,
                    fullName: item.fullName
                }
                arr.push(order)
            })
            setRows(arr)
        }
    }



    useEffect(() => {
        fetchApi()
    }, [])
    const columns = [
        { field: 'id', headerName: 'STT', width: 90 },

        {
            field: 'orderId',
            headerName: 'ID Đơn Đặt Hàng',
            width: 250,
        },

        {
            field: 'fullName',
            headerName: 'Tên Người Đặt',
            width: 200,
        },
        {
            field: 'address',
            headerName: 'Địa Chỉ',
            width: 400,
        },
        {
            field: 'phone',
            headerName: 'Số Điện Thoại',
            width: 150,
        },
        {
            field: 'grandTotal',
            headerName: 'Tổng Tiền',
            width: 150,
        },
        {
            field: 'orderStatus',
            headerName: 'Trạng Thái',
            width: 150,
        },
        {
            field: 'action',
            headerName: 'Tùy Chọn',
            width: 100,
            renderCell: (params) => {
                return (
                    <>
                        <div className='flex gap-3'
                        > <div className='border border-blue-500 rounded-lg cursor-pointer px-2 hover:bg-slate-400'
                            onClick={() => viewDetail(params.row.orderId)}>
                                Xem
                            </div>
                        </div>
                    </>
                );
            },
        },
    ];

    const viewDetail = (id) => {
        navigate('/detailOrder/' + id)
    }








    return (
        <div className="flex flex-col gap-5 mt-[20px] px-4 py-2 w-full h-[700px]">
            <div className='flex justify-between'>
                <h2>Danh Sách Đơn Hàng</h2>


            </div>
            <div className=" w-full h-full">
                <Box sx={{ height: '100%', width: '100%' }}>
                    <DataGrid
                        rows={rows}
                        columns={columns}

                    />
                </Box>
            </div>
        </div>
    )
}

export default Orders