import Dropdown from "react-bootstrap/Dropdown";

function DropDownMenu() {
  return (
    <Dropdown>
      <Dropdown.Toggle
        style={{ fontSize: "0.8rem" }}
        className='fw-bold'
        variant='danger'
        id='dropdown-basic'
      >
        Categories
      </Dropdown.Toggle>

      <Dropdown.Menu className='fw-bold' style={{ fontSize: "0.8rem" }}>
        <Dropdown.Item href='#/action-1'>Clothing</Dropdown.Item>
        <Dropdown.Item href='#/action-2'>Accessories</Dropdown.Item>
        <Dropdown.Item href='#/action-3'>Gadgets</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
}

export default DropDownMenu;
