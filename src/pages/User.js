import Box from '@mui/material/Box';
import { DataGrid } from '@mui/x-data-grid';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { getAllUsers, handleDeleteProduct, handleDeleteUser } from '~/requestServer';

const Users = () => {

    const navigate = useNavigate()

    let [rows, setRows] = useState([])

    const fetchApi = async () => {
        const res = await getAllUsers()
        if (res.message === "Success" && res.data && res.data.length > 0) {
            let arr = []
            res.data.forEach((item, index) => {
                let user = {
                    id: index,
                    userId: item.userId,
                    fullName: item.fullName,
                    email: item.email,
                    address: item.address,
                    phone: item.phone,
                }

                arr.push(user)
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
            field: 'userId',
            headerName: 'ID Người Dùng',
            width: 250,
        },
        {
            field: 'fullName',
            headerName: 'Tên Người Dùng',
            width: 200,
        },
        {
            field: 'email',
            headerName: 'Email',
            width: 250,
        },
        {
            field: 'address',
            headerName: 'Địa Chỉ ',
            width: 400,
        },
        {
            field: 'phone',
            headerName: 'Số Điện Thoại',
            width: 150,
        },
        {
            field: 'action',
            headerName: 'Tùy Chọn',
            width: 140,
            renderCell: (params) => {
                return (
                    <>
                        <div className='flex gap-3'
                        >

                            <div className='border border-red-500 rounded-lg cursor-pointer px-2 hover:bg-slate-400' onClick={() => handleDelete(params.row.userId)}>
                                Delete
                            </div>
                        </div>
                    </>
                );
            },
        },
    ];

    const handleDelete = async (id) => {
        const res = await handleDeleteUser(id)
        if (res.message === "Success") {
            fetchApi()
        }
    }





    return (
        <div className="flex flex-col gap-5 mt-[20px] px-4 py-2 w-full h-[700px]">
            <div className='flex justify-between'>
                <h2>Danh Sách Tài Khoản</h2>


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

export default Users