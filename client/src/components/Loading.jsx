export default function Loading({ size = 75 }) {
  const angles = [0, 45, 90, 135, 180, 225, 270, 315];

  return (
    <div className="loader-container">
      <svg
        className="loader"
        width={size}
        height={size}
        viewBox="0 0 100 100"
        role="status"
        aria-label="Loading"
      >
        {angles.map((deg) => (
          <circle
            key={deg}
            className="loader__dot"
            cx="50"
            cy="18"
            r={(deg + 45)*5/360+4}
            transform={`rotate(${deg} 50 50)`}
          />
        ))}
      </svg>
    </div>
  );
}