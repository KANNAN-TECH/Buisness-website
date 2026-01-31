function ServiceCard({ title, description, icon }) {
  return (
    <div className="service-card glass-card">
      <span className="service-icon">{icon}</span>
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}

export default ServiceCard;
