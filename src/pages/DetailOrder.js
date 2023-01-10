import moment from "moment/moment"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { handleUpdateStatusOrderDG, handleUpdateStatusOrderDH, handleUpdateStatusOrderXN, handleViewDetailOrder } from "~/requestServer"

const DetailOrder = () => {
    const { idOrder } = useParams()
    const imageURL = "http://172.16.2.106:4000"

    let [data, setData] = useState({})

    const fetchApi = async () => {

        const res = await handleViewDetailOrder(idOrder)

        if (res.message === "Success") {
            setData(res.data && res.data.length > 0 ? res.data[0] : [])
        }


    }

    console.log("check state", data)

    useEffect(() => {
        fetchApi()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])


    const handleUpdateXN = async (id) => {
        console.log("check data", id)
        if (id) {
            let res = await handleUpdateStatusOrderXN(id)
            if (res.message === "Success") {
                fetchApi()
            }
        } else {
            console.log("checkkk res loi")

        }
    }
    const handleUpdateDH = async (id) => {
        console.log("check data", id)
        if (id) {
            let res = await handleUpdateStatusOrderDH(id)
            if (res.message === "Success") {
                fetchApi()
            }
        } else {
            console.log("checkkk res loi")

        }
    }
    const handleUpdateDG = async (id) => {
        console.log("check data", id)
        if (id) {
            let res = await handleUpdateStatusOrderDG(id)
            if (res.message === "Success") {
                fetchApi()
            }
        } else {
            console.log("checkkk res loi")

        }
    }

    return <>
        <div className="py-14 px-4 md:px-6 2xl:px-20 2xl:container 2xl:mx-auto">
            <div className="flex justify-start item-start space-y-2 flex-col ">
                <h1 className="text-3xl lg:text-4xl font-semibold leading-7 lg:leading-9  text-gray-800">{`Mã Đơn Hàng #${data.orderId}`}</h1>
                <p className="text-base font-medium leading-6 text-gray-600">{moment(data.createdAt).format('DD/MM/YYYY')}</p>
            </div>
            <div className="mt-10 flex flex-col xl:flex-row jusitfy-center items-stretch  w-full xl:space-x-8 space-y-4 md:space-y-6 xl:space-y-0">
                <div className="flex flex-col justify-start items-start w-full space-y-4 md:space-y-6 xl:space-y-8">
                    <div className="flex flex-col justify-start items-start bg-gray-50 px-4 py-4 md:py-6 md:p-6 xl:p-8 w-full">
                        <p className="text-lg md:text-xl font-semibold leading-6 xl:leading-5 text-gray-800">Thông Tin Đơn Hàng</p>
                        {data.products?.map((item, index) => {
                            return (

                                <div key={index} className="mt-4 md:mt-6 flex  flex-col md:flex-row justify-start items-start md:items-center md:space-x-6 xl:space-x-8 w-full ">
                                    <div className="pb-4 md:pb-8 w-full md:w-40">
                                        <img className="w-full hidden md:block" src={`${imageURL + item.product.productImage}`} alt="dress" />
                                        <img className="w-full md:hidden" src="https://i.ibb.co/L039qbN/Rectangle-10.png" alt="dress" />
                                    </div>
                                    <div className="border-b border-gray-200 md:flex-row flex-col flex justify-between items-start w-full  pb-8 space-y-4 md:space-y-0">
                                        <div className="w-full flex flex-col justify-start items-start space-y-8">
                                            <h3 className="text-xl xl:text-2xl font-semibold leading-6 text-gray-800">{item.product.productName}</h3>

                                        </div>
                                        <div className="flex justify-between space-x-8 items-start w-full">
                                            <p className="text-base xl:text-lg leading-6">
                                                {item.amount} VNĐ <span className="text-red-300 line-through"> {item.product.productPrice} VNĐ</span>
                                            </p>
                                            <p className="text-base xl:text-lg leading-6 text-gray-800">{item.amount * item.qty} VNĐ</p>
                                            <p className="text-base xl:text-lg font-semibold leading-6 text-gray-800">{item.qty}</p>
                                        </div>
                                    </div>
                                </div>

                            )
                        })}

                    </div>
                    <div className="flex justify-center md:flex-row flex-col items-stretch w-full space-y-4 md:space-y-0 md:space-x-6 xl:space-x-8">
                        <div className="flex flex-col px-4 py-6 md:p-6 xl:p-8 w-full bg-gray-50 space-y-6   ">
                            <h3 className="text-xl font-semibold leading-5 text-gray-800">Hóa Đơn</h3>
                            <div className="flex justify-center items-center w-full space-y-4 flex-col border-gray-200 border-b pb-4">
                                <div className="flex justify-between  w-full">
                                    <p className="text-base leading-4 text-gray-800">Tổng Tiền:</p>
                                    <p className="text-base leading-4 text-gray-600">{data.grandTotal} VNĐ</p>
                                </div>
                                <div className="flex justify-between items-center w-full">
                                    <p className="text-base leading-4 text-gray-800">Trạng Thái:</p>
                                    <p className="text-base leading-4 text-gray-600">{data.orderStatus}</p>
                                </div>
                                <div className="flex justify-between items-center w-full">
                                    <p className="text-base leading-4 text-gray-800">Phí Giao Hàng</p>
                                    <p className="text-base leading-4 text-gray-600">Miễn Phí</p>
                                </div>
                            </div>
                            <div className="flex justify-between items-center w-full">
                                <p className="text-base font-semibold leading-4 text-gray-800">Tổng Cộng:</p>
                                <p className="text-base font-semibold leading-4 text-gray-600">{data.grandTotal} VNĐ</p>
                            </div>
                        </div>
                        <div className="flex flex-col justify-center px-4 py-6 md:p-6 xl:p-8 w-full bg-gray-50 space-y-6   ">
                            <h3 className="text-xl font-semibold leading-5 text-gray-800">Đơn Vị Vận Chuyển</h3>
                            <div className="flex justify-between items-start w-full">
                                <div className="flex justify-center items-center space-x-4">
                                    <div className="w-8 h-8">
                                        <img className="w-full h-full" alt="logo" src="https://i.ibb.co/L8KSdNQ/image-3.png" />
                                    </div>
                                    <div className="flex flex-col justify-start items-center">
                                        <p className="text-lg leading-6 font-semibold text-gray-800">
                                            Cửa Hàng D&Y
                                            <br />
                                            <span className="font-normal">Giao Hàng Tận Nơi Trong 45 phút</span>
                                        </p>
                                    </div>
                                </div>
                                <p className="text-lg font-semibold leading-6 text-gray-800">Miễn Phí</p>
                            </div>

                            <div className="w-[250px] h-[50px] flex justify-center items-center">
                                <button className="hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:bg-green-700 py-5 w-96 md:w-full bg-green-700 text-base font-medium leading-4 text-white"
                                    onClick={() => handleUpdateXN(data.orderId)}>
                                    Xác Nhận Đơn Hàng</button>
                            </div>
                            <div className="w-[250px] h-[50px] flex justify-center items-center">
                                <button className="hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:bg-green-700 py-5 w-96 md:w-full bg-green-700 text-base font-medium leading-4 text-white"
                                    onClick={() => handleUpdateDG(data.orderId)}>
                                    Xác Nhận Đã Giao</button>
                            </div>

                        </div>
                    </div>
                </div>
                <div className="bg-gray-50 w-full xl:w-96 flex justify-between items-center md:items-start px-4 py-6 md:p-6 xl:p-8 flex-col ">
                    <h3 className="text-xl font-semibold leading-5 text-gray-800">Khách Hàng</h3>
                    <div className="flex  flex-col md:flex-row xl:flex-col justify-start items-stretch h-full w-full md:space-x-6 lg:space-x-8 xl:space-x-0 ">
                        <div className="flex flex-col justify-start items-start flex-shrink-0">
                            <div className="flex justify-center  w-full  md:justify-start items-center space-x-4 py-8 border-b border-gray-200">
                                <img className="w-[50px] h-[50px]" src="https://static.thanhnien.vn/v4/web/styles/img/no-ava.png" alt="avatar" />
                                <div className=" flex justify-start items-start flex-col space-y-2">
                                    <p className="text-base font-semibold leading-4 text-left text-gray-800">{data.fullName}</p>
                                    <p className="text-sm leading-5 text-gray-600">Số ĐT: {data.phone}</p>
                                </div>
                            </div>


                        </div>
                        <div className="flex justify-between xl:h-full  items-stretch w-full flex-col mt-6 md:mt-0">
                            <div className="flex justify-center md:justify-start xl:flex-col flex-col md:space-x-6 lg:space-x-8 xl:space-x-0 space-y-4 xl:space-y-12 md:space-y-0 md:flex-row  items-center md:items-start ">
                                <div className="flex justify-center md:justify-start  items-center md:items-start flex-col space-y-4 xl:mt-8">
                                    <p className="text-base font-semibold leading-4 text-center md:text-left text-gray-800">Địa Chỉ Giao Hàng</p>
                                    <p className="w-48 lg:w-full xl:w-48 text-center md:text-left text-sm leading-5 text-gray-600">{data.address}</p>
                                </div>

                            </div>
                            <div className="w-full flex justify-center items-center">
                                <button className="hover:bg-red-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:bg-red-900 py-5 w-96 md:w-full bg-red-700 text-base font-medium leading-4 text-white"
                                    onClick={() => handleUpdateDH(data.orderId)}> Hủy Đơn Hàng</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>


}


export default DetailOrder