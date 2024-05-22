import { useContext } from "react";
import CategoryBar from "../../../Extras/CategoryBar";
import TopSegment from "../../../Extras/TopSegment";
import NavigationBar from "../../../NavigationBar";
import { StoreContext } from "../../../../context+reducer/StoreContext";
import Table from "react-bootstrap/Table";

const PurchaseHistory = () => {
  const { purchaseHistory, setPurchaseHistory } = useContext(StoreContext);
  console.log(purchaseHistory);
  return (
    <div>
      <TopSegment />
      <NavigationBar />
      <CategoryBar />
      <div className='text-center my-4'>
        <h3>Purchase History</h3>
        <div className='table'>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th className='text-center'>Product</th>
                <th className='text-center'>Date</th>
                <th className='text-center'>Amount</th>
                <th className='text-center'>Delivery Status</th>
                <th v>Payment Status</th>
              </tr>
            </thead>
            <tbody>
              {purchaseHistory.map((item) => (
                <tr key={item.id}>
                  <td>{item.title}</td>
                  <td>2024-04-25</td>
                  <td>${item.price}</td>
                  <td>Confirmed</td>
                  <td>
                    <button disabled className='btn px-4 btn-success'>
                      Paid
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </div>
      </div>
    </div>
  );
};
export default PurchaseHistory;
