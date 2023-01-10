import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { handleCreate, handleGetAllCategory } from "~/requestServer"

const AddNew = () => {
    const { id } = useParams()

    let [listCategory, setListCategory] = useState([])
    let [productName, setProductName] = useState('')
    let [productShortDescription, setProductShortDescription] = useState('')
    let [productDescription, setProductDescription] = useState('')
    let [productPrice, setProductPrice] = useState(0)
    let [productSalePrice, setProductSalePrice] = useState(0)
    let [productSKU, setProductSKU] = useState()
    let [productType, setProductType] = useState()
    let [productStatus, setProductStatus] = useState('IN')
    let [chooseCategory, setChooseCategory] = useState('')
    let [productImage, setProductImage] = useState()


    const fetchCategory = async () => {
        const res = await handleGetAllCategory();
        setListCategory(res.data)
    }

    console.log("check id from", id)
    useEffect(() => {
        fetchCategory()
    }, [])

    console.log("check catgory", listCategory)


    // : req.body.productShortDescription,
    // productDescription: req.body.productDescription,
    // productPrice: req.body.productPrice,
    // productSalePrice: req.body.productSalePrice,
    // productSKU: req.body.productSKU,
    // productType: req.body.productType,
    // productStatus: req.body.productStatus,
    // productImage: path != '' ? '/' + path : '',

    const handleSubmit = async (e) => {
        e.preventDefault()
        const data = {
            productName: productName,
            category: chooseCategory,
            productShortDescription: productShortDescription,
            productDescription: productDescription,
            productPrice: productPrice,
            productSalePrice: productSalePrice,
            productSKU: productSKU,
            productType: productType,
            productStatus: productStatus,
            productImage: productImage,
        }
        const res = await handleCreate(data)

        console.log("checkk res", res)
    }
    const handleOnchangeImage = (e) => {
        let data = e.target.files;

        let file = data[0]

        console.log("check image", file)
        // setProductImage(e.target.files)
    }
    return (
        <>
            <div className="px-[20px] py-[20px]">
                <form>
                    <div className="grid md:grid-cols-2 md:gap-6">
                        <div className="relative z-0 w-full mb-6 group">
                            <input
                                value={productName}
                                onChange={(e) => setProductName(e.target.value)}
                                type="text"
                                name="floating_first_name"
                                id="floating_first_name"
                                className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                                placeholder=" "
                                required=""
                            />
                            <label
                                htmlFor="floating_first_name"
                                className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                            >
                                Tên Thức Ăn
                            </label>
                        </div>
                        <div class="flex gap-3 items-center w-full md:w-1/3 px-3 mb-6 md:mb-0">
                            <label class="pt-[6px] block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-state">
                                Loại
                            </label>
                            <div class="relative">
                                <select onChange={(e) => setChooseCategory(e.target.value)} class="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-state">
                                    {listCategory && listCategory.length > 0 ?
                                        listCategory.map((item, index) => {
                                            return (
                                                <option value={item.categoryId}>{item.categoryName}</option>
                                            )
                                        })
                                        : <option>Loading...</option>}


                                </select>
                                <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                                    <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" /></svg>
                                </div>
                            </div>
                        </div>
                    </div>




                    <div className="grid md:grid-cols-2 md:gap-6">
                        <div className="relative z-0 w-full mb-6 group">
                            <input
                                value={productDescription}
                                onChange={(e) => setProductDescription(e.target.value)}
                                type="text"
                                name="floating_first_name"
                                id="floating_first_name"
                                className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                                placeholder=" "
                                required=""
                            />
                            <label
                                htmlFor="floating_first_name"
                                className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                            >
                                Mô tả chi tiết
                            </label>
                        </div>
                        <div className="relative z-0 w-full mb-6 group">
                            <input
                                value={productShortDescription}
                                onChange={(e) => setProductShortDescription(e.target.value)}
                                type="text"
                                name="floating_last_name"
                                id="floating_last_name"
                                className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                                placeholder=" "
                                required=""
                            />
                            <label
                                htmlFor="floating_last_name"
                                className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                            >
                                Mô tả
                            </label>
                        </div>
                    </div>
                    <div className="grid md:grid-cols-2 md:gap-6">
                        <div className="relative z-0 w-full mb-6 group">
                            <input
                                value={productPrice}
                                onChange={(e) => setProductPrice(e.target.value)}
                                type="number"
                                name="floating_first_name"
                                id="floating_first_name"
                                className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                                placeholder=" "
                                required=""
                            />
                            <label
                                htmlFor="floating_first_name"
                                className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                            >
                                Giá Món Ăn
                            </label>
                        </div>
                        <div className="relative z-0 w-full mb-6 group">
                            <input
                                value={productSalePrice}
                                onChange={(e) => setProductSalePrice(e.target.value)}
                                type="number"
                                name="floating_last_name"
                                id="floating_last_name"
                                className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                                placeholder=" "
                                required=""
                            />
                            <label
                                htmlFor="floating_last_name"
                                className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                            >
                                Giá Món Ăn Đã Giảm
                            </label>
                        </div>
                    </div>
                    <div className="grid md:grid-cols-2 md:gap-6">
                        <div className="relative z-0 w-full mb-6 group">
                            <input
                                value={productSKU}
                                onChange={(e) => setProductSKU(e.target.value)}
                                type="text"
                                name="floating_first_name"
                                id="floating_first_name"
                                className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                                placeholder=" "
                                required=""
                            />
                            <label
                                htmlFor="floating_first_name"
                                className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                            >
                                Mã SKU
                            </label>
                        </div>
                        <div className="relative z-0 w-full mb-6 group">
                            <input
                                value={productType}
                                onChange={(e) => setProductType(e.target.value)}
                                type="text"
                                name="floating_last_name"
                                id="floating_last_name"
                                className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                                placeholder=" "
                                required=""
                            />
                            <label
                                htmlFor="floating_last_name"
                                className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                            >
                                Thuộc tính
                            </label>
                        </div>
                    </div>
                    <div className="grid md:grid-cols-2 md:gap-6">
                        <div className="relative z-0 w-full mb-6 group">
                            <input
                                // value={productPrice}
                                onChange={(e) => handleOnchangeImage(e)}
                                type="file"
                                name="floating_first_name"
                                id="floating_first_name"
                                className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                                placeholder=""
                                required=""
                            />
                            <label
                                htmlFor="floating_first_name"
                                className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                            >
                                Hình Ảnh
                            </label>
                        </div>
                        <div class="flex gap-3 items-center w-full md:w-1/3 px-3 mb-6 md:mb-0">
                            <label class="pt-[6px] block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-state">
                                Trạng Thái
                            </label>
                            <div class="relative">
                                <select onChange={(e) => setProductStatus(e.target.value)} class="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-state">
                                    <option value="IN">IN</option>
                                    <option value="OUT">OUT</option>
                                </select>
                                <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                                    <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" /></svg>
                                </div>
                            </div>
                        </div>
                    </div>

                    <button
                        onClick={(e) => handleSubmit(e)}
                        type="submit"
                        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                    >
                        Submit
                    </button>
                </form>

            </div>

        </>
    )
}

export default AddNew