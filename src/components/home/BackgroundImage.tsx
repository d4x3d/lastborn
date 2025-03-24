export default function BackgroundImage() {
  return (
    <>
      {/* Background Image with Overlay */}
      <div
        className="fixed inset-0 z-0"
        style={{
          backgroundImage: `url("https://i.postimg.cc/Gm55Zz3P/background-v2.png")`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          opacity: 0.4,
        }}
      />

      {/* Gradient Overlay */}
      <div className="fixed inset-0 z-0 bg-gradient-to-b from-transparent via-black/30 to-black/50" />
    </>
  );
}