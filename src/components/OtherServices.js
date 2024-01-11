import { otherServices } from "../Data"

export const OtherServices = () => {
    return (
        <>
            <div className="other_services">
                <span>Other</span>
                <h2>Delivering Services</h2>
                <div className="services" data-aos="fade-up" data-aos-delay="500">
                    {
                        otherServices.map(service => (
                            <div className="service" key={service.id}>
                                <img src={service.image} alt={service.name} />
                                <h3 className="service_text">{service.name}</h3>
                            </div>
                        ))
                    }
                </div>
            </div>
        </>
    )
}