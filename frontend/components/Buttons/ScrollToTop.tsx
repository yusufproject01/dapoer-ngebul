export default function ScrollToTop() {
  const handleScrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <button
      onClick={handleScrollTop}
      className="
          fixed bottom-7 left-7 w-12 h-12 bg-leafGreen text-white
          rounded-full flex justify-center items-center
          shadow-md hover:scale-110 transition
        "
    >
      ↑
    </button>
  );
}
