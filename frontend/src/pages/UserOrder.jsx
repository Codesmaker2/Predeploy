import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllOrdersOfUser } from "../redux/actions/order";
import { Link } from "react-router-dom";
import { Avatar, Button } from "@material-ui/core";
import { RxEyeOpen } from "react-icons/rx";
import { DataGrid } from "@material-ui/data-grid";
import { BiCaretLeft } from "react-icons/bi";

//Order
const AllUserOrders = () => {
    const { user } = useSelector((state) => state.user);
    const { orders } = useSelector((state) => state.order);
    const dispatch = useDispatch();
    
    const data = orders && orders.find((item) => item._id);
  
    useEffect(() => {
      dispatch(getAllOrdersOfUser(user._id));
    }, [dispatch,user._id,data]);
  
    const columns = [
      
      {
        field: "images",
        headerName: "Image",
        minWidth: 50,
        flex: 0.4,
        renderCell: (params) => {
          console.log(params);
          return (
            <>
               <Link to={`/user/order/${params.id}`}>
              <Avatar src={params.value}/>
              </Link>
             
            </>
          );
        }
      },
      {
        field: "name",
        headerName: " Product Name",
        type: "text",
        minWidth: 150,
        flex: 0.9,
      },
      
      {
        field: "itemsQty",
        headerName: "Qty",
        type: "number",
        minWidth: 100,
        flex: 0.6,
      },
  
      {
        field: "total",
        headerName: "Total Price",
        type: "number",
        minWidth: 130,
        flex: 0.8,
      },
      
      {
        field: " ",
        flex: 1,
        minWidth: 150,
        headerName: "",
        type: "number",
        sortable: false,
        renderCell: (params) => {
          return (
            <>
              <Link to={`/user/order/${params.id}`}>
                <Button>
                  <RxEyeOpen size={20} />
                </Button>
              </Link>
            </>
          );
        },
        
      },
      {
        field: "status",
        headerName: "Status",
        minWidth: 130,
        flex: 0.4,
        cellClassName: (params) => {
          return params.getValue(params.id, "status") === "Delivered" 
            ? "greenColor"
            : "redColor";
            
        },
        
      },
    ];
  
    const row = [];
  
    orders &&
      orders.forEach((item) => {
        row.push({
          id: item._id,
          name: item.cart[0].name,
          images: item.cart[0].images[0].url,
          itemsQty: item.cart.length,
          total: "₱" + item.totalPrice,
          status: "🚛" + item.status,
        });
      });
  
    return (
      <div className=" p-2 bg-white">
        <Link to={"/"}>
          <div className="flex bg-blue-500 h-10 py-6 w-full rounded-t-[4px] items-center  justify-between "><BiCaretLeft size={20} color="white" className="m-2"/><h2 className="text-white mr-2">Order List</h2></div></Link>
        <DataGrid
          rows={row}
          columns={columns}
          pageSize={10}
          disableSelectionOnClick
          autoHeight
        />
      </div>
    );
  };

  export default AllUserOrders;
