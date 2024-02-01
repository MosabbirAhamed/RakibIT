function ServiceDetails({ icon, text, }) {
    return (
        <div className="flex items-center gap-2 cursor-pointer" >
            <span className="text-primary-color">{icon}</span>
            <span className="text-gray-600 ">{text}</span>
        </div>
    );
}

export default ServiceDetails;