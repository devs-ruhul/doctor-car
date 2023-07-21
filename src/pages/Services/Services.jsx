import { useEffect, useState } from "react";
import ServiceCard from "./ServiceCard";

const Services = () => {
  const [services, setServices] = useState([]);
  useEffect(() => {
    fetch("services.json")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);
  return (
    <div className="py-6">
      <div className="text-center">
        <p className="text-2xl font-bold text-orange-600">Service</p>
        <h2 className="text-5xl font-semibold">Our Service Area</h2>
        <p className="w-1/2 mx-auto my-4">
          {" "}
          The majority have suffered alteration in some form, by injected
          humour, or randomised words which look even slightly believable.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((service) => (
          <ServiceCard key={service._id} service={service}></ServiceCard>
        ))}
      </div>
      <div className="flex justify-center">
        <button className="btn btn-outline rounded-none btn-error capitalize my-8">
          More Services
        </button>
      </div>
    </div>
  );
};

export default Services;
