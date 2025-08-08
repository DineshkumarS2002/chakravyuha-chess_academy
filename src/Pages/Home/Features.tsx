const features1 = [
  "Enhances Memory Performance",
  "Sharpens Decision-Making Skills",
  "Boosts Creativity",
  "Strengthens Social Skills",
  "Improves Planning and Organization Skills",
];

const features2 = [
  "Builds Self-Confidence",
  "Promotes Mental and Psychological Health",
  "Enhances Problem-Solving Abilities",
  "Encourages Sportsmanship",
  "Reduces Screen Time",
];

type FeatureCardProps = {
  title: string;
  icon: React.ReactNode;
  items?: string[];
  description?: string;
  animation: string;
  light?: boolean;
};

const FeatureCard: React.FC<FeatureCardProps> = ({
  title,
  icon,
  items,
  description,

  light = false,
}) => {
  const cardStyle = light
    ? { backgroundColor: "#111", color: "white" }
    : { backgroundColor: "#fff", color: "#000" };

  return (
    <div className={"col-md-4 mb-4 g-0"}>
      <div className="p-4 h-100 text-center " style={cardStyle}>
        <div className="mb-3 d-flex justify-content-center">{icon}</div>
        <h4 className="fw-bold">{title}</h4>
        {items && (
          <ul className="mt-3 text-start ps-3 " style={{ fontSize: "18px" }}>
            {items.map((item, idx) => (
              <li key={idx}>{item}</li>
            ))}
          </ul>
        )}
        {description && (
          <p className="mt-3 " style={{ fontSize: "18px" }}>
            {description}
          </p>
        )}
      </div>
    </div>
  );
};

const ChessFeatures = () => {
  return (
    <div className="container py-5">
      <div className="row">
        <FeatureCard
          title="Cognitive & Social Skills"
          icon={
            <i
              className="fa-solid fa-brain fa-3x"
              style={{ color: "#CEA82A" }}
            ></i>
          }
          items={features1}
          animation="animate__fadeInDown"
          light={true}
        />
        <FeatureCard
          title="Emotional & Strategic Growth"
          icon={
            <i
              className="fa-solid fa-chess-king fa-3x"
              style={{ color: "#CEA82A" }}
            ></i>
          }
          items={features2}
          animation="animate__fadeInUp"
        />
        <FeatureCard
          title="Free Demo Classes"
          icon={
            <i
              className="fa-solid fa-chess-board fa-3x"
              style={{ color: "#CEA82A" }}
            ></i>
          }
          description="For new aspirants, we offer free demo chess classes so they can experience the extraordinary Chakravyuha Chess Academy journey for themselves."
          animation="animate__fadeInDown"
          light={true}
        />
      </div>
    </div>
  );
};

export default ChessFeatures;
