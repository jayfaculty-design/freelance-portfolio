import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { services } from "../data/data";
export const Services = () => {
  return (
    <div className="mt-5">
      <div className="flex flex-col gap-5 border border-card-background bg-card-background px-5 py-10 rounded-[20px]">
        <h1 className="text-[30px] font-bold text-heading-color leading-[40px] pb-[5px] text-center">
          Services
        </h1>

        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <div
              key={service.id}
              className="flex flex-col gap-3 border border-border-color bg-card-background p-5 rounded-[10px]"
            >
              <FontAwesomeIcon
                className="text-left w-fit"
                icon={service.icon}
                size="2x"
              />
              <h2 className="text-[20px] font-semibold text-heading-color">
                {service.title}
              </h2>
              <p className="text-[15px] text-left text-gray-500">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
