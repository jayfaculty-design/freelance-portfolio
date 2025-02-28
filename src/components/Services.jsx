import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { services } from "../data/data";
export const Services = () => {
  return (
    <div className="mt-5">
      <div
        className="flex flex-col gap-4 sm:gap-5 
            border border-card-background bg-card-background 
            px-4 sm:px-5 
            py-6 sm:py-8 md:py-10 
            rounded-[15px] sm:rounded-[18px] md:rounded-[20px]"
      >
        <h2
          className="text-[24px] sm:text-[28px] md:text-[30px] 
              font-bold text-heading-color 
              leading-[32px] sm:leading-[36px] md:leading-[40px] 
              pb-[3px] sm:pb-[4px] md:pb-[5px] 
              text-center"
        >
          Services
        </h2>

        <div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 
                gap-5 sm:gap-8 md:gap-10 
                pt-2 sm:pt-3"
        >
          {services.map((service) => (
            <div
              key={service.id}
              className="flex flex-col gap-2 sm:gap-3 
                  border border-border-color bg-card-background 
                  p-4 sm:p-5 
                  rounded-[8px] sm:rounded-[10px]
                  transition-all duration-300
                  hover:shadow-md hover:border-primary-color/30
                  hover:translate-y-[-3px]"
            >
              <div className="text-primary-color">
                <FontAwesomeIcon
                  className="text-left w-fit"
                  icon={service.icon}
                  size="lg"
                  style={{ fontSize: "1.5rem" }}
                />
              </div>
              <h3
                className="text-[18px] sm:text-[19px] md:text-[20px] 
                      font-semibold text-heading-color"
              >
                {service.title}
              </h3>
              <p
                className="text-[14px] sm:text-[15px] 
                    text-left 
                    text-gray-400 sm:text-gray-500
                    leading-[20px] sm:leading-[22px] md:leading-[24px]"
              >
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
