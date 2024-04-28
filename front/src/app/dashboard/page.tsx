'use client'

import React, { FormEvent, useEffect, useRef, useState } from "react";
import GoogleMap from 'google-maps-react-markers'
import Header from "@/components/Header";

import { IExecOracleFactory } from "@iexec/iexec-oracle-factory-wrapper";
import MarkerOnGoogle from "@/components/MarkerOnGoogle";

import car1 from "@/data/car1.json";
import car2 from "@/data/car2.json";

interface MarkerType {
  latitude: number;
  longitude: number;
  color: string;
}

interface Coordinate {
  latitude: number;
  longitude: number;
}

interface Car {
  id: number;
  color: string;
  customerId: number;
  coordinates: Coordinate[]
}


export default function Dashboard() {

  // Google map reference
  const mapRef = useRef(null);

  // List of all markers to monitor position
  const [markers, setMarkers] = useState<MarkerType[]>([]);

  // Coordinate to center the maps
  const [centerCordinates, setCenterCordinates] = useState({
    lat: 45.750000,
    lng: 4.950000
  });

  // Initialize the reference when the map is loaded
  const onGoogleApiLoaded = ({ map }) => { mapRef.current = map; }


  const changeCenterMap = (car: Car) => {

    const size = car.coordinates.length;
    const coordinate = car.coordinates[size - 1];

    const lat = coordinate.latitude;
    const lng = coordinate.longitude;

    if (mapRef.current) {
      mapRef.current.setCenter({ lat: lat, lng: lng });
    }

    setCenterCordinates(_ => ({
      lat: coordinate.latitude,
      lng: coordinate.longitude
    }));
  }

  const cars: Car[] = [
    car1,
    car2,
    // Add more cars as needed
  ];

  useEffect(() => {

    let _markers: MarkerType[] = [];

    cars.map(car => {

      car.coordinates.map(coord => {
        _markers.push({
          latitude: coord.latitude,
          longitude: coord.longitude,
          color: car.color
        })
      })
    })

    setMarkers(_markers);

    console.log(markers)

  }, [])


  const CarList = () => {
    return (

      <div>

        {cars.map((car) => (
          <div key={car.id} className="card ml-5 mr-5 mb-5 bg-primary text-primary-content">
            <div className="card-body bg-base-100 rounded-lg">

              <div className="flex">

                <img className='left-0' src="/images/taxi.png" alt="mockup" width={150} height={100} />

                <div className="grow">

                  <h3 className="card-title font-extrabold tracking-tight leading-none dark:text-white">
                    Vehicule #{car.id}
                  </h3>

                  <p className="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">
                    Customer ID: #{car.customerId}
                  </p>
                  <div className="card-actions justify-end">
                    <button className="btn" onClick={() => changeCenterMap(car)}>
                      See location
                    </button>
                  </div>

                </div>

              </div>


            </div>
          </div>
        ))}

      </div>
    );
  };


  const web3Provider = window.ethereum;
  const factory = new IExecOracleFactory(web3Provider);

  const createNewOracle = async (url: string) => {

    const cid = await new Promise((resolve, reject) => {
      factory.createOracle({
        url: url,
        method: "GET",
        dataType: "string",
        JSONPath: "$.latitude",
      }).subscribe({
        next: async (data) => {
          console.log("New Oracle created, cid: ", data.cid);
          resolve(data.cid);
        },
        error: (error) => {
          console.log("error", error);
          reject(error);
        },
        complete: () => {
          console.log("Oracle Creation Completed");
        },
      });
    });

    // We need to update the data first to initialize the oracle
    const updatedData = await new Promise((resolve, reject) => {
      console.log("cid used:", cid);
      factory.updateOracle({
        cid: cid,
        targetBlockchains: ["134", "137"],
        url: url,
        method: "GET",
        dataType: "string",
        JSONPath: "$.latitude",
      }).subscribe({
        next: (data) => {
          console.log("Oracle successfully updated!");
        },
        error: (error) => {
          console.log("error", error);
        },
        complete: () => {
          console.log("Oracle update Completed");
        },
      });
    });

    return cid;
  }


  const addNewCard = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    // Get the data 
    const formData = new FormData(event.currentTarget)
    let cid = await createNewOracle(formData.get("url"))

    console.log("New car added on the network!")
    console.log("cid:", cid)

  }


  return (
    // Important! Always set the container height explicitly
    <>
      <div>
        <Header />
        <div className="flex">
          <div style={{ height: '100vh', width: '70%' }}>

            <GoogleMap
              apiKey=""
              defaultCenter={centerCordinates}
              // center={centerCordinates}
              onGoogleApiLoaded={onGoogleApiLoaded}
              defaultZoom={13}
              // options={mapOptions}
              mapMinHeight="100vh"
              // onGoogleApiLoaded={onGoogleApiLoaded}
              onChange={(map) => console.log('Map moved', map)}
            >

              {markers.map((marker, index) => (

                <MarkerOnGoogle
                  key={index}
                  lat={marker.latitude}
                  lng={marker.longitude}
                  color={marker.color}
                  markerId={index}
                  draggable={false}
                  text="My Marker"
                />
              ))}

            </GoogleMap>


          </div>
          <div style={{ height: '100vh', width: '30%' }}>
            <h1 className="max-w-2xl mb-4 text-4xl mt-5 ml-5 font-extrabold tracking-tight leading-none dark:text-white">
              Monitored vehicles
            </h1>

            <CarList />


            <div className="flex justify-end">
              <button className="btn ml-5 mr-5 mb-5" onClick={() => {
                if (document) {
                  (document.getElementById('my_modal_2') as HTMLFormElement).showModal();
                }
              }}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                </svg>
                Add new car
              </button>
            </div>

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
                    <input type="text" name="url" placeholder="URL car position" className="grow" value="https://662013b53bf790e070aeeff6.mockapi.io/api/position/Position/1" />
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
