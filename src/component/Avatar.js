import React, { useState, useEffect } from "react";
import { DropdownButton, Dropdown } from "react-bootstrap";
import { getUser, removeUserSession } from "../Utils/Common";

const Avatar = ({ user, logout }) => {
  const [render, setRender] = useState(null);
  return getUser() ? (
    <div className="btn-fixed d-flex align-items-center">
      <DropdownButton
        id="dropdown-avatar"
        title={
          <div
            className="avatar-image"
            style={{ backgroundImage: `url("/uploads/default-female.jpeg")` }}
          />
        }
        // className=" avatar-image"
        // style={{ backgroundImage: `url(/logo512.png)` }}
      >
        <Dropdown.Item href="/profile" className="username drop-item">
          {user.firstName} {user.lastName}
        </Dropdown.Item>
        <Dropdown.Divider />

        <Dropdown.Item href="/profile" className="drop-item">
          Update profile
        </Dropdown.Item>
        <Dropdown.Divider />

        <Dropdown.Item as="button" className="drop-item" onClick={logout}>
          Logout
        </Dropdown.Item>
      </DropdownButton>

      {/* <div className="show dropdown">
        <button
          id="dropdown-avatar"
          style={{
            backgroundImage: `url(/uploads/default-female.jpeg)`,
          }}
          data-toggle="dropdown"
          aria-haspopup="true"
          aria-expanded="false"
          type="button"
          className="dropdown-toggle btn btn-primary"
        >
                  <img class="avatar-image" src="/uploads/default-male.jpeg" alt="user pic">
</button>
        <div  className="dropdown-menu show" aria-labelledby="dropdown-avatar" x-placement="bottom-end" data-popper-reference-hidden="false" data-popper-escaped="false" data-popper-placement="bottom-end">
          <a href="/profile" className="dropdown-item"></a>
          <div className="dropdown-divider"></div>
        </div>
      </div> */}
    </div>
  ) : (
    <div className="avatar btn-fixed">
      <a href="/login" className="btn btn-warning btn-sm">
        Login/Register
      </a>
    </div>
  );
};

export default Avatar;
