import Box from '@mui/material/Box';
import { DataGrid } from '@mui/x-data-grid';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { getAllProducts, handleDeleteProduct } from '~/requestServer';

const Products = () => {

    const navigate = useNavigate()

    let [rows, setRows] = useState([])

    const fetchApi = async () => {
        const res = await getAllProducts()
        if (res.message === "Success" && res.data && res.data.length > 0) {
            let arr = []
            res.data.forEach((item, index) => {
                let product = {
                    id: index,
                    idProduct: item.productId,
                    productName: item.productName,
                    categoryName: item.category['categoryName'],
                    productShortDescription: item.productShortDescription,
                    productPrice: item.productPrice,
                    productSalePrice: item.productSalePrice
                }

                arr.push(product)
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
            field: 'idProduct',
            headerName: 'ID Sản Phẩm',
            width: 250,
        },
        {
            field: 'productName',
            headerName: 'Tên Sản Phẩm',
            width: 200,
        },
        {
            field: 'categoryName',
            headerName: 'Loại Sản Phẩm',
            width: 200,
        },
        {
            field: 'productShortDescription',
            headerName: 'Mô tả',
            width: 200,
        },
        {
            field: 'productPrice',
            headerName: 'Giá Sản Phẩm',
            width: 150,
        },
        {
            field: 'productSalePrice',
            headerName: 'Giá Sale',
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
                            <div className='border border-sky-500 rounded-lg cursor-pointer px-2 hover:bg-slate-400'
                                onClick={() => handleSubmit(params.row)}>
                                Edit
                            </div>
                            <div className='border border-red-500 rounded-lg cursor-pointer px-2 hover:bg-slate-400' onClick={() => handleDelete(params.row.idProduct)}>
                                Delete
                            </div>
                        </div>
                    </>
                );
            },
        },
    ];


    const handleSubmit = (data) => {
        console.log("check data", data)
    }

    const handleDelete = async (id) => {
        const res = await handleDeleteProduct(id)
        if (res.message === "Success") {
            fetchApi()
        }
    }

    const handleAddNew = () => {
        navigate('/add-new/0')
    }



    return (
        <div className="flex flex-col gap-5 mt-[20px] px-4 py-2 w-full h-[700px]">
            <div className='flex justify-between'>
                <h2>Danh Sách Sản Phẩm</h2>
                <button onClick={() => handleAddNew()} className='border border-sky-500 flex justify-around items-center gap-3 px-2 py-1 rounded-lg hover:bg-slate-400'><span>
                    <svg class="h-8 w-8 text-sky-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>

                </span>Thêm Sản Phẩm</button>

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

export default Products