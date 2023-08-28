import React, { useEffect } from "react";
import { useState } from "react";

import { Link, useNavigate } from "react-router-dom";

import CustomInput2 from "../utils/CustomInput2";
import { useDispatch } from "react-redux";
import { createUserMode } from "../features/counter/userModeSlice";
import InitiateAuthModal from "../components/InitiateAuthModal";
import VerifyOTPModal from "../components/VerifyOTPModal";
import LinkRecordModal from "../components/linkRecordModal";
import axios from "axios";

const init = {
  healthId: "",
  purpose: "",
  HipId: "",
};

const CreateUserModels = () => {
  const navigation = useNavigate();
  const dispatch = useDispatch();
  const [state, setState] = useState({ ...init });
  const [isFormValid, setIsFormValid] = useState(false);
  const handleInput = (e) => {
    const { name, value } = e.target;

    setState({
      ...state,
      [name]: value,
    });
  };

  const handleSubmit = async () => {
    console.log(state);

    await axios
      .post("https://f1bc-223-233-73-35.ngrok-free.app/fetchUserModes", {
        ...state,
        authMode: "",
      })
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.log("inside error function");
        console.error("this is the error", error);
      });

    window.initiate_auth.showModal();
    dispatch(createUserMode(state));
    setState({ ...init });
  };

  useEffect(() => {
    const eventSource = new EventSource(
      "https://f1bc-223-233-73-35.ngrok-free.app/sse"
    );
    eventSource.onmessage = ({ data }) => {
      // const message = document.createElement("li");
      // message.innerText = "New message: " + data;
      // document.body.appendChild(message);
      console.log("this is the message received", data);
      if (data) {
        console.log(data);
      }
      setTimeout(() => {
        eventSource.close();
        console.log("this event is closed now");
      }, 10000);
    };
  }, []);

  useEffect(() => {
    const isValid = state.healthId && state.purpose && state.HipId;
    setIsFormValid(isValid);
  }, [state]);

  return (
    <>
      <div className="lg:py-5 md:py-5 lg:px-20 md:px-10 p-5 space-y-10">
        <div className="flex justify-between items-center flex-wrap gap-2">
          <h1 className="md:text-2xl text-lg font-semibold ">
            Create User Models
          </h1>
        </div>
        <div className="space-y-5 w-full">
          <div className="grid md:grid-cols-2 grid-cols-1">
            <div className=" lg:w-[60%]">
              <h3 className="text-lg font-semibold">Health ID</h3>
              <p className="desc">
                This will be used for reference only by yourself and the health
                id.
              </p>
            </div>
            <div>
              <CustomInput2
                value={state.healthId}
                name={"healthId"}
                onChange={handleInput}
              />
            </div>
          </div>
          <hr />
          <div className="grid md:grid-cols-2 grid-cols-1">
            <div className=" lg:w-[60%]">
              <h3 className="text-lg font-semibold">Purpose</h3>
              <p className="desc">
                This will be used for reference only by yourself and the
                Purpose.
              </p>
            </div>
            <div>
              <CustomInput2
                value={state.purpose}
                name={"purpose"}
                onChange={handleInput}
              />
            </div>
          </div>
        </div>
        <hr />
        <div className="grid md:grid-cols-2 grid-cols-1">
          <div className=" lg:w-[60%]">
            <h3 className="text-lg font-semibold">HIP ID </h3>
            <p className="desc">
              This will be used for reference only by yourself and the HIP ID.
            </p>
          </div>
          <div>
            <CustomInput2
              value={state.HipId}
              name={"HipId"}
              onChange={handleInput}
            />
          </div>
        </div>

        <div className="flex justify-end items-center ">
          <button
            disabled={!isFormValid}
            onClick={handleSubmit}
            className="px-8 py-2 rounded-md text-white bg-primary shadow hover:scale-95  transform duration-200 disabled:bg-gray-300"
          >
            Submit
          </button>
        </div>
      </div>

      <InitiateAuthModal />
      <VerifyOTPModal />
      <LinkRecordModal />
    </>
  );
};

export default CreateUserModels;
