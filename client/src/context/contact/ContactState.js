import React, { useReducer } from "react";
import uuid from "uuid";
import contactContext from "./contactContext";
import contactReducer from "./contactReducer";

import {
  ADD_CONTACT,
  DELETE_CONTACT,
  SET_CURRENT,
  CLEAR_CURRENT,
  UPDATE_CONTACT,
  FILTER_CONTACTS,
  CLEAR_FILTER
} from "../types";

const ContactState = props => {
  const initialState = {
    contacts: [
      {
        id: 1,
        name: "Juen Juenson",
        email: "juenjuenson@gmail.com",
        phone: "626262626",
        type: "personal"
      },
      {
        id: 2,
        name: "Paco Pacomer",
        email: "pacopacomer@gmail.com",
        phone: "606060606",
        type: "professional"
      },
      {
        id: 3,
        name: "Roberto Robando",
        email: "robertorobando@gmail.com",
        phone: "696969696",
        type: "personal"
      },
      {
        id: 4,
        name: "Jose Jostias",
        email: "josejostias@gmail.com",
        phone: "676767676",
        type: "personal"
      }
    ],
    current: null
  };

  const [state, dispatch] = useReducer(contactReducer, initialState);

  //Add contact

  const addContact = contact => {
    contact.id = uuid.v4();
    dispatch({ type: ADD_CONTACT, payload: contact });
  };

  //Delete contact

  const deleteContact = id => {
    dispatch({ type: DELETE_CONTACT, payload: id });
  };

  //Set current contact
  const setCurrent = contact => {
    dispatch({ type: SET_CURRENT, payload: contact });
  };

  //Clear current contact
  const clearCurrent = () => {
    dispatch({ type: CLEAR_CURRENT });
  };


  //Update contact

  //Filter contacts

  //Clear filter

  return (
    <contactContext.Provider
      value={{
        contacts: state.contacts,
        current: state.current,
        addContact,
        deleteContact,
        setCurrent,
        clearCurrent
      }}
    >
      {props.children}
    </contactContext.Provider>
  );
};

export default ContactState;
