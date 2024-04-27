'use client'

import React, { FormEvent } from "react";
import GoogleMapReact from 'google-map-react';
import Header from "@/components/Header";

// import { IExecOracleFactory } from "@iexec/iexec-oracle-factory-wrapper";
// import { IExecDataProtector, getWeb3Provider } from "@iexec/dataprotector";


export default function Dashboard() {


  const cars = [
    { id: 1, color: 'Blue', packageId: 11111111 },
    { id: 2, color: 'Red', packageId: 11111112 },
    { id: 3, color: 'Yellow', packageId: 11111113 },
    // Add more cars as needed
  ];
  
  const CarList = () => {
    return (
  
      <div>
  
        {cars.map((car) => (
          <div key={car.id} className="card ml-5 mr-5 mb-5 bg-primary text-primary-content">
            <div className="card-body">
              <h2 className="card-title">Vehicule #{car.id}</h2>
              <p>Package delivery - ID: #{car.packageId}</p>
              {/* <div>{car.brand} {car.model}</div>
              <div>{car.year} - {car.color}</div> */}
              <div className="card-actions justify-end">
                <button className="btn">Buy Now</button>
              </div>
            </div>
          </div>
        ))}
  
      </div>
    );
  };

  // const web3Provider = getWeb3Provider(window.ethereum);

  // const web3Provider = window.ethereum;

  // const factory = new IExecOracleFactory(web3Provider);


  const addNewCard = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    console.log(event.currentTarget)

    const formData = new FormData(event.currentTarget)

    console.log(formData)

    // const createOracleRes = factory.createOracle({
    //   url: "https://662013b53bf790e070aeeff6.mockapi.io/api/position/Position/1",
    //   method: "GET",
    //   headers: {
    //     //   authorization: "%API_KEY%",
    //   },
    //   dataType: "string",
    //   JSONPath: "$.latitude",
    //   // apiKey: "MY_TEST_API_KEY",
    // }).subscribe({
    //   next: async (data) => {
    //     console.log("next", data);
    //     // console.log(data["cid"])

    //     // const readOracleRes = await factory.readOracle(
    //     //   data.cid
    //     // ); // Content ID of the Oracle

    //     // console.log("Data: ", readOracleRes)

    //   },
    //   error: (error) => {
    //     console.log("error", error);
    //   },
    //   complete: () => {
    //     console.log("Oracle Creation Completed");
    //   },
    // });


  }



  const defaultProps = {
    center: {
      lat: 10.99835602,
      lng: 77.01502627
    },
    zoom: 11
  };

  return (
    // Important! Always set the container height explicitly
    <>
      <div>
        <Header />
        <div className="flex">
          <div style={{ height: '100vh', width: '70%' }}>
            <GoogleMapReact
              bootstrapURLKeys={{ key: "" }}
              defaultCenter={defaultProps.center}
              defaultZoom={defaultProps.zoom}
            >
              {/* <AnyReactComponent
            lat={59.955413}
            lng={30.337844}
            text="My Marker"
          /> */}
            </GoogleMapReact>
          </div>
          <div style={{ height: '100vh', width: '30%' }}>
            <h2>List of cars</h2>

            <CarList />

            <button className="btn" onClick={() => {
              if (document) {
                (document.getElementById('my_modal_2') as HTMLFormElement).showModal();
              }
            }
            }>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
              </svg>
              Add new car
            </button>

            {/* Associated modal to create a new car */}
            <dialog id="my_modal_2" className="modal">
              <div className="modal-box">
                <h3 className="font-bold text-lg">Create a new car!</h3>
                <p className="py-4">Please fill in the car information</p>
                <form className="" onSubmit={addNewCard}>

                  <label className="input input-bordered flex items-center gap-2 mb-5">
                    <input type="text" name="name" placeholder="Car's name" className="grow" />
                  </label>

                  <label className="input input-bordered flex items-center gap-2 mb-5">
                    <input type="text" name="url" placeholder="URL car position" className="grow" />
                  </label>

                  <button className="btn" type="submit">
                    Track a new car
                  </button>
                </form>
              </div>
              <form method="dialog" className="modal-backdrop">
                <button>close</button>
              </form>
            </dialog>


          </div>
        </div>
      </div>

    </>
  );
}
