import React, { useState } from "react";
import { UsersDatabase } from "../../Utilities/Utility";
import "../AccountDetails/AccountDetails.css";
import { UserDataStructureProps } from "../../ Types/Apptypes";
import { validateHeaderName } from "http";

type DetailsProps = {
  filteredEmployees: [];
};

export const AccountDetails = () => {
  // const [filteredEmployees, setFilteredEmployees] = useState(UsersDatabase);

  // const filterByDepartment = (name: string) => {
  //   setFilteredEmployees(UsersDatabase.filter((user) => user.name === name));
  // };

  // const departments = Array.from(
  //   new Set(UsersDatabase.map((user) => user.name))
  // );

  return (
    <>
      <div>Account Details</div>
      {/* <div className="account_details_main_container">
        <select onChange={(e: any) => filterByDepartment(e.target.value)}>
          <option defaultValue="">Select department</option>

          {departments.map((department) => {
            return <option key={department}>{department}</option>;
          })}
        </select>
        <ul className="account_details">
          {filteredEmployees.map((user) => {
            const { id, name, surname, email, address } = user;
            return (
              <li key={id}>
                <div>
                  Username:{name} {surname}
                </div>
                <br></br>
                <div>email: {email} </div>
                <br></br>
                <div>address: {address}</div>
                <br></br>
              </li>
            );
          })}
        </ul>
      </div> */}
    </>
  );
};
